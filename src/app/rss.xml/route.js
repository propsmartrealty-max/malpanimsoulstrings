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
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const stats = fs.statSync(filePath);
    
    const slug = file.replace('.md', '');
    const titleMatch = content.match(/^#\s+(.*)/m);
    const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ').toUpperCase();
    const url = `${baseUrl}/blog/${slug}`;
    
    // Extract first real paragraph for the excerpt
    const lines = content.split('\n');
    let excerpt = `Read our latest insights on ${title} at Malpani M SoulStrings.`;
    const firstParagraph = lines.find(line => line.trim().length > 20 && !line.startsWith('#') && !line.startsWith('!'));
    if (firstParagraph) {
      excerpt = firstParagraph.substring(0, 155) + '...';
    }
    
    return `
      <item>
        <title><![CDATA[${title}]]></title>
        <link>${url}</link>
        <guid>${url}</guid>
        <pubDate>${stats.mtime.toUTCString()}</pubDate>
        <description><![CDATA[${excerpt}]]></description>
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
