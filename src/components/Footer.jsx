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
                    <li><Link href="/market-analysis" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Pune Market Analysis</Link></li>
                    <li><Link href="/nri-investment" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>NRI Investment Guide</Link></li>
                    <li><Link href="/compare" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Baner vs Aundh</Link></li>
                    <li><Link href="/shivajinagar" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Shivajinagar Elite</Link></li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}
