/**
 * typewriter.js — types out a piece of text character by character.
 * Used once, on first load, for the hero heading. Respects
 * prefers-reduced-motion by rendering the text instantly.
 */

export function typewrite(el, text, { speed = 46, onDone } = {}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    el.textContent = text;
    onDone?.();
    return;
  }

  el.textContent = '';
  el.classList.add('is-typing');
  let i = 0;

  function step() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i += 1;
      setTimeout(step, speed);
    } else {
      el.classList.remove('is-typing');
      onDone?.();
    }
  }
  step();
}
