import fs from 'fs';
import path from 'path';

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
        const canonicalUrl = `https://www.malpanimsoulstrings.com${route}`;
        const metadataInjection = `\nexport const metadata = {\n  alternates: {\n    canonical: '${canonicalUrl}'\n  }\n};\n\n`;
        
        // Find the last import statement or the beginning of the file
        const lastImportIndex = content.lastIndexOf('import ');
        let insertPos = 0;
        if (lastImportIndex !== -1) {
          insertPos = content.indexOf('\\n', lastImportIndex);
          if (insertPos === -1) insertPos = content.length;
        }
        
        // Insert right after the imports
        // Simpler: Just prepend it if we don't care about absolute strictness, 
        // but Next.js likes exports after imports.
        const lines = content.split('\\n');
        let lastImportLine = -1;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].startsWith('import ')) lastImportLine = i;
        }
        lines.splice(lastImportLine + 1, 0, metadataInjection);
        fs.writeFileSync(fullPath, lines.join('\\n'), 'utf8');
        console.log(`Injected canonical ${canonicalUrl} into ${route}/page.jsx`);
      }
    }
  }
}

injectCanonical(appDir);
