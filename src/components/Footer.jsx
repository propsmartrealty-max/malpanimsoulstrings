import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" style={{ background: '#0a0a0c', padding: '4rem 0 2rem 0', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
      <div className="container">
        <div className="row mb-5">
            <div className="col-lg-4 mb-4 mb-lg-0">
                <h4 style={{ color: '#d4af37', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '1.5rem' }}>MALPANI <span style={{ color:'#fff' }}>ESTATES</span></h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.8' }}>Redefining absolute luxury and architectural perfection on the Baner Pashan Link Road.</p>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
                <h5 className="text-white mb-3">Project Hubs</h5>
                <ul className="list-unstyled" style={{ lineHeight: '2' }}>
                    <li><Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>M SoulStrings Overview</Link></li>
                    <li><Link href="/4bhk-luxury" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>4 BHK Luxury</Link></li>
                    <li><Link href="/amenities" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>World Class Amenities</Link></li>
                    <li><Link href="/infrastructure" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Infrastructure & Connectivity</Link></li>
                    <li><Link href="/location" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Pan Card Club Rd Location</Link></li>
                </ul>
            </div>
            <div className="col-lg-4">
                <h5 className="text-white mb-3">Insights</h5>
                <ul className="list-unstyled" style={{ lineHeight: '2' }}>
                    <li><Link href="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Real Estate Blog</Link></li>
                    <li><Link href="/market-analysis" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Market Analysis</Link></li>
                    <li><Link href="/pune-real-estate-market" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Pune Real Estate Market</Link></li>
                    <li><Link href="/pune-west-real-estate-market" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Pune West Real Estate Market</Link></li>
                    <li><Link href="/baner-real-estate-market" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Baner Real Estate Market</Link></li>
                </ul>
            </div>
        </div>
        <div className="row mt-4 pt-4" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
          <div className="col-12 text-center">
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginBottom: '0.5rem' }}>Popular Searches:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
              <Link href="/" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Malpani m soulstrings baner pashan link road</Link>
              <Link href="/blog/malpani-group-luxury-projects-pune" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Malpani Group Luxury Projects</Link>
              <Link href="/blog/best-luxury-apartments-in-baner-pune" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Best Luxury Apartments Baner</Link>
              <Link href="/blog/malpani-m-soulstrings-baner-pashan-link-road" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>M SoulStrings Pune</Link>
              <Link href="/4bhk-luxury" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>4 BHK Luxury Estates Pune</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
