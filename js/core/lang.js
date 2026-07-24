/**
 * lang.js — current-language state machine.
 * Persists the chosen language ('bn' | 'en') to localStorage and notifies
 * subscribers whenever it changes, so every module stays in sync.
 */

const STORAGE_KEY = 'imran-portfolio-lang';
const DEFAULT_LANG = 'bn';

let currentLang = DEFAULT_LANG;
const listeners = new Set();

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' || stored === 'bn' ? stored : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  if (lang !== 'bn' && lang !== 'en') return;
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* localStorage unavailable — non-fatal */
  }
  for (const fn of listeners) fn(lang);
}

export function toggleLang() {
  setLang(currentLang === 'bn' ? 'en' : 'bn');
}

export function onLangChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/** Pick the right string out of a `{ bn, en }` object for the active language. */
export function t(entry) {
  return currentLang === 'bn' ? entry.bn : entry.en;
}

export function initLang() {
  setLang(readStoredLang());
}
