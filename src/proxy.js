import { NextResponse } from 'next/server';

export function proxy(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  // Redirect all non-canonical domains to the primary canonical domain in production.
  // This includes naked domains, staging domains (*.vercel.app), and any other aliases,
  // preventing duplicate indexing penalties and consolidating PageRank authority.
  const isLocalhost = host.includes('localhost') || host.includes('127.0.0.1');
  const canonicalHost = 'www.malpanimsoulstrings.com';

  if (!isLocalhost && host !== canonicalHost) {
    url.host = canonicalHost;
    url.protocol = 'https:'; // Force HTTPS redirect
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.png (favicon/icon/asset files)
     * - sitemap.xml, robots.txt, manifest.json (crawlers and indexes)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon.png|sitemap.xml|robots.txt|manifest.json).*)',
  ],
};
