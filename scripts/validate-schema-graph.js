const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BUILD_DIR = path.join(process.cwd(), '.next', 'server', 'app');

function getHtmlFiles(dir, filesList = []) {
  if (!fs.existsSync(dir)) {
    console.error(`Build directory not found: ${dir}. Make sure to run 'npm run build' first.`);
    process.exit(1);
  }
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getHtmlFiles(fullPath, filesList);
    } else if (item.endsWith('.html')) {
      filesList.push(fullPath);
    }
  }
  return filesList;
}

console.log('--- STARTING UNIFIED SEO & SCHEMA GRAPH VALIDATION ---');
const htmlFiles = getHtmlFiles(BUILD_DIR);
console.log(`Found ${htmlFiles.length} statically compiled HTML files in .next server app directory.\n`);

let totalSchemasChecked = 0;
let totalErrors = 0;
let totalWarnings = 0;

const errorsList = [];
const warningsList = [];

htmlFiles.forEach((filePath) => {
  const relativePath = path.relative(BUILD_DIR, filePath);
  
  // Ignore internal page templates and generic error pages
  if (relativePath.startsWith('_') || relativePath.includes('/page.html') || relativePath === 'icon.png.html') {
    return;
  }

  const htmlContent = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(htmlContent);

  // 1. Validate H1 Tags (Single H1 compliance)
  const h1s = $('h1');
  if (h1s.length === 0) {
    errorsList.push({
      file: relativePath,
      message: 'Missing H1 heading tag. A page must have exactly one H1.'
    });
    totalErrors++;
  } else if (h1s.length > 1) {
    errorsList.push({
      file: relativePath,
      message: `Multiple H1 tags found (${h1s.length}). A page must have exactly one H1.`
    });
    totalErrors++;
  }

  // 2. Validate Canonical URL
  const canonical = $('link[rel="canonical"]');
  if (canonical.length === 0) {
    errorsList.push({
      file: relativePath,
      message: 'Missing canonical link tag.'
    });
    totalErrors++;
  } else {
    const canonicalHref = canonical.attr('href');
    if (!canonicalHref.startsWith('https://www.malpanimsoulstrings.com')) {
      errorsList.push({
        file: relativePath,
        message: `Canonical URL must start with secure www domain: "${canonicalHref}"`
      });
      totalErrors++;
    }
  }

  // 3. Validate OpenGraph URLs
  const ogUrl = $('meta[property="og:url"]');
  if (ogUrl.length > 0) {
    const urlVal = ogUrl.attr('content');
    if (urlVal.includes('malpanimsoulstrings.com') && !urlVal.includes('www.malpanimsoulstrings.com')) {
      errorsList.push({
        file: relativePath,
        message: `OpenGraph og:url is missing "www." prefix: "${urlVal}"`
      });
      totalErrors++;
    }
  }

  // 4. Validate Image Alt Tags
  $('img').each((idx, imgEl) => {
    const alt = $(imgEl).attr('alt');
    const src = $(imgEl).attr('src');
    if (alt === undefined || alt.trim() === '') {
      errorsList.push({
        file: relativePath,
        message: `Image missing alt description (src: "${src}")`
      });
      totalErrors++;
    }
  });

  // 5. Validate JSON-LD Schema Blocks
  const jsonLdScripts = $('script[type="application/ld+json"]');

  if (jsonLdScripts.length === 0) {
    warningsList.push({
      file: relativePath,
      message: 'No JSON-LD schemas found on page.'
    });
    totalWarnings++;
    return;
  }

  const pageIds = new Set();
  let hasFAQ = false;
  let hasPlace = false;
  let hasApartmentComplex = false;
  let hasRealEstateAgent = false;
  let hasOrganization = false;

  jsonLdScripts.each((index, element) => {
    totalSchemasChecked++;
    const text = $(element).html();
    
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      errorsList.push({
        file: relativePath,
        message: `Invalid JSON syntax in ld+json script block: ${e.message}`
      });
      totalErrors++;
      return;
    }

    // Helper to register node IDs and references recursively
    function analyzeNode(node) {
      if (!node || typeof node !== 'object') return;

      if (node['@id']) {
        pageIds.add(node['@id']);
      }
      if (node['@type']) {
        const type = node['@type'];
        const typesList = Array.isArray(type) ? type : [type];
        
        if (typesList.includes('FAQPage')) hasFAQ = true;
        if (typesList.includes('Place') || typesList.includes('Neighborhood')) hasPlace = true;
        if (typesList.includes('ApartmentComplex')) hasApartmentComplex = true;
        if (typesList.includes('RealEstateAgent')) hasRealEstateAgent = true;
        if (typesList.includes('Organization')) hasOrganization = true;
      }

      // Check RERA numbers if present
      if (node.governmentIdentifier) {
        const rera = node.governmentIdentifier;
        if (!rera.includes('P52100076782') && !rera.includes('P52100055678')) {
          errorsList.push({
            file: relativePath,
            message: `RERA Identifier missing valid registration code: "${rera}"`
          });
          totalErrors++;
        }
      }

      // Validate absolute URLs to ensure they use 'www.' and correct domain
      for (const [key, val] of Object.entries(node)) {
        if (typeof val === 'string' && val.startsWith('https://')) {
          if (val.includes('malpanimsoulstrings.com') && !val.includes('www.malpanimsoulstrings.com')) {
            errorsList.push({
              file: relativePath,
              message: `URL missing "www." prefix in schema: ${val}`
            });
            totalErrors++;
          }
        } else if (typeof val === 'object') {
          analyzeNode(val);
        }
      }
    }

    // Handle graph or array arrays
    if (parsed['@graph'] && Array.isArray(parsed['@graph'])) {
      parsed['@graph'].forEach(analyzeNode);
    } else if (Array.isArray(parsed)) {
      parsed.forEach(analyzeNode);
    } else {
      analyzeNode(parsed);
    }
  });

  // Verify locality-specific pages have correct local schema & FAQ schema
  const isLocalityPage = [
    'aundh-malpani-m-soulstrings-baner-pashan-link-road.html',
    'pashan-malpani-m-soulstrings-baner-pashan-link-road.html',
    'shivajinagar-malpani-m-soulstrings-baner-pashan-link-road.html',
    'baner-overview-malpani-m-soulstrings-baner-pashan-link-road.html'
  ].includes(relativePath);

  if (isLocalityPage) {
    if (!hasPlace) {
      // baner-overview only has FAQ Page, others have place + FAQ page
      if (!relativePath.toLowerCase().includes('baner-overview')) {
        errorsList.push({
          file: relativePath,
          message: 'Locality page is missing Place/Neighborhood local schema.'
        });
        totalErrors++;
      }
    }
    if (!hasFAQ) {
      errorsList.push({
        file: relativePath,
        message: 'Locality page is missing FAQPage schema.'
      });
      totalErrors++;
    }
  }
});

