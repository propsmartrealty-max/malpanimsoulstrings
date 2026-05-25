import './style.css'

// Preloader Logic
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    setTimeout(() => preloader.remove(), 800);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Custom Cursor Logic
  const cursor = document.getElementById('custom-cursor');
  document.addEventListener('mousemove', (e) => {
    if(cursor) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    }
  });
  
  const interactables = document.querySelectorAll('a, button, .gallery-img, summary');
  interactables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor?.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor?.classList.remove('hovered'));
  });

  // Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if(document.body.classList.contains('light-theme')) {
      themeIcon.textContent = 'dark_mode';
    } else {
      themeIcon.textContent = 'light_mode';
    }
  });

  // Exit Intent Logic
  const exitModal = document.getElementById('exit-modal');
  const closeExitBtn = document.getElementById('close-exit');
  
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0 && !sessionStorage.getItem('exitModalShown')) {
      exitModal?.classList.add('active');
      sessionStorage.setItem('exitModalShown', 'true');
    }
  });
  
  closeExitBtn?.addEventListener('click', () => exitModal.classList.remove('active'));

  // Hamburger Overlay Menu Logic
  const hamburgerToggle = document.getElementById('hamburger-toggle');
  const overlayMenu = document.getElementById('overlay-menu');
  const closeOverlay = document.getElementById('close-overlay');
  const overlayLinks = document.querySelectorAll('.overlay-link');

  hamburgerToggle?.addEventListener('click', () => {
    overlayMenu?.classList.add('active');
  });

  closeOverlay?.addEventListener('click', () => {
    overlayMenu?.classList.remove('active');
  });

  overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
      overlayMenu?.classList.remove('active');
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
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
      const sectionTop = section.offsetTop;
      if (window.scrollY > (sectionTop - window.innerHeight) && window.scrollY < (sectionTop + section.offsetHeight)) {
        const scrolled = window.scrollY - (sectionTop - window.innerHeight);
        text.style.transform = `translateX(${scrolled * speed}px)`;
      }
    });

    // Scrollspy logic for Portfolio Nav
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= (sectionTop - 250)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current) && current !== '') {
        link.classList.add('active');
      }
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Run once
        
        // Scarcity Counter Animation
        if(entry.target.classList.contains('scarcity-badge')) {
          const counterEl = document.getElementById('scarcity-counter');
          if(counterEl) {
            let count = 45;
            const target = 12;
            const interval = setInterval(() => {
              count--;
              counterEl.textContent = count;
              if(count <= target) clearInterval(interval);
            }, 60);
          }
        }
      }
    });
  }, observerOptions);

  // Select all elements to animate
  const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .split-text, .scarcity-badge');
  
  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Lightbox Logic
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const galleryImgs = document.querySelectorAll('.gallery-img');

  if (lightbox && lightboxImg && galleryImgs.length > 0) {
    galleryImgs.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
      });
    });
    
    lightboxClose.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
    
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.style.display = 'none';
    });
  }

  // Brochure Modal Logic
  const brochureModal = document.getElementById('brochure-modal');
  const openBrochureBtn = document.getElementById('open-brochure-modal');
  const brochureClose = document.getElementById('brochure-close');
  
  if (brochureModal && openBrochureBtn && brochureClose) {
    openBrochureBtn.addEventListener('click', () => {
      brochureModal.style.display = 'flex';
    });
    
    brochureClose.addEventListener('click', () => {
      brochureModal.style.display = 'none';
    });
    
    brochureModal.addEventListener('click', (e) => {
      if (e.target === brochureModal) brochureModal.style.display = 'none';
    });
  }

  // Smart Form Submission Logic
  const smartForm = document.getElementById('smart-contact-form');
  const formSuccess = document.getElementById('form-success-msg');
  
  if (smartForm && formSuccess) {
    smartForm.addEventListener('submit', (e) => {
      e.preventDefault();
      smartForm.querySelector('button[type="submit"]').textContent = 'Sending...';
      setTimeout(() => {
        smartForm.querySelector('button[type="submit"]').style.display = 'none';
        formSuccess.style.display = 'block';
        smartForm.reset();
      }, 1200);
    });
  }

  // Brochure Form Submission Logic
  const brochureForm = document.getElementById('brochure-form');
  const brochureSuccess = document.getElementById('brochure-success-msg');
  
  if (brochureForm && brochureSuccess) {
    brochureForm.addEventListener('submit', (e) => {
      e.preventDefault();
      brochureForm.querySelector('button[type="submit"]').textContent = 'Verifying...';
      setTimeout(() => {
        brochureForm.querySelector('button[type="submit"]').style.display = 'none';
        brochureSuccess.style.display = 'block';
        // Automatically close modal after success
        setTimeout(() => {
          brochureModal.style.display = 'none';
          brochureForm.reset();
          brochureForm.querySelector('button[type="submit"]').style.display = 'block';
          brochureForm.querySelector('button[type="submit"]').textContent = 'Unlock Brochure';
          brochureSuccess.style.display = 'none';
        }, 2000);
      }, 1500);
    });
  }
});
