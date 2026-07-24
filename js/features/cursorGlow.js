/**
 * cursorGlow.js — a soft light that trails the pointer across the whole
 * page (desktop / mouse only — skipped on touch devices and for users
 * who prefer reduced motion). Purely atmospheric, never intercepts clicks.
 */

export function initCursorGlow() {
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!supportsHover || prefersReducedMotion) return;

  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  glow.setAttribute('aria-hidden', 'true');
  document.body.appendChild(glow);

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let x = targetX;
  let y = targetY;
  let visible = false;

  window.addEventListener('pointermove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    if (!visible) {
      visible = true;
      glow.classList.add('is-visible');
    }
  });

  document.addEventListener('mouseleave', () => {
    visible = false;
    glow.classList.remove('is-visible');
  });

  function tick() {
    x += (targetX - x) * 0.12;
    y += (targetY - y) * 0.12;
    glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
