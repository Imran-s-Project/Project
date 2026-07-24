/**
 * reveal.js — scroll-triggered entrance animation via IntersectionObserver.
 * Applies a staggered delay so grids of cards cascade in rather than
 * popping simultaneously.
 */

export function initScrollReveal(root = document) {
  const targets = Array.from(root.querySelectorAll('.reveal')).filter((el) => !el.dataset.revealBound);
  if (targets.length === 0) return;
  targets.forEach((el) => (el.dataset.revealBound = 'true'));

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  targets.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`;
    observer.observe(el);
  });
}
