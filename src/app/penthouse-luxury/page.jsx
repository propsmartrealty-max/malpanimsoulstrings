import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/penthouse-luxury' },
  title: 'Premium Penthouses for Sale in Baner-Pashan Link Road Pune',
  description: 'Indulge in absolute grandeur with premium penthouses at Malpani M SoulStrings. Sweeping hillside views, roof garden options, and smart-home luxury in West Pune.',
  keywords: [
    'luxury penthouses for sale Pune',
    'premium penthouse homes Baner Pashan Link Road',
    'sky penthouses in West Pune',
    'duplex penthouse layouts Pune',
    'penthouse homes',
    'premium luxury homes in pune',
    'Penthouse Pune',
    'Luxury Penthouse Pune',
    'Premium Penthouse Pune',
    'Sky Penthouse Pune',
    'Duplex Penthouse Pune',
    'Baner Penthouse',
    'Pashan Penthouse',
    'Luxury Penthouse Baner',
    'Luxury Penthouse Pashan',
    'Luxury Rooftop Homes Pune',
    'Terrace Penthouse Pune',
    'Luxury Sky Residences Pune',
    'Exclusive Penthouse Pune',
    'High Rise Penthouse Pune',
    'Penthouse With Private Deck Pune',
    'Luxury Penthouse In Baner Pune'
  ],
  openGraph: {
    title: 'Premium Penthouses for Sale in Baner-Pashan Link Road Pune',
    description: 'Indulge in absolute grandeur with premium penthouses at Malpani M SoulStrings. Sweeping hillside views, roof garden options, and smart-home luxury in West Pune.',
    url: 'https://www.malpanimsoulstrings.com/penthouse-luxury',
    siteName: 'Malpani M SoulStrings',
    images: [
      {
        url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg',
        width: 1200,
        height: 630,
        alt: 'Malpani M SoulStrings Premium Penthouses in Baner Pashan Link Road',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function PenthouseLuxuryPage() {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Luxury Sky Penthouse at Malpani M SoulStrings",
    "image": [
      "https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg"
    ],
    "description": "Ultra-luxury penthouse residence on the Baner-Pashan Link Road, Pune. Features private roof garden options, panoramic hillside vistas, and smart automation.",
    "brand": {
      "@type": "Brand",
      "name": "Malpani Estates"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.malpanimsoulstrings.com/penthouse-luxury",
      "priceCurrency": "INR",
      "price": "65000000",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Malpani Estates"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "48"
    }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <SchemaMarkup pageName="Premium Penthouses" pageUrl="/penthouse-luxury" />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>diamond</span>
            Trophy Residences
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Premium Penthouses for Sale in Baner-Pashan Link Road, Pune</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            The ultimate expression of high-altitude grandeur. Secure your personal private sanctuary in the sky with panoramic view decks and customizable roof gardens at Malpani M SoulStrings.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Panoramic Hillside Vistas</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>Enjoy 270-degree unobstructed vistas of the green Baner-Pashan hills. Watch the city light up from Pune's most exclusive height.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Custom Roof Gardens</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>Design your private open-air sanctuary. Perfect for sky-lounge seating, private dining, or a serene botanical getaway.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Bespoke Automation</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>Voice-activated controls, motorized curtains, premium climate management, and triple-tier biometric security configurations.</p>
                </div>
              </div>
            </div>

            <h2 className="mt-5 mb-4 gradient-text" style={{ fontSize: '2rem' }}>The Ultimate Trophy Home in West Pune</h2>
            <p>
              Penthouses represent the absolute peak of real estate prestige. At <Link href="/">Malpani M SoulStrings</Link>, located along the prestigious <Link href="/location">Baner Pashan Link Road</Link>, we have designed these penthouse units as true sky mansions. Every layout features grand double-height living areas, spacious master suites, and floor-to-ceiling structural windows.
            </p>
            <p>
              For high-net-worth individuals and corporate leaders who demand absolute privacy, our penthouses offer the ultimate solution. With low-density planning and custom elevator lobby options, M SoulStrings ensures that your daily home life remains entirely peaceful and exclusive.
            </p>
            <p>
              Each penthouse design respects ancient Vastu Shastra principles. The open Brahmasthan allows energy to flow dynamically, while the South-West master bedroom ensures stability and leadership energies are optimized. Fused with smart-home systems, this is a sanctuary built for future-facing lifestyles.
            </p>
            <p>
              Developed by the legendary Malpani Estates, this gated development provides over 35+ premium amenities, including an infinity pool, private fitness arenas, and a signature clubhouse. Experience Pune’s finest residential landmark, and secure a legacy asset that commands unprecedented appreciation.
            </p>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Related Guides & Intelligence</h3>
              <div className="list-group list-group-flush bg-transparent">
                <Link href="/blog/low-density-sky-villas-baner-pashan" className="list-group-item list-group-item-action bg-transparent border-secondary text-white" style={{ padding: '0.75rem 0' }}>
                  <small style={{ color: 'var(--color-accent)' }}>Guide →</small> Low-Density Sky Villas Matrix
                </Link>
                <Link href="/vastu-compliant-luxury-homes-pune" className="list-group-item list-group-item-action bg-transparent border-secondary text-white" style={{ padding: '0.75rem 0' }}>
                  <small style={{ color: 'var(--color-accent)' }}>Architecture →</small> Vastu & Wellness Guide
                </Link>
                <Link href="/pune-infrastructure-metro-impact" className="list-group-item list-group-item-action bg-transparent border-secondary text-white" style={{ padding: '0.75rem 0' }}>
                  <small style={{ color: 'var(--color-accent)' }}>Infrastructure →</small> Metro Connectivity Impact
                </Link>
              </div>
            </div>

            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '350px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Experience the Grandeur</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Schedule a private VIP tour at Malpani M SoulStrings to witness the views.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Request VIP Pricing</a>
            </div>
          </aside>
          
        </div>
      </div>

    </main>
  );
}
