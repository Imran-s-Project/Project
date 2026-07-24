/**
 * headerOffset.js — keeps a `--header-h` CSS variable in sync with the
 * real, rendered height of the fixed <header>.
 *
 * The header's height isn't a fixed number: it changes with viewport
 * width (mobile vs desktop nav), with which language is active (Bangla
 * vs Latin fonts render at slightly different line-heights), and once
 * web fonts finish loading (a fallback font can be a few px shorter or
 * taller than the real one). Anything visually anchored right below the
 * header — like the hero banner — needs to track that real height
 * instead of a guessed constant, or a gap/overlap appears.
 */
export function initHeaderOffset(header) {
  if (!header) return;

  const apply = () => {
    document.documentElement.style.setProperty('--header-h', `${header.offsetHeight}px`);
  };

  apply();

  // Covers viewport resize, language-toggle reflow, and the moment web
  // fonts finish loading and swap in (all of which can change the
  // header's height without firing a 'resize' event on their own).
  const observer = new ResizeObserver(apply);
  observer.observe(header);

  // Belt-and-suspenders: re-check once fonts are confirmed ready.
  if (document.fonts?.ready) {
    document.fonts.ready.then(apply);
  }
}
