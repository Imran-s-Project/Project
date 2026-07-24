/**
 * spotlight.js — pointer-reactive card interaction.
 * Two effects layered on the same element:
 *  1. A soft radial "spotlight" glow that follows the cursor (CSS custom
 *     properties --spot-x / --spot-y, painted by the stylesheet).
 *  2. A subtle 3D tilt driven by how far the pointer sits from the card's
 *     center, eased back to flat on pointer leave.
 */

export function initSpotlight(selector, { tilt = true } = {}) {
  const cards = document.querySelectorAll(selector);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  cards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--spot-x', `${x}px`);
      card.style.setProperty('--spot-y', `${y}px`);

      if (tilt && !prefersReducedMotion) {
        const nx = (x / rect.width) * 2 - 1; // -1 .. 1
        const ny = (y / rect.height) * 2 - 1;
        card.style.setProperty('--tilt-x', `${(-ny * 4).toFixed(2)}deg`);
        card.style.setProperty('--tilt-y', `${(nx * 4).toFixed(2)}deg`);
      }
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });
}
