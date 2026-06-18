import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/3bhk-luxury' },
  title: '3 BHK Luxury Apartments for Sale in Baner-Pashan Link Road',
  description: 'Explore ultra-premium 3 BHK luxury apartments at Malpani M SoulStrings. Spacious layouts, world-class amenities, and Vastu-compliant designs in West Pune.',
  keywords: [
    'luxury 3 BHK apartments Pune',
    'premium 3 BHK homes Baner',
    '3 BHK luxury estates Pune West',
    'buy 3 BHK premium flats Pune',
    'spacious apartments',
    'premium luxury homes in pune',
    'Luxury 3 BHK Pune',
    'Premium 3 BHK Pune',
    'Spacious 3 BHK Pune',
    'Luxury 3 BHK Baner',
    'Luxury 3 BHK Pashan',
    'Luxury 3 BHK Baner Pashan Link Road',
    'Ready To Move Luxury 3 BHK Pune',
    'New Launch Luxury 3 BHK Pune',
    'Luxury 3 BHK Near Hinjewadi',
    'Luxury 3 BHK West Pune',
    'Luxury 3 BHK Homes Pune',
    'Smart Luxury 3 BHK Pune',
    'Large Carpet 3 BHK Pune',
    'Luxury Family Homes Pune'
  ],
  openGraph: {
    title: '3 BHK Luxury Apartments for Sale in Baner-Pashan Link Road',
    description: 'Explore ultra-premium 3 BHK luxury apartments at Malpani M SoulStrings. Spacious layouts, world-class amenities, and Vastu-compliant designs in West Pune.',
    url: 'https://www.malpanimsoulstrings.com/3bhk-luxury',
    siteName: 'Malpani M SoulStrings',
    images: [
      {
        url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg',
        width: 1200,
        height: 630,
        alt: 'Malpani M SoulStrings 3 BHK Luxury Apartments in Baner Pashan Link Road',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function ThreeBhkLuxuryPage() {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "3 BHK Premium Estate at Malpani M SoulStrings",
    "image": [
      "https://malpani-cms.firsteconomy.com/uploads/01_1_97625c7cd6.png"
    ],
    "description": "Premium 3 BHK luxury apartment on the Baner-Pashan Link Road, Pune. Features smart home automation, expansive decks, and Vastu-compliant layouts.",
    "brand": {
      "@type": "Brand",
      "name": "Malpani Estates"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.malpanimsoulstrings.com/3bhk-luxury",
      "priceCurrency": "INR",
      "price": "23000000",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Malpani Estates"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "104"
    }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <SchemaMarkup pageName="3 BHK Premium Flats" pageUrl="/3bhk-luxury" />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>diamond</span>
            Premium Configuration
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>3 BHK Luxury Apartments in Baner-Pashan Link Road</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Perfect spatial efficiency meets unparalleled luxury. Discover the preferred choice for modern professionals seeking spacious apartments, Vastu compliance, and premium living at Malpani M SoulStrings in West Pune.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Generous Carpet Area</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>Experience larger floor footprints designed to feel expansive. No cramped rooms, just flowing, light-filled spaces.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Tech-Enabled Living</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>Fully integrated smart home automation. Control security, temperature, and lighting at a single touch.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Wellness First</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>Breathe in hillside freshness. East-West alignments ensure natural ventilation and positive energy flow.</p>
                </div>
              </div>
            </div>

            <h2 className="mt-5 mb-4 gradient-text" style={{ fontSize: '2rem' }}>A New Benchmark for 3 BHK Luxury in Pune</h2>
            <p>
              Why settle for standard apartments when you can own a masterfully designed estate? The 3 BHK luxury residences at <Link href="/">Malpani M SoulStrings</Link> represent a paradigm shift. Designed for the discerning buyer, every unit maximizes usable space, delivering a layout that outperforms typical 3 BHK flats in Baner and Balewadi.
            </p>
            <p>
              Located on the prestigious <Link href="/location">Baner-Pashan Link Road</Link>, this project places you at the bridge of Pune’s finest IT corridor and social hubs. Enjoy the tranquility of the Pashan hills while retaining instant connectivity to Balewadi High Street, Hinjewadi IT Park, and central Pune business districts.
            </p>
            <p>
              These spacious apartments feature double-height terrace decks, premium imported Italian marble, and world-class bathroom fixtures. Adherence to strict Vastu principles ensures the entrance and living areas are bathed in morning sunlight, promoting health and prosperity for all residents.
            </p>
            <p>
              For families who appreciate legacy, quality construction, and a vibrant community, Malpani Estates has crafted the ultimate haven. Backed by MahaRERA approval and premium gated amenities including an infinity pool and forest trail, this is real estate designed to endure for generations.
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
                <Link href="/location" className="list-group-item list-group-item-action bg-transparent border-secondary text-white" style={{ padding: '0.75rem 0' }}>
                  <small style={{ color: 'var(--color-accent)' }}>Connectivity →</small> Location Advantages
                </Link>
              </div>
            </div>

            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '350px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Experience the Masterpiece</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Schedule a private viewing at Malpani M SoulStrings to experience true luxury.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Download Floor Plan</a>
            </div>
          </aside>
          
        </div>
      </div>

    </main>
  );
}
