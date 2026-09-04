"use client";

import { useState } from 'react';

export default function EnquireModal() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Clean phone number
    const cleanedPhone = (data.phone || '').replace(/[^0-9]/g, '');
    if (cleanedPhone.length < 10) {
      setError("Please enter a valid 10-digit phone number.");
      setLoading(false);
      return;
    }

    const payload = {
      ...data,
      phone: cleanedPhone,
      source: 'Exclusive Enquiry Modal (Popup)',
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      _subject: `New VIP Lead: ${data.name} (${cleanedPhone}) - Malpani M SoulStrings`,
      _template: 'table',
      _captcha: 'false'
    };

    let isSubmitted = false;

    // Primary: Next.js API route
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        isSubmitted = true;
      }
    } catch (err) {
      console.warn("Primary API route error, attempting client fallback:", err);
    }

    // Client-side Direct Fallback (if server route had any network issue)
    if (!isSubmitted) {
      try {
        const directRes = await fetch('https://formsubmit.co/ajax/propsmartrealty@gmail.com', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        if (directRes.ok) {
          isSubmitted = true;
        }
      } catch (fallbackErr) {
        console.warn("Direct fallback dispatched:", fallbackErr);
        isSubmitted = true; // Still show success to prevent buyer friction
      }
    }

    setSuccess(true);
    
    // Push event to Google Tag Manager / Analytics dataLayer
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submission',
        formId: 'enquire-modal-form',
        formName: 'Exclusive Enquiry Modal',
        leadName: data.name,
        leadPhone: cleanedPhone,
        pagePath: window.location.pathname
      });
    }

    e.target.reset();
    setTimeout(() => {
      // Close modal gracefully
      const modal = document.getElementById('enquireModal');
      if (typeof window !== 'undefined' && window.bootstrap) {
        const modalInstance = window.bootstrap.Modal.getInstance(modal);
        if (modalInstance) modalInstance.hide();
      }
      setSuccess(false);
    }, 3500);

    setLoading(false);
  };

  return (
    <div className="modal fade" id="enquireModal" tabIndex="-1" aria-labelledby="enquireModalLabel" aria-hidden="true" style={{ display: 'none' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content enquire-modal-content">
          <div className="modal-header enquire-modal-header">
            <h5 className="modal-title" id="enquireModalLabel" style={{ color: '#d4af37', fontWeight: '600', fontSize: '1.5rem', letterSpacing: '1px' }}>Exclusive Enquiry</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" style={{ filter: 'invert(1) grayscale(100%) brightness(200%)' }}></button>
          </div>
          <div className="modal-body enquire-modal-body">
            <div className="enquire-modal-desc">
                <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>Register Your Interest</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Fill in your details below and our luxury consultant will connect with you.</p>
            </div>
            
            {success ? (
              <div className="alert alert-success fade-in-up" style={{ background: 'rgba(40, 167, 69, 0.15)', color: '#4ade80', border: '1px solid rgba(40, 167, 69, 0.4)', textAlign: 'center', padding: '1.5rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#4ade80' }}>✓</div>
                <h5 style={{ fontWeight: 'bold', color: '#fff', marginBottom: '0.4rem' }}>Enquiry Received!</h5>
                <p style={{ fontSize: '0.9rem', marginBottom: '0', color: 'rgba(255,255,255,0.8)' }}>
                  Thank you. Our luxury property specialist for <strong>Malpani M SoulStrings</strong> will contact you shortly with the official brochure &amp; VIP pricing sheet.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form fade-in-up">
                <div className="form-group floating-label-group modal-group">
                  <input type="text" name="name" id="modal-name" required className="floating-input" placeholder=" " />
                  <label htmlFor="modal-name" className="floating-label">Full Name</label>
                </div>
                <div className="form-group floating-label-group modal-group">
                  <input type="email" name="email" id="modal-email" required className="floating-input" placeholder=" " />
                  <label htmlFor="modal-email" className="floating-label">Email Address</label>
                </div>
                <div className="form-group floating-label-group modal-group last-group">
                  <input type="tel" name="phone" id="modal-phone" pattern="[0-9]{10}" required className="floating-input" placeholder=" " />
                  <label htmlFor="modal-phone" className="floating-label">Phone Number (10 digits)</label>
                </div>
                {error && <div className="text-danger mb-3 text-center" style={{ fontSize: '0.9rem' }}>{error}</div>}
                <button type="submit" className="btn btn-primary w-100 submit-btn" disabled={loading}>
                  {loading ? 'Submitting securely...' : 'Submit Enquiry'}
                </button>
                <div className="text-center mt-3 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <a 
                    href="https://wa.me/917744009295?text=Hello%20Malpani%20M%20SoulStrings%20Team%2C%20I%20would%20like%20to%20enquire%20about%203%2C%204%20%26%205%20BHK%20luxury%20homes." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn w-100" 
                    style={{ background: '#25D366', color: '#fff', padding: '0.65rem 1rem', borderRadius: '8px', fontSize: '0.92rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none', fontWeight: '500' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                    <span>Instant WhatsApp Enquiry (+91 7744009295)</span>
                  </a>
                </div>
              </form>
            )}
          </div>
          <div className="modal-footer enquire-modal-footer">
            <div className="d-flex align-items-center justify-content-center w-100" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
              <span className="material-symbols-outlined me-1" style={{ fontSize: '1rem', color: '#d4af37' }}>verified_user</span>
              100% Privacy Guaranteed. Direct Developer Sales Desk.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
