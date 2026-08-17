import fs from 'fs';
import path from 'path';
import { getAllProgrammaticSlugs } from '@/data/programmaticData';

export async function GET() {
  const baseUrl = 'https://www.malpanimsoulstrings.com';
  
  // Strategic Priority Tiers
  const tier1 = [
    { route: '', priority: 1.0, freq: 'daily', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg', title: 'Malpani M SoulStrings Hero Banner Baner Pashan Link Road Pune' },
      { url: 'https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png', title: 'Malpani M SoulStrings Architectural Elevation Masterpiece' },
      { url: 'https://malpani-cms.firsteconomy.com/uploads/Entrance_Lobby_9d4d367801.png', title: 'Malpani M SoulStrings Grand Double Height Entrance Lobby' }
    ]},
    { route: '/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road', priority: 1.0, freq: 'daily', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/01_1_97625c7cd6.png', title: 'Malpani M SoulStrings 3 BHK Luxury Apartments Floor Plan Pune' }
    ]},
    { route: '/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road', priority: 1.0, freq: 'daily', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/02_1_fccd839fae.png', title: 'Malpani M SoulStrings 4 BHK Premium Presidential Flats Interior' }
    ]},
    { route: '/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road', priority: 1.0, freq: 'daily', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/05_1_767fc1bb82.png', title: 'Malpani M SoulStrings 5 BHK Sky Duplex Homes Garden Pool' }
    ]},
    { route: '/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road', priority: 1.0, freq: 'daily', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png', title: 'Malpani M SoulStrings Sky Penthouses Baner Pashan Link Road' }
    ]},
    { route: '/location-malpani-m-soulstrings-baner-pashan-link-road', priority: 1.0, freq: 'daily', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/04_1_dfeed3efb5.png', title: 'Malpani M SoulStrings Location Advantages Connectivity Map' }
    ]},
    { route: '/nri-investment-malpani-m-soulstrings-baner-pashan-link-road', priority: 1.0, freq: 'daily', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg', title: 'NRI Luxury Real Estate Investment Guide Malpani M SoulStrings' }
    ]}
  ];

  const tier2 = [
    { route: '/amenities-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.9, freq: 'weekly', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/03_5afad0394f.png', title: 'Malpani M SoulStrings 35+ World Class Gated Community Amenities' }
    ]},
    { route: '/infrastructure-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.9, freq: 'weekly' },
    { route: '/baner-overview-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.9, freq: 'weekly' },
    { route: '/pune-west-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.9, freq: 'weekly' },
    { route: '/vastu-compliant-luxury-homes-pune-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.9, freq: 'weekly' },
    { route: '/blog-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.9, freq: 'weekly' },
    { route: '/malpani-m-soulstrings-reviews-ratings-baner-pune', priority: 0.9, freq: 'weekly', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png', title: 'Malpani M SoulStrings Google 5 Star Verified Reviews & Ratings' }
    ]},
    { route: '/flat-rates-price-trends-baner-pashan-link-road-malpani-m-soulstrings', priority: 0.9, freq: 'weekly', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg', title: 'Baner Pashan Link Road Real Estate Price Trends 2026' }
    ]},
    { route: '/luxury-gated-community-apartments-pune-west-malpani-m-soulstrings', priority: 0.9, freq: 'weekly', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/Entrance_Lobby_9d4d367801.png', title: 'Luxury Gated Community Apartments in Pune West' }
    ]},
    { route: '/invest-in-malpani-estates-pune-growth-corridors', priority: 0.9, freq: 'weekly', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png', title: 'Invest in Malpani Estates Pune Growth Corridors' }
    ]},
    { route: '/malpani-m-soulstrings-construction-status-updates-possession', priority: 0.9, freq: 'weekly', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png', title: 'Malpani M SoulStrings Construction Status Updates and Possession' }
    ]},
    { route: '/flats-near-hinjewadi-it-park-pune-malpani-m-soulstrings', priority: 0.9, freq: 'weekly' },
    { route: '/luxury-apartments-in-balewadi-pune-malpani-m-soulstrings', priority: 0.9, freq: 'weekly' },
    { route: '/premium-residences-near-aundh-pune-malpani-m-soulstrings', priority: 0.9, freq: 'weekly' },
    { route: '/wakad-to-baner-real-estate-upgrade-malpani-m-soulstrings', priority: 0.9, freq: 'weekly' },
    { route: '/pashan-sus-road-luxury-projects-malpani-m-soulstrings', priority: 0.9, freq: 'weekly' },
    { route: '/about-malpani-estates-pune', priority: 0.9, freq: 'weekly', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png', title: 'About Malpani Estates 30 Year Developer Heritage Pune' }
    ]},
    { route: '/press-malpani-estates-baner-pune', priority: 0.9, freq: 'weekly', images: [
      { url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg', title: 'Malpani M SoulStrings Press and Media Mentions' }
    ]}
  ];

  const tier3 = [
    { route: '/market-analysis-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.8, freq: 'weekly' },
    { route: '/it-professionals-luxury-homes-pune-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.8, freq: 'weekly' },
    { route: '/pune-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.8, freq: 'weekly' },
    { route: '/baner-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.8, freq: 'weekly' },
    { route: '/pune-infrastructure-metro-impact-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.8, freq: 'weekly' },
    { route: '/aundh-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.8, freq: 'weekly' },
    { route: '/pashan-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.8, freq: 'weekly' },
    { route: '/shivajinagar-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.8, freq: 'weekly' }
  ];

  const tier4 = [
    { route: '/compare-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.7, freq: 'monthly' },
    { route: '/compare-malpani-m-soulstrings-baner-pashan-link-road/pristine-lords-baner-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.7, freq: 'monthly' },
    { route: '/compare-malpani-m-soulstrings-baner-pashan-link-road/kohinoor-livience-baner-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.7, freq: 'monthly' },
    { route: '/sitemap-malpani-m-soulstrings-baner-pashan-link-road', priority: 0.7, freq: 'monthly' }
  ];

  // Static items array
  const staticItems = [
    ...tier1,
    ...tier2,
    ...tier3,
    ...tier4
  ].map(({ route, priority, freq, images }) => {
    const imagesXml = images ? images.map(img => `
    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.title}</image:caption>
      <image:geo_location>Baner Pashan Link Road, Pune, Maharashtra, India</image:geo_location>
      <image:license>${baseUrl}</image:license>
    </image:image>`).join('') : '';

    return `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>${imagesXml}
  </url>`;
  });

  // Dynamic Blog Items
  const contentDir = path.join(process.cwd(), 'src/content/blog');
  let blogFiles = [];
  try {
    blogFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  } catch (e) {
    // Directory might not exist
  }

  const blogItems = blogFiles.map(file => {
    const filePath = path.join(contentDir, file);
    const stats = fs.statSync(filePath);
    const slug = file.replace('.md', '');
    const url = `${baseUrl}/blog-malpani-m-soulstrings-baner-pashan-link-road/${slug}`;
    const cleanTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    
    return `
  <url>
    <loc>${url}</loc>
    <lastmod>${stats.mtime.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg</image:loc>
      <image:title>${cleanTitle} | Malpani M SoulStrings Pune</image:title>
      <image:caption>${cleanTitle} - Luxury Real Estate Insights Baner Pashan Link Road Pune</image:caption>
      <image:geo_location>Pune, Maharashtra, India</image:geo_location>
      <image:license>${baseUrl}</image:license>
    </image:image>
  </url>`;
  });

  // Dynamic Programmatic Discover Routes
  const discoverSlugs = getAllProgrammaticSlugs();

  const discoverItems = discoverSlugs.map(slug => `
  <url>
    <loc>${baseUrl}/discover/${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${[...staticItems, ...blogItems, ...discoverItems].join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
