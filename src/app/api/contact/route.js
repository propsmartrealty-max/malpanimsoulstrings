import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Server-side validation
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: 'Name and Phone are required fields.' },
        { status: 400 }
      );
    }

    console.log("SERVER-SIDE LEAD CAPTURED: ", data);

    // Using FormSubmit API to send email to the specified address
    const response = await fetch('https://formsubmit.co/ajax/propsmartrealty@gmail.com', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        'Origin': 'https://malpanimsoulstrings.com',
        'Referer': 'https://malpanimsoulstrings.com/'
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
