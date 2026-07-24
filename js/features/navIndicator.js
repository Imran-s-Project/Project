/**
 * navIndicator.js — active-section scroll-spy plus a slider bar that
 * glides beneath the currently active nav link instead of just toggling
 * a class.
 */

export function initNavIndicator({ navSelector = '.nav-links', sectionSelector = 'section[id]' } = {}) {
  const nav = document.querySelector(navSelector);
  if (!nav) return;

  const links = Array.from(nav.querySelectorAll('a'));
  const sections = Array.from(document.querySelectorAll(sectionSelector));
  if (links.length === 0 || sections.length === 0) return;

  const indicator = document.createElement('span');
  indicator.className = 'nav-indicator';
  nav.appendChild(indicator);

  function linkFor(id) {
    return links.find((link) => link.getAttribute('href') === `#${id}`);
  }

  function moveIndicatorTo(link) {
    if (!link) {
      indicator.style.opacity = '0';
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    indicator.style.opacity = '1';
    indicator.style.width = `${linkRect.width}px`;
    indicator.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
  }

  function setActive(link) {
    links.forEach((l) => l.classList.remove('active'));
    link?.classList.add('active');
    moveIndicatorTo(link);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(linkFor(entry.target.id));
      });
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  );
  sections.forEach((section) => observer.observe(section));

  window.addEventListener('resize', () => {
    const active = links.find((l) => l.classList.contains('active'));
    moveIndicatorTo(active);
  });
}
