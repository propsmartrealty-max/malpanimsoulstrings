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
                    <li><a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>M SoulStrings Overview</a></li>
                    <li><a href="/4bhk-luxury" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>4 BHK Luxury</a></li>
                </ul>
            </div>
            <div className="col-lg-4">
                <h5 className="text-white mb-3">Insights</h5>
                <ul className="list-unstyled" style={{ lineHeight: '2' }}>
                    <li><a href="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Real Estate Blog</a></li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}
