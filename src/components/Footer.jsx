import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" style={{ background: '#0a0a0c', padding: '4rem 0 2rem 0', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
      <div className="container">
        <nav className="row mb-5" aria-label="Footer Navigation">
            <div className="col-lg-3 mb-4 mb-lg-0">
                <h4 style={{ color: '#d4af37', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '1.5rem' }}>MALPANI <span style={{ color:'#fff' }}>ESTATES</span></h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.8' }}>Redefining absolute luxury and architectural perfection on the Baner Pashan Link Road.</p>
            </div>
            <div className="col-lg-3 mb-4 mb-lg-0">
                <h5 className="text-white mb-3">Project Hubs</h5>
                <ul className="list-unstyled" style={{ lineHeight: '2' }}>
                    <li><Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>M SoulStrings Overview</Link></li>
                    <li><Link href="/4bhk-luxury" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>4 BHK Luxury</Link></li>
                    <li><Link href="/amenities" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>World Class Amenities</Link></li>
                    <li><Link href="/vastu-compliant-luxury-homes-pune" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vastu Compliant Homes</Link></li>
                    <li><Link href="/location" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Baner Pashan Link Road Location</Link></li>
                    <li><Link href="/sitemap" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>HTML Sitemap</Link></li>
                </ul>
            </div>
            <div className="col-lg-3 mb-4 mb-lg-0">
                <h5 className="text-white mb-3">Insights</h5>
                <ul className="list-unstyled" style={{ lineHeight: '2' }}>
                    <li><Link href="/blog/ultimate-guide-pune-west-luxury-real-estate" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Pune West Luxury Real Estate Guide</Link></li>
                    <li><Link href="/blog/nri-investors-playbook-pune-luxury-market-2026" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>NRI Investor's Playbook 2026</Link></li>
                    <li><Link href="/blog/rise-of-sky-villas-in-pune" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>The Rise of Sky Villas in Pune</Link></li>
                    <li><Link href="/blog/what-defines-ultra-luxury-5-bhk-residence-pune" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Defining an Ultra Luxury 5 BHK</Link></li>
                    <li><Link href="/blog/baner-pashan-link-road-coveted-real-estate" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Baner-Pashan Link Road Corridor</Link></li>
                    <li><Link href="/blog/hinjewadi-spillover-baner-luxury-boom" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>The Hinjewadi Spillover Effect</Link></li>
                </ul>
            </div>
            <div className="col-lg-3">
                <h5 className="text-white mb-3">Compare</h5>
                <ul className="list-unstyled" style={{ lineHeight: '2' }}>
                    <li><Link href="/compare/pristine-lords-baner" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>vs. Pristine The Lords</Link></li>
                    <li><Link href="/compare/kohinoor-livience-baner" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>vs. Kohinoor Livience</Link></li>
                    <li><Link href="/it-professionals-luxury-homes-pune" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>IT Professionals Guide</Link></li>
                    <li><Link href="/pune-west-real-estate-market" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Pune West Market</Link></li>
                    <li><Link href="/nri-investment" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>NRI Investment</Link></li>
                </ul>
            </div>
        </nav>
        <div className="row mt-4 pt-4" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
          <div className="col-12 text-center">
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', margin: '1rem 0 0.5rem 0' }}>Popular Searches:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
              <Link href="/" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Malpani m soulstrings baner pashan link road</Link>
              <Link href="/blog/malpani-group-luxury-projects-pune" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Malpani Group Luxury Projects</Link>
              <Link href="/blog/buying-signature-residences-in-pune" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Buying Signature Residences</Link>
              <Link href="/blog/baner-property-rates-2026" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Baner Property Rates 2026</Link>
              <Link href="/4bhk-luxury" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>4 BHK Luxury Estates Pune</Link>
              <Link href="/pune-infrastructure-metro-impact" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Pune Metro Line 3 Real Estate</Link>
              <Link href="/vastu-compliant-luxury-homes-pune" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Vastu Compliant Homes West Pune</Link>
              <Link href="/compare/pristine-lords-baner" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Pristine Lords Baner Reviews</Link>
              <Link href="/compare/kohinoor-livience-baner" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kohinoor Livience Aleenta Baner</Link>
              <Link href="/aundh" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Aundh Real Estate</Link>
              <Link href="/pashan" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Pashan Luxury Flats</Link>
              <Link href="/shivajinagar" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Shivajinagar Premium Estates</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
