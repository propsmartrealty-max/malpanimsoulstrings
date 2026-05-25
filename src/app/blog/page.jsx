import fs from 'fs';
import path from 'path';

export default function BlogIndex() {
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  let files = [];
  try {
    files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  } catch (e) {
    // Dir might not exist
  }

  return (
    <main className="container py-5 my-5">
      <h1 style={{ color: '#d4af37', marginBottom: '2rem', fontWeight: '800' }}>Real Estate Insights</h1>
      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', marginBottom: '3rem' }}>
        The latest updates from the Baner-Pashan real estate market.
      </p>
      <div className="row">
        {files.map(file => {
          const slug = file.replace('.md', '');
          const title = slug.replace(/-/g, ' ').toUpperCase();
          return (
            <div key={slug} className="col-lg-6 mb-4">
              <div className="card bg-dark border-secondary p-4 h-100">
                <h3 style={{ color: '#d4af37' }}>{title}</h3>
                <a href={`/blog/${slug}`} className="btn btn-outline-light mt-auto" style={{ width: 'max-content' }}>Read Article</a>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
