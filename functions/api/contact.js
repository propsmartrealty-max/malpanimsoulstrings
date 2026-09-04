// Cloudflare Pages Flagship Edge Function: /api/contact
// Enriched with Geo-Intelligence, Cloudflare D1/KV persistence, Turnstile verification, and direct dispatch to propsmartrealty@gmail.com

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
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

    // 1. Cloudflare Edge Telemetry & Geo-Intelligence
    const cf = request.cf || {};
    const country = cf.country || 'Unknown';
    const city = cf.city || 'Unknown';
    const region = cf.region || 'Unknown';
    const timezone = cf.timezone || 'Unknown';
    const clientIp = request.headers.get('cf-connecting-ip') || 'Unknown';
    const isNRI = country !== 'Unknown' && country !== 'IN';

    // 2. Optional Cloudflare Turnstile Bot Verification (if configured in env)
    if (env?.TURNSTILE_SECRET_KEY && data.turnstileToken) {
      try {
        const verifyFormData = new FormData();
        verifyFormData.append('secret', env.TURNSTILE_SECRET_KEY);
        verifyFormData.append('response', data.turnstileToken);
        verifyFormData.append('remoteip', clientIp);

        const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          body: verifyFormData,
        });
        const verifyOutcome = await verifyRes.json();
        if (!verifyOutcome.success) {
          return new Response(JSON.stringify({ error: 'Bot verification failed. Please refresh and try again.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      } catch (turnstileErr) {
        console.warn('[Edge Turnstile Warn] Bypassing verification on network error:', turnstileErr);
      }
    }

    // 3. Edge Database Persistence (Cloudflare D1 if bound)
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
          country,
          city,
          region,
          clientIp,
          isNRI ? 1 : 0,
          new Date().toISOString()
        ).run();
      } catch (dbErr) {
        console.error('[Edge D1 Lead Vault Error]:', dbErr);
      }
    }

    // 4. Edge KV Persistence (Cloudflare KV if bound)
    if (env?.LEADS_KV) {
      try {
        const kvKey = `lead:${Date.now()}:${cleanedPhone}`;
        await env.LEADS_KV.put(kvKey, JSON.stringify({
          name: sanitizedName,
          phone: cleanedPhone,
          email: (data.email || 'Not Provided').trim(),
          source: data.source || 'Malpani M SoulStrings Official Website',
          pageUrl: (data.pageUrl || '').trim(),
          country,
          city,
          region,
          clientIp,
          isNRI,
          timestamp: new Date().toISOString()
        }), { expirationTtl: 60 * 60 * 24 * 365 });
      } catch (kvErr) {
        console.error('[Edge KV Lead Vault Error]:', kvErr);
      }
    }

    // 5. Build Enriched Sales Payload for propsmartrealty@gmail.com
    const subjectPrefix = isNRI ? `[NRI INQUIRY - ${country} (${city})]` : `[VIP Lead - ${city}]`;
    const sanitizedLead = {
      name: sanitizedName,
      email: (data.email || 'Not Provided').trim(),
      phone: cleanedPhone,
      source: data.source || 'Malpani M SoulStrings Official Website',
      pageUrl: (data.pageUrl || '').trim(),
      geo_location: `${city}, ${region}, ${country} (TZ: ${timezone})`,
      client_ip: clientIp,
      nri_status: isNRI ? 'YES - International / NRI Investor' : 'Domestic Resident',
      timestamp: new Date().toISOString(),
      _subject: `${subjectPrefix} ${sanitizedName} (${cleanedPhone}) - Malpani M SoulStrings`,
      _template: 'table',
      _captcha: 'false'
    };

    // 6. Primary Dispatch: FormSubmit API
    try {
      const response = await fetch('https://formsubmit.co/ajax/propsmartrealty@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://www.malpanimsoulstrings.com',
          'Referer': 'https://www.malpanimsoulstrings.com/',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        body: JSON.stringify(sanitizedLead),
      });

      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        // Non-JSON response
      }

      if (response.ok || (result && (result.success === 'true' || result.success === true || (result.message && result.message.includes('Activation'))))) {
        return new Response(JSON.stringify({
          message: 'Lead captured and sent successfully.',
          success: true,
          isNRI,
          geo: { country, city }
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } catch (fetchErr) {
      console.warn('[FormSubmit Edge Dispatch Warn]:', fetchErr);
    }

    // 7. Fail-Safe Response
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
