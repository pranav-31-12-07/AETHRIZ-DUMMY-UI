/* AETHRIZ: reliable scroll-reveal animations */
(() => {
  'use strict';
  const doc = document;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initScrollAnimations() {
    const selectors = [
      '#workflow .grid > *', '#modules .grid > *', '.glass-card', '.acc-item',
      '.feature-card', '.stat-card', '.doctor-card', '.article-card',
      '.module-card', '.workflow-card', '[data-scroll-reveal]', '.anim', '.anim-stagger'
    ].join(',');
    const unique = [...new Set([...doc.querySelectorAll(selectors)].filter(el =>
      !el.closest('nav, header, footer, #loading-screen, [role="dialog"], .modal')
    ))];

    unique.forEach(el => {
      if (el.matches('.anim, .anim-stagger')) return;
      el.classList.add('aethriz-reveal');
      const siblings = [...el.parentElement.children].filter(s => s.classList.contains('aethriz-reveal'));
      el.style.setProperty('--aethriz-delay', `${Math.min(Math.max(siblings.length - 1, 0) * 85, 340)}ms`);
    });

    doc.documentElement.classList.add('aethriz-motion-ready');
    const reveal = el => {
      el.classList.add('aethriz-revealed');
      el.classList.add('vis');
    };

    if (reduceMotion || !('IntersectionObserver' in window)) {
      unique.forEach(reveal);
      return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    unique.forEach(el => observer.observe(el));
    console.info(`[AETHRIZ] Scroll animations initialized for ${unique.length} elements.`);
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', initScrollAnimations, { once: true });
  else initScrollAnimations();
})();
