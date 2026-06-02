const https = require('https');

const SITEMAP_URL = 'https://www.malpanimsoulstrings.com/sitemap.xml';
const PING_URLS = [
  `https://www.google.com/ping?sitemap=${SITEMAP_URL}`,
  `https://www.bing.com/ping?sitemap=${SITEMAP_URL}`
];

console.log('========================================');
console.log('  ZERO-PROCEDURE SITEMAP PING INITIATED ');
console.log('========================================');

PING_URLS.forEach(pingUrl => {
  https.get(pingUrl, (res) => {
    if (res.statusCode === 200) {
      console.log(`[SUCCESS] Successfully notified: ${new URL(pingUrl).hostname}`);
    } else {
      console.error(`[WARNING] Failed to notify: ${new URL(pingUrl).hostname} (Status: ${res.statusCode})`);
    }
  }).on('error', (e) => {
    console.error(`[ERROR] Request failed for ${new URL(pingUrl).hostname}: ${e.message}`);
  });
});
