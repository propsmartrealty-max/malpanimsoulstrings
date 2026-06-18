const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'src', 'app');

function injectCanonical(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'api' && entry.name !== 'blog') {
      injectCanonical(fullPath);
    } else if (entry.isFile() && entry.name === 'page.jsx') {
      const route = dir.replace(appDir, '').replace(/\\/g, '/'); // Unix-style paths
      if (route === '') continue; // Skip homepage
      
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // If metadata doesn't exist, inject it
      if (!content.includes('export const metadata')) {
        const canonicalUrl = `${route}`;
        const metadataInjection = `\nexport const metadata = {\n  alternates: {\n    canonical: '${canonicalUrl}'\n  }\n};\n`;
        
        const lines = content.split('\n');
        let lastImportLine = -1;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].trim().startsWith('import ')) lastImportLine = i;
        }
        lines.splice(lastImportLine + 1, 0, metadataInjection);
        fs.writeFileSync(fullPath, lines.join('\n'), 'utf8');
        console.log(`Injected canonical ${canonicalUrl} into ${route}/page.jsx`);
      }
    }
  }
}

injectCanonical(appDir);
