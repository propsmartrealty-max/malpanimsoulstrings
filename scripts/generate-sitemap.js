const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.malpanimsoulstrings.com/discover';

const locations = [
  'baner', 'pashan', 'wakad', 'hinjewadi', 'balewadi', 'aundh', 'sus', 'mahalunge', 
  'kothrud', 'shivajinagar', 'bavdhan', 'pimple-saudagar', 'pimple-nilakh', 'tathawade', 
  'punawale', 'ravet', 'baner-annex', 'pashan-sus-road', 'pune-west', 'deccan', 
  'erandwane', 'sb-road', 'model-colony', 'pune-university', 'fc-road', 'jm-road', 
  'senapati-bapat-road', 'mumbai-pune-highway', 'baner-balewadi-road', 'sus-road', 
  'pashan-road', 'nda-road', 'chandni-chowk', 'warje', 'karve-nagar'
];

const propertyTypes = [
  '2-bhk-flats', '3-bhk-flats', '4-bhk-flats', '3-bhk-luxury-apartments', '4-bhk-premium-flats', 
  '5-bhk-duplex-homes', 'penthouses', 'gated-community', 'ready-possession-homes', 
  'under-construction-projects', 'luxury-real-estate', 'premium-properties', 'luxury-flats', 
  'new-launch', 'pre-launch-offers', 'best-residential-projects', 'luxury-villas', 'smart-homes', 
  'premium-residences', 'luxury-estates'
];

const modifiers = [
  'vastu-compliant', 'near-it-park', 'near-metro-station', 'with-swimming-pool', 
  'luxury-amenities', 'smart-home-automation', 'high-rise', 'best-investment', 'low-density', 
  'premium-specifications', 'near-highway', 'zero-brokerage', 'direct-from-builder', 
  'rera-approved', 'top-developer', 'luxury-lifestyle', 'zero-commute', 'high-roi', 
  'best-price', 'nri-investment'
];

let urls = [];

for (const loc of locations) {
  for (const pType of propertyTypes) {
    for (const mod of modifiers) {
      // Create combinatorial slug
      urls.push(`${baseUrl}/${pType}-${mod}-${loc}`);
    }
  }
}

// Generate Sitemap XML
const generateSitemap = () => {
  const date = new Date().toISOString();
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  urls.forEach(url => {
    xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>\n`;
  });

  xml += `</urlset>`;
  return xml;
};

const xmlContent = generateSitemap();
const outputPath = path.join(__dirname, '..', 'public', 'sitemap-programmatic.xml');

fs.writeFileSync(outputPath, xmlContent, 'utf8');

console.log(`Successfully generated sitemap-programmatic.xml with ${urls.length} programmatic URLs.`);
