import SchemaMarkup from '@/components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/press-malpani-estates-baner-pune' },
  title: 'Press & Media Mentions | Malpani M SoulStrings Baner Pashan Link Road',
  description: 'Read the latest press releases, market coverage, and media features highlighting Malpani M SoulStrings and Malpani Estates in Pune real estate news.',
  keywords: [
    'Malpani Estates press releases',
    'Malpani M SoulStrings media coverage',
    'Pune real estate news Malpani',
    'Baner luxury property news',
    'Malpani Group news and awards'
  ],
  openGraph: {
    title: 'Press & Media Coverage — Malpani M SoulStrings Pune',
    description: 'Latest media features and market news covering Malpani M SoulStrings on Baner-Pashan Link Road.',
    url: 'https://www.malpanimsoulstrings.com/press-malpani-estates-baner-pune',
    siteName: 'Malpani M SoulStrings',
    images: [
      {
        url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg',
        width: 1200,
        height: 630,
        alt: 'Malpani M SoulStrings Media Coverage',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function PressPage() {
  const pressItems = [
    {
      title: "Malpani Estates Redefines West Pune's Skyline with Malpani M SoulStrings",
      source: "Realty Insights India",
      date: "2026-05-18",
      url: "/blog-malpani-m-soulstrings-baner-pashan-link-road/pune-luxury-real-estate-market-report-2026",
      snippet: "Malpani Estates announces landmark progress on Malpani M SoulStrings along the Baner-Pashan Link Road, delivering 455 ultra-luxury residences with over 35+ amenities."
    },
    {
      title: "Pune Metro Line 3 Catalyst: Baner-Pashan Link Road Emerges as Prime Luxury Real Estate Magnet",
      source: "Urban Infrastructure Journal",
      date: "2026-04-12",
      url: "/blog-malpani-m-soulstrings-baner-pashan-link-road/pune-metro-line-3-baner-pashan-real-estate-impact",
      snippet: "How connectivity developments and the upcoming metro line are boosting property values for high-end developments like Malpani M SoulStrings."
    },
    {
      title: "The Surge in NRI Investments: Why West Pune Luxury Projects Lead the Market",
      source: "Global Indian Property Index",
      date: "2026-03-22",
      url: "/blog-malpani-m-soulstrings-baner-pashan-link-road/nri-investors-playbook-pune-luxury-market-2026",
      snippet: "NRIs from UAE, USA, and Singapore increasingly favor RERA-registered projects with resort-grade amenities in Pune's Baner-Pashan corridor."
    }
  ];

  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Press Coverage & Media Mentions for Malpani M SoulStrings",
    "itemListElement": pressItems.map((item, index) => ({
      "@type": "NewsArticle",
      "position": index + 1,
      "headline": item.title,
      "datePublished": item.date,
      "publisher": {
        "@type": "Organization",
        "name": item.source
      },
      "description": item.snippet
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.malpanimsoulstrings.com" },
      { "@type": "ListItem", "position": 2, "name": "Press & Media", "item": "https://www.malpanimsoulstrings.com/press-malpani-estates-baner-pune" }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SchemaMarkup pageName="Press & Media" pageUrl="/press-malpani-estates-baner-pune" />

      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>newspaper</span>
            Media & News
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Press & Media Coverage</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Official announcements, media coverage, and news features spotlighting Malpani M SoulStrings on the Baner-Pashan Link Road.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
            <h2>Featured Media Coverage</h2>
            <div className="press-list" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
              {pressItems.map((item, idx) => (
                <div key={idx} className="loc-card" style={{ padding: '2rem', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.9rem' }}>{item.source}</span>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{item.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#fff' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{item.snippet}</p>
                  <Link href={item.url} className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '0.5rem 1.5rem' }}>
                    Read Full Coverage →
                  </Link>
                </div>
              ))}
            </div>

            <h2 className="mt-5">Media & Press Inquiries</h2>
            <p>
              For press inquiries, editorial requests, high-resolution media kits, or executive interviews regarding Malpani M SoulStrings, please contact our corporate communications office at <strong>info@malpanimsoulstrings.com</strong> or call +91 7744009295.
            </p>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Official Brochure</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Download the official Malpani M SoulStrings media presentation & layout kit.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Download Kit</a>
            </div>
          </aside>
          
        </div>
      </div>
    </main>
  );
}
