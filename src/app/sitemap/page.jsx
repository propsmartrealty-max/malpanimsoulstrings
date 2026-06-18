import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/sitemap' },
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
              <li><Link href="/3bhk-luxury" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>3 BHK Luxury Apartments</Link></li>
              <li><Link href="/4bhk-luxury" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>4 BHK Ultra-Luxury</Link></li>
              <li><Link href="/5bhk-duplex" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>5 BHK & Duplex Homes</Link></li>
              <li><Link href="/penthouse-luxury" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Premium Penthouses</Link></li>
              <li><Link href="/amenities" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Resort Amenities</Link></li>
              <li><Link href="/location" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Strategic Location</Link></li>
            </ul>
          </div>

          {/* Market Intelligence */}
          <div className="col-md-6 col-lg-3">
            <h2 style={{ color: 'var(--color-primary)', borderBottom: '1px solid rgba(212,175,55,0.3)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Market Reports</h2>
            <ul className="list-unstyled" style={{ lineHeight: '2.5' }}>
              <li><Link href="/pune-real-estate-market" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Pune Real Estate Market</Link></li>
              <li><Link href="/baner-real-estate-market" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Baner Real Estate Market</Link></li>
              <li><Link href="/pune-west-real-estate-market" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Pune West Corridor</Link></li>
              <li><Link href="/nri-investment" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>NRI Investment Guide</Link></li>
              <li><Link href="/pune-infrastructure-metro-impact" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Metro Infrastructure Impact</Link></li>
              <li><Link href="/vastu-compliant-luxury-homes-pune" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Vastu Compliance</Link></li>
              <li><Link href="/it-professionals-luxury-homes-pune" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>IT Professional Guide</Link></li>
            </ul>
          </div>

          {/* Micro Markets */}
          <div className="col-md-6 col-lg-3">
            <h2 style={{ color: 'var(--color-primary)', borderBottom: '1px solid rgba(212,175,55,0.3)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Micro-Markets</h2>
            <ul className="list-unstyled" style={{ lineHeight: '2.5' }}>
              <li><Link href="/baner-overview" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Baner Overview</Link></li>
              <li><Link href="/aundh" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Aundh Luxury Suburb</Link></li>
              <li><Link href="/pashan" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Pashan Link Road</Link></li>
              <li><Link href="/shivajinagar" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Shivajinagar Proximity</Link></li>
            </ul>
          </div>

          {/* Competitor Analysis */}
          <div className="col-md-6 col-lg-3">
            <h2 style={{ color: 'var(--color-primary)', borderBottom: '1px solid rgba(212,175,55,0.3)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Comparisons</h2>
            <ul className="list-unstyled" style={{ lineHeight: '2.5' }}>
              <li><Link href="/compare/pristine-lords-baner" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>vs Pristine Lords</Link></li>
              <li><Link href="/compare/kohinoor-livience-baner" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>vs Kohinoor Livience</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
