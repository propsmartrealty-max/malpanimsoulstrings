const https = require('https');
const fs = require('fs');
const path = require('path');

const HOST = 'www.malpanimsoulstrings.com';
const KEY = 'b3e72a9c5d4e8f01a2c6d9e5f7b8a3c4';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const BASE_URL = `https://${HOST}`;

// Static page URLs
const STATIC_PATHS = [
  '/',
  '/4bhk-luxury',
  '/location',
  '/nri-investment',
  '/amenities',
  '/infrastructure',
  '/baner-overview',
  '/pune-west-real-estate-market',
  '/vastu-compliant-luxury-homes-pune',
  '/blog',
  '/market-analysis',
  '/it-professionals-luxury-homes-pune',
  '/pune-real-estate-market',
  '/baner-real-estate-market',
  '/pune-infrastructure-metro-impact',
  '/aundh',
  '/pashan',
  '/shivajinagar',
  '/compare',
  '/compare/pristine-lords-baner',
  '/compare/kohinoor-livience-baner',
  '/sitemap',
];

// Discover blog URLs from src/content/blog/ directory
function getBlogUrls() {
  const blogDir = path.join(__dirname, '..', 'src', 'content', 'blog');
  try {
    const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
    return files.map(f => `/blog/${f.replace('.md', '')}`);
  } catch (e) {
    console.warn('[WARN] Could not read blog directory:', e.message);
    return [];
  }
}

// Build full URL list
const blogPaths = getBlogUrls();
const allPaths = [...STATIC_PATHS, ...blogPaths];
const urlList = allPaths.map(p => `${BASE_URL}${p}`);

console.log('========================================');
console.log('  INDEXNOW BATCH POST - PING INITIATED  ');
console.log('========================================');
console.log(`Total URLs to submit: ${urlList.length}`);
console.log(`  Static pages: ${STATIC_PATHS.length}`);
console.log(`  Blog posts:   ${blogPaths.length}`);
console.log('');

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList,
});

const options = {
  hostname: 'www.bing.com',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
  },
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => {
    body += chunk;
  });
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log(`[SUCCESS] IndexNow accepted the batch submission (Status: ${res.statusCode})`);
      console.log(`[INFO] ${urlList.length} URLs submitted successfully.`);
      process.exit(0);
    } else {
      console.error(`[FAILURE] IndexNow rejected the submission (Status: ${res.statusCode})`);
      console.error(`[RESPONSE] ${body}`);
      process.exit(1);
    }
  });
});

req.on('error', (e) => {
  console.error(`[ERROR] Request failed: ${e.message}`);
  process.exit(1);
});

req.write(payload);
req.end();
