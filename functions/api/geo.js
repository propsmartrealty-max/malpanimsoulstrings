// Cloudflare Pages Edge Function: /api/geo
// Returns visitor edge telemetry for dynamic NRI luxury desk & currency adaptation

export async function onRequestGet(context) {
  const { request } = context;
  const cf = request.cf || {};

  const country = cf.country || 'IN';
  const city = cf.city || 'Pune';
  const region = cf.region || 'MH';
  const isNRI = country !== 'IN' && country !== 'Unknown';

  // Currency suggestion based on country
  let preferredCurrency = 'INR';
  if (['US', 'CA'].includes(country)) preferredCurrency = 'USD';
  else if (['AE', 'SA', 'QA', 'KW', 'OM'].includes(country)) preferredCurrency = 'AED';
  else if (['GB'].includes(country)) preferredCurrency = 'GBP';
  else if (['SG'].includes(country)) preferredCurrency = 'SGD';
  else if (['EU', 'DE', 'FR'].includes(country)) preferredCurrency = 'EUR';

  return new Response(JSON.stringify({
    country,
    city,
    region,
    isNRI,
    preferredCurrency,
    timezone: cf.timezone || 'Asia/Kolkata',
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'private, no-cache, no-store',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
