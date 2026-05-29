'use client';
import React from 'react';

const testimonials = [
  {
    name: "Rajiv K.",
    role: "Tech Executive, Hinjewadi",
    text: "The primary reason we chose Malpani M SoulStrings was the sheer space of the 4BHK layouts. Living on the Baner Pashan Link Road gives me a zero-stress commute to my office while my family enjoys a massive, Vastu-compliant estate.",
    rating: 5,
  },
  {
    name: "Dr. Anjali S.",
    role: "Surgeon, Jupiter Hospital",
    text: "After looking across Aundh and Shivajinagar, nothing compared to the 35+ amenities here. The infinity pool and the secure gated community are precisely the urban retreat we needed. It is unequivocally the best luxury project in West Pune.",
    rating: 5,
  },
  {
    name: "Vikram & Neha M.",
    role: "NRI Investors",
    text: "The capital appreciation potential of the Baner Pashan Link Road is unmatched. We invested in a 4BHK for its generational value. The developer's legacy and the high-grade specifications (smart home, Italian marble) made it an obvious choice.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="section testimonials" style={{ background: 'var(--color-surface)', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
      <div className="container">
        <div className="section-header fade-in-up">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>verified</span>
            The Malpani Legacy
          </div>
          <h2 className="section-title gradient-text">Trusted by Pune's Elite</h2>
          <p className="section-desc">See why top executives, medical professionals, and NRI investors are securing their legacy at Malpani M SoulStrings.</p>
        </div>
        
        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card loc-card fade-in-up" style={{ padding: '2.5rem', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)', background: 'var(--color-background)' }}>
              <div style={{ color: '#ffb400', marginBottom: '1rem', fontSize: '1.2rem', letterSpacing: '2px' }}>
                {'★'.repeat(t.rating)}
              </div>
              <p style={{ color: 'var(--color-text)', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.6', fontSize: '1.05rem' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-primary)' }}>{t.name}</h4>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="google-review-badge fade-in-up" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'var(--color-background)', padding: '1rem 2rem', borderRadius: '30px', border: '1px solid rgba(212,175,55,0.2)' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>4.9/5</span>
            <div style={{ color: '#ffb400', fontSize: '1.2rem' }}>★★★★★</div>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Based on Top Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
