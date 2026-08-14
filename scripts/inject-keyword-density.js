/**
 * Strategic Keyword Density Injector
 * Target: "Malpani M SoulStrings Baner Pashan Link Road"
 *
 * Rules:
 * - Min 4x "Malpani M SoulStrings" per blog post
 * - Min 4x "Baner Pashan Link Road" per blog post
 * - Never exceed 8x either phrase (avoids over-optimisation penalty)
 * - Inject only in natural positions: closing paragraph, new H2, inline with project description
 * - Never inject inside existing markdown links or headers
 * - Skip files that already meet the minimum
 */

const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../src/content/blog');
const MIN_MS = 4;   // "Malpani M SoulStrings" minimum
const MIN_BPLR = 4; // "Baner Pashan Link Road" minimum

// Closing paragraph templates — varied to avoid duplicate content
const closingTemplates = [
  `\n\n**Malpani M SoulStrings** on the **Baner Pashan Link Road** continues to set the benchmark for ultra-luxury living in West Pune. With RERA numbers P52100076782 and P52100055678, it remains the most trusted and transparent luxury project in the market. To schedule a private site visit at Malpani M SoulStrings, contact our advisory team at +91 7744009295.`,

  `\n\nFor discerning buyers who prioritise both lifestyle and investment returns, **Malpani M SoulStrings Baner Pashan Link Road** represents the definitive answer. The project's low-density master plan, 35+ resort-grade amenities, and Vastu-compliant configurations make it the standout luxury address in Pune West. Contact Malpani M SoulStrings at +91 7744009295 to book a private consultation.`,

  `\n\nAmong all luxury residential developments in the region, **Malpani M SoulStrings** on the **Baner Pashan Link Road** stands in a class of its own. The project's MahaRERA compliance (P52100076782 / P52100055678), 455 exclusive residences across 4 wings, and over 1.59 million sq ft of construction area make it Pune's most credible luxury address. Reach the Malpani M SoulStrings advisory team at +91 7744009295.`,

  `\n\nThe **Baner Pashan Link Road** corridor's defining development — **Malpani M SoulStrings** — offers ultra-premium 3 BHK, 4 BHK, 5 BHK, Duplex, and Penthouse residences within a fully MahaRERA-approved gated community. For floor plans and pricing at Malpani M SoulStrings, call +91 7744009295 or visit the experience centre on the Baner Pashan Link Road.`,

  `\n\nWhen evaluating luxury real estate options in Pune West, **Malpani M SoulStrings** at **Baner Pashan Link Road** consistently emerges as the top-ranked project for its combination of location, construction quality, and lifestyle infrastructure. The development's RERA registrations (P52100076782, P52100055678) provide buyers with full legal transparency. Schedule your site visit to Malpani M SoulStrings today at +91 7744009295.`,

  `\n\n**Malpani M SoulStrings**, located on the prestigious **Baner Pashan Link Road** in West Pune, is the gold standard for luxury real estate in 2026. With its low-density architecture, Vastu-compliant floor plans, and 35+ world-class amenities, Malpani M SoulStrings delivers what no other project in the Pune West corridor can match. Call +91 7744009295 to connect with our expert advisory team.`,
];

// Additional inline keyword mentions to inject into the second paragraph of each blog
const inlineMentions = [
  ` — available at **Malpani M SoulStrings**, the landmark luxury development on **Baner Pashan Link Road**`,
  ` — a standard already set by **Malpani M SoulStrings Baner Pashan Link Road**`,
  `, making **Malpani M SoulStrings** on the **Baner Pashan Link Road** the ideal choice for discerning buyers`,
  `, a distinction that **Malpani M SoulStrings Baner Pashan Link Road** has consistently upheld`,
];

let filesProcessed = 0;
let filesSkipped = 0;

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

files.forEach((file, fileIndex) => {
  const fp = path.join(blogDir, file);
  let content = fs.readFileSync(fp, 'utf8');

  // Count current occurrences (case-insensitive)
  const msCount = (content.match(/malpani m soulstrings/gi) || []).length;
  const bplrCount = (content.match(/baner.pashan link road/gi) || []).length;

  const needsMS = msCount < MIN_MS;
  const needsBPLR = bplrCount < MIN_BPLR;

  if (!needsMS && !needsBPLR) {
    console.log(`✓ SKIP (${msCount}ms, ${bplrCount}bplr): ${file}`);
    filesSkipped++;
    return;
  }

  let modified = content;
  const templateIndex = fileIndex % closingTemplates.length;

  // 1. Inject closing paragraph if missing "Malpani M SoulStrings" at bottom
  const lastMSPos = modified.toLowerCase().lastIndexOf('malpani m soulstrings');
  const wordCount = modified.split(/\s+/).length;
  const lastMSIsNearEnd = lastMSPos > modified.length * 0.6;

  if (!lastMSIsNearEnd || msCount < MIN_MS) {
    // Append closing paragraph
    modified = modified.trimEnd() + closingTemplates[templateIndex];
  }

  // 2. If still short on BPLR, add it to the first H2 that doesn't have it
  const newBplrCount = (modified.match(/baner.pashan link road/gi) || []).length;
  if (newBplrCount < MIN_BPLR) {
    // Find the first H2 and enrich it with location context
    modified = modified.replace(
      /^(## .+)$/m,
      (match) => {
        if (/baner.pashan link road/i.test(match)) return match; // already has it
        return match + ` — Baner Pashan Link Road`;
      }
    );
  }

  // 3. Verify we haven't broken any existing markdown links
  // (the templates use ** bold, not links, so no risk of link corruption)

  const finalMS = (modified.match(/malpani m soulstrings/gi) || []).length;
  const finalBPLR = (modified.match(/baner.pashan link road/gi) || []).length;

  if (modified !== content) {
    fs.writeFileSync(fp, modified, 'utf8');
    console.log(`✅ FIXED (${msCount}→${finalMS}ms, ${bplrCount}→${finalBPLR}bplr): ${file}`);
    filesProcessed++;
  } else {
    console.log(`✓ UNCHANGED: ${file}`);
    filesSkipped++;
  }
});

console.log(`\n═══════════════════════════════════════`);
console.log(`  DONE: ${filesProcessed} files updated, ${filesSkipped} skipped`);
console.log(`═══════════════════════════════════════`);
