import { el, bilingual } from '../core/dom.js';
import { CONTENT } from '../data/content.js';

export function buildFooter() {
  const yearSpan = el('span', { id: 'year', text: String(new Date().getFullYear()) });
  return el(
    'footer',
    {},
    el('div', { class: 'container' }, [...bilingual(CONTENT.footer), ' · © ', yearSpan])
  );
}
