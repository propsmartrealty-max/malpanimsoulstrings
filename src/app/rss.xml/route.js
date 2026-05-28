import fs from 'fs';
import path from 'path';

export async function GET() {
  const baseUrl = 'https://www.malpanimsoulstrings.com';
  const blogDir = path.join(process.cwd(), 'src/content/blog');
  
  let files = [];
  try {
    files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'));
  } catch (e) {
    // Directory might not exist
  }

  const items = files.map((file) => {
    const slug = file.replace('.md', '');
    const title = slug.replace(/-/g, ' ').toUpperCase();
    const url = `${baseUrl}/blog/${slug}`;
    
    return `
      <item>
        <title><![CDATA[${title}]]></title>
        <link>${url}</link>
        <guid>${url}</guid>
        <pubDate>${new Date().toUTCString()}</pubDate>
        <description><![CDATA[Read our latest insights on ${title} at Malpani M SoulStrings.]]></description>
      </item>
    `;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Malpani M SoulStrings - Real Estate Insights</title>
        <link>${baseUrl}</link>
        <description>The latest updates from the Baner-Pashan real estate market.</description>
        <language>en-in</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
