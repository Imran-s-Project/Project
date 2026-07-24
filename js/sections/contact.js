import { el, bilingual } from '../core/dom.js';
import { CONTENT, SITE } from '../data/content.js';
import { socialLinks, ICONS } from '../data/social.js';
import { onLangChange } from '../core/lang.js';
import { initSpotlight } from '../features/spotlight.js';
import { initScrollReveal } from '../features/reveal.js';

function buildTile(link) {
  const tile = el('a', { class: 'contact-tile reveal', href: link.url, html: ICONS[link.icon] ?? '' });
  if (!link.url.startsWith('mailto:')) {
    tile.target = '_blank';
    tile.rel = 'noopener';
  }
  tile.appendChild(
    el('div', {}, [el('div', { class: 'name', text: link.name }), el('div', { class: 'handle', text: link.handle })])
  );
  return tile;
}

export function buildContactSection() {
  const grid = el('div', { class: 'contact-grid', id: 'contact-grid' });
  const render = () => {
    grid.innerHTML = '';
    socialLinks.forEach((link) => grid.appendChild(buildTile(link)));
    initSpotlight('.contact-tile', { tilt: false });
    initScrollReveal(grid);
  };
  render();
  onLangChange(render);

  const primary = el('div', { class: 'contact-primary reveal' }, [
    el('div', {}, [el('h3', { text: SITE.email }), el('p', {}, bilingual(CONTENT.contactSection.primaryBlurb))]),
    el('a', { href: `mailto:${SITE.email}`, class: 'btn btn-primary' }, bilingual(CONTENT.contactSection.primaryCta))
  ]);

  return el('section', { id: 'contact', class: 'tight' }, [
    el('div', { class: 'container' }, [
      el('div', { class: 'section-head reveal' }, [
        el('div', { class: 'eyebrow' }, bilingual(CONTENT.contactSection.eyebrow)),
        el('h2', { class: 'font-display' }, bilingual(CONTENT.contactSection.heading))
      ]),
      primary,
      grid
    ])
  ]);
}
