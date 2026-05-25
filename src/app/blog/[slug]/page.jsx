import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

// Tell Next.js to pre-render all blog posts at build time (SSG)
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  let files = [];
  try {
    files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  } catch (e) {
    return [];
  }
  
  return files.map((file) => ({
    slug: file.replace('.md', ''),
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  const filePath = path.join(contentDir, `${slug}.md`);
  
  let htmlContent = '';
  try {
    const rawMarkdown = fs.readFileSync(filePath, 'utf-8');
    htmlContent = marked(rawMarkdown);
  } catch (e) {
    htmlContent = '<h1>Article Not Found</h1>';
  }

  return (
    <main className="container py-5 my-5">
      <div className="row justify-content-center">
        <div 
          className="col-lg-8 blog-content" 
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />
      </div>
    </main>
  );
}
