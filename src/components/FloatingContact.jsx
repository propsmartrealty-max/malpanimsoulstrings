"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || '';

  const phoneNumber = "917744009295";

  let message = "Hello Malpani M SoulStrings Team, I am interested in exploring luxury 3, 4 & 5 BHK residences at Baner-Pashan Link Road. Please share the VIP brochure, floor plans & current pricing.";

  if (pathname.includes('3bhk')) {
    message = "Hello, I am interested in the 3 BHK Luxury Residences (1,450 - 1,650 sq.ft.) at Malpani M SoulStrings, Baner-Pashan Link Road. Please share the floor plans, availability and latest cost sheet.";
  } else if (pathname.includes('4bhk')) {
    message = "Hello, I am interested in the 4 BHK Presidential Luxury Estates (1,950 - 2,600 sq.ft.) at Malpani M SoulStrings, Baner-Pashan Link Road. Please share floor plans, pricing and payment schedule.";
  } else if (pathname.includes('5bhk') || pathname.includes('duplex')) {
    message = "Hello, I am interested in the exclusive 5 BHK Sky Duplexes & Sky Villas at Malpani M SoulStrings, Baner-Pashan Link Road. Please arrange a private VIP consultation.";
  } else if (pathname.includes('penthouse')) {
    message = "Hello, I am interested in the limited-edition Sky Penthouses with private terrace at Malpani M SoulStrings, Baner-Pashan Link Road. Please share details and arrange a private tour.";
  } else if (pathname.includes('nri')) {
    message = "Hello, I am an NRI investor interested in luxury residences at Malpani M SoulStrings, Pune West. Please share investment insights, rental yields, and payment plans.";
  } else if (pathname.includes('location')) {
    message = "Hello, I would like to schedule a private site visit to the Malpani M SoulStrings Experience Centre on Baner-Pashan Link Road, Pune. Please share available time slots.";
  } else if (pathname.includes('discover')) {
    const topic = pathname.replace('/discover/', '').replace(/-/g, ' ');
    message = `Hello Malpani M SoulStrings Team, I was reading about "${topic}" on your website. Could you please share detailed project information, pricing, and floor plans?`;
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const callUrl = `tel:+${phoneNumber}`;

  const handleCallClick = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'click_to_call',
        phoneNumber: phoneNumber,
        pagePath: window.location.pathname
      });
    }
  };

  const handleWhatsappClick = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'click_to_whatsapp',
        phoneNumber: phoneNumber,
        pagePath: window.location.pathname
      });
    }
  };

  return (
    <div className="floating-contact-container" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '15px' }}>
      
      {/* Expanded Menu */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <a 
          href={callUrl} 
          onClick={handleCallClick}
          className="contact-btn call-btn"
          aria-label="Call Us"
          style={{ 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            background: 'var(--color-primary)', 
            color: '#fff', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>call</span>
        </a>
        
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={handleWhatsappClick}
          className="contact-btn whatsapp-btn"
          aria-label="WhatsApp Us"
          style={{ 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            background: '#25D366', 
            color: '#fff', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
        </a>
      </div>

      {/* Main Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Options"
        style={{ 
          width: '60px', 
          height: '60px', 
          borderRadius: '50%', 
          background: 'var(--color-primary)', 
          color: 'var(--color-background)', 
          border: 'none',
          cursor: 'pointer',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          boxShadow: '0 4px 20px rgba(212, 175, 55, 0.4)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <span 
          className="material-symbols-outlined" 
          style={{ 
            fontSize: '32px',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
            transition: 'transform 0.3s'
          }}
        >
          {isOpen ? 'close' : 'chat'}
        </span>
      </button>

    </div>
  );
}
