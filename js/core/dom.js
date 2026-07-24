/**
 * dom.js — a tiny, dependency-free "hyperscript" helper.
 * ----------------------------------------------------------------------
 * el('div', { class: 'card', on: { click: fn } }, [ el('span', {}, 'hi') ])
 *
 * This is the single reason the HTML file can stay almost empty: every
 * section of the page is assembled from JavaScript calls to `el()`
 * rather than written as static markup.
 * ----------------------------------------------------------------------
 */

const SVG_TAGS = new Set(['svg', 'path', 'rect', 'circle', 'g', 'defs', 'pattern', 'polygon']);

/**
 * Create a DOM element.
 * @param {string} tag - element tag, e.g. 'div', or 'svg:path' for namespaced SVG tags
 * @param {object} [props] - attributes / props. Special keys: `class`, `html`, `text`, `on`, `data`, `style`
 * @param {Array|Node|string} [children]
 * @returns {HTMLElement|SVGElement}
 */
export function el(tag, props = {}, children = []) {
  const isSvg = SVG_TAGS.has(tag);
  const node = isSvg
    ? document.createElementNS('http://www.w3.org/2000/svg', tag)
    : document.createElement(tag);

  for (const [key, value] of Object.entries(props || {})) {
    if (value == null || value === false) continue;

    if (key === 'class') {
      node.setAttribute('class', Array.isArray(value) ? value.filter(Boolean).join(' ') : value);
    } else if (key === 'html') {
      node.innerHTML = value;
    } else if (key === 'text') {
      node.textContent = value;
    } else if (key === 'style' && typeof value === 'object') {
      Object.assign(node.style, value);
    } else if (key === 'data' && typeof value === 'object') {
      for (const [dk, dv] of Object.entries(value)) node.dataset[dk] = dv;
    } else if (key === 'on' && typeof value === 'object') {
      for (const [evt, handler] of Object.entries(value)) node.addEventListener(evt, handler);
    } else if (isSvg) {
      node.setAttribute(key, value);
    } else if (key in node && typeof node[key] !== 'function') {
      node[key] = value;
    } else {
      node.setAttribute(key, value);
    }
  }

  appendChildren(node, children);
  return node;
}

function appendChildren(node, children) {
  const list = Array.isArray(children) ? children : [children];
  for (const child of list) {
    if (child == null || child === false) continue;
    if (Array.isArray(child)) {
      appendChildren(node, child);
    } else if (child instanceof Node) {
      node.appendChild(child);
    } else {
      node.appendChild(document.createTextNode(String(child)));
    }
  }
}

/** Shorthand for building the two-language `<span>` pairs the site uses everywhere. */
export function bilingual(entry, tag = 'span', extraClass = '') {
  return [
    el(tag, { class: ['i18n-bn', extraClass], html: entry.bn }),
    el(tag, { class: ['i18n-en', extraClass], html: entry.en })
  ];
}

/** Query shortcut. */
export const qs = (selector, scope = document) => scope.querySelector(selector);
export const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
