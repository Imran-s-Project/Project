# Imran Ahmed — Portfolio (Static, Vanilla JavaScript)

No TypeScript. No Vite. No build step. This is a **plain static site** —
just `index.html`, one CSS file, and native browser ES modules — that you
can upload as-is to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Why the HTML file is almost empty

`index.html` only contains `<div id="app"></div>` and a single
`<script type="module" src="js/main.js">`. Every section of the page —
header, hero, about, projects, contact, footer, and the project modal —
is built at runtime by JavaScript in `js/sections/*.js`, using a tiny
DOM-builder helper (`js/core/dom.js`). This keeps almost all of the
project's weight in JavaScript instead of markup.

## Folder structure

```
index.html                 ← minimal shell (2 mount points, fonts, meta)
css/styles.css              ← one combined, organized stylesheet
js/
  main.js                   ← entry point, boots everything
  app.js                    ← assembles all sections into #app
  core/
    dom.js                  ← el() — hyperscript-style element builder
    lang.js                 ← bn/en language state + persistence
  data/
    content.js               ← ALL bilingual copy (edit text here)
    projects.js               ← project list
    social.js                  ← social/contact links + icons
  sections/
    header.js, hero.js, about.js, projects.js, contact.js, footer.js,
    modal.js                  ← one file per page section
  features/
    starfield.js               ← animated canvas star field
    spotlight.js                ← pointer-reactive glow + 3D tilt on cards
    reveal.js                    ← scroll-triggered entrance animation
    cursorGlow.js                 ← soft light that trails the cursor
    magnetic.js                    ← buttons nudge toward the pointer
    typewriter.js                   ← one-time hero heading type-on
    navIndicator.js                  ← sliding active-link underline
```

## Editing

- **Change text (Bangla or English):** `js/data/content.js`
- **Add/edit a project:** `js/data/projects.js`
- **Add/edit a social link:** `js/data/social.js`
- **Change colors, spacing, fonts:** `css/styles.css` (`:root` at the top)
- **Change page structure:** the matching file in `js/sections/`

## Running locally

Because the site uses native ES module `import`/`export`, browsers require
it to be served over `http://`, not opened directly as a `file://` path.
Any static server works, for example:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then open the printed local URL.

## Deploying

Upload the folder as-is (or connect the repo) to Vercel, Netlify, GitHub
Pages, Cloudflare Pages, or any static host — there is nothing to build.
