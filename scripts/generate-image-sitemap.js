const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.malpanimsoulstrings.com';

const images = [
  {
    url: `${baseUrl}/assets/hero_building.webp`,
    title: 'Malpani M SoulStrings Exterior Elevation - Premium Luxury Estates in Baner',
    geo: 'Baner-Pashan Link Road, Pune, Maharashtra, India',
    caption: 'Ultra-Luxury 4 BHK and 5 BHK Duplex Architecture at Malpani M SoulStrings'
  },
  {
    url: `${baseUrl}/assets/clubhouse.webp`,
    title: 'State-of-the-art Clubhouse at Malpani M SoulStrings',
    geo: 'Baner-Pashan Link Road, Pune, Maharashtra, India',
    caption: 'Premium 35+ Lifestyle Amenities for Residents of Malpani M SoulStrings'
  },
  {
    url: `${baseUrl}/assets/infinity_pool.webp`,
    title: 'Rooftop Infinity Pool at Malpani M SoulStrings Baner',
    geo: 'Baner-Pashan Link Road, Pune, Maharashtra, India',
    caption: 'Exclusive Rooftop Infinity Pool overlooking the Pashan Hills'
  },
  {
    url: `${baseUrl}/assets/living_room.webp`,
    title: 'Luxury 4 BHK Living Room Interior - Malpani M SoulStrings',
    geo: 'Baner-Pashan Link Road, Pune, Maharashtra, India',
    caption: 'Spacious, Vastu-compliant Living Room interiors with smart home automation'
  },
  {
    url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg',
    title: 'Malpani M SoulStrings Masterplan & Aerial View',
    geo: 'Baner-Pashan Link Road, Pune, Maharashtra, India',
    caption: 'Aerial Masterplan of Malpani M SoulStrings ultra-premium gated community'
  }
];

const generateImageSitemap = () => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  // We group images under the root domain URL for the sitemap
  xml += `  <url>
    <loc>${baseUrl}/</loc>\n`;

  images.forEach(img => {
    xml += `    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
      <image:geo_location>${img.geo}</image:geo_location>
    </image:image>\n`;
  });

  xml += `  </url>\n`;
  xml += `</urlset>`;
  
  return xml;
};

const xmlContent = generateImageSitemap();
const outputPath = path.join(__dirname, '..', 'public', 'sitemap-images.xml');

fs.writeFileSync(outputPath, xmlContent, 'utf8');

console.log(`Successfully generated sitemap-images.xml with ${images.length} SEO-optimized visual assets.`);
