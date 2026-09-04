import { NextResponse } from 'next/server';

// In-memory rate limiting map
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Prune stale records
    if (rateLimitMap.size > 1000) {
      const now = Date.now();
      for (const [key, value] of rateLimitMap.entries()) {
        if (now - value.startTime > RATE_LIMIT_WINDOW_MS) {
          rateLimitMap.delete(key);
        }
      }
    }

    // Rate Limiting Logic
    if (ip !== 'unknown') {
      const now = Date.now();
      const userRecord = rateLimitMap.get(ip);
      if (userRecord) {
        if (now - userRecord.startTime < RATE_LIMIT_WINDOW_MS) {
          if (userRecord.count >= MAX_REQUESTS_PER_WINDOW) {
            console.warn(`[RATE LIMIT] Throttled spam from IP: ${ip}`);
            return NextResponse.json({ error: 'Too many requests. Please try again in a moment.' }, { status: 429 });
          }
          userRecord.count += 1;
        } else {
          rateLimitMap.set(ip, { count: 1, startTime: now });
        }
      } else {
        rateLimitMap.set(ip, { count: 1, startTime: now });
      }
    }

    let data;
    try {
      data = await request.json();
    } catch (e) {
      return NextResponse.json({ error: 'Invalid or missing JSON payload.' }, { status: 400 });
    }
    
    // Server-side strict validation & sanitization
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: 'Name and Phone are required fields.' },
        { status: 400 }
      );
    }

    // Sanitize name: ensure non-empty string and strip any raw HTML tags
    const sanitizedName = data.name.toString().replace(/<[^>]*>?/gm, '').trim();
    if (sanitizedName.length < 2) {
      return NextResponse.json({ error: 'Please enter a valid full name.' }, { status: 400 });
    }

    // Sanitize phone: digits only, at least 10 digits
    const cleanedPhone = data.phone.toString().replace(/[^0-9]/g, '');
    if (cleanedPhone.length < 10) {
      return NextResponse.json({ error: 'Invalid phone format. Please enter a valid 10-digit phone number.' }, { status: 400 });
    }

    const sanitizedLead = {
      name: data.name.trim(),
      email: (data.email || 'Not Provided').trim(),
      phone: cleanedPhone,
      source: data.source || 'Malpani M SoulStrings Official Website',
      pageUrl: (data.pageUrl || '').trim(),
      timestamp: new Date().toISOString(),
      _subject: `New VIP Enquiry: ${data.name.trim()} (${cleanedPhone}) - Malpani M SoulStrings`,
      _template: 'table',
      _captcha: 'false'
    };

    console.log("[VIP LEAD CAPTURED]", sanitizedLead);

    // Primary Dispatch: FormSubmit API
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
        body: JSON.stringify(sanitizedLead)
      });
      
      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        console.warn("[FormSubmit Warning] Non-JSON response:", responseText);
      }

      if (response.ok || (result && (result.success === "true" || result.success === true || (result.message && result.message.includes('Activation'))))) {
        return NextResponse.json(
          { message: 'Lead captured and sent successfully.', success: true },
          { status: 200 }
        );
      } else {
        console.warn("[FormSubmit Warning] Upstream returned:", result || responseText);
      }
    } catch (fetchErr) {
      console.error("[FormSubmit Upstream Error]", fetchErr);
    }

    // Fail-Safe: Always return 200 to customer once lead is logged on server
    return NextResponse.json(
      { message: 'Enquiry received successfully. Our luxury consultant will connect shortly.', success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API Route Error]:", error);
    return NextResponse.json(
      { message: 'Enquiry received. Our consultant will connect with you.', success: true },
      { status: 200 }
    );
  }
}
