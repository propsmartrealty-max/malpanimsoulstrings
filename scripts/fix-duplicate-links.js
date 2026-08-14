const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../src/content/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

let totalFixed = 0;

for (const file of files) {
  const fp = path.join(blogDir, file);
  let content = fs.readFileSync(fp, 'utf8');
  const original = content;

  // Find all markdown links
  const allLinks = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let m;
  while ((m = linkRegex.exec(content)) !== null) {
    allLinks.push({ full: m[0], text: m[1], href: m[2], index: m.index });
  }

  // Find internal hrefs that appear more than once
  const hrefCounts = {};
  allLinks.forEach(l => {
    if (l.href === '/' || l.href.startsWith('/')) {
      hrefCounts[l.href] = (hrefCounts[l.href] || 0) + 1;
    }
  });

  const dupeHrefs = Object.entries(hrefCounts)
    .filter(([, count]) => count > 1)
    .map(([href]) => href);

  if (dupeHrefs.length === 0) continue;

  // For each dupe href, keep first occurrence, replace subsequent with plain text
  for (const dupeHref of dupeHrefs) {
    let seen = 0;
    // Rebuild content, removing subsequent duplicate links
    let newContent = '';
    let lastIndex = 0;
    const regex2 = /\[([^\]]+)\]\(([^)]+)\)/g;
    let m2;
    regex2.lastIndex = 0;
    const contentCopy = content;
    while ((m2 = regex2.exec(contentCopy)) !== null) {
      if (m2[2] === dupeHref) {
        seen++;
        if (seen > 1) {
          // Replace with plain text only
          newContent += contentCopy.slice(lastIndex, m2.index) + m2[1];
          lastIndex = m2.index + m2[0].length;
        }
      }
    }
    newContent += contentCopy.slice(lastIndex);
    if (newContent !== contentCopy) {
      content = newContent;
    }
  }

  if (content !== original) {
    fs.writeFileSync(fp, content, 'utf8');
    console.log(`✅ Fixed duplicate links in: ${file} (dupes: ${dupeHrefs.join(', ')})`);
    totalFixed++;
  }
}

console.log(`\nDone. Fixed ${totalFixed} files.`);
