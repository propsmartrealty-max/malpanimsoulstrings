"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <nav className="navbar" aria-label="Main Navigation">
        <div className="nav-container">
          <Link href="/" className="brand" title="Malpani M SoulStrings" aria-label="Malpani M SoulStrings Luxury Real Estate" onClick={closeMenu}>
            <Image src="https://www.malpaniestates.com/assets/images/apple-touch-icon.png" alt="Malpani M SoulStrings logo Baner Pashan Link Road" width={40} height={40} className="brand-logo" />
            <span className="brand-text">
              <span className="brand-title">MALPANI</span>
              <b className="brand-subtitle">M SoulStrings</b>
            </span>
          </Link>
          <div className="nav-actions ms-auto">
            {mounted && (
              <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle Dark Mode">
                <span className="material-symbols-outlined">{theme === 'light' ? 'dark_mode' : 'light_mode'}</span>
              </button>
            )}
            <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary header-enquire">Enquire Now</a>
            <button onClick={toggleMenu} className="hamburger-btn" aria-label={isMenuOpen ? "Close Mobile Menu" : "Open Mobile Menu"} aria-expanded={isMenuOpen}>
              <span className="material-symbols-outlined hamburger-icon">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Luxury Fullscreen Mobile Navigation Drawer */}
      <div 
        className={`overlay-menu ${isMenuOpen ? 'active' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="overlay-header">
          <Link href="/" className="brand" onClick={closeMenu}>
            <Image src="https://www.malpaniestates.com/assets/images/apple-touch-icon.png" alt="Malpani M SoulStrings logo" width={36} height={36} className="brand-logo" />
            <span className="brand-text">
              <span className="brand-title">MALPANI</span>
              <b className="brand-subtitle">M SoulStrings</b>
            </span>
          </Link>
          <button onClick={closeMenu} className="overlay-close-btn" aria-label="Close Mobile Menu">
            <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>close</span>
          </button>
        </div>

        <div className="overlay-scroll-container">
          <nav className="overlay-content" aria-label="Mobile Navigation">
            {/* Residences Group */}
            <div className="menu-group">
              <span className="menu-group-label">RESIDENTIAL CONFIGURATIONS</span>
              <div className="menu-links-grid">
                <Link href="/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road" className="mobile-nav-card" onClick={closeMenu}>
                  <div className="card-title">3 BHK Luxury</div>
                  <div className="card-desc">1,450 - 1,650 Sq.Ft. • East-West Vastu</div>
                </Link>
                <Link href="/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road" className="mobile-nav-card" onClick={closeMenu}>
                  <div className="card-title">4 BHK Ultra-Luxury</div>
                  <div className="card-desc">2,200 - 2,600 Sq.Ft. • Sprawling Living Decks</div>
                </Link>
                <Link href="/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road" className="mobile-nav-card" onClick={closeMenu}>
                  <div className="card-title">5 BHK Sky Duplex</div>
                  <div className="card-desc">3,400+ Sq.Ft. • Multi-Generational</div>
                </Link>
                <Link href="/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road" className="mobile-nav-card" onClick={closeMenu}>
                  <div className="card-title">Sky Penthouses</div>
                  <div className="card-desc">4,500+ Sq.Ft. • 270° Panoramic Hill Views</div>
                </Link>
              </div>
            </div>

            {/* Project & Lifestyle */}
            <div className="menu-group">
              <span className="menu-group-label">THE ESTATE & LOCATION</span>
              <div className="menu-simple-links">
                <Link href="/amenities-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-item" onClick={closeMenu}>
                  <span className="material-symbols-outlined menu-icon">pool</span>
                  <span>35+ Resort Amenities & Clubhouse</span>
                </Link>
                <Link href="/location-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-item" onClick={closeMenu}>
                  <span className="material-symbols-outlined menu-icon">location_on</span>
                  <span>Baner-Pashan Link Road Location</span>
                </Link>
                <Link href="/vastu-compliant-luxury-homes-pune-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-item" onClick={closeMenu}>
                  <span className="material-symbols-outlined menu-icon">explore</span>
                  <span>100% Vastu Architecture Guide</span>
                </Link>
                <Link href="/infrastructure-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-item" onClick={closeMenu}>
                  <span className="material-symbols-outlined menu-icon">domain</span>
                  <span>Infrastructure & Metro Line 3 Updates</span>
                </Link>
                <Link href="/nri-investment-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-item" onClick={closeMenu}>
                  <span className="material-symbols-outlined menu-icon">public</span>
                  <span>NRI Real Estate Investment Portal</span>
                </Link>
              </div>
            </div>

            {/* Developer Heritage & Insights */}
            <div className="menu-group">
              <span className="menu-group-label">DEVELOPER & MARKET INSIGHTS</span>
              <div className="menu-simple-links">
                <Link href="/about-malpani-estates-pune" className="overlay-item" onClick={closeMenu}>
                  <span className="material-symbols-outlined menu-icon">verified</span>
                  <span>About Malpani Estates (30+ Yrs Heritage)</span>
                </Link>
                <Link href="/press-malpani-estates-baner-pune" className="overlay-item" onClick={closeMenu}>
                  <span className="material-symbols-outlined menu-icon">newspaper</span>
                  <span>Press & Media Coverage</span>
                </Link>
                <Link href="/flat-rates-price-trends-baner-pashan-link-road-malpani-m-soulstrings" className="overlay-item" onClick={closeMenu}>
                  <span className="material-symbols-outlined menu-icon">trending_up</span>
                  <span>Price Trends & Rates 2026</span>
                </Link>
                <Link href="/malpani-m-soulstrings-reviews-ratings-baner-pune" className="overlay-item" onClick={closeMenu}>
                  <span className="material-symbols-outlined menu-icon">star</span>
                  <span>Google 5-Star Reviews & Ratings</span>
                </Link>
                <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-item" onClick={closeMenu}>
                  <span className="material-symbols-outlined menu-icon">article</span>
                  <span>Real Estate Insights & Blog Hub</span>
                </Link>
              </div>
            </div>

            {/* Mobile Contact & VIP Action Bar */}
            <div className="menu-footer-actions" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <a href="tel:+917744009295" className="btn btn-outline mobile-footer-btn" style={{ padding: '0.6rem 0.5rem', fontSize: '0.9rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '1.1rem', verticalAlign: 'middle', marginRight: '4px' }}>call</span>
                  Call Sales
                </a>
                <a 
                  href="https://wa.me/917744009295?text=Hello%20Malpani%20M%20SoulStrings%20Team%2C%20I%20am%20interested%20in%203%2C%204%20%26%205%20BHK%20luxury%20residences." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn mobile-footer-btn" 
                  style={{ background: '#25D366', color: '#fff', border: 'none', padding: '0.6rem 0.5rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onClick={closeMenu}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}>
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary mobile-footer-btn" onClick={closeMenu}>
                <span className="material-symbols-outlined" style={{ fontSize: '1.2rem', verticalAlign: 'middle', marginRight: '6px' }}>calendar_month</span>
                Schedule VIP Visit
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}