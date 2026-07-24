import { el } from '../core/dom.js';
import { getLang, onLangChange, t } from '../core/lang.js';
import { CONTENT } from '../data/content.js';

let overlay = null;
let panel = null;
let activeProject = null;
let lastFocused = null;
let previewTimeoutId = null;

function renderContent(project) {
  if (!panel) return;
  if (previewTimeoutId != null) {
    clearTimeout(previewTimeoutId);
    previewTimeoutId = null;
  }
  const lang = getLang();
  const name = lang === 'bn' ? project.nameBn : project.nameEn;
  const detail = lang === 'bn' ? project.detailBn : project.detailEn;
  const { visitLabel, previewLabel, soonLabel, closeLabel, blockedLabel } = CONTENT.modal;

  panel.innerHTML = '';

  const closeBtn = el('button', {
    type: 'button',
    class: 'modal-close',
    'aria-label': t(closeLabel),
    html: '&times;',
    on: { click: closeProjectModal }
  });

  const tagsEl = el(
    'div',
    { class: 'project-tags' },
    project.tags.map((tag) => el('span', { text: tag }))
  );

  const head = el('div', { class: 'modal-head' }, [
    el('span', { class: 'project-index', text: project.index }),
    el('h3', { text: name }),
    tagsEl
  ]);

  let previewBlock;
  if (project.url) {
    const loadingLabel = el('div', { class: 'modal-preview-loading', text: t(previewLabel) });
    const fallback = el('div', { class: 'modal-preview-fallback' }, [
      el('p', { text: t(blockedLabel) }),
      el('a', {
        class: 'btn btn-ghost',
        href: project.url,
        target: '_blank',
        rel: 'noopener',
        text: `${t(visitLabel)} ↗`
      })
    ]);
    const iframe = el('iframe', {
      src: project.url,
      title: `${name} live preview`,
      loading: 'lazy',
      referrerpolicy: 'no-referrer'
    });
    let hasLoaded = false;
    iframe.addEventListener('load', () => {
      hasLoaded = true;
      loadingLabel.style.display = 'none';
      fallback.classList.remove('is-visible');
    });
    // Some hosts (X-Frame-Options / CSP frame-ancestors) silently refuse to
    // render inside an iframe with no JS-visible error. If nothing has
    // loaded after a few seconds, assume it's blocked and offer a direct link
    // instead of leaving the visitor staring at a blank box.
    previewTimeoutId = setTimeout(() => {
      if (!hasLoaded) {
        loadingLabel.style.display = 'none';
        fallback.classList.add('is-visible');
      }
    }, 4000);
    previewBlock = el('div', { class: 'modal-preview' }, [loadingLabel, iframe, fallback]);
  } else {
    previewBlock = el('div', { class: 'modal-preview modal-preview-empty' }, el('p', { text: t(soonLabel) }));
  }

  panel.append(closeBtn, head, el('p', { class: 'modal-detail', text: detail }), previewBlock);

  if (project.url) {
    panel.appendChild(
      el('a', {
        class: 'btn btn-primary modal-visit',
        href: project.url,
        target: '_blank',
        rel: 'noopener',
        text: `${t(visitLabel)} ↗`
      })
    );
  }
}

export function openProjectModal(project) {
  if (!overlay || !panel) return;
  activeProject = project;
  lastFocused = document.activeElement;

  renderContent(project);
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  panel.focus();
}

export function closeProjectModal() {
  if (!overlay) return;
  if (previewTimeoutId != null) {
    clearTimeout(previewTimeoutId);
    previewTimeoutId = null;
  }
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
  activeProject = null;
  if (panel) panel.innerHTML = '';
  lastFocused?.focus();
}

/** Builds the (initially empty) modal shell and wires up its behavior. */
export function buildModalShell() {
  panel = el('div', { class: 'modal-panel', id: 'project-modal-panel', tabindex: '-1' });
  overlay = el('div', { class: 'modal-overlay', id: 'project-modal' }, panel);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeProjectModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!overlay?.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      closeProjectModal();
      return;
    }
    if (e.key === 'Tab') {
      const focusables = panel.querySelectorAll('a[href], button:not([disabled])');
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  onLangChange(() => {
    if (activeProject) renderContent(activeProject);
  });

  return overlay;
}
