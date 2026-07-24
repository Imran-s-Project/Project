import { el, bilingual } from '../core/dom.js';
import { CONTENT } from '../data/content.js';
import { projects } from '../data/projects.js';
import { getLang, onLangChange, t } from '../core/lang.js';
import { openProjectModal } from './modal.js';
import { initSpotlight } from '../features/spotlight.js';
import { initScrollReveal } from '../features/reveal.js';

function buildCard(project) {
  const lang = getLang();
  const name = lang === 'bn' ? project.nameBn : project.nameEn;
  const desc = lang === 'bn' ? project.descBn : project.descEn;
  const label = project.status === 'live' ? t(CONTENT.projectsSection.viewLabel) : t(CONTENT.projectsSection.soonLabel);
  const arrow = project.status === 'live' ? ' ↗' : '';

  const card = el(
    'article',
    { class: 'project-card reveal', role: 'button', tabindex: '0', data: { projectId: project.id } },
    [
      el('span', { class: 'project-index', text: project.index }),
      el('h3', { text: name }),
      el('p', { text: desc }),
      el(
        'div',
        { class: 'project-tags' },
        project.tags.map((tag) => el('span', { text: tag }))
      ),
      el('span', { class: 'project-link', text: `${label}${arrow}` })
    ]
  );

  const open = () => openProjectModal(project);
  card.addEventListener('click', open);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  });

  return card;
}

export function buildProjectsSection() {
  const grid = el('div', { class: 'project-grid', id: 'project-grid' });

  const render = () => {
    grid.innerHTML = '';
    projects.forEach((project) => grid.appendChild(buildCard(project)));
    initSpotlight('.project-card');
    initScrollReveal(grid);
  };
  render();
  onLangChange(render);

  return el('section', { id: 'projects' }, [
    el('div', { class: 'container' }, [
      el('div', { class: 'section-head reveal' }, [
        el('div', { class: 'eyebrow' }, bilingual(CONTENT.projectsSection.eyebrow)),
        el('h2', { class: 'font-display' }, bilingual(CONTENT.projectsSection.heading)),
        el('p', {}, bilingual(CONTENT.projectsSection.intro))
      ]),
      grid
    ])
  ]);
}
