import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export const metadata = {
  title: 'Real Estate Insights & Blogs | Malpani M SoulStrings',
  description: 'Read the latest real estate market analysis, infrastructure updates, and luxury apartment buying guides for Baner Pashan Link Road, Pune.',
  alternates: {
    canonical: '/blog'
  }
};

export default function BlogIndex() {
  const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');
  let posts = [];
  try {
    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
    posts = files.map(file => {
      const slug = file.replace('.md', '');
      const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
      const titleMatch = content.match(/^#\s+(.*)/m);
      const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ').toUpperCase();
      
      // Extract excerpt
      const lines = content.split('\n');
      let excerpt = 'Explore our latest real estate insights and market analysis.';
      const firstParagraph = lines.find(line => line.trim().length > 20 && !line.startsWith('#') && !line.startsWith('!'));
      if (firstParagraph) {
        excerpt = firstParagraph.substring(0, 120) + '...';
      }
      
      return { slug, title, excerpt };
    });
  } catch (e) {
    // Dir might not exist
  }

  return (
    <main className="container py-5 my-5">
      <h1 style={{ color: '#d4af37', marginBottom: '1rem', fontWeight: '800' }}>Real Estate Insights</h1>
      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', marginBottom: '4rem' }}>
        Deep-dive market analysis, luxury living guides, and infrastructure updates for the Baner-Pashan corridor.
      </p>
      <div className="row g-4">
        {posts.map(post => (
          <div key={post.slug} className="col-lg-6">
            <div className="card bg-dark border-secondary p-4 h-100 spec-card" style={{ cursor: 'pointer' }}>
              <h2 style={{ color: '#d4af37', marginBottom: '1rem', fontSize: '1.4rem', lineHeight: '1.4' }}>{post.title}</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.slug}`} className="btn btn-outline-light mt-auto" style={{ width: 'max-content' }}>
                Read Full Article
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
