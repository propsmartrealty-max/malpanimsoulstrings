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
            <div className="menu-footer-actions">
              <a href="tel:+917744009295" className="btn btn-outline mobile-footer-btn">
                <span className="material-symbols-outlined" style={{ fontSize: '1.2rem', verticalAlign: 'middle', marginRight: '6px' }}>call</span>
                +91 7744009295
              </a>
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