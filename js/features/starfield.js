/**
 * starfield.js — an animated, canvas-driven star field.
 * Renders slowly drifting, gently twinkling four-point stars behind the
 * whole page. Pauses automatically when the tab is hidden or the user
 * prefers reduced motion, so it never wastes battery for no reason.
 */

function buildStars(count, width, height) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 8 + Math.random() * 18,
      spin: Math.random() * Math.PI * 2,
      spinSpeed: (Math.random() - 0.5) * 0.0006,
      phase: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.0006 + Math.random() * 0.0012,
      driftX: (Math.random() - 0.5) * 0.006,
      driftY: (Math.random() - 0.5) * 0.006
    });
  }
  return stars;
}

function drawStar(ctx, cx, cy, rOuter, rInner, points, rotation) {
  ctx.beginPath();
  const step = Math.PI / points;
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? rOuter : rInner;
    const angle = i * step - Math.PI / 2 + rotation;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();
}

export function mountStarfield(container) {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width = 0;
  let height = 0;
  let stars = [];
  let rafId = null;
  let running = true;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = container.clientWidth;
    height = container.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const density = Math.min(60, Math.max(18, Math.round((width * height) / 26000)));
    stars = buildStars(density, width, height);
  }

  function frame(time) {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = '#c9a15a';
    ctx.lineWidth = 1;

    for (const star of stars) {
      star.x = (star.x + star.driftX + width) % width;
      star.y = (star.y + star.driftY + height) % height;
      star.spin += star.spinSpeed;
      const twinkle = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(time * star.twinkleSpeed + star.phase));
      ctx.globalAlpha = twinkle * 0.55;
      drawStar(ctx, star.x, star.y, star.r, star.r * 0.42, 4, star.spin);
    }
    ctx.globalAlpha = 1;
    rafId = requestAnimationFrame(frame);
  }

  function start() {
    if (rafId != null) return;
    running = true;
    rafId = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    if (rafId != null) cancelAnimationFrame(rafId);
    rafId = null;
  }

  resize();
  if (!prefersReducedMotion) {
    start();
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else start();
    });
  } else {
    // Draw a single static frame for reduced-motion users.
    frame(0);
  }

  window.addEventListener('resize', () => {
    resize();
  });
}
