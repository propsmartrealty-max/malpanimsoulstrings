import fs from 'fs';
import path from 'path';

export default async function sitemap() {
  const baseUrl = 'https://www.malpanimsoulstrings.com';

  // Strategic Priority Tiers
  const tier1 = ['', '/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road', '/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road', '/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road', '/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road', '/location-malpani-m-soulstrings-baner-pashan-link-road', '/nri-investment-malpani-m-soulstrings-baner-pashan-link-road']; // Core Conversion
  const tier2 = ['/amenities-malpani-m-soulstrings-baner-pashan-link-road', '/infrastructure-malpani-m-soulstrings-baner-pashan-link-road', '/baner-overview-malpani-m-soulstrings-baner-pashan-link-road', '/pune-west-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road', '/vastu-compliant-luxury-homes-pune-malpani-m-soulstrings-baner-pashan-link-road', '/blog-malpani-m-soulstrings-baner-pashan-link-road']; // Informational Hubs
  const tier3 = ['/market-analysis-malpani-m-soulstrings-baner-pashan-link-road', '/it-professionals-luxury-homes-pune-malpani-m-soulstrings-baner-pashan-link-road', '/pune-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road', '/baner-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road', '/pune-infrastructure-metro-impact-malpani-m-soulstrings-baner-pashan-link-road', '/aundh-malpani-m-soulstrings-baner-pashan-link-road', '/pashan-malpani-m-soulstrings-baner-pashan-link-road', '/shivajinagar-malpani-m-soulstrings-baner-pashan-link-road']; // Secondary Informational
  const tier4 = ['/compare-malpani-m-soulstrings-baner-pashan-link-road', '/compare-malpani-m-soulstrings-baner-pashan-link-road/pristine-lords-baner-malpani-m-soulstrings-baner-pashan-link-road', '/compare-malpani-m-soulstrings-baner-pashan-link-road/kohinoor-livience-baner-malpani-m-soulstrings-baner-pashan-link-road', '/sitemap-malpani-m-soulstrings-baner-pashan-link-road']; // Competitor Comparisons & Utility

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
        url: `${baseUrl}/blog-malpani-m-soulstrings-baner-pashan-link-road/${file.replace('.md', '')}`,
        lastModified: stats.mtime, // True modification time for accurate Googlebot crawling
        changeFrequency: 'weekly',
        priority: 0.9,
      };
    });
  }

  return [...routes, ...blogRoutes];
}
