const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const HOST = 'www.malpanimsoulstrings.com';
const BASE_URL = `https://${HOST}`;
const KEY_FILE = path.join(process.cwd(), 'google-service-account.json');

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
  const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');
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

console.log('=============================================');
const title = 'GOOGLE INDEXING API GATEWAY';
console.log(`  ${title}  `);
console.log('=============================================');
console.log(`Discovered ${urlList.length} URLs for submission.`);

if (!fs.existsSync(KEY_FILE)) {
  console.log('\n[INFO] "google-service-account.json" not found.');
  console.log('Follow these steps to enable instant Google Indexing:');
  console.log('1. Go to Google Cloud Console (https://console.cloud.google.com).');
  console.log('2. Enable the "Web Search Indexing API" for your project.');
  console.log('3. Create a Service Account, generate a Private Key in JSON format, and rename it to "google-service-account.json".');
  console.log('4. Place the file in the root directory of this project.');
  console.log('5. Delegate Owner status to the Service Account email address in Google Search Console.');
  console.log('6. Run this script again: "node scripts/ping-google.js".\n');
  process.exit(0);
}

// Helper to base64url encode a buffer
function base64url(buf) {
  return buf.toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

// Generate JWT token for Google OAuth
function getAccessToken(clientEmail, privateKey) {
  return new Promise((resolve, reject) => {
    const header = base64url(Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })));
    const now = Math.floor(Date.now() / 1000);
    
    const claimSet = base64url(Buffer.from(JSON.stringify({
      iss: clientEmail,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now
    })));

    const sign = crypto.createSign('RSA-SHA256');
    sign.update(`${header}.${claimSet}`);
    const signature = base64url(sign.sign(privateKey));

    const jwt = `${header}.${claimSet}.${signature}`;
    
    const postData = `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`;

    const options = {
      hostname: 'oauth2.googleapis.com',
      port: 443,
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const data = JSON.parse(body);
        if (data.access_token) {
          resolve(data.access_token);
        } else {
          reject(new Error(`Failed to retrieve token: ${body}`));
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Submit a single URL to Google Indexing API
function submitUrl(url, accessToken) {
  return new Promise((resolve) => {
    const postData = JSON.stringify({
      url: url,
      type: 'URL_UPDATED'
    });

    const options = {
      hostname: 'indexing.googleapis.com',
      port: 443,
      path: '/v3/urlNotifications:publish',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log(`[SUCCESS] Indexed: ${url}`);
          resolve(true);
        } else {
          console.error(`[ERROR] Failed for ${url}: Status ${res.statusCode} - ${body}`);
          resolve(false);
        }
      });
    });

    req.on('error', (err) => {
      console.error(`[ERROR] Request error for ${url}: ${err.message}`);
      resolve(false);
    });

    req.write(postData);
    req.end();
  });
}

// Main processing logic
async function run() {
  try {
    const keyData = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));
    const clientEmail = keyData.client_email;
    const privateKey = keyData.private_key;

    console.log(`[AUTH] Authenticating as service account: ${clientEmail}`);
    const token = await getAccessToken(clientEmail, privateKey);
    console.log('[AUTH] Token successfully retrieved. Submitting URLs...');

    let successfulPings = 0;
    for (const url of urlList) {
      const ok = await submitUrl(url, token);
      if (ok) successfulPings++;
      // Polite sleep to stay within API rate limits
      await new Promise(r => setTimeout(r, 150));
    }

    console.log('\n=============================================');
    console.log(`INDEXING RUN COMPLETE: ${successfulPings}/${urlList.length} URLs accepted.`);
    console.log('=============================================');
  } catch (error) {
    console.error(`[CRITICAL] Indexing run failed: ${error.message}`);
  }
}

run();
