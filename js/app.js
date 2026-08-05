import { el } from './core/dom.js';
import { buildHeader } from './sections/header.js';
import { buildHeroBanner } from './sections/heroBanner.js';
import { buildHero } from './sections/hero.js';
import { buildShowcase } from './sections/showcase.js';
import { buildAbout } from './sections/about.js';
import { buildProjectsSection } from './sections/projects.js';
import { buildContactSection } from './sections/contact.js';
import { buildFooter } from './sections/footer.js';
import { buildModalShell } from './sections/modal.js';

/**
 * Renders the entire document body (besides the two mount points already
 * in index.html) from JavaScript. The HTML file intentionally contains
 * almost nothing — this function is the real "markup".
 */
export function renderApp(root) {
  const starField = el('div', { class: 'star-field', id: 'star-field' });

  root.append(
    starField,
    buildHeader(),
    buildHeroBanner(),
    buildHero(),
    buildShowcase(),
    buildAbout(),
    buildProjectsSection(),
    buildContactSection(),
    buildFooter(),
    buildModalShell()
  );

  return { starField };
}
