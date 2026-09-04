// Cloudflare Pages Flagship Edge Middleware
// Standardized on Cloudflare Workers edge runtime for ultra-fast global delivery

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const host = url.hostname;

  // 1. Edge Canonical Host Redirection:
  // Instantly redirect apex domain 'malpanimsoulstrings.com' to 'www.malpanimsoulstrings.com'
  // and force HTTPS at the Cloudflare edge to prevent duplicate indexing and consolidate PageRank.
  if (host === 'malpanimsoulstrings.com') {
    url.hostname = 'www.malpanimsoulstrings.com';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  // 2. Trailing Slash Normalization for Clean URLs (exclude root and API routes)
  if (url.pathname !== '/' && url.pathname.endsWith('/') && !url.pathname.startsWith('/api/')) {
    url.pathname = url.pathname.slice(0, -1);
    return Response.redirect(url.toString(), 301);
  }

  // 3. Process the request through Cloudflare Pages static asset pipeline or Functions
  const response = await next();

  // Clone response so edge headers can be applied
  const newResponse = new Response(response.body, response);

  // 4. Cloudflare Edge Architecture & Telemetry Headers
  newResponse.headers.set('X-Served-By', 'Cloudflare-Pages-Edge');
  newResponse.headers.set('X-Edge-Region', request.cf?.colo || 'GLO');
  newResponse.headers.set('X-Edge-Country', request.cf?.country || 'IN');

  return newResponse;
}
