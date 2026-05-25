import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="brand" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
            <img src="https://www.malpaniestates.com/assets/images/apple-touch-icon.png" style={{ height: '40px' }} alt="Malpani M SoulStrings" />
            <span className="brand-text">MALPANI<br/><b>M SoulStrings</b></span>
          </Link>
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button id="theme-toggle" aria-label="Toggle Dark Mode" style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(212,175,55,0.3)', transition: 'var(--transition-smooth)' }}>
              <span className="material-symbols-outlined" id="theme-icon">light_mode</span>
            </button>
            <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" id="header-enquire">Enquire Now</a>
            <button id="hamburger-toggle" aria-label="Open Mobile Menu" style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '2.5rem' }}>menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay Fullscreen Menu */}
      <div id="overlay-menu" className="overlay-menu">
        <button id="close-overlay" aria-label="Close Mobile Menu" style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontSize: '3rem', transition: 'var(--transition-smooth)' }}>&times;</button>
        <div className="overlay-content">
          <Link href="/" className="overlay-link">Home / Legacy</Link>
          <Link href="/4bhk-luxury" className="overlay-link">4 BHK Luxury Residences</Link>
          <Link href="/amenities" className="overlay-link">Amenities & Lifestyle</Link>
          <Link href="/location" className="overlay-link">Location (Pan Card Club Rd)</Link>
          <Link href="/infrastructure" className="overlay-link">Infrastructure Updates</Link>
          <Link href="/baner-overview" className="overlay-link">Baner Real Estate Guide</Link>
          <Link href="/blog" className="overlay-link">Insights & Articles</Link>
          <Link href="/market-analysis" className="overlay-link" style={{ color: 'var(--color-accent)' }}>Pune Market Investor's Guide 2024</Link>
        </div>
      </div>
    </>
  );
}