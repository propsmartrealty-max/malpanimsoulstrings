const https = require('https');

const HOST = 'www.malpanimsoulstrings.com';
const KEY = 'malpanimsoulstrings-indexnow-key-2026';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

const PING_URLS = [
  `https://api.indexnow.org/indexnow?url=${SITEMAP_URL}&key=${KEY}`,
  `https://www.bing.com/indexnow?url=${SITEMAP_URL}&key=${KEY}`,
  `https://yandex.com/indexnow?url=${SITEMAP_URL}&key=${KEY}`
];

console.log('========================================');
console.log('  INDEXNOW AUTOMATED PING INITIATED     ');
console.log('========================================');

PING_URLS.forEach(pingUrl => {
  https.get(pingUrl, (res) => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log(`[SUCCESS] Successfully notified via IndexNow: ${new URL(pingUrl).hostname}`);
    } else {
      console.error(`[WARNING] Failed to notify: ${new URL(pingUrl).hostname} (Status: ${res.statusCode})`);
    }
  }).on('error', (e) => {
    console.error(`[ERROR] Request failed for ${new URL(pingUrl).hostname}: ${e.message}`);
  });
});
