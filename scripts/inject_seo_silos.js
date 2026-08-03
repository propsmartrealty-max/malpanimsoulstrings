const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'src', 'content', 'blog');

const silos = [
  {
    regex: /\b(3 BHK( Flats| Luxury Apartments| luxury| apartments)?)\b/gi,
    url: '/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road',
    name: '3 BHK Hub'
  },
  {
    regex: /\b(4 BHK( Luxury Residences| luxury| residences)?)\b/gi,
    url: '/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road',
    name: '4 BHK Hub'
  },
  {
    regex: /\b(5 BHK( & Duplex Homes| Duplex| Homes)?|Duplexes)\b/gi,
    url: '/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road',
    name: '5 BHK Hub'
  },
  {
    regex: /\b(Penthouses?|Sky Penthouses?|Sky Villas?)\b/gi,
    url: '/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road',
    name: 'Penthouse Hub'
  },
  {
    regex: /\b(Amenities|World Class Amenities|Clubhouse)\b/gi,
    url: '/amenities-malpani-m-soulstrings-baner-pashan-link-road',
    name: 'Amenities Hub'
  },
  {
    regex: /\b(Location|Baner Pashan Link Road)\b/gi,
    url: '/location-malpani-m-soulstrings-baner-pashan-link-road',
    name: 'Location Hub'
  },
  {
    regex: /\b(NRI( Investment| Investors)?)\b/gi,
    url: '/nri-investment-malpani-m-soulstrings-baner-pashan-link-road',
    name: 'NRI Hub'
  }
];

let files = [];
try {
  files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
} catch (e) {
  console.error("Could not read directory:", e);
  process.exit(1);
}

let modifiedCount = 0;

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let hasModifications = false;

  // For each silo target, we want to inject exactly ONE link per file to avoid link spam
  silos.forEach(silo => {
    // Avoid double linking: if the URL already exists in the file, skip this silo
    if (content.includes(`(${silo.url})`)) {
      return; 
    }

    // We only want to replace the FIRST occurrence in the text that isn't inside an existing link or header
    // A safe but naive way is to split by lines, find the first matching line that is a paragraph, and replace it.
    const lines = content.split('\n');
    let replaced = false;

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      // Skip headers, blockquotes, lists, or lines that already have markdown links []()
      if (line.startsWith('#') || line.startsWith('>') || line.startsWith('-') || /\[.*\]\(.*\)/.test(line)) {
        continue;
      }

      if (silo.regex.test(line)) {
        // Reset regex state
        silo.regex.lastIndex = 0;
        
        // Replace first occurrence only
        lines[i] = line.replace(silo.regex, (match) => {
          if (!replaced) {
            replaced = true;
            return `[${match}](${silo.url})`;
          }
          return match;
        });
        
        if (replaced) {
          hasModifications = true;
          break; // Stop looking for this silo in this file once we found one
        }
      }
    }
    
    if (hasModifications) {
      content = lines.join('\n');
    }
  });

  if (hasModifications) {
    fs.writeFileSync(filePath, content, 'utf-8');
    modifiedCount++;
    console.log(`[+] Injected links into: ${file}`);
  }
});

console.log(`\nSuccess! Injected SEO silos into ${modifiedCount} out of ${files.length} markdown files.`);
