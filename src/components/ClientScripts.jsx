"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Preloader Logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      setTimeout(() => preloader.remove(), 800);
    }

    // Navbar scroll effect & Parallax
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let ticking = false;
    const updateScrollEffects = () => {
      if (navbar && window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else if (navbar) {
        navbar.classList.remove('scrolled');
      }
      
      // Parallax effect for hero image
      const heroBg = document.querySelector('.hero-bg img');
      if (heroBg && window.scrollY < window.innerHeight) {
        heroBg.style.transform = `scale(1.05) translateY(${window.scrollY * 0.4}px)`;
      }

      // Scroll Parallax Text Logic
      const parallaxTexts = document.querySelectorAll('.parallax-text');
      parallaxTexts.forEach(text => {
        const speed = parseFloat(text.getAttribute('data-speed')) || 0.1;
        const section = text.parentElement;
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY > (sectionTop - window.innerHeight) && window.scrollY < (sectionTop + section.offsetHeight)) {
            const scrolled = window.scrollY - (sectionTop - window.innerHeight);
            text.style.transform = `translateX(${scrolled * speed}px)`;
          }
        }
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .split-text, .scarcity-badge');
    animatedElements.forEach(el => observer.observe(el));

    // Smart Form Submission Logic
    const smartForm = document.getElementById('smart-contact-form');
    const formSuccess = document.getElementById('form-success-msg');
    
    const onSmartSubmit = async (e) => {
      e.preventDefault();
      const btn = smartForm.querySelector('button[type="submit"]');
      if(btn) btn.textContent = 'Sending securely...';
      
      const formData = new FormData(smartForm);
      const data = Object.fromEntries(formData.entries());

      const cleanedPhone = (data.phone || '').replace(/[^0-9]/g, '');
      const payload = {
        ...data,
        phone: cleanedPhone,
        source: 'Homepage Contact Section',
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        _subject: `New VIP Lead: ${data.name} (${cleanedPhone}) - Malpani M SoulStrings`,
        _template: 'table',
        _captcha: 'false'
      };

      let isSent = false;
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        if (res.ok) isSent = true;
      } catch (err) {
        console.warn("Primary API route error, falling back:", err);
      }

      if (!isSent) {
        try {
          await fetch('https://formsubmit.co/ajax/propsmartrealty@gmail.com', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
          });
        } catch (fbErr) {
          console.warn("Direct fallback dispatched:", fbErr);
        }
      }

      if(btn) btn.style.display = 'none';
      if(formSuccess) formSuccess.style.display = 'block';
      
      // Push event to Google Tag Manager / Analytics dataLayer
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'form_submission',
          formId: 'smart-contact-form',
          formName: 'Homepage Contact Form',
          leadName: data.name,
          leadPhone: cleanedPhone,
          pagePath: window.location.pathname
        });
      }
      
      smartForm.reset();
    };
    if (smartForm && formSuccess) {
      smartForm.addEventListener('submit', onSmartSubmit);
    }


    // Global Modal Trigger Fix for Next.js
    const handleModalToggle = (e) => {
      const toggleBtn = e.target.closest('[data-bs-toggle="modal"]');
      if (toggleBtn) {
        e.preventDefault();
        const targetSelector = toggleBtn.getAttribute('data-bs-target');
        if (targetSelector) {
          const modalEl = document.querySelector(targetSelector);
          if (modalEl && typeof window !== 'undefined' && window.bootstrap) {
            let modalInstance = window.bootstrap.Modal.getInstance(modalEl);
            if (!modalInstance) {
              modalInstance = new window.bootstrap.Modal(modalEl);
            }
            modalInstance.show();
            
            // Push event to Google Tag Manager / Analytics dataLayer
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'modal_open',
              modalTarget: targetSelector,
              pagePath: window.location.pathname
            });
          }
        }
      }
    };
    document.addEventListener('click', handleModalToggle);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleModalToggle);
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      smartForm?.removeEventListener('submit', onSmartSubmit);
    };
  }, [pathname]);

  return null;
}
