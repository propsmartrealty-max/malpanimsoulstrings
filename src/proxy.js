import { NextResponse } from 'next/server';

export function proxy(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  // Redirect non-www to www (e.g. malpanimsoulstrings.com -> www.malpanimsoulstrings.com)
  // This consolidates domain authority (PageRank) to a single canonical host.
  if (host === 'malpanimsoulstrings.com') {
    url.host = 'www.malpanimsoulstrings.com';
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
