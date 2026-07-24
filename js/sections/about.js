import { el, bilingual } from '../core/dom.js';
import { CONTENT } from '../data/content.js';

export function buildAbout() {
  const paragraphs = CONTENT.about.paragraphs.map((p) => el('p', {}, bilingual(p)));

  const skillTags = el(
    'div',
    { class: 'skill-tags' },
    CONTENT.about.skills.map((skill) => el('span', { text: skill }))
  );

  const skillsPanel = el('div', { class: 'skills-panel reveal' }, [
    el('span', { class: 'label' }, bilingual(CONTENT.about.skillsLabel)),
    skillTags
  ]);

  return el('section', { id: 'about', class: 'tight' }, [
    el('div', { class: 'container' }, [
      el('div', { class: 'section-head reveal' }, [
        el('div', { class: 'eyebrow' }, bilingual(CONTENT.about.eyebrow)),
        el('h2', { class: 'font-display' }, bilingual(CONTENT.about.heading))
      ]),
      el('div', { class: 'about-grid' }, [el('div', { class: 'reveal' }, paragraphs), skillsPanel])
    ])
  ]);
}
