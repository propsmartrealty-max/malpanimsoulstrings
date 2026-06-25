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

console.log('--- STARTING JSON-LD GRAPH SCHEMA VALIDATION ---');
const htmlFiles = getHtmlFiles(BUILD_DIR);
console.log(`Found ${htmlFiles.length} statically compiled HTML files in .next server app directory.\n`);

let totalSchemasChecked = 0;
let totalErrors = 0;
let totalWarnings = 0;

const errorsList = [];
const warningsList = [];

htmlFiles.forEach((filePath) => {
  const relativePath = path.relative(BUILD_DIR, filePath);
  const htmlContent = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(htmlContent);
  const jsonLdScripts = $('script[type="application/ld+json"]');

  if (jsonLdScripts.length === 0) {
    // Ignore internal page templates and generic error pages
    if (relativePath.startsWith('_') || relativePath.includes('/page.html') || relativePath === 'icon.png.html') {
      return;
    }
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
              message: `URL missing "www." prefix: ${val}`
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

console.log(`Schema Validation Completed.`);
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
  console.log('\n[FAIL] JSON-LD Schema Validation Failed. Fix the errors above.');
  process.exit(1);
} else {
  console.log('[PASS] All JSON-LD schemas are valid and conform to integrity rules.');
  process.exit(0);
}
