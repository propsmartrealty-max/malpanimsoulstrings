export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'],
    },
    sitemap: [
      'https://www.malpanimsoulstrings.com/sitemap.xml'
    ],
    host: 'https://www.malpanimsoulstrings.com',
  }
}
