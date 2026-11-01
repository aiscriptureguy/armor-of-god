# Technical Plan — Armor of God

**Status:** Draft — awaiting Gate 2 approval
**Phase:** 2 — Architecture and Experience Design
**Prepared:** 2026-10-27
**Updated:** 2026-10-28 — switched from Vite to plain files (DEC-0008)

---

## Guiding Constraints

1. **GitHub Pages static hosting** — no server, no runtime compute. Everything is a pre-built file.
2. **No build step** — files in the repository are the deployment artifact, same as `scripture-atlas`.
3. **No unapproved remote dependencies** — no CDN fonts, no analytics, no third-party scripts. All assets self-contained.
4. **Data-driven content** — all armor piece content lives in `armor-data.js`, not hardcoded in HTML.
5. **Base path** — site publishes under `https://aiscriptureguy.github.io/armor-of-god/`. All asset references use relative paths.
6. **Maintainability** — any future collaborator can open the files and understand them without installing anything.

---

## What scripture-atlas does and what we reuse

`scripture-atlas` is a plain HTML + CSS + JS site with no build tool:
- `site-data.js` attaches content to `window.ScriptureAtlasData`
- `site.js` handles all interaction
- `styles.css` handles all presentation
- No build step — the repository is the deployment artifact

**What we reuse:** the data-separation pattern, CSS custom property architecture, relative asset paths, and the font choices (Cormorant Garamond + Inter, but self-hosted rather than CDN).

**What we do differently:** self-host fonts (no Google CDN), split CSS into focused files for maintainability, split JS into focused files loaded in order.

---

## File and directory structure

```
armor-of-god/
  index.html              ← the entire site; one HTML document
  armor-data.js           ← all content; attaches to window.ArmorData
  app.js                  ← all interaction logic
  fonts.css               ← @font-face declarations
  styles.css              ← all styles (imports fonts.css via @import)
  fonts/
    CormorantGaramond-Regular.woff2
    CormorantGaramond-Medium.woff2
    CormorantGaramond-SemiBold.woff2
    Inter-Regular.woff2
    Inter-Medium.woff2
  assets/
    warrior-concepts/     ← illustration candidates (not served as content)
      Roman Sentinel with Shield and Sword.png   ← approved illustration
      APPROVED.md
      PROMPTS.md
      PROMPTS-DEFENSIVE.md
  scripts/
    validate-data.js      ← optional; run manually with node before pushing
  study/                  ← research documents (not served as site content)
  architecture/           ← planning documents (not served as site content)
  .gitignore
  README.md
  CLAUDE.md
```

The warrior illustration (PNG) is copied from `assets/warrior-concepts/` to the root or an `img/` folder once approved. It is referenced from `index.html` as a relative path.

---

## HTML

One `index.html` file. All sections of the site are present in the DOM from the start — the scroll-trigger and panel states are managed by CSS classes toggled by `app.js`, not by injecting/removing DOM nodes.

**`<head>` structure:**
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Armor of God</title>
<meta name="description" content="...">
<link rel="stylesheet" href="styles.css">
<!-- Open Graph and favicon tags -->
```

**Script loading** — at end of `<body>`:
```html
<script src="armor-data.js"></script>
<script src="app.js"></script>
```

No `type="module"`. Plain scripts, in order, at the bottom of the body. `armor-data.js` runs first and sets `window.ArmorData`; `app.js` reads from it.

**Base path:** All `href`, `src`, and `url()` references use relative paths (e.g., `./fonts/CormorantGaramond-Regular.woff2`). This works correctly whether the site is served from `localhost` during development or from `https://aiscriptureguy.github.io/armor-of-god/` in production.

---

## JavaScript — `app.js`

One file. Organized into clearly labeled sections with comments marking each responsibility:

```
1. Constants and selectors
2. Data access helpers (reads from window.ArmorData)
3. Warrior hit-area initialization
4. Piece-panel state management
5. Scroll-trigger (Intersection Observer)
6. Tab strip sync
7. Mobile layout
8. Accessibility (aria-live updates, focus management)
9. Init (called once on DOMContentLoaded)
```

No framework, no imports, no bundler. All functions are plain functions in the global scope of `app.js`, or wrapped in an IIFE to avoid polluting `window`.

**Reduced motion check:**
```js
const motionOK = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
```
Used before any transition is applied. If `motionOK` is false, the scroll-trigger layout change is instant (no CSS transition duration).

---

## Data — `armor-data.js`

Attaches to `window.ArmorData`. No imports, no exports.

```js
window.ArmorData = {
  pieces: {
    'ARMOR-0001': {
      id: 'ARMOR-0001',
      label: 'Belt of Truth',
      tabLabel: 'Belt',
      ariaLabel: 'Belt of Truth — tap to explore this piece',
      publicationStatus: 'draft', // changed to 'approved' when content verified
      scriptureText: {
        reference: 'Ephesians 6:14',
        url: 'https://www.churchofjesuschrist.org/study/scriptures/nt/eph/6?lang=eng&id=p14',
        text: '...', // populated in Phase 3
      },
      dcText: null,            // D&C addition where applicable; null otherwise
      greekWord: { term: '', strongsNumber: '', meaning: '' },
      romanContext: { equipmentName: '', description: '' },
      bodyPart: { name: '', spiritualDomain: '' },
      application: [],         // 2-4 strings
      crossReferences: [],     // { reference, url, volume, note }
      restorationNote: null,   // breastplate only
      bomLink: null,           // shield only
      hitArea: {               // percentage coords relative to warrior image
        top: '', left: '', width: '', height: ''
      },
    },
    // ARMOR-0002 through ARMOR-0006 follow same shape
  },
  enemy: {
    id: 'ARMOR-0007',
    publicationStatus: 'draft',
    anchorVerse: { reference: 'Ephesians 6:12', text: '...' },
    fourTitles: [],            // { kjvPhrase, greek, meaning }
    jshConnection: { reference: 'JS-H 1:15-17', text: '...' },
  },
  prayer: {
    id: 'ARMOR-0008',
    publicationStatus: 'draft',
    anchorVerse: { reference: 'Ephesians 6:18', text: '...' },
    dcAddition: { reference: 'D&C 27:18', text: '...', note: '...' },
    bodyContent: '',
  },
  chartRows: [],               // six rows: { reference, volume, pieces, url }
};
```

