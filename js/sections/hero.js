import { el, bilingual } from '../core/dom.js';
import { CONTENT } from '../data/content.js';
import { getLang, onLangChange } from '../core/lang.js';
import { typewrite } from '../features/typewriter.js';

export function buildHero() {
  const heading = el('h1', { class: 'font-display' }, bilingual(CONTENT.hero.name, 'span', 'block'));

  const section = el('section', { class: 'hero' }, [
    el('div', { class: 'container' }, [
      el('div', { class: 'eyebrow' }, bilingual(CONTENT.hero.eyebrow)),
      heading,
      el('p', { class: 'tagline' }, bilingual(CONTENT.hero.tagline)),
      el('div', { class: 'hero-cta' }, [
        el('a', { href: '#projects', class: 'btn btn-primary' }, bilingual(CONTENT.hero.ctaPrimary)),
        el('a', { href: '#contact', class: 'btn btn-ghost' }, bilingual(CONTENT.hero.ctaGhost))
      ])
    ]),
    el('div', { class: 'hero-scroll-hint' }, [el('div', { class: 'line' }), ...bilingual(CONTENT.hero.scrollHint)])
  ]);

  // One-time typewriter intro on the active-language name, replayed if the
  // language is switched before the animation has ever completed once.
  let hasPlayed = false;
  const playIntro = () => {
    const active = heading.querySelector(getLang() === 'bn' ? '.i18n-bn' : '.i18n-en');
    if (!active) return;
    typewrite(active, active.textContent, {
      onDone: () => {
        hasPlayed = true;
      }
    });
  };
  requestAnimationFrame(playIntro);
  onLangChange(() => {
    if (!hasPlayed) playIntro();
  });

  return section;
}
