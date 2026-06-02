import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

// Tell Next.js to pre-render all blog posts at build time (SSG)
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');
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
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract actual H1 title from markdown
    const titleMatch = content.match(/^#\s+(.*)/m);
    if (titleMatch) title = titleMatch[1];
    
    // Extract first real paragraph for the meta description
    const lines = content.split('\n');
    for (let line of lines) {
      line = line.trim();
      if (line && !line.startsWith('#') && !line.startsWith('>') && !line.startsWith('-')) {
        description = line.substring(0, 155) + (line.length > 155 ? '...' : '');
        break;
      }
    }
  }

  return {
    title: `${title} | Malpani M SoulStrings Blog`,
    description,
    alternates: {
      canonical: `/blog/${slug}`
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.malpanimsoulstrings.com/blog/${slug}`,
      images: [
        {
          url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg',
          width: 1200,
          height: 630,
          alt: title,
        }
      ]
    }
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  
  const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');
  const filePath = path.join(contentDir, `${slug}.md`);
  
  let htmlContent = '';
  let articleTitle = slug.replace(/-/g, ' ').toUpperCase();
  let articleDescription = 'Read our latest insights.';
  
  try {
    const rawMarkdown = fs.readFileSync(filePath, 'utf-8');
    htmlContent = marked(rawMarkdown);
    
    const titleMatch = rawMarkdown.match(/^#\s+(.*)/m);
    if (titleMatch) articleTitle = titleMatch[1];
    
    const lines = rawMarkdown.split('\n');
    for (let line of lines) {
      line = line.trim();
      if (line && !line.startsWith('#') && !line.startsWith('>') && !line.startsWith('-')) {
        articleDescription = line.substring(0, 155);
        break;
      }
    }
  } catch (e) {
    htmlContent = '<h1>Article Not Found</h1>';
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleTitle,
    "description": articleDescription,
    "url": `https://www.malpanimsoulstrings.com/blog/${slug}`,
    "datePublished": new Date().toISOString(),
    "author": {
      "@id": "https://www.malpanimsoulstrings.com/#organization"
    },
    "publisher": {
      "@id": "https://www.malpanimsoulstrings.com/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.malpanimsoulstrings.com/blog/${slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.malpanimsoulstrings.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Insights & Articles",
        "item": "https://www.malpanimsoulstrings.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": articleTitle,
        "item": `https://www.malpanimsoulstrings.com/blog/${slug}`
      }
    ]
  };

  return (
    <main className="container py-5 my-5">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, breadcrumbSchema]) }} />
      <div className="row justify-content-center">
        <div 
          className="col-lg-8 blog-content fade-in-up" 
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />
      </div>
    </main>
  );
}
