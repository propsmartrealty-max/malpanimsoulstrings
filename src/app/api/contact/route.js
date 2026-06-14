import { NextResponse } from 'next/server';

// Simple in-memory rate limiting (Note: resets on lambda cold start, but effective against basic spam floods)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate Limiting Logic
    if (ip !== 'unknown') {
      const now = Date.now();
      const userRecord = rateLimitMap.get(ip);
      if (userRecord) {
        if (now - userRecord.startTime < RATE_LIMIT_WINDOW_MS) {
          if (userRecord.count >= MAX_REQUESTS_PER_WINDOW) {
            console.warn(`[RATE LIMIT] Blocked spam from IP: ${ip}`);
            return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
          }
          userRecord.count += 1;
        } else {
          rateLimitMap.set(ip, { count: 1, startTime: now });
        }
      } else {
        rateLimitMap.set(ip, { count: 1, startTime: now });
      }
    }

    const data = await request.json();
    
    // Server-side strict validation & sanitization
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: 'Name and Phone are required fields.' },
        { status: 400 }
      );
    }

    // Regex to block HTML tags or script injections
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(data.name)) {
      return NextResponse.json({ error: 'Invalid name format. Only letters and spaces are allowed.' }, { status: 400 });
    }

    // Regex to ensure phone is exactly 10 digits
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json({ error: 'Invalid phone format. Please enter exactly 10 digits.' }, { status: 400 });
    }

    console.log("SERVER-SIDE LEAD CAPTURED: ", data);

    // Using FormSubmit API to send email to the specified address
    const response = await fetch('https://formsubmit.co/ajax/propsmartrealty@gmail.com', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        'Origin': 'https://www.malpanimsoulstrings.com',
        'Referer': 'https://www.malpanimsoulstrings.com/'
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();

    // Treat 'Activation required' as a success so the frontend doesn't crash
    if (result.success === "true" || result.success === true || (result.message && result.message.includes('Activation'))) {
      return NextResponse.json(
        { message: 'Lead sent successfully to email.', success: true },
        { status: 200 }
      );
    } else {
      console.error("FormSubmit Error:", result);
      throw new Error("Failed to send email via FormSubmit");
    }
  } catch (error) {
    console.error("API Route Error: ", error);
    return NextResponse.json(
      { error: 'Internal Server Error processing your request.' },
      { status: 500 }
    );
  }
}
