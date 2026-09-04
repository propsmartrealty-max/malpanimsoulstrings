const https = require('https');
const fs = require('fs');
const path = require('path');

const host = 'www.malpanimsoulstrings.com';
const baseUrl = `https://${host}`;
const key = 'malpanimsoulstrings-indexnow-key-2026';
const keyLocation = `${baseUrl}/malpanimsoulstrings-indexnow-key-2026.txt`;

// 1. Static Core Hub Paths
const staticPaths = [
  '',
  '/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road',
  '/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road',
  '/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road',
  '/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road',
  '/location-malpani-m-soulstrings-baner-pashan-link-road',
  '/nri-investment-malpani-m-soulstrings-baner-pashan-link-road',
  '/amenities-malpani-m-soulstrings-baner-pashan-link-road',
  '/infrastructure-malpani-m-soulstrings-baner-pashan-link-road',
  '/baner-overview-malpani-m-soulstrings-baner-pashan-link-road',
  '/pune-west-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road',
  '/vastu-compliant-luxury-homes-pune-malpani-m-soulstrings-baner-pashan-link-road',
  '/blog-malpani-m-soulstrings-baner-pashan-link-road',
  '/about-malpani-estates-pune',
  '/press-malpani-estates-baner-pune',
  '/malpani-m-soulstrings-reviews-ratings-baner-pune',
  '/flat-rates-price-trends-baner-pashan-link-road-malpani-m-soulstrings',
  '/luxury-gated-community-apartments-pune-west-malpani-m-soulstrings',
  '/invest-in-malpani-estates-pune-growth-corridors',
  '/malpani-m-soulstrings-construction-status-updates-possession',
  '/flats-near-hinjewadi-it-park-pune-malpani-m-soulstrings',
  '/luxury-apartments-in-balewadi-pune-malpani-m-soulstrings',
  '/premium-residences-near-aundh-pune-malpani-m-soulstrings',
  '/wakad-to-baner-real-estate-upgrade-malpani-m-soulstrings',
  '/pashan-sus-road-luxury-projects-malpani-m-soulstrings',
  '/compare-malpani-m-soulstrings-baner-pashan-link-road',
  '/compare-malpani-m-soulstrings-baner-pashan-link-road/pristine-lords-baner-malpani-m-soulstrings-baner-pashan-link-road',
  '/compare-malpani-m-soulstrings-baner-pashan-link-road/kohinoor-livience-baner-malpani-m-soulstrings-baner-pashan-link-road',
  '/sitemap-malpani-m-soulstrings-baner-pashan-link-road',
  '/privacy-policy',
  '/terms-and-conditions'
];

// 2. Collect all 51 Blog Posts dynamically
const blogDir = path.join(process.cwd(), 'src/content/blog');
let blogPaths = [];
try {
  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
    blogPaths = files.map(f => `/blog-malpani-m-soulstrings-baner-pashan-link-road/${f.replace('.md', '')}`);
  }
} catch (e) {
  console.warn('[IndexNow] Could not read blog directory:', e.message);
}

// Assemble full URL list
const urlList = [
  ...staticPaths.map(p => `${baseUrl}${p}`),
  ...blogPaths.map(p => `${baseUrl}${p}`)
];

const payload = JSON.stringify({
  host: host,
  key: key,
  keyLocation: keyLocation,
  urlList: urlList
});

const searchEngines = [
  { hostname: 'api.indexnow.org', path: '/indexnow' },
  { hostname: 'www.bing.com', path: '/indexnow' }
];

console.log(`Initiating Universal IndexNow Ping for ${urlList.length} production URLs...`);

searchEngines.forEach((engine) => {
  const options = {
    hostname: engine.hostname,
    path: engine.path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  const req = https.request(options, (res) => {
    console.log(`[IndexNow] ${engine.hostname} responded with status: ${res.statusCode}`);
    res.on('data', () => {});
  });

  req.on('error', (error) => {
    console.error(`[IndexNow Error] ${engine.hostname}:`, error.message);
  });

  req.write(payload);
  req.end();
});
