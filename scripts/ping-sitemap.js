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
  '/3bhk-luxury',
  '/5bhk-duplex',
  '/penthouse-luxury',
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
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
  },
};

function submitPayload() {
  console.log(`[PINGING] Sending IndexNow push notification payload...`);
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
}

// Poll the live site to make sure the verification key is accessible before submitting IndexNow ping
function verifyKeyIsLive(attempts = 1, maxAttempts = 15) {
  return new Promise((resolve, reject) => {
    console.log(`[VERIFICATION] Checking key location (Attempt ${attempts}/${maxAttempts}): ${KEY_LOCATION}`);
    
    const req = https.get(KEY_LOCATION, { timeout: 10000 }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const trimmedBody = body.trim();
        if (res.statusCode === 200 && trimmedBody === KEY) {
          console.log(`[SUCCESS] IndexNow Verification Key verified on live host!`);
          resolve(true);
        } else {
          console.log(`[PENDING] Key not ready or returned status ${res.statusCode}. Content mismatch (Expected: "${KEY}", Got: "${trimmedBody}")`);
          if (attempts >= maxAttempts) {
            reject(new Error(`Key verification timed out after ${maxAttempts} attempts.`));
          } else {
            console.log(`Waiting 20 seconds before retry...`);
            setTimeout(() => {
              verifyKeyIsLive(attempts + 1, maxAttempts).then(resolve).catch(reject);
            }, 20000);
          }
        }
      });
    });

    req.on('error', (err) => {
      console.log(`[PENDING] Network error during key verification: ${err.message}`);
      if (attempts >= maxAttempts) {
        reject(err);
      } else {
        console.log(`Waiting 20 seconds before retry...`);
        setTimeout(() => {
          verifyKeyIsLive(attempts + 1, maxAttempts).then(resolve).catch(reject);
        }, 20000);
      }
    });

    req.on('timeout', () => {
      req.destroy();
    });
  });
}

// Execute pipeline
verifyKeyIsLive()
  .then(() => {
    submitPayload();
  })
  .catch((err) => {
    console.error(`[CRITICAL] IndexNow ping aborted: ${err.message}`);
    process.exit(1);
  });
