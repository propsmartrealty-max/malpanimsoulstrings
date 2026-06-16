'use client';
import { useState, useEffect } from 'react';

export default function ExitIntentModal() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Only fire on desktop (mobile doesn't have a reliable mouseleave for exit intent)
    const handleMouseLeave = (e) => {
      // If the mouse leaves from the top of the window (towards tab bar/address bar)
      if (e.clientY <= 0 || e.clientX <= 0 || (e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
        // Check if we already showed it this session to avoid annoying the user
        const hasShown = sessionStorage.getItem('exitIntentShown');
        if (!hasShown) {
          setShowModal(true);
          sessionStorage.setItem('exitIntentShown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const closeModal = () => setShowModal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setSuccess(true);
        e.target.reset();
        setTimeout(() => {
          setShowModal(false);
          setSuccess(false);
        }, 4000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  if (!showModal) return null;

  return (
    <div 
      className="exit-intent-overlay fade-in-up" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(10px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div 
        className="exit-intent-content loc-card" 
        style={{
          background: 'var(--color-surface)',
          padding: '3rem',
          borderRadius: '20px',
          maxWidth: '500px',
          width: '90%',
          position: 'relative',
          textAlign: 'center',
          boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.25)'
        }}
      >
        <button 
          onClick={closeModal} 
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            fontSize: '2rem',
            color: 'var(--color-text-muted)',
            cursor: 'pointer'
          }}
          disabled={loading}
        >
          &times;
        </button>
        
        <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>auto_stories</span>
        <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Wait! Don't Leave Empty Handed.</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
          Get exclusive access to the <strong>Malpani M SoulStrings VIP E-Brochure</strong>, featuring high-res floor plans, exact pricing, and hidden luxury amenities.
        </p>
        
        {success ? (
          <div style={{ color: '#28a745', padding: '1.5rem', background: 'rgba(40, 167, 69, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '2rem', verticalAlign: 'middle', marginBottom: '0.5rem', display: 'block' }}>check_circle</span>
            <strong>Success!</strong><br />
            The VIP E-Brochure is being sent to your phone via WhatsApp immediately.
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              required 
              style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-primary)', background: 'var(--color-background)', color: 'var(--color-text)' }}
            />
            <input 
              type="tel" 
              name="phone"
              pattern="[0-9]{10}"
              placeholder="Phone Number (10 Digits)" 
              required 
              style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-primary)', background: 'var(--color-background)', color: 'var(--color-text)' }}
            />
            {error && <div className="text-danger" style={{ fontSize: '0.9rem' }}>Error submitting. Please try again.</div>}
            <button type="submit" className="btn btn-primary" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '0.5rem' }} disabled={loading}>
              {loading ? 'Sending securely...' : 'Download VIP Brochure'}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
