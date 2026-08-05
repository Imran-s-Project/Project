import { el, bilingual } from '../core/dom.js';
import { CONTENT, SITE } from '../data/content.js';

/**
 * Corner "seal" brackets drawn around the video frame — the same visual
 * language as the hero banner's star marks, scaled down to read as a
 * registry/stamp detail rather than a generic media player.
 */
function cornerMarks() {
  return ['tl', 'tr', 'bl', 'br'].map((pos) => el('span', { class: `frame-corner corner-${pos}`, 'aria-hidden': 'true' }));
}

export function buildShowcase() {
  const video = el('video', {
    class: 'showcase-video',
    src: SITE.showcaseVideoUrl,
    controls: true,
    playsInline: true,
    preload: 'metadata',
    'aria-label': 'Portfolio showcase video'
  });

  const frame = el('div', { class: 'video-frame reveal' }, [video, ...cornerMarks()]);

  return el('section', { id: 'showcase', class: 'tight' }, [
    el('div', { class: 'container' }, [
      el('div', { class: 'section-head reveal' }, [
        el('div', { class: 'eyebrow' }, bilingual(CONTENT.showcase.eyebrow)),
        el('h2', { class: 'font-display' }, bilingual(CONTENT.showcase.heading)),
        el('p', {}, bilingual(CONTENT.showcase.intro))
      ]),
      frame
    ])
  ]);
}
