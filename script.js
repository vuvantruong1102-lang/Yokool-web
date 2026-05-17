/* ============================================
   YOKOOL — Interaction layer
   - Hero carousel (auto-rotate, manual nav, dots)
   - Sticky header on scroll
   - Mobile menu toggle
   - Smooth scroll with header offset
   ============================================ */

(function () {
  'use strict';

  // ============ STICKY HEADER ============
  const header = document.getElementById('siteHeader');

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ============ MOBILE MENU ============
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ============ HERO CAROUSEL ============
  const carousel = document.getElementById('heroCarousel');

  if (carousel) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.dot');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    let currentSlide = 0;
    let autoRotateTimer = null;
    const AUTO_ROTATE_DELAY = 6000; // 6 seconds

    function goToSlide(index) {
      // Wrap around
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;

      slides.forEach((slide, i) => {
        slide.classList.toggle('is-active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === index);
      });

      currentSlide = index;
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    function startAutoRotate() {
      stopAutoRotate();
      autoRotateTimer = setInterval(nextSlide, AUTO_ROTATE_DELAY);
    }

    function stopAutoRotate() {
      if (autoRotateTimer) {
        clearInterval(autoRotateTimer);
        autoRotateTimer = null;
      }
    }

    // Button bindings
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoRotate(); // restart timer after manual interaction
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoRotate();
      });
    }

    // Dot bindings
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        goToSlide(i);
        startAutoRotate();
      });
    });

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoRotate);
    carousel.addEventListener('mouseleave', startAutoRotate);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      // Only when carousel is in viewport (rough check)
      const rect = carousel.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoRotate();
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchStartX - touchEndX;
      const SWIPE_THRESHOLD = 50;

      if (swipeDistance > SWIPE_THRESHOLD) nextSlide();
      else if (swipeDistance < -SWIPE_THRESHOLD) prevSlide();

      startAutoRotate();
    }, { passive: true });

    // Start auto rotation
    startAutoRotate();
  }

  // ============ SCROLL REVEAL ============
  const revealTargets = document.querySelectorAll(
    '.section-header, .product-card, .feature-card, .why-card, .showcase-content, .showcase-visual, .contact-channel, .related-card, .specs-row'
  );

  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          // Stagger cards a bit
          const delay = (target.classList.contains('product-card') ||
                         target.classList.contains('why-card') ||
                         target.classList.contains('feature-card') ||
                         target.classList.contains('related-card'))
            ? Array.from(target.parentElement.children).indexOf(target) * 80
            : 0;
          setTimeout(() => target.classList.add('is-visible'), delay);
          observer.unobserve(target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  // ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href.length < 2) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  });

  // ============ CONSOLE EASTER EGG ============
  if (typeof console !== 'undefined' && console.log) {
    console.log('%c YOKOOL ', 'background:#DC143B;color:#fff;font-weight:bold;font-size:14px;padding:4px 8px;');
    console.log('%c Năng lượng. Không giới hạn. ', 'color:#888;font-style:italic;');
    console.log('Build: v2.0 — light theme · Cloudflare Pages');
  }
})();
