const https = require('https');

const host = 'www.malpanimsoulstrings.com';
const key = 'malpanimsoulstrings-indexnow-key-2026';
const keyLocation = 'https://www.malpanimsoulstrings.com/malpanimsoulstrings-indexnow-key-2026.txt';

// The URLs that have changed or the homepage to trigger a deep crawl
const urlList = [
  'https://www.malpanimsoulstrings.com/',
  'https://www.malpanimsoulstrings.com/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road',
  'https://www.malpanimsoulstrings.com/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road',
  'https://www.malpanimsoulstrings.com/blog-malpani-m-soulstrings-baner-pashan-link-road'
];

const payload = JSON.stringify({
  host: host,
  key: key,
  keyLocation: keyLocation,
  urlList: urlList
});

const searchEngines = [
  { hostname: 'api.indexnow.org', path: '/indexnow' }, // Bing, Yandex, Seznam, Naver
];

console.log('Initiating IndexNow Ping for universal search engine indexing...');

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
    res.on('data', (d) => {
      // Consume response data to free up memory
    });
  });

  req.on('error', (error) => {
    console.error(`[IndexNow Error] ${engine.hostname}:`, error.message);
  });

  req.write(payload);
  req.end();
});
