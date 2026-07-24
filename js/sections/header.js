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

  const nav = el('nav', {}, [
    el('div', { class: 'logo-mark' }, [LOGO_MARK, el('span', { text: CONTENT.nav.logo })]),
    el('div', { class: 'nav-right' }, [navLinks, el('div', { class: 'lang-toggle' }, [btnBn, btnEn])])
  ]);

  return el('header', {}, nav);
}
