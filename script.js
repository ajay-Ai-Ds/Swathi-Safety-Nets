/* ============================================
   SWATHI SAFETY NETS - Premium JavaScript
   Animations, Interactions & Mobile-First UX
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  
  // ==================== MOBILE MENU ====================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileContactItems = document.querySelectorAll('.mobile-contact-item');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isActive = mobileMenu.classList.contains('active');
      mobileMenuBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', !isActive);
      document.body.style.overflow = isActive ? '' : 'hidden';
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu when contact items are clicked
    mobileContactItems.forEach(item => {
      item.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ==================== HEADER SCROLL EFFECT ====================
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (header) {
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // ==================== SMOOTH SCROLLING ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 10;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==================== SCROLL REVEAL ANIMATIONS ====================
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ==================== COUNTER ANIMATION ====================
  const animateCounterElements = (elements, suffix = '') => {
    elements.forEach(element => {
      const target = parseInt(element.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < target) {
          element.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target.toLocaleString() + suffix;
        }
      };

      updateCounter();
    });
  };

  // Animate regular counters
  const counters = document.querySelectorAll('.counter');
  let countersAnimated = false;

  const animateCounters = () => {
    if (countersAnimated) return;
    animateCounterElements(counters);
    countersAnimated = true;
  };

  // Animate hero stat numbers after a short delay
  const heroStatNumbers = document.querySelectorAll('.hero-stat .stat-number');
  setTimeout(() => {
    animateCounterElements(heroStatNumbers, '+');
  }, 500);

  // Observer for stat counters
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsBar);
  }

  // ==================== FAQ ACCORDION ====================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
      question.setAttribute('aria-expanded', !isActive);
    });
  });

  // ==================== GALLERY LIGHTBOX ====================
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      if (lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // ==================== SCROLL TO TOP ====================
  const scrollTopBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
      if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==================== ACTIVE NAV LINK HIGHLIGHTING ====================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  window.addEventListener('scroll', () => {
    let current = '';
    const headerHeight = header ? header.offsetHeight : 0;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight - 100;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // ==================== LAZY LOADING IMAGES ====================
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px 0px'
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // ==================== PERFORMANCE: PASSIVE EVENT LISTENERS ====================
  // Touch-friendly: prevent 300ms delay on mobile
  document.addEventListener('touchstart', function() {}, { passive: true });

  // ==================== FORM MODAL ====================
  const formOpenBtn = document.getElementById('form-open-btn');
  const formCloseBtn = document.getElementById('form-close-btn');
  const contactFormModal = document.getElementById('contact-form-modal');
  const formModalOverlay = document.getElementById('form-modal-overlay');
  const inspectionForm = document.getElementById('inspection-form');

  if (formOpenBtn && contactFormModal) {
    formOpenBtn.addEventListener('click', () => {
      contactFormModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  }

  if (formCloseBtn && contactFormModal) {
    formCloseBtn.addEventListener('click', () => {
      contactFormModal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  if (formModalOverlay && contactFormModal) {
    formModalOverlay.addEventListener('click', () => {
      contactFormModal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactFormModal && contactFormModal.style.display !== 'none') {
      contactFormModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

  // ==================== FORM SUBMISSION ====================
  if (inspectionForm) {
    inspectionForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(inspectionForm);
      const message = `New Site Inspection Request:\n\nName: ${formData.get('name')}\nPhone: ${formData.get('phone')}\nEmail: ${formData.get('email') || 'N/A'}\nArea: ${formData.get('area')}\nService: ${formData.get('service')}\nMessage: ${formData.get('message') || 'N/A'}`;
      
      // Send WhatsApp message with form data
      const whatsappUrl = `https://wa.me/919000182240?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      inspectionForm.reset();
      contactFormModal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  // ==================== HERO IMAGE CAROUSEL ====================
  const heroCarousel = document.querySelector('.hero-carousel');

  if (heroCarousel) {
    const track = heroCarousel.querySelector('.hero-carousel-track');
    const slides = Array.from(heroCarousel.querySelectorAll('.hero-carousel-slide'));
    const dotsContainer = heroCarousel.querySelector('.hero-carousel-dots');
    let currentSlide = 0;
    let autoSlideTimer = null;
    let touchStartX = 0;
    let isDragging = false;

    const updateDots = () => {
      Array.from(dotsContainer.children).forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    };

    const getOffset = (index) => -index * heroCarousel.clientWidth;

    const goToSlide = (index) => {
      currentSlide = (index + slides.length) % slides.length;
      track.style.transition = 'transform 0.6s ease';
      track.style.transform = `translateX(${getOffset(currentSlide)}px)`;
      updateDots();
    };

    const nextSlide = () => goToSlide(currentSlide + 1);

    const startAutoSlide = () => {
      if (autoSlideTimer) clearInterval(autoSlideTimer);
      autoSlideTimer = setInterval(nextSlide, 3000);
    };

    const resetAutoSlide = () => {
      startAutoSlide();
    };

    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'hero-carousel-dot';
      dot.setAttribute('aria-label', `Show slide ${index + 1}`);
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoSlide();
      });
      dotsContainer.appendChild(dot);
    });

    heroCarousel.addEventListener('touchstart', (event) => {
      if (event.touches.length !== 1) return;
      touchStartX = event.touches[0].clientX;
      isDragging = true;
      track.style.transition = 'none';
    }, { passive: true });

    heroCarousel.addEventListener('touchmove', (event) => {
      if (!isDragging) return;
      const touchX = event.touches[0].clientX;
      const delta = touchX - touchStartX;
      track.style.transform = `translateX(${getOffset(currentSlide) + delta}px)`;
    }, { passive: true });

    heroCarousel.addEventListener('touchend', (event) => {
      if (!isDragging) return;
      isDragging = false;
      const touchEndX = event.changedTouches[0].clientX;
      const delta = touchEndX - touchStartX;
      if (Math.abs(delta) > 50) {
        if (delta < 0) {
          nextSlide();
        } else {
          goToSlide(currentSlide - 1);
        }
      } else {
        goToSlide(currentSlide);
      }
      resetAutoSlide();
    });

    window.addEventListener('resize', () => goToSlide(currentSlide));
    startAutoSlide();
  }

  // ==================== CONSOLE BRANDING ====================
  console.log(
    '%c🛡️ Swathi Safety Nets %c Bangalore\'s Trusted Safety Net Experts ',
    'background: #1B5E20; color: white; padding: 8px 12px; border-radius: 4px 0 0 4px; font-weight: bold; font-size: 14px;',
    'background: #E8F5E9; color: #1B5E20; padding: 8px 12px; border-radius: 0 4px 4px 0; font-size: 14px;'
  );
  console.log('📞 Call: +91 9000182240 | 💬 WhatsApp: wa.me/919000182240');

});
