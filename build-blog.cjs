
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const contentDir = path.join(__dirname, 'content', 'blog');
const outDir = __dirname; // root for vite to bundle

// Only run if dir exists
if (!fs.existsSync(contentDir)) {
    console.log("No blog content found. Skipping.");
    process.exit(0);
}

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
let indexLinks = '';

const template = (title, content) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} - Malpani M SoulStrings Blog</title>
  <meta name="description" content="Insights and updates on Pune's premium real estate market." />
  <meta name="robots" content="index, follow" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
  <style>
    .blog-content h1 { color: #d4af37; margin-bottom: 2rem; font-weight: 800; font-size: 3rem;}
    .blog-content h2 { color: #fff; margin-top: 2rem; margin-bottom: 1rem; }
    .blog-content p { color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8; }
    .blog-content strong { color: #fff; }
    .blog-content li { color: rgba(255,255,255,0.7); font-size: 1.1rem; margin-bottom: 0.5rem; }
  </style>
</head>
<body class="bg-dark text-white">
  <!-- Minimal Header -->
  <header style="background: rgba(10,10,12,0.95); border-bottom: 1px solid rgba(212,175,55,0.3); padding: 1rem 0;">
    <div class="container d-flex justify-content-between align-items-center">
      <a href="index.html" style="color: #d4af37; text-decoration: none; font-size: 1.5rem; font-weight: bold; letter-spacing: 2px;">MALPANI <span style="color:#fff;">ESTATES</span></a>
      <a href="index.html" class="btn btn-outline-light btn-sm">Back to Home</a>
    </div>
  </header>

  <main class="container py-5 my-5">
    <div class="row justify-content-center">
      <div class="col-lg-8 blog-content">
        ${content}
      </div>
    </div>
  </main>
  
  <footer style="background: #0a0a0c; padding: 2rem 0; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
    <p style="color: rgba(255,255,255,0.5);">&copy; 2026 Malpani Estates. All Rights Reserved.</p>
  </footer>
</body>
</html>`;

files.forEach(file => {
    const rawMarkdown = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const htmlContent = marked(rawMarkdown);
    const slug = file.replace('.md', '');
    const title = slug.replace(/-/g, ' ').toUpperCase();
    
    const finalHtml = template(title, htmlContent);
    fs.writeFileSync(path.join(outDir, `blog-${slug}.html`), finalHtml);
    console.log(`Generated blog-${slug}.html`);
    
    indexLinks += `
    <div class="card bg-dark border-secondary mb-4 p-4">
        <h3 style="color: #d4af37;">${title}</h3>
        <a href="blog-${slug}.html" class="btn btn-outline-light mt-3" style="width: max-content;">Read Article</a>
    </div>`;
});

// Generate central blog index
const indexHtml = template("Real Estate Insights & News", `<h1>Real Estate Insights</h1><p>The latest updates from the Baner-Pashan real estate market.</p>${indexLinks}`);
fs.writeFileSync(path.join(outDir, 'blog.html'), indexHtml);
console.log('Generated blog.html index.');
