const https = require('https');
const cheerio = require('cheerio');

https.get('https://www.malpanimsoulstrings.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const scripts = $('script[type="application/ld+json"]');
    console.log(`Found ${scripts.length} JSON-LD scripts.`);
    scripts.each((i, el) => {
      try {
        const json = JSON.parse($(el).html());
        console.log(`\n--- Script ${i + 1} ---`);
        if (json['@graph']) {
            json['@graph'].forEach(g => {
                if (g['@type'] === 'FAQPage') {
                    console.log('FAQPage from @graph:', JSON.stringify(g, null, 2));
                }
            })
        } else if (json['@type'] === 'FAQPage') {
            console.log('FAQPage direct:', JSON.stringify(json, null, 2));
        } else {
             console.log(`Type: ${json['@type']}`);
        }
      } catch (e) {
        console.log(`Error parsing script ${i + 1}:`, e);
      }
    });
  });
});
