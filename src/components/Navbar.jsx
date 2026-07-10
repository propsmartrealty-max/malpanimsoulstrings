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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <nav className="navbar" aria-label="Main Navigation">
        <div className="nav-container">
          <Link href="/" className="brand" title="Malpani M SoulStrings" aria-label="Malpani M SoulStrings Luxury Real Estate">
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
            <button onClick={toggleMenu} className="hamburger-btn" aria-label="Open Mobile Menu">
              <span className="material-symbols-outlined hamburger-icon">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay Fullscreen Menu */}
      <div 
        className={`overlay-menu ${isMenuOpen ? 'active' : ''}`}
        style={isMenuOpen ? { transform: 'translateY(0)', opacity: 1, visibility: 'visible' } : { transform: 'translateY(-100%)', opacity: 0, visibility: 'hidden' }}
      >
        <button onClick={toggleMenu} aria-label="Close Mobile Menu" style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontSize: '3rem', transition: 'var(--transition-smooth)' }}>&times;</button>
        <nav className="overlay-content" aria-label="Mobile Navigation">
          <Link href="/" className="overlay-link" onClick={toggleMenu}>Home / Legacy</Link>
          <Link href="/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-link" onClick={toggleMenu}>3 BHK Luxury Apartments</Link>
          <Link href="/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-link" onClick={toggleMenu}>4 BHK Luxury Residences</Link>
          <Link href="/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-link" onClick={toggleMenu}>5 BHK & Duplex Homes</Link>
          <Link href="/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-link" onClick={toggleMenu}>Sky Penthouses</Link>
          <Link href="/amenities-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-link" onClick={toggleMenu}>Amenities & Lifestyle</Link>
          <Link href="/location-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-link" onClick={toggleMenu}>Location (Baner Pashan Link Road)</Link>
          <Link href="/infrastructure-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-link" onClick={toggleMenu}>Infrastructure Updates</Link>
          <Link href="/baner-overview-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-link" onClick={toggleMenu}>Baner Real Estate Guide</Link>
          <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-link" onClick={toggleMenu}>Insights & Articles</Link>
          <Link href="/market-analysis-malpani-m-soulstrings-baner-pashan-link-road" className="overlay-link" onClick={toggleMenu} style={{ color: 'var(--color-accent)' }}>Pune Market Investor's Guide 2026</Link>
        </nav>
      </div>
    </>
  );
}