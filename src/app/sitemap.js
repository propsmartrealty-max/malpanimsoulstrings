import fs from 'fs';
import path from 'path';

export default async function sitemap() {
  const baseUrl = 'https://www.malpanimsoulstrings.com';

  // Base static routes
  const routes = [
    '',
    '/4bhk-luxury',
    '/amenities',
    '/location',
    '/infrastructure',
    '/baner-overview',
    '/market-analysis',
    '/blog',
    '/compare/pristine-lords-baner',
    '/compare/kohinoor-livience-baner',
    '/it-professionals-luxury-homes-pune',
    '/pune-west-real-estate-market',
    '/nri-investment',
    '/vastu-compliant-luxury-homes-pune',
    '/pune-real-estate-market',
    '/baner-real-estate-market',
    '/pune-infrastructure-metro-impact'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Blog Routes
  const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');
  let blogRoutes = [];
  
  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
    blogRoutes = files.map((file) => ({
      url: `${baseUrl}/blog/${file.replace('.md', '')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }));
  }

  return [...routes, ...blogRoutes];
}
