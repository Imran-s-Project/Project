/**
 * emberField.js — a handful of small glowing particles that drift upward
 * through the hero banner on staggered loops. Purely atmospheric; skipped
 * entirely for reduced-motion users.
 */

export function mountEmberField(container, count = 16) {
  if (!container) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const ember = document.createElement('span');
    ember.className = 'ember';
    const size = 2 + Math.random() * 3;
    const duration = 7 + Math.random() * 9;
    ember.style.left = `${Math.random() * 100}%`;
    ember.style.width = `${size}px`;
    ember.style.height = `${size}px`;
    ember.style.animationDuration = `${duration}s`;
    ember.style.animationDelay = `-${Math.random() * duration}s`;
    frag.appendChild(ember);
  }
  container.appendChild(frag);
}
