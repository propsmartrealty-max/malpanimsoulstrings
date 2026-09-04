// Cloudflare Pages Flagship Edge Function: /api/leads
// Secure edge endpoint to audit and retrieve captured leads from Cloudflare D1

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const secret = url.searchParams.get('secret') || request.headers.get('x-admin-key');

  const adminKey = env?.ADMIN_KEY || env?.LEADS_ADMIN_SECRET;
  if (!adminKey || secret !== adminKey) {
    return new Response(JSON.stringify({ error: 'Unauthorized. Provide valid admin secret.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!env?.DB) {
    return new Response(JSON.stringify({
      message: 'Cloudflare D1 database is not yet bound to this project.',
      setup: 'In Cloudflare Dashboard > Workers & Pages > Settings > Functions > D1 database bindings > Bind DB to your D1 database.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '50', 10), 500);
    const { results } = await env.DB.prepare(
      `SELECT id, name, phone, email, source, page_url, country, city, is_nri, created_at
       FROM leads
       ORDER BY id DESC
       LIMIT ?`
    ).bind(limit).all();

    return new Response(JSON.stringify({
      total: results.length,
      leads: results
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to query leads database.', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
