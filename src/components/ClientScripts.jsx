"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // Preloader Logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      setTimeout(() => preloader.remove(), 800);
    }

    // Custom Cursor Logic
    const cursor = document.getElementById('custom-cursor');
    const onMouseMove = (e) => {
      if(cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    
    const interactables = document.querySelectorAll('a, button, .gallery-img, summary');
    const onMouseEnter = () => cursor?.classList.add('hovered');
    const onMouseLeave = () => cursor?.classList.remove('hovered');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const onThemeToggle = () => {
      document.body.classList.toggle('light-theme');
      if(document.body.classList.contains('light-theme')) {
        if(themeIcon) themeIcon.textContent = 'dark_mode';
      } else {
        if(themeIcon) themeIcon.textContent = 'light_mode';
      }
    };
    themeToggle?.addEventListener('click', onThemeToggle);

    // Navbar scroll effect & Parallax
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const onScroll = () => {
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
        if(section) {
            const sectionTop = section.offsetTop;
            if (window.scrollY > (sectionTop - window.innerHeight) && window.scrollY < (sectionTop + section.offsetHeight)) {
              const scrolled = window.scrollY - (sectionTop - window.innerHeight);
              text.style.transform = `translateX(${scrolled * speed}px)`;
            }
        }
      });
    };
    window.addEventListener('scroll', onScroll);

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

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
      themeToggle?.removeEventListener('click', onThemeToggle);
      observer.disconnect();
    };
  }, []);

  return null;
}
