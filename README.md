# Malpani M SoulStrings - Cloudflare Pages & Workers Architecture

Official high-performance web platform for **Malpani M SoulStrings Baner Pashan Link Road Pune** by **Malpani Estates**.

Standardized entirely on **Cloudflare Pages & Cloudflare Workers Edge Infrastructure**, delivering sub-50ms TTFB across 330+ global PoPs with zero dependency on Vercel.

---

## Edge Architecture Stack

- **Global CDN & Edge Hosting:** Cloudflare Pages
- **Edge Runtime & Middleware:** Cloudflare Workers (`functions/_middleware.js`)
- **Serverless API Routes:** Cloudflare Pages Functions (`functions/api/`)
  - `/api/contact`: Edge lead telemetry, Turnstile verification, D1/KV storage, and VIP email routing
  - `/api/geo`: Low-latency country, city, and NRI buyer detection
  - `/api/leads`: Authenticated audit endpoint for D1 Lead Vault
- **Static Site Generation (SSG):** Next.js 16 Static Export (`output: 'export'`)
- **Routing & Canonical Redirects:** Cloudflare Edge Redirects (`public/_redirects`)
- **Edge Security & Cache Rules:** Cloudflare Headers (`public/_headers`)
- **Worker Configuration:** Native `wrangler.toml`

---

## Local Development & Build Commands

```bash
# 1. Install Dependencies
npm install

# 2. Local Next.js Development Server
npm run dev

# 3. Production Cloudflare Static Build (1,690+ Pages)
npm run build

# 4. SEO & Schema Graph Audit
npm run seo-audit

# 5. Local Cloudflare Pages & Worker Simulation
npx wrangler pages dev out
```

---

## Cloudflare Deployment Settings

- **Project Type:** Cloudflare Pages
- **Framework Preset:** None (Custom / Static HTML)
- **Build Command:** `npm run build`
- **Build Output Directory:** `out`
- **Node.js Version:** `20.18.0` (Configured via `.node-version` and `.nvmrc`)
- **Custom Domains:**
  - `www.malpanimsoulstrings.com` (Primary Canonical)
  - `malpanimsoulstrings.com` (301 Permanent Redirect at Cloudflare Edge)
  - `malpanimsoulstrings.pages.dev` (Direct Cloudflare Edge URL)
