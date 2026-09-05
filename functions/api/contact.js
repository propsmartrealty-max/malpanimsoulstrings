// Cloudflare Pages Edge Function: /api/contact
// Geo-Intelligence, D1/KV persistence, Turnstile verification,
// and reliable email dispatch via Resend API (env.RESEND_API_KEY).

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    // --- Parse & validate payload ---
    let data;
    try {
      data = await request.json();
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Invalid or missing JSON payload.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!data.name || !data.phone) {
      return new Response(JSON.stringify({ error: 'Name and Phone are required fields.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const sanitizedName = data.name.toString().replace(/<[^>]*>?/gm, '').trim();
    if (sanitizedName.length < 2) {
      return new Response(JSON.stringify({ error: 'Please enter a valid full name.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const cleanedPhone = data.phone.toString().replace(/[^0-9]/g, '');
    if (cleanedPhone.length < 10) {
      return new Response(JSON.stringify({ error: 'Invalid phone format. Please enter a valid 10-digit phone number.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // --- 1. Cloudflare Edge Geo-Intelligence ---
    const cf = request.cf || {};
    const country = cf.country || 'Unknown';
    const city = cf.city || 'Unknown';
    const region = cf.region || 'Unknown';
    const timezone = cf.timezone || 'Unknown';
    const clientIp = request.headers.get('cf-connecting-ip') || 'Unknown';
    const isNRI = country !== 'Unknown' && country !== 'IN';

    // --- 2. Turnstile Bot Verification (optional) ---
    if (env?.TURNSTILE_SECRET_KEY && data.turnstileToken) {
      try {
        const fd = new FormData();
        fd.append('secret', env.TURNSTILE_SECRET_KEY);
        fd.append('response', data.turnstileToken);
        fd.append('remoteip', clientIp);
        const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST', body: fd,
        });
        const outcome = await verifyRes.json();
        if (!outcome.success) {
          return new Response(JSON.stringify({ error: 'Bot verification failed. Please refresh and try again.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      } catch (e) {
        console.warn('[Turnstile] Bypassing on network error:', e);
      }
    }

    // --- 3. D1 Database Persistence ---
    if (env?.DB) {
      try {
        await env.DB.prepare(
          `INSERT INTO leads (name, phone, email, source, page_url, country, city, region, ip, is_nri, created_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        ).bind(
          sanitizedName,
          cleanedPhone,
          (data.email || 'Not Provided').trim(),
          data.source || 'Malpani M SoulStrings Official Website',
          (data.pageUrl || '').trim(),
          country, city, region, clientIp,
          isNRI ? 1 : 0,
          new Date().toISOString()
        ).run();
      } catch (e) {
        console.error('[D1]', e);
      }
    }

    // --- 4. KV Persistence ---
    if (env?.LEADS_KV) {
      try {
        await env.LEADS_KV.put(
          `lead:${Date.now()}:${cleanedPhone}`,
          JSON.stringify({
            name: sanitizedName, phone: cleanedPhone,
            email: (data.email || 'Not Provided').trim(),
            source: data.source || 'Malpani M SoulStrings Official Website',
            pageUrl: (data.pageUrl || '').trim(),
            country, city, region, clientIp, isNRI,
            timestamp: new Date().toISOString()
          }),
          { expirationTtl: 60 * 60 * 24 * 365 }
        );
      } catch (e) {
        console.error('[KV]', e);
      }
    }

    // --- 5. Build email content ---
    const subjectPrefix = isNRI
      ? '[NRI INQUIRY - ' + country + ' (' + city + ')]'
      : '[VIP Lead - ' + city + ']';
    const emailSubject = subjectPrefix + ' ' + sanitizedName + ' (' + cleanedPhone + ') - Malpani M SoulStrings';
    const submittedEmail = (data.email || 'Not Provided').trim();
    const pageUrl      = (data.pageUrl || 'Not Provided').trim();
    const source       = data.source || 'Malpani M SoulStrings Official Website';
    const timestamp    = new Date().toISOString();
    const nriLabel     = isNRI ? 'YES - International / NRI Investor' : 'Domestic Resident';

    const row = (label, value) =>
      '<tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">' +
      '<span style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">' + label + '</span><br/>' +
      '<strong style="color:#1a1a2e;font-size:15px;">' + value + '</strong>' +
      '</td></tr>';

    const htmlBody =
      '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><title>New Enquiry</title></head>' +
      '<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f4f4f4;">' +
      '<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 0;">' +
      '<tr><td align="center">' +
      '<table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">' +
      '<tr><td style="background:#1a1a2e;padding:28px 32px;">' +
      '<h1 style="margin:0;color:#c9a84c;font-size:22px;letter-spacing:1px;">Malpani M SoulStrings</h1>' +
      '<p style="margin:6px 0 0;color:#aaa;font-size:13px;">New Enquiry Received</p>' +
      '</td></tr>' +
      '<tr><td style="padding:32px;">' +
      '<table width="100%" cellpadding="0" cellspacing="0">' +
      row('Name', sanitizedName) +
      row('Phone', cleanedPhone) +
      row('Email', submittedEmail) +
      row('NRI Status', nriLabel) +
      row('Location', city + ', ' + region + ', ' + country + ' (TZ: ' + timezone + ')') +
      row('Source Page', pageUrl) +
      row('Lead Source', source) +
      row('Client IP', clientIp) +
      row('Timestamp', timestamp) +
      '</table></td></tr>' +
      '<tr><td style="background:#f9f9f9;padding:20px 32px;border-top:1px solid #eee;">' +
      '<p style="margin:0;color:#aaa;font-size:11px;text-align:center;">' +
      'Sent via Resend &bull; Malpani M SoulStrings &bull; Baner-Pashan Link Road, Pune' +
      '</p></td></tr>' +
      '</table></td></tr></table></body></html>';

    // --- 6. Dispatch via Resend API ---
    if (env?.RESEND_API_KEY) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + env.RESEND_API_KEY,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Malpani M SoulStrings <noreply@malpanimsoulstrings.com>',
            to: ['propsmartrealty@gmail.com'],
            subject: emailSubject,
            html: htmlBody,
          }),
        });

        const resendData = await resendRes.json();
        if (!resendRes.ok) {
          console.error('[Resend] Delivery error:', JSON.stringify(resendData));
        } else {
          console.log('[Resend] Email dispatched. ID:', resendData.id);
        }
      } catch (e) {
        // Lead already persisted in D1/KV — do not fail the user response
        console.error('[Resend] Fetch error:', e);
      }
    } else {
      console.warn('[Resend] RESEND_API_KEY not set. Skipping email dispatch.');
    }

    return new Response(JSON.stringify({
      message: 'Enquiry received successfully. Our luxury consultant will connect shortly.',
      success: true,
      isNRI,
      geo: { country, city }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error processing enquiry.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
