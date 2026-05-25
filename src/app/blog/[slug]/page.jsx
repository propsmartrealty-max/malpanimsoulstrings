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

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.md`);
  let title = slug.replace(/-/g, ' ').toUpperCase();
  let description = 'Read the latest real estate insights from Malpani M SoulStrings.';

  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    if (data.title) title = data.title;
    if (data.description) description = data.description;
  }

  return {
    title: `${title} | Malpani M SoulStrings Blog`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.malpanimsoulstrings.com/blog/${slug}`,
    }
  }
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
