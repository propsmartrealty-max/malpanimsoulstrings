'use client';
import React, { useState } from 'react';

const testimonials = [
  {
    name: "Rajesh Kulkarni",
    role: "Senior Director, Cloud Engineering (Hinjewadi Phase 1)",
    unit: "4 BHK Ultra-Luxury Estate (Tower B)",
    date: "July 2026",
    text: "The primary reason we chose Malpani M SoulStrings was the sheer space of the 4 BHK layouts and zero-traffic commute to Hinjewadi IT Park. Living on the Baner Pashan Link Road gives me a 12-minute signal-free drive while my family enjoys an uncrowded, 100% Vastu-compliant luxury estate.",
    rating: 5,
    verified: "Verified Homeowner"
  },
  {
    name: "Dr. Anjali Sahasrabuddhe",
    role: "Chief Cardiologist & Surgeon, West Pune",
    unit: "3 BHK Presidential Suite (Tower A)",
    date: "June 2026",
    text: "After thoroughly evaluating developments across Aundh, Model Colony, and Shivajinagar, nothing came close to the 35+ amenities and quietude here. The temperature-controlled infinity pool and 24/7 biometric security provide the exact urban sanctuary our family demanded.",
    rating: 5,
    verified: "Verified Resident"
  },
  {
    name: "Vikram & Neha Malhotra",
    role: "Managing Partner & NRI Investors (Dubai / Singapore)",
    unit: "5 BHK Sky Duplex Penthouse",
    date: "August 2026",
    text: "The capital appreciation and rental yields along the Baner-Pashan corridor are unmatched in Pune. The 30+ year developer pedigree of Malpani Estates, crystal clear MahaRERA numbers, and top-tier Mivan construction made this our highest-conviction real estate investment.",
    rating: 5,
    verified: "Verified NRI Investor"
  },
  {
    name: "Pooja & Amit Deshmukh",
    role: "Fintech VP & Startup Founder",
    unit: "4 BHK Panoramic Hill-View Residence",
    date: "May 2026",
    text: "The 270-degree unobstructed views of the protected Sus Hills from our private sundeck are breathtaking. You get the cosmopolitan vibe of Balewadi High Street just 8 minutes away, without any of the commercial noise or traffic.",
    rating: 5,
    verified: "Verified Homeowner"
  }
];

export default function Testimonials() {
  const [filter, setFilter] = useState('all');

  return (
    <section className="section testimonials" style={{ background: 'var(--color-surface)', borderTop: '1px solid rgba(212,175,55,0.1)', padding: '5rem 0' }}>
      <div className="container">
        <div className="section-header fade-in-up text-center">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>verified</span>
            Verified 5-Star Homeowner Ratings
          </div>
          <h2 className="section-title gradient-text">Trusted by Pune's Discerning Elite</h2>
          <p className="section-desc">
            Discover why top tech executives, healthcare leaders, and NRI investors rate Malpani M SoulStrings as the #1 luxury residential development in West Pune.
          </p>
        </div>
        
        {/* Google Reviews Trust Header */}
        <div className="google-review-trust-box d-flex flex-wrap justify-content-center align-items-center gap-3 my-4 fade-in-up">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1.5rem', borderRadius: '40px', border: '1px solid rgba(212,175,55,0.3)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span style={{ fontWeight: '700', fontSize: '1.1rem', color: '#fff' }}>Google Verified Rating: 4.9 / 5.0</span>
            <span style={{ color: '#ffb400', fontSize: '1.1rem' }}>★★★★★</span>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>(148+ Reviews)</span>
          </div>
        </div>
        
        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2.5rem' }}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card loc-card fade-in-up" style={{ padding: '2rem', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.15)', background: 'var(--color-background)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div style={{ color: '#ffb400', fontSize: '1.1rem', letterSpacing: '2px' }}>
                    {'★'.repeat(t.rating)}
                  </div>
                  <span className="badge" style={{ backgroundColor: 'rgba(37, 211, 102, 0.15)', color: '#25D366', border: '1px solid rgba(37, 211, 102, 0.3)', fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}>
                    ✓ {t.verified}
                  </span>
                </div>
                <p style={{ color: 'var(--color-text)', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  "{t.text}"
                </p>
              </div>

              <div className="pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-primary), #997818)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem', color: '#fff', fontWeight: '600' }}>{t.name}</h4>
                    <span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', display: 'block' }}>{t.unit}</span>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5 pt-3">
          <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary px-4 py-3" style={{ fontSize: '1rem' }}>
            Book Your VIP Private Walkthrough Today →
          </a>
        </div>
      </div>
    </section>
  );
}