---

## CSS

Two files loaded in order:

**`fonts.css`** — `@font-face` declarations only. Paths relative to the file location.

**`styles.css`** — begins with `@import './fonts.css';`, then all site styles organized by section:

```
/* 1. CSS custom properties (tokens) */
/* 2. Reset */
/* 3. Typography */
/* 4. Layout — hero state */
/* 5. Layout — two-pane state (.two-pane-active) */
/* 6. Layout — mobile (max-width: 768px) */
/* 7. Warrior panel and hit areas */
/* 8. Darkness overlay */
/* 9. Content panel, tab strip, piece panels */
/* 10. Prayer section */
/* 11. Cross-reference chart */
/* 12. Footer */
/* 13. Reduced motion overrides */
/* 14. Accessibility — skip link, focus states */
```

No preprocessor. CSS custom properties handle theming. The two-pane layout activates when `app.js` adds `.two-pane-active` to `<html>`.

---

## Fonts — self-hosted

**Why not CDN (like scripture-atlas):** Google Fonts CDN creates a third-party network request; workflow prohibits unapproved remote dependencies.

**Selected fonts:**
- **Cormorant Garamond** (SIL Open Font License) — scripture text and headings. Weights: 400, 500, 600.
- **Inter** (SIL Open Font License) — body prose and UI. Weights: 400, 500.

**Download source:** Official GitHub releases for each font (no tool needed — download WOFF2 files directly). Place in `fonts/`.

**`@font-face` pattern:**
```css
@font-face {
  font-family: 'Cormorant Garamond';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./fonts/CormorantGaramond-Regular.woff2') format('woff2');
}
```

---

## Warrior illustration

The approved illustration (`Roman Sentinel with Shield and Sword.png`) is a raster PNG. It is embedded as `<img>` in the warrior panel. Hit areas are implemented as absolutely-positioned `<button>` elements over the image, using percentage coordinates stored in `armor-data.js` (`hitArea: { top, left, width, height }`).

The warrior image container is `position: relative`. Each button is `position: absolute` with coordinates from the data. Minimum touch target: 44×44px (enforced by `min-width` and `min-height` on the buttons, with a transparent visual hit expansion if needed).

This is the raster-overlay approach documented in the architecture. SVG was preferred but the approved illustration is PNG. The percentage coordinate approach in `armor-data.js` means repositioning a hit area is a one-line data change.

---

## Scroll-trigger

Implemented with Intersection Observer in `app.js`. An invisible sentinel `<div>` sits at the bottom of the hero section. When it exits the viewport (user scrolls down), the observer fires once:

```js
const sentinel = document.getElementById('hero-sentinel');
const observer = new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) {
    document.documentElement.classList.add('two-pane-active');
    observer.disconnect(); // fires once per session
  }
}, { threshold: 0 });

if (window.innerWidth > 768) observer.observe(sentinel); // desktop only
```

CSS transitions on `.two-pane-active` handle the layout change. `prefers-reduced-motion` check sets transition duration to 0ms.

---

## Deployment

No build step. GitHub Pages is configured to deploy from the `main` branch (root folder). Pushing to `main` publishes the site.

**Setup (one-time, done in Phase 5):**
- Repository Settings → Pages → Source: Deploy from branch → Branch: main, folder: / (root)

**`.gitignore`:**
```
.DS_Store
```

No `node_modules`, no `dist/`, nothing to ignore for a build tool.

---

## Local development

No server required for most editing. For the scroll-trigger and relative path testing, run a simple local server:

```bash
# Python (available on macOS by default)
python3 -m http.server 8080
# then open http://localhost:8080/

# Or use the workspace script
bash ../../scripts/dev-server.sh .
```

The `scripts/dev-server.sh` workspace utility can be pointed at the project root.

---

## Optional: data validation script

`scripts/validate-data.js` — run manually with `node scripts/validate-data.js` before pushing. Not a build gate (there is no build), but useful to catch content errors before they go live.

Checks:
1. Every ARMOR-XXXX has `id`, `publicationStatus`, `scriptureText`, `greekWord`, `romanContext`, `bodyPart`, `application`, `crossReferences`, `hitArea`
2. No draft content has `publicationStatus: 'approved'` without a corresponding verified source
3. `chartRows` has exactly 6 entries
4. No duplicate IDs
5. Every `url` in crossReferences begins with `https://www.churchofjesuschrist.org/`

---

## What is not needed

| Item | Why not |
|---|---|
| npm / Node.js | No build step |
| Vite | No build step |
| ESLint / Prettier | Useful but optional; not required for plain files |
| TypeScript | No compiler needed |
| CSS preprocessor | CSS custom properties are sufficient |
| UI framework | One page, seven interactive elements |
| Test runner | Validation script covers content; UI tested in review rounds |
| GitHub Actions | No build to run; Pages deploys from branch directly |
