export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: [
      'https://www.malpanimsoulstrings.com/sitemap.xml',
      'https://www.malpanimsoulstrings.com/sitemap-programmatic.xml',
      'https://www.malpanimsoulstrings.com/sitemap-images-v2.xml'
    ],
  }
}
