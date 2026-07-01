/* ============================================
   SWATHI SAFETY NETS - Premium JavaScript
   Blue Theme - Clean & Modern
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ==================== MOBILE MENU ====================
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

  function openMobileMenu() {
    mobileNav.classList.add('open');
    mobileOverlay.classList.add('visible');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileNav.classList.remove('open');
    mobileOverlay.classList.remove('visible');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openMobileMenu);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ==================== HEADER SCROLL EFFECT ====================
  const mainHeader = document.getElementById('main-header');
  const topbar = document.getElementById('topbar');
  const scrollProgress = document.getElementById('scroll-progress');

  let lastScroll = 0;
  let topbarHidden = false;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (currentScroll / docHeight) * 100;

    // Scroll progress bar
    if (scrollProgress) {
      scrollProgress.style.width = scrollPercent + '%';
    }

    // Header solid on scroll
    if (mainHeader) {
      if (currentScroll > 60) {
        mainHeader.classList.add('scrolled');
        if (topbar && !topbarHidden) {
          topbar.style.transform = 'translateY(-100%)';
          topbar.style.transition = 'transform 0.3s ease';
          topbarHidden = true;
        }
      } else {
        mainHeader.classList.remove('scrolled');
        if (topbar && topbarHidden) {
          topbar.style.transform = 'translateY(0)';
          topbarHidden = false;
        }
      }
    }

    lastScroll = currentScroll;
  }, { passive: true });

  // ==================== HERO BACKGROUND SLIDER ====================
  const heroSlides = document.querySelectorAll('.hero-slide');
  let heroIndex = 0;
  const heroInterval = 5000;

  function nextHeroSlide() {
    if (heroSlides.length === 0) return;
    heroSlides[heroIndex].classList.remove('active');
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add('active');
  }

  if (heroSlides.length > 1) {
    setInterval(nextHeroSlide, heroInterval);
  }

  // ==================== HERO IMAGE CARD SLIDER ====================
  const imageSlides = document.querySelectorAll('.hero-image-slide');
  const sliderDots = document.querySelectorAll('.slider-dot');
  const sliderProgressBar = document.getElementById('slider-progress');
  let slideIndex = 0;
  const slideDuration = 4000;
  let slideTimer;
  let progressStart;

  function goToSlide(index) {
    imageSlides.forEach(s => s.classList.remove('active'));
    sliderDots.forEach(d => d.classList.remove('active'));
    slideIndex = index;
    imageSlides[slideIndex].classList.add('active');
    sliderDots[slideIndex].classList.add('active');
    startProgress();
  }

  function nextSlide() {
    goToSlide((slideIndex + 1) % imageSlides.length);
  }

  function startProgress() {
    if (sliderProgressBar) {
      sliderProgressBar.style.transition = 'none';
      sliderProgressBar.style.width = '0%';
      // Force reflow
      sliderProgressBar.offsetWidth;
      sliderProgressBar.style.transition = `width ${slideDuration}ms linear`;
      sliderProgressBar.style.width = '100%';
    }
    clearTimeout(slideTimer);
    slideTimer = setTimeout(nextSlide, slideDuration);
  }

  // Dot click
  sliderDots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.slide));
    });
  });

  // Start slider
  if (imageSlides.length > 1) {
    startProgress();
  }

  // ==================== SMOOTH SCROLLING ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = mainHeader ? mainHeader.offsetHeight : 0;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 10;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==================== SCROLL REVEAL ====================
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
  const counters = document.querySelectorAll('.counter');
  let countersAnimated = false;

  function animateCounters(force = false) {
    if (!counters.length) return;
    if (countersAnimated && !force) return;
    countersAnimated = true;

    counters.forEach(counter => {
      const rawTarget = counter.getAttribute('data-target');
      const target = parseInt(rawTarget, 10);
      if (Number.isNaN(target)) return;

      const duration = 1800;
      const startTime = performance.now();
      counter.textContent = '0';

      const updateCounter = (timestamp) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(target * eased);
        counter.textContent = value.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };

      requestAnimationFrame(updateCounter);
    });
  }

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar && 'IntersectionObserver' in window) {
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

  window.setTimeout(() => {
    if (!countersAnimated) {
      animateCounters(true);
    }
  }, 400);

  window.addEventListener('load', () => {
    if (!countersAnimated) {
      animateCounters(true);
    }
  });

  // ==================== FAQ ACCORDION ====================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const q = otherItem.querySelector('.faq-question');
          if (q) q.setAttribute('aria-expanded', 'false');
        }
      });

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

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeMobileMenu();
    }
  });

  // ==================== SCROLL TO TOP ====================
  const scrollTopBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('visible', window.pageYOffset > 500);
    }
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==================== ACTIVE NAV LINK ====================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-list a');

  window.addEventListener('scroll', () => {
    let current = '';
    const headerHeight = mainHeader ? mainHeader.offsetHeight : 0;

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

  // ==================== PERFORMANCE ====================
  document.addEventListener('touchstart', function() {}, { passive: true });

  // ==================== HERO TOP CAROUSEL ====================
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselSlides = Array.from(document.querySelectorAll('.carousel-slide'));
  const nextButton = document.querySelector('.carousel-btn-right');
  const prevButton = document.querySelector('.carousel-btn-left');
  const indicators = Array.from(document.querySelectorAll('.carousel-indicator'));

  let carouselIndex = 0;
  const carouselInterval = 3000; // Slide every 3 seconds!
  let carouselTimer;

  function updateCarousel(targetIndex) {
    if (carouselSlides.length === 0 || !carouselTrack) return;
    
    // Set new index
    carouselIndex = (targetIndex + carouselSlides.length) % carouselSlides.length;
    
    const offset = -carouselIndex * 100;
    carouselTrack.style.transform = `translateX(${offset}%)`;

    // Update dots
    carouselSlides.forEach((slide, index) => {
      slide.classList.toggle('current-slide', index === carouselIndex);
    });
    indicators.forEach((dot, index) => {
      dot.classList.toggle('current-slide', index === carouselIndex);
    });
  }

  function nextCarouselSlide() {
    updateCarousel(carouselIndex + 1);
  }

  function startCarouselTimer() {
    clearInterval(carouselTimer);
    carouselTimer = setInterval(nextCarouselSlide, carouselInterval);
  }

  if (carouselSlides.length > 1) {
    // Next Button click
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        updateCarousel(carouselIndex + 1);
        startCarouselTimer(); // Reset timer on click
      });
    }

    // Prev Button click
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        updateCarousel(carouselIndex - 1);
        startCarouselTimer(); // Reset timer on click
      });
    }

    // Dot navigation click
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        updateCarousel(index);
        startCarouselTimer(); // Reset timer on click
      });
    });

    // Start auto slide
    startCarouselTimer();
  }

  // ==================== PREMIUM SERVICES CAROUSEL ====================
  const serviceCarouselShell = document.querySelector('.services-carousel-shell');

  if (serviceCarouselShell) {
    const slides = Array.from(serviceCarouselShell.querySelectorAll('.services-slide'));
    const prevBtn = serviceCarouselShell.querySelector('.services-carousel-btn-prev');
    const nextBtn = serviceCarouselShell.querySelector('.services-carousel-btn-next');
    const dots = Array.from(serviceCarouselShell.querySelectorAll('.services-carousel-dot'));

    let serviceIndex = 0;
    let serviceAutoplayTimer;
    let isCarouselPaused = false;
    let touchStartX = 0;

    function setServiceSlide(index, resetTimer = true) {
      if (slides.length === 0) return;

      serviceIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, slideIdx) => {
        slide.classList.toggle('active', slideIdx === serviceIndex);
        slide.setAttribute('aria-hidden', slideIdx === serviceIndex ? 'false' : 'true');
      });

      dots.forEach((dot, dotIdx) => {
        dot.classList.toggle('active', dotIdx === serviceIndex);
        dot.setAttribute('aria-current', dotIdx === serviceIndex ? 'true' : 'false');
      });

      if (resetTimer) {
        restartServiceAutoplay();
      }
    }

    function showNextService() {
      setServiceSlide(serviceIndex + 1, true);
    }

    function showPrevService() {
      setServiceSlide(serviceIndex - 1, true);
    }

    function startServiceAutoplay() {
      clearInterval(serviceAutoplayTimer);
      if (slides.length < 2 || isCarouselPaused) return;
      serviceAutoplayTimer = setInterval(showNextService, 3000);
    }

    function restartServiceAutoplay() {
      startServiceAutoplay();
    }

    serviceCarouselShell.addEventListener('mouseenter', () => {
      isCarouselPaused = true;
      clearInterval(serviceAutoplayTimer);
    });

    serviceCarouselShell.addEventListener('mouseleave', () => {
      isCarouselPaused = false;
      startServiceAutoplay();
    });

    prevBtn?.addEventListener('click', () => {
      showPrevService();
    });

    nextBtn?.addEventListener('click', () => {
      showNextService();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        setServiceSlide(index, true);
      });
    });

    serviceCarouselShell.addEventListener('touchstart', (event) => {
      touchStartX = event.touches[0].clientX;
    }, { passive: true });

    serviceCarouselShell.addEventListener('touchend', (event) => {
      const touchEndX = event.changedTouches[0].clientX;
      const delta = touchEndX - touchStartX;

      if (delta > 50) {
        showPrevService();
      } else if (delta < -50) {
        showNextService();
      }
    }, { passive: true });

    setServiceSlide(0, false);
    startServiceAutoplay();
  }

  // ==================== CONSOLE ====================
  console.log(
    '%c🛡️ Swathi Safety Nets %c Bangalore\'s Trusted Safety Net Experts ',
    'background: #1e3a8a; color: white; padding: 8px 12px; border-radius: 4px 0 0 4px; font-weight: bold; font-size: 14px;',
    'background: #dbeafe; color: #1e3a8a; padding: 8px 12px; border-radius: 0 4px 4px 0; font-size: 14px;'
  );

});
