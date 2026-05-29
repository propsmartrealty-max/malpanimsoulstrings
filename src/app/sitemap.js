import fs from 'fs';
import path from 'path';

export default function sitemap() {
  const baseUrl = 'https://www.malpanimsoulstrings.com';
  
  // Core clean routes we established in Phase 12
  const coreRoutes = [
    '',
    '/4bhk-luxury',
    '/amenities',
    '/infrastructure',
    '/location',
    '/market-analysis',
    '/nri-investment',
    '/baner-overview',
    '/shivajinagar',
    '/aundh',
    '/pashan',
    '/compare',
    '/pune-real-estate-market',
    '/pune-west-real-estate-market',
    '/baner-real-estate-market',
    '/pune-infrastructure-metro-impact',
    '/it-professionals-luxury-homes-pune',
    '/vastu-compliant-luxury-homes-pune',
    '/compare/pristine-lords-baner',
    '/compare/kohinoor-livience-baner',
    '/blog'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : (route.includes('blog') ? 0.8 : 0.9),
  }));

  // Dynamically fetch Blog Slugs
  const blogDir = path.join(process.cwd(), 'src/content/blog');
  let blogRoutes = [];
  
  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir);
    blogRoutes = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const slug = file.replace('.md', '');
        return {
          url: `${baseUrl}/blog/${slug}`,
          lastModified: new Date().toISOString(),
          changeFrequency: 'monthly',
          priority: 0.7,
        };
      });
  }

  return [...coreRoutes, ...blogRoutes];
}
