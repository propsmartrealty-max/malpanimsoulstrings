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

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        setSuccess(true);
        
        // Push event to Google Tag Manager / Analytics dataLayer
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'form_submission',
            formId: 'enquire-modal-form',
            formName: 'Exclusive Enquiry Modal',
            pagePath: window.location.pathname
          });
        }

        e.target.reset();
        setTimeout(() => {
          // close modal gracefully
          const modal = document.getElementById('enquireModal');
          if (typeof window !== 'undefined' && window.bootstrap) {
            const modalInstance = window.bootstrap.Modal.getInstance(modal);
            if(modalInstance) modalInstance.hide();
          }
          setSuccess(false);
        }, 3000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className="modal fade" id="enquireModal" tabIndex="-1" aria-labelledby="enquireModalLabel" aria-hidden="true" style={{ display: 'none' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ background: '#0a0a0c', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)' }}>
          <div className="modal-header" style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.1)', padding: '2rem 2rem 1rem' }}>
            <h5 className="modal-title" id="enquireModalLabel" style={{ color: '#d4af37', fontWeight: '600', fontSize: '1.5rem', letterSpacing: '1px' }}>Exclusive Enquiry</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" style={{ filter: 'invert(1) grayscale(100%) brightness(200%)' }}></button>
          </div>
          <div className="modal-body" style={{ padding: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>Register Your Interest</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Fill in your details below and our luxury consultant will connect with you.</p>
            </div>
            
            {success ? (
              <div className="alert alert-success fade-in-up" style={{ background: 'rgba(40, 167, 69, 0.1)', color: '#28a745', border: '1px solid rgba(40, 167, 69, 0.3)', textAlign: 'center', padding: '1.5rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✓</div>
                <strong>Success!</strong><br />Your enquiry has been received securely.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form fade-in-up">
                <div className="form-group floating-label-group mb-4">
                  <input type="text" name="name" id="modal-name" required className="floating-input" placeholder=" " />
                  <label htmlFor="modal-name" className="floating-label">Full Name</label>
                </div>
                <div className="form-group floating-label-group mb-4">
                  <input type="email" name="email" id="modal-email" required className="floating-input" placeholder=" " />
                  <label htmlFor="modal-email" className="floating-label">Email Address</label>
                </div>
                <div className="form-group floating-label-group mb-5">
                  <input type="tel" name="phone" id="modal-phone" pattern="[0-9]{10}" required className="floating-input" placeholder=" " />
                  <label htmlFor="modal-phone" className="floating-label">Phone Number (10 digits)</label>
                </div>
                {error && <div className="text-danger mb-3 text-center" style={{ fontSize: '0.9rem' }}>Error submitting form. Please try again or refresh the page.</div>}
                <button type="submit" className="btn btn-primary w-100" style={{ padding: '1.2rem', fontWeight: 'bold', letterSpacing: '1px', borderRadius: '8px' }} disabled={loading}>
                  {loading ? 'Submitting securely...' : 'Submit Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
