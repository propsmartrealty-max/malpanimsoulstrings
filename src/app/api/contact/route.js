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

    // In a production environment, this is where you would:
    // 1. Save the lead to a database (MongoDB, Postgres)
    // 2. Dispatch an email via SendGrid/Nodemailer
    // 3. Push the lead to Salesforce/HubSpot via API
    
    // For now, we simulate a successful backend process
    console.log("SERVER-SIDE LEAD CAPTURED: ", data);

    // If using Web3Forms, we can securely forward the request here 
    // without exposing the Access Key to the frontend:
    /*
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        ...data
      })
    });
    const result = await response.json();
    */

    return NextResponse.json(
      { message: 'Lead captured securely on the server.', success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Route Error: ", error);
    return NextResponse.json(
      { error: 'Internal Server Error processing your request.' },
      { status: 500 }
    );
  }
}
