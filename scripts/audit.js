const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(process.cwd(), 'src', 'app');

function scanDirectory(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDirectory(fullPath, results);
    } else if (file === 'page.jsx') {
      results.push(fullPath);
    }
  });
  return results;
}

const pages = scanDirectory(srcAppDir);
console.log(`[AUDIT] Scanning ${pages.length} pages for SEO compliance...\n`);

const anomalies = [];

pages.forEach(filePath => {
  const relPath = path.relative(srcAppDir, filePath);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // 1. Check metadata
  const hasMetadata = content.includes('export const metadata');
  if (!hasMetadata) {
    const hasGenMetadata = content.includes('generateMetadata');
    if (!hasGenMetadata) {
      anomalies.push({
        file: relPath,
        type: 'Missing Metadata',
        details: 'No static "metadata" export or dynamic "generateMetadata" function found.'
      });
    }
  } else {
    // Audit static metadata
    const metadataMatch = content.match(/metadata\s*=\s*({[\s\S]*?});/);
    if (metadataMatch) {
      const metaText = metadataMatch[1];
      
      // Check canonical
      if (!metaText.includes('canonical')) {
        anomalies.push({
          file: relPath,
          type: 'Missing Canonical Tag',
          details: 'Metadata export exists but does not define "canonical" key.'
        });
      }
      
      // Match the canonical string specifically to prevent false positives in openGraph properties
      const canonicalMatch = metaText.match(/canonical\s*:\s*['"]([^'"]+)['"]/);
      if (canonicalMatch) {
        const canonicalVal = canonicalMatch[1];
        if (canonicalVal.startsWith('http://') || canonicalVal.startsWith('https://')) {
          anomalies.push({
            file: relPath,
            type: 'Hardcoded Canonical Host',
            details: `Canonical tag value "${canonicalVal}" should be root-relative (e.g. "/compare") instead of absolute domain, as Next.js layout defines metadataBase.`
          });
        }
      }
    }
  }

  // 2. Check Headings (H1 tags)
  const h1Matches = content.match(/<h1[\s\S]*?>/gi) || [];
  if (h1Matches.length === 0) {
    anomalies.push({
      file: relPath,
      type: 'Missing H1',
      details: 'No H1 heading tag found in page.'
    });
  } else if (h1Matches.length > 1) {
    anomalies.push({
      file: relPath,
      type: 'Multiple H1s',
      details: `Found ${h1Matches.length} H1 tags. A page must have exactly one H1.`
    });
  }

  // 3. Check for raw <a> tags instead of next/link
  const rawAnchorMatches = content.match(/<a\s+href="(\/[^"]*)"/g) || [];
  if (rawAnchorMatches.length > 0) {
    anomalies.push({
      file: relPath,
      type: 'Raw Anchor Links',
      details: `Found raw local anchor tag(s) like: ${rawAnchorMatches.join(', ')}. Use Next.js <Link> instead.`
    });
  }
});

if (anomalies.length > 0) {
  console.log('--- [FAIL] SEO ANOMALIES DETECTED ---');
  anomalies.forEach(a => {
    console.log(`\nFile: ${a.file}`);
    console.log(`Type: ${a.type}`);
    console.log(`Details: ${a.details}`);
  });
  process.exit(1);
} else {
  console.log('--- [PASS] No static page anomalies found! Your site is SEO healthy. ---');
  process.exit(0);
}
