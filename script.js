/* ============================================
   YOKOOL — Interaction layer
   - Sticky header on scroll
   - Mobile menu toggle
   - Scroll reveal animations
   - Order form (opens email client with prefilled content)
   ============================================ */

(function () {
  'use strict';

  // ============ STICKY HEADER ============
  const header = document.getElementById('siteHeader');
  let lastScrollY = 0;

  function onScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
    lastScrollY = scrollY;
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

    // Close menu when clicking a nav link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ============ SCROLL REVEAL ============
  // Add .reveal class to sections, animate when they enter viewport
  const revealTargets = document.querySelectorAll(
    '.section-header, .product-card, .showcase-content, .showcase-visual, .feature-card, .order-form'
  );

  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger product cards a bit
          const target = entry.target;
          const delay = target.classList.contains('product-card')
            ? Array.from(target.parentElement.children).indexOf(target) * 100
            : 0;
          setTimeout(() => target.classList.add('is-visible'), delay);
          observer.unobserve(target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px',
    });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    // Fallback: just show everything
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  // ============ ORDER FORM ============
  // Without a backend, we open the user's email client with prefilled content.
  // Sau này khi có Cloudflare Workers + Resend, thay phần này bằng fetch() lên API.

  const form = document.getElementById('orderForm');
  const formNote = document.getElementById('formNote');

  if (form && formNote) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = {
        name: form.elements.name.value.trim(),
        phone: form.elements.phone.value.trim(),
        product: form.elements.product.value,
        note: form.elements.note.value.trim(),
      };

      // Validation
      if (!data.name || !data.phone || !data.product) {
        formNote.hidden = false;
        formNote.classList.add('is-error');
        formNote.textContent = 'Vui lòng điền đầy đủ họ tên, số điện thoại và sản phẩm.';
        return;
      }

      // Build mailto link with order details
      const subject = encodeURIComponent(`[Đơn hàng] ${data.product} — ${data.name}`);
      const body = encodeURIComponent(
        `YÊU CẦU ĐẶT HÀNG\n` +
        `========================\n\n` +
        `Họ tên: ${data.name}\n` +
        `Số điện thoại: ${data.phone}\n` +
        `Sản phẩm: ${data.product}\n` +
        `Ghi chú: ${data.note || '(không có)'}\n\n` +
        `--\n` +
        `Gửi từ yokool.vn lúc ${new Date().toLocaleString('vi-VN')}`
      );

      const mailtoLink = `mailto:info@yokool.vn?subject=${subject}&body=${body}`;

      // Show success message
      formNote.hidden = false;
      formNote.classList.remove('is-error');
      formNote.textContent = 'Đang mở email của bạn... Nếu không tự mở, vui lòng gọi hotline trực tiếp.';

      // Open email client
      window.location.href = mailtoLink;

      // Optional: reset form after 2 seconds
      setTimeout(() => {
        form.reset();
        formNote.hidden = true;
      }, 5000);
    });
  }

  // ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
  // CSS already has scroll-behavior: smooth, but we add header offset
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

  // ============ HERO TICKER DUPLICATE (for seamless loop) ============
  // The ticker has duplicated content in HTML, but ensure animation runs smoothly
  // No additional JS needed — CSS handles it.

  // ============ CONSOLE EASTER EGG ============
  if (typeof console !== 'undefined' && console.log) {
    console.log('%c YOKOOL ', 'background:#FF6B00;color:#000;font-weight:bold;font-size:14px;padding:4px 8px;');
    console.log('%c Năng lượng. Không giới hạn. ', 'color:#9A9A9A;font-style:italic;');
    console.log('Build: v1.0 — Cloudflare Pages ready.');
  }
})();
