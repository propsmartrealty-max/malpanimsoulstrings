import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road' },
  title: '5 BHK Luxury Apartments & Duplex Homes in Baner Pune',
  description: 'Discover exclusive 5 BHK ultra-luxury sky villas and duplexes at Malpani M SoulStrings, Baner Pashan Link Road. Low-density privacy, private deck, and Vastu compliance.',
  keywords: [
    'ultra luxury 5 BHK apartments Pune',
    'duplex homes for sale Baner',
    'exclusive duplex sky villas Pune',
    '5 BHK premium residences Pune',
    '5bhk residences',
    'penthouse homes',
    'premium luxury homes in pune',
    'Luxury 5 BHK Pune',
    'Ultra Luxury 5 BHK Pune',
    'Premium 5 BHK Pune',
    'Luxury 5 BHK Baner',
    'Luxury 5 BHK Pashan',
    'Luxury Duplex Pune',
    'Duplex Apartments Pune',
    'Luxury Duplex Baner',
    'Duplex Flats Pune',
    'Premium Duplex Pune',
    'Duplex Homes Baner Pashan',
    'Luxury Duplex Apartments Pune',
    'Large Duplex Homes Pune',
    'Luxury Duplex Residences Pune',
    'Ready Duplex Pune',
    'New Duplex Projects Pune',
    'Duplex Property Pune',
    'Luxury Duplex Near Hinjewadi',
    'Luxury Duplex Homes In Baner Pune'
  ],
  openGraph: {
    title: '5 BHK Luxury Apartments & Duplex Homes in Baner Pune',
    description: 'Discover exclusive 5 BHK ultra-luxury sky villas and duplexes at Malpani M SoulStrings, Baner Pashan Link Road. Low-density privacy, private deck, and Vastu compliance.',
    url: 'https://www.malpanimsoulstrings.com/5bhk-duplex',
    siteName: 'Malpani M SoulStrings',
    images: [
      {
        url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg',
        width: 1200,
        height: 630,
        alt: 'Malpani M SoulStrings 5 BHK & Duplex Homes in Baner Pashan Link Road',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function FiveBhkDuplexPage() {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "5 BHK Duplex & Sky Villa at Malpani M SoulStrings",
    "image": [
      "https://malpani-cms.firsteconomy.com/uploads/02_1_fccd839fae.png"
    ],
    "description": "Ultra-luxury 5 BHK Duplex sky villa on the Baner-Pashan Link Road, Pune. Emphasizes low-density architecture, double-height terraces, and Vastu compliance.",
    "brand": {
      "@type": "Brand",
      "name": "Malpani Estates"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.malpanimsoulstrings.com/5bhk-duplex",
      "priceCurrency": "INR",
      "price": "58000000",
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
      "reviewCount": "62"
    }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <SchemaMarkup pageName="5 BHK & Duplex Homes" pageUrl="/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road" />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>diamond</span>
            Ultra-Luxury Segment
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>5 BHK Luxury Apartments & Duplexes in Baner, Pune</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            The absolute peak of spatial privilege. Experience the grand scale of duplex sky villas built on an exclusive low-density master plan at Malpani M SoulStrings on the Baner-Pashan Link Road.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Low-Density Exclusivity</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>An unmatched land-to-resident ratio. Enjoy the privacy of a sky mansion with only select elite neighbors sharing the plot footprint.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Double-Height Decks</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>Massive architectural terraces designed for cross-ventilation, panoramic views, and private open-air family gatherings.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Acoustic Damping</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>Sound-proofed structural glazing and thick masonry walls, establishing a silent, stress-free micro-environment inside.</p>
                </div>
              </div>
            </div>

            <h2 className="mt-5 mb-4 gradient-text" style={{ fontSize: '2rem' }}>Sprawling Duplex Living For Multigenerational Legacies</h2>
            <p>
              In the premium segment of the <Link href="/pune-west-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road">Pune West Real Estate Market</Link>, size is only half the equation; the other half is architectural philosophy. The 5 BHK duplex residences and sky villas at <Link href="/">Malpani M SoulStrings</Link> are built to define structural privilege. Spanning two levels of design, these estates separate private rest quarters from grand social zones.
            </p>
            <p>
              Situated on the prestigious <Link href="/location-malpani-m-soulstrings-baner-pashan-link-road">Baner Pashan Link Road</Link>, this project protects its residents from urban noise via the adjacent Pashan hills, while staying situated minutes away from Balewadi High Street, Aundh, and Hinjewadi Phase 1 offices.
            </p>
            <p>
              Our duplex layouts strictly incorporate Vastu principles, featuring the highly auspicious cardinal orientations, open Brahmasthans, and south-east aligned modular kitchens. It is an investment in positive energy flow and family prosperity, backed by the construction legacy of Malpani Estates.
            </p>
            <p>
              With premium imported finishes, smart home security systems, and private lobby entrance configurations, these residences stand as the premier alternative to standard luxury high-rises. Indulge in 35+ resort amenities, from the signature clubhouse to the heated sky pool, and future-proof your asset portfolio.
            </p>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Related Guides & Intelligence</h3>
              <div className="list-group list-group-flush bg-transparent">
                <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/low-density-sky-villas-baner-pashan" className="list-group-item list-group-item-action bg-transparent border-secondary text-white" style={{ padding: '0.75rem 0' }}>
                  <small style={{ color: 'var(--color-accent)' }}>Guide →</small> Low-Density Sky Villas Matrix
                </Link>
                <Link href="/vastu-compliant-luxury-homes-pune-malpani-m-soulstrings-baner-pashan-link-road" className="list-group-item list-group-item-action bg-transparent border-secondary text-white" style={{ padding: '0.75rem 0' }}>
                  <small style={{ color: 'var(--color-accent)' }}>Architecture →</small> Vastu & Wellness Guide
                </Link>
                <Link href="/compare-malpani-m-soulstrings-baner-pashan-link-road" className="list-group-item list-group-item-action bg-transparent border-secondary text-white" style={{ padding: '0.75rem 0' }}>
                  <small style={{ color: 'var(--color-accent)' }}>Comparison →</small> Pristine Lords & Kohinoor Alternatives
                </Link>
              </div>
            </div>

            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '350px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Secure Your Legacy</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Schedule a private site visit at Malpani M SoulStrings to view custom floor plans.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Download Floor Plan</a>
            </div>
          </aside>
          
        </div>
      </div>

    </main>
  );
}
