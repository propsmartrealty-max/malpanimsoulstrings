export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Googlebot-Mobile',
          'Googlebot-Image',
          'Googlebot-News',
          'Googlebot-Video',
          'Bingbot',
          'Applebot',
          'DuckDuckBot',
          'YandexBot',
          'Baiduspider',
          'Slurp',
          'Sogou'
        ],
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'cohere-ai',
          'Bytespider',
          'CCBot'
        ],
        allow: '/',
        disallow: ['/api/', '/private/'],
      }
    ],
    sitemap: 'https://www.malpanimsoulstrings.com/sitemap.xml',
    host: 'https://www.malpanimsoulstrings.com',
  };
}
