import fs from 'fs';
import path from 'path';

export default async function sitemap() {
  const baseUrl = 'https://www.malpanimsoulstrings.com';

  // Strategic Priority Tiers
  const tier1 = ['', '/4bhk-luxury', '/3bhk-luxury', '/5bhk-duplex', '/penthouse-luxury', '/location', '/nri-investment']; // Core Conversion
  const tier2 = ['/amenities', '/infrastructure', '/baner-overview', '/pune-west-real-estate-market', '/vastu-compliant-luxury-homes-pune', '/blog']; // Informational Hubs
  const tier3 = ['/market-analysis', '/it-professionals-luxury-homes-pune', '/pune-real-estate-market', '/baner-real-estate-market', '/pune-infrastructure-metro-impact', '/aundh', '/pashan', '/shivajinagar']; // Secondary Informational
  const tier4 = ['/compare', '/compare/pristine-lords-baner', '/compare/kohinoor-livience-baner', '/sitemap']; // Competitor Comparisons & Utility

  const allStaticRoutes = [
    ...tier1.map(route => ({ route, priority: 1.0, freq: 'daily' })),
    ...tier2.map(route => ({ route, priority: 0.9, freq: 'weekly' })),
    ...tier3.map(route => ({ route, priority: 0.8, freq: 'weekly' })),
    ...tier4.map(route => ({ route, priority: 0.7, freq: 'monthly' })),
  ];

  const routes = allStaticRoutes.map(({ route, priority, freq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(), // For static routes, we use the build date
    changeFrequency: freq,
    priority: priority,
  }));

  // Dynamic Blog Routes - Hardened with actual file modification timestamps
  const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');
  let blogRoutes = [];
  
  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
    blogRoutes = files.map((file) => {
      const filePath = path.join(contentDir, file);
      const stats = fs.statSync(filePath);
      
      return {
        url: `${baseUrl}/blog/${file.replace('.md', '')}`,
        lastModified: stats.mtime, // True modification time for accurate Googlebot crawling
        changeFrequency: 'weekly',
        priority: 0.9,
      };
    });
  }

  return [...routes, ...blogRoutes];
}
