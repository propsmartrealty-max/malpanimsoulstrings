import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="brand">
            <Image src="https://www.malpaniestates.com/assets/images/apple-touch-icon.png" alt="Malpani M SoulStrings" width={40} height={40} className="brand-logo" />
            <span className="brand-text">
              <span className="brand-title">MALPANI</span>
              <b className="brand-subtitle">M SoulStrings</b>
            </span>
          </Link>
          <div className="nav-actions">
            <button id="theme-toggle" className="theme-btn" aria-label="Toggle Dark Mode">
              <span className="material-symbols-outlined" id="theme-icon">light_mode</span>
            </button>
            <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary header-enquire">Enquire Now</a>
            <button id="hamburger-toggle" className="hamburger-btn" aria-label="Open Mobile Menu">
              <span className="material-symbols-outlined hamburger-icon">menu</span>
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