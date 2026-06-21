import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/sitemap-malpani-m-soulstrings-baner-pashan-link-road' },
  title: 'HTML Sitemap',
  description: 'Complete directory of Malpani M SoulStrings properties, micro-markets, and real estate market intelligence.',
  robots: {
    index: true,
    follow: true,
  }
};

export default function HTMLSitemap() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.malpanimsoulstrings.com/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Sitemap"
    }]
  };

  return (
    <main style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-background)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <div className="container">
        <h1 className="gradient-text mb-5" style={{ fontSize: '3rem' }}>Sitemap Directory</h1>
        
        <div className="row g-5">
          {/* Core Properties */}
          <div className="col-md-6 col-lg-3">
            <h2 style={{ color: 'var(--color-primary)', borderBottom: '1px solid rgba(212,175,55,0.3)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Estates</h2>
            <ul className="list-unstyled" style={{ lineHeight: '2.5' }}>
              <li><Link href="/" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>M SoulStrings Overview</Link></li>
              <li><Link href="/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>3 BHK Luxury Apartments</Link></li>
              <li><Link href="/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>4 BHK Ultra-Luxury</Link></li>
              <li><Link href="/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>5 BHK & Duplex Homes</Link></li>
              <li><Link href="/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Premium Penthouses</Link></li>
              <li><Link href="/amenities-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Resort Amenities</Link></li>
              <li><Link href="/location-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Strategic Location</Link></li>
            </ul>
          </div>

          {/* Market Intelligence */}
          <div className="col-md-6 col-lg-3">
            <h2 style={{ color: 'var(--color-primary)', borderBottom: '1px solid rgba(212,175,55,0.3)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Market Reports</h2>
            <ul className="list-unstyled" style={{ lineHeight: '2.5' }}>
              <li><Link href="/pune-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Pune Real Estate Market</Link></li>
              <li><Link href="/baner-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Baner Real Estate Market</Link></li>
              <li><Link href="/pune-west-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Pune West Corridor</Link></li>
              <li><Link href="/nri-investment-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>NRI Investment Guide</Link></li>
              <li><Link href="/pune-infrastructure-metro-impact-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Metro Infrastructure Impact</Link></li>
              <li><Link href="/vastu-compliant-luxury-homes-pune-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Vastu Compliance</Link></li>
              <li><Link href="/it-professionals-luxury-homes-pune-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>IT Professional Guide</Link></li>
            </ul>
          </div>

          {/* Micro Markets */}
          <div className="col-md-6 col-lg-3">
            <h2 style={{ color: 'var(--color-primary)', borderBottom: '1px solid rgba(212,175,55,0.3)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Micro-Markets</h2>
            <ul className="list-unstyled" style={{ lineHeight: '2.5' }}>
              <li><Link href="/baner-overview-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Baner Overview</Link></li>
              <li><Link href="/aundh-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Aundh Luxury Suburb</Link></li>
              <li><Link href="/pashan-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Pashan Link Road</Link></li>
              <li><Link href="/shivajinagar-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Shivajinagar Proximity</Link></li>
            </ul>
          </div>

          {/* Competitor Analysis */}
          <div className="col-md-6 col-lg-3">
            <h2 style={{ color: 'var(--color-primary)', borderBottom: '1px solid rgba(212,175,55,0.3)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Comparisons</h2>
            <ul className="list-unstyled" style={{ lineHeight: '2.5' }}>
              <li><Link href="/compare-malpani-m-soulstrings-baner-pashan-link-road/pristine-lords-baner-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>vs Pristine Lords</Link></li>
              <li><Link href="/compare-malpani-m-soulstrings-baner-pashan-link-road/kohinoor-livience-baner-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>vs Kohinoor Livience</Link></li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h2 style={{ color: 'var(--color-primary)', borderBottom: '1px solid rgba(212,175,55,0.3)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Malpani Estates Pune Portfolio</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', lineHeight: '2' }}>
              <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/malpani-group-luxury-projects-pune" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Malpani Group Luxury Projects Guide</Link>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/malpani-group-luxury-projects-pune" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>M Aryabhatta Baner</Link>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/malpani-group-luxury-projects-pune" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>M Ramanujan Baner</Link>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/malpani-group-luxury-projects-pune" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>M Kautilya Viman Nagar</Link>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/malpani-group-luxury-projects-pune" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Malpani Vivanta Balewadi</Link>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/malpani-group-luxury-projects-pune" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Malpani Greens Wakad</Link>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/malpani-group-luxury-projects-pune" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Malpani The Crest Pimple Saudagar</Link>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/malpani-group-luxury-projects-pune" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Malpani Cereza Punawale</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
