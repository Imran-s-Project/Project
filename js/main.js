import { renderApp } from './app.js';
import { initLang } from './core/lang.js';
import { mountStarfield } from './features/starfield.js';
import { initScrollReveal } from './features/reveal.js';
import { initCursorGlow } from './features/cursorGlow.js';
import { initMagnetic } from './features/magnetic.js';
import { initNavIndicator } from './features/navIndicator.js';
import { mountEmberField } from './features/emberField.js';
import { initHeaderOffset } from './features/headerOffset.js';

function bootstrap() {
  initLang();

  const root = document.getElementById('app');
  if (!root) return;

  const { starField } = renderApp(root);

  mountStarfield(starField);
  initScrollReveal();
  initCursorGlow();
  initMagnetic('.btn');
  initNavIndicator();
  initHeaderOffset(document.querySelector('header'));
  mountEmberField(document.getElementById('banner-embers'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
