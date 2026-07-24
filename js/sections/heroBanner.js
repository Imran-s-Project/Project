import { el } from '../core/dom.js';

/** Same 8-point star used in the logo mark — reused here at large scale so the
 *  banner reads as a deliberate extension of the brand, not a stock graphic. */
const STAR_PATH = 'M50 5 L61 39 L97 39 L68 60 L79 95 L50 74 L21 95 L32 60 L3 39 L39 39 Z';

function starSvg() {
  return el(
    'svg',
    { viewBox: '0 0 100 100', fill: 'none', class: 'banner-star', 'aria-hidden': 'true' },
    el('path', { d: STAR_PATH, stroke: '#c9a15a', 'stroke-width': '1.2' })
  );
}

/**
 * Builds the decorative banner: two counter-rotating star outlines over a
 * slow-drifting aurora gradient, with drifting gold embers on top (mounted
 * separately by features/emberField.js once this is in the DOM).
 */
export function buildHeroBanner() {
  return el('div', { class: 'hero-banner', id: 'hero-banner', 'aria-hidden': 'true' }, [
    el('div', { class: 'banner-aurora' }),
    el('div', { class: 'banner-star-wrap' }, starSvg()),
    el('div', { class: 'banner-star-wrap reverse' }, starSvg()),
    el('div', { class: 'banner-embers', id: 'banner-embers' })
  ]);
}