// Validate dynamic XML sitemap build output
const SITEMAP_PATH = path.join(BUILD_DIR, 'sitemap.xml.body');
if (fs.existsSync(SITEMAP_PATH)) {
  console.log(`[INFO] Validating built XML sitemap body...`);
  const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const $xml = cheerio.load(sitemapXml, { xmlMode: true });
  const urls = $xml('loc');
  
  if (urls.length === 0) {
    errorsList.push({
      file: 'sitemap.xml.body',
      message: 'Dynamic XML sitemap is empty or has no <loc> elements.'
    });
    totalErrors++;
  } else {
    console.log(`- Verified sitemap contains ${urls.length} URLs.`);
    
    // Check url consistency in sitemap
    urls.each((idx, el) => {
      const locText = $xml(el).text();
      if (!locText.startsWith('https://www.malpanimsoulstrings.com')) {
        errorsList.push({
          file: 'sitemap.xml.body',
          message: `Sitemap URL contains invalid domain prefix: "${locText}"`
        });
        totalErrors++;
      }
    });
  }
} else {
  warningsList.push({
    file: 'sitemap.xml.body',
    message: 'Could not find sitemap.xml.body in built folder. Dynamic XML sitemap was not validated.'
  });
  totalWarnings++;
}

console.log(`SEO & Schema Validation Completed.`);
console.log(`- Total JSON-LD schemas validated: ${totalSchemasChecked}`);
console.log(`- Warnings: ${totalWarnings}`);
console.log(`- Errors: ${totalErrors}\n`);

if (totalWarnings > 0) {
  console.log('--- WARNING DETAILS ---');
  warningsList.forEach(w => console.log(`[WARN] ${w.file}: ${w.message}`));
  console.log('');
}

if (totalErrors > 0) {
  console.error('--- ERROR DETAILS ---');
  errorsList.forEach(e => console.error(`[ERROR] ${e.file}: ${e.message}`));
  console.log('\n[FAIL] Unified SEO & Schema Validation Failed. Fix the errors above.');
  process.exit(1);
} else {
  console.log('[PASS] All compiled pages and schemas conform to absolute SEO and graph integrity standards.');
  process.exit(0);
}
