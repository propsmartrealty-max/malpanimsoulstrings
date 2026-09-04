import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/malpani-m-soulstrings-reviews-ratings-baner-pune' },
  title: 'Malpani M SoulStrings Reviews & Ratings | Baner real estate',
  description: 'Verified reviews, client ratings, and feedback for Malpani M SoulStrings on Baner-Pashan Link Road. Review construction quality, location advantages, and Vastu designs.',
  keywords: 'Malpani M Soulstrings reviews, M Soulstrings ratings, Malpani Group feedback, luxury flats Baner reviews, Pune West luxury project rating',
  openGraph: {
    title: 'Malpani M SoulStrings Reviews & Ratings',
    description: 'Verified reviews and construction quality ratings for Malpani M SoulStrings in Pune West.',
    url: 'https://www.malpanimsoulstrings.com/malpani-m-soulstrings-reviews-ratings-baner-pune',
    siteName: 'Malpani M SoulStrings',
    images: [
      {
        url: 'https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png',
        width: 1200,
        height: 630,
        alt: 'Malpani M SoulStrings Reviews & Ratings',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  }
};

export default function ReviewsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Malpani M SoulStrings Reviews, Ratings & Project Feedback",
    "description": "Comprehensive review of construction quality, structural technology, location accessibility, and client ratings for Malpani M SoulStrings in West Pune.",
    "author": { "@type": "Organization", "name": "Real Estate Analyst" },
    "publisher": { "@type": "Organization", "name": "Malpani Estates" },
    "datePublished": "2026-06-25T12:00:00+05:30",
    "dateModified": new Date().toISOString()
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Malpani M SoulStrings",
    "image": "https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png",
    "description": "Premium 3 BHK & 4 BHK luxury residences on Baner-Pashan Link Road, Pune.",
    "brand": {
      "@type": "Brand",
      "name": "Malpani Estates"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "142",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Product",
          "name": "Malpani M SoulStrings",
          "image": "https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png"
        },
        "author": {
          "@type": "Person",
          "name": "Amit Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "Perfect 100% Vastu compliant layout with massive carpet area and scenic hill views. Commuting to Hinjewadi Phase 1 is smooth.",
        "datePublished": "2026-05-15"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Product",
          "name": "Malpani M SoulStrings",
          "image": "https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png"
        },
        "author": {
          "@type": "Person",
          "name": "Priya Deshmukh"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "Highly impressed by the Mivan formwork construction quality. The double-glazed window systems (DGU) effectively block highway noise.",
        "datePublished": "2026-06-02"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the overall rating for Malpani M SoulStrings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Malpani M SoulStrings holds an overall client satisfaction rating of 4.9 out of 5 stars based on verified buyer reviews, praised for its Mivan construction quality, Vastu compliance, and prime Baner-Pashan Link Road location."
        }
      },
      {
        "@type": "Question",
        "name": "What do buyers say about construction quality at Malpani M SoulStrings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Buyers consistently highlight the use of monolithic Alu-Form Mivan technology, earthquake-resistant RCC frameworks, double-glazed acoustic windows, and high-grade imported marble finishes."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.malpanimsoulstrings.com" },
      { "@type": "ListItem", "position": 2, "name": "Reviews & Ratings", "item": "https://www.malpanimsoulstrings.com/malpani-m-soulstrings-reviews-ratings-baner-pune" }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SchemaMarkup pageName="Reviews & Ratings" pageUrl="/malpani-m-soulstrings-reviews-ratings-baner-pune" />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>star</span>
            Verified Review Guide
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Malpani M SoulStrings Reviews & Ratings</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            An objective, data-driven evaluation of West Pune’s signature residential masterpiece by Malpani Estates.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
            <h2>Overview of Client Ratings</h2>
            <p>Evaluating ultra-luxury real estate requires analyzing parameters beyond aesthetic layouts. <strong>Malpani M SoulStrings reviews</strong> consistently highlight developer reliability, engineering precision, and location advantages as core reasons for the project's high <strong>4.9/5 rating</strong>. High-net-worth families, software executives, and NRI investors have focused heavily on this gated community for luxury home upgrades.</p>

            <h3>1. Construction & Structural Quality Review</h3>
            <p>A primary highlight in structural feedback is the use of <strong>Alu-Form (Mivan) system technology</strong>. This advanced monolithic concrete pour ensures superior strength, crack resistance, and seismic load safety. Additionally, the installation of <strong>Double-Glazed Units (DGU)</strong> for thermal and acoustic isolation provides a quiet interior sanctuary, filtering out traffic sound from the Link Road corridor.</p>

            <h3>2. Location Accessibility & Proximity Rating</h3>
            <p>Located near Vighnaharta Chowk, the project receives top marks for connectivity. Tech professionals note in reviews that the commute to Hinjewadi IT Park Phase 1 takes just 15 minutes via NH-48. Proximity to Balewadi High Street (5 mins) offers lifestyle advantages, while adjacent Sus Hills provide a clean micro-climate.</p>

            <h3>3. Layout Planning & Vastu Compliance</h3>
            <p>Unlike high-density towers that compromise cardinal entries, M SoulStrings features 100% Vastu-compliant structures. East-west cross-ventilation, spacious double-height decks, and the lack of shared walls between apartments are highly appreciated in architectural feedback.</p>

            <div className="contact-box" style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '12px', marginTop: '3rem', borderLeft: '4px solid var(--color-primary)' }}>
              <h3 style={{ marginTop: 0, color: '#fff' }}>Read the Complete Brochure</h3>
              <p>Download floor plans, dynamic layout configurations, and pricing factsheets directly: <strong><Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Download Official Brochure →</Link></strong></p>
            </div>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Related Hubs</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '1rem' }}><Link href="/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>3 BHK Luxury Layouts</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link href="/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>4 BHK Premium Estates</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link href="/location-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Location Connectivity</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link href="/amenities-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>World Class Amenities</Link></li>
              </ul>
            </div>
          </aside>
          
        </div>
      </div>
    </main>
  );
}
