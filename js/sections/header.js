import { el, bilingual } from '../core/dom.js';
import { CONTENT } from '../data/content.js';
import { getLang, setLang, onLangChange } from '../core/lang.js';

const LOGO_MARK = el(
  'svg',
  { viewBox: '0 0 100 100', fill: 'none' },
  el('path', {
    d: 'M50 5 L61 39 L97 39 L68 60 L79 95 L50 74 L21 95 L32 60 L3 39 L39 39 Z',
    stroke: '#c9a15a',
    'stroke-width': '3'
  })
);

export function buildHeader() {
  const navLinks = el(
    'div',
    { class: 'nav-links' },
    CONTENT.nav.links.map((link) => el('a', { href: link.href }, bilingual(link)))
  );

  const btnBn = el('button', { type: 'button', class: 'active', id: 'btn-bn', text: CONTENT.nav.langBn });
  const btnEn = el('button', { type: 'button', id: 'btn-en', text: CONTENT.nav.langEn });

  btnBn.addEventListener('click', () => setLang('bn'));
  btnEn.addEventListener('click', () => setLang('en'));

  const syncButtons = () => {
    const lang = getLang();
    btnBn.classList.toggle('active', lang === 'bn');
    btnEn.classList.toggle('active', lang === 'en');
  };
  onLangChange(syncButtons);
  syncButtons();

  // Mobile-only hamburger + slide-down panel — .nav-links is display:none
  // below 720px, so this is the only way to reach the nav links on phones.
  const navToggle = el(
    'button',
    { type: 'button', class: 'nav-toggle', 'aria-label': 'Menu', 'aria-expanded': 'false', 'aria-controls': 'mobile-nav' },
    [el('span', {}), el('span', {}), el('span', {})]
  );

  const mobileNav = el(
    'div',
    { class: 'mobile-nav', id: 'mobile-nav' },
    CONTENT.nav.links.map((link) => el('a', { href: link.href }, bilingual(link)))
  );

  function setMenuOpen(open) {
    mobileNav.classList.toggle('is-open', open);
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  navToggle.addEventListener('click', () => setMenuOpen(!mobileNav.classList.contains('is-open')));
  mobileNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') setMenuOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) setMenuOpen(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) setMenuOpen(false);
  });

  const nav = el('nav', {}, [
    el('div', { class: 'logo-mark' }, [LOGO_MARK, el('span', { text: CONTENT.nav.logo })]),
    el('div', { class: 'nav-right' }, [navLinks, el('div', { class: 'lang-toggle' }, [btnBn, btnEn]), navToggle])
  ]);

  return el('header', {}, [nav, mobileNav]);
}
