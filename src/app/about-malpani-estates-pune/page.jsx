import SchemaMarkup from '@/components/SchemaMarkup';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/about-malpani-estates-pune' },
  title: 'About Malpani Estates | 30+ Years of Real Estate Legacy in Pune',
  description: 'Learn about Malpani Estates — over 3 decades of architectural excellence, trusted development, and iconic residential landmarks across Pune, including Malpani M SoulStrings.',
  keywords: [
    'About Malpani Estates',
    'Malpani Group Pune',
    'Malpani Estates developer history',
    'Malpani M SoulStrings builder',
    'luxury real estate builders Pune',
    'Malpani Estates track record',
    'MahaRERA registered developers Pune'
  ],
  openGraph: {
    title: 'About Malpani Estates | Legacy Developer in Pune',
    description: '30+ years of trusted excellence and luxury residential landmarks across Pune by Malpani Estates.',
    url: 'https://www.malpanimsoulstrings.com/about-malpani-estates-pune',
    siteName: 'Malpani M SoulStrings',
    images: [
      {
        url: 'https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png',
        width: 1200,
        height: 630,
        alt: 'Malpani Estates Legacy in Pune Real Estate',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function AboutMalpaniEstatesPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Malpani Estates",
      "alternateName": "Malpani Group",
      "url": "https://www.malpanimsoulstrings.com",
      "logo": "https://www.malpaniestates.com/assets/images/apple-touch-icon.png",
      "foundingDate": "1994",
      "description": "Premier real estate developer in Maharashtra with landmark luxury residential and commercial developments including Malpani M SoulStrings.",
      "telephone": "+91 7744009295",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Baner Pashan Link Road",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411045",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/malpaniestates",
        "https://www.instagram.com/malpaniestates",
        "https://www.youtube.com/@malpaniestates",
        "https://www.linkedin.com/company/malpani-estates"
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.malpanimsoulstrings.com" },
      { "@type": "ListItem", "position": 2, "name": "About Malpani Estates", "item": "https://www.malpanimsoulstrings.com/about-malpani-estates-pune" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the developer of Malpani M SoulStrings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Malpani M SoulStrings is developed by Malpani Estates, part of the multi-decade legacy Malpani Group renowned for high-quality engineering, transparency, and timely delivery across Maharashtra."
        }
      },
      {
        "@type": "Question",
        "name": "What is the track record of Malpani Estates in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Malpani Estates has delivered millions of square feet of prime residential and commercial real estate, consistently adhering to strict MahaRERA compliance, superior construction quality, and customer-first design."
        }
      },
      {
        "@type": "Question",
        "name": "What are the MahaRERA numbers for Malpani M SoulStrings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The MahaRERA registration numbers are P52100076782 (Wing B) and P52100055678 (Wing C), available for verification on the official MahaRERA website."
        }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SchemaMarkup pageName="About Malpani Estates" pageUrl="/about-malpani-estates-pune" />

      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>verified</span>
            Developer Heritage
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Malpani Estates</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Building trust, engineering excellence, and crafting architectural landmarks across Pune for over three decades.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
            <h2>A Legacy Built on Trust and Precision</h2>
            <p>
              <strong>Malpani Estates</strong> stands as a pillar of integrity and architectural excellence in the Indian real estate landscape. As part of the diversified Malpani Group, our philosophy has always centered on creating spaces that enhance quality of life, provide generational value, and push the boundaries of structural innovation.
            </p>

            <h2>Our Flagship Masterpiece: Malpani M SoulStrings</h2>
            <p>
              Located on the prestigious <strong>Baner-Pashan Link Road</strong>, <strong><Link href="/">Malpani M SoulStrings</Link></strong> represents the pinnacle of our residential portfolio. Spread over 1.59 million sq. ft. of meticulously engineered construction, it offers exclusive <Link href="/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road">3 BHK Luxury Residences</Link>, <Link href="/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road">4 BHK Luxury Estates</Link>, <Link href="/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road">5 BHK Duplex Homes</Link>, and <Link href="/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road">Sky Penthouses</Link> designed for Pune’s most discerning homeowners.
            </p>

            <div className="stats-grid my-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div className="stat-card loc-card" style={{ padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <h3 className="gradient-text" style={{ fontSize: '2.5rem', margin: 0 }}>30+</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Years of Group Heritage</p>
              </div>
              <div className="stat-card loc-card" style={{ padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <h3 className="gradient-text" style={{ fontSize: '2.5rem', margin: 0 }}>1.59M+</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Sq.Ft Construction Area</p>
              </div>
              <div className="stat-card loc-card" style={{ padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <h3 className="gradient-text" style={{ fontSize: '2.5rem', margin: 0 }}>455</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Exclusive Residences</p>
              </div>
              <div className="stat-card loc-card" style={{ padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <h3 className="gradient-text" style={{ fontSize: '2.5rem', margin: 0 }}>100%</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>MahaRERA Compliant</p>
              </div>
            </div>

            <h2>Core Principles of Malpani Estates</h2>
            <ul>
              <li><strong>Zero Compromise on Quality:</strong> We utilize advanced Alu-Form Mivan construction technology, high-grade structural steel, and globally certified interior finishes.</li>
              <li><strong>Absolute Regulatory Transparency:</strong> Every project holds full MahaRERA approvals, clear land titles, and verified environmental clearances before customer offerings.</li>
              <li><strong>Customer-Centric Architecture:</strong> Master plans emphasize 100% Vastu compliance, maximum natural ventilation, open Brahmasthan zones, and generous green buffers.</li>
              <li><strong>Resort-Style Ecosystems:</strong> We provide 35+ integrated lifestyle amenities that cater holistically to all age groups — children, fitness enthusiasts, working executives, and senior citizens.</li>
            </ul>

            <h2 className="mt-5">MahaRERA Registration & Legal Compliance</h2>
            <p>
              Malpani M SoulStrings is fully registered with the Maharashtra Real Estate Regulatory Authority:
            </p>
            <ul>
              <li><strong>Wing B:</strong> MahaRERA Registration No. <strong>P52100076782</strong></li>
              <li><strong>Wing C:</strong> MahaRERA Registration No. <strong>P52100055678</strong></li>
            </ul>
            <p>
              All project details, verified architectural drawings, and phase timelines are accessible on the official MahaRERA portal (<a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>maharera.mahaonline.gov.in</a>).
            </p>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Experience Centre</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Visit our sales gallery on Baner-Pashan Link Road for a private walkthrough.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Book Site Visit</a>
            </div>
          </aside>
          
        </div>
      </div>
    </main>
  );
}
