# Design Direction — Armor of God

**Status:** Gate 2 approved — 2026-10-28

## Resolved architecture decisions (DEC-0008)
- **Warrior illustration:** AI-generated. Prompts in `assets/warrior-concepts/PROMPTS.md`. Chase approves final image before SVG hit targets are defined.
- **Warrior aspect ratio:** Portrait (tall) — approximately 2:3 width:height.
- **Body-part diagrams:** Text description only — no secondary visual per panel.
- **GA quote verification:** Proceed with ⚠️-flagged quotes in development; verify against original talks before Gate 3.
**Phase:** 2 — Architecture and Experience Design
**Prepared:** 2026-10-27

---

## Selected Concept: The Illuminated Armory

The approved direction is a named hybrid of Concept B (The Armory) and Concept C (The Study Table), extending both with a scroll-triggered entry experience. The name "The Illuminated Armory" reflects the visual register — an illuminated manuscript brought into a modern interactive experience — and the structural idea that the warrior is both the centerpiece and the way in.

The defining characteristic: the experience has three distinct modes, and the transition between the first two is driven by a scroll trigger rather than a click. A visitor does not choose to enter the study area; the act of scrolling moves them there naturally.

---

## What Was Accepted from Other Concepts

### From Concept B — The Armory
- The full-viewport hero state: the warrior fills the screen before any interaction begins.
- The faded darkness as a consistently tappable/clickable element throughout the experience.
- The principle that the warrior is the primary navigation, not a decoration beside a text column.
- Visited-state tracking on the warrior (soft visual affordance, not a score or gamified progress).

### From Concept C — The Study Table
- The sticky two-pane layout (warrior left, content right) as the primary study environment after scroll.
- The "whole armor overview" as the default right-pane content before any piece is selected — orientation before exploration.
- The "next piece" / piece-list strip for visitors who prefer linear reading order.
- The right pane as a scrollable reading area that changes without a full-screen overlay — the warrior always remains in view beside the content being read.
- The cross-reference chart as a genuine below-the-fold section with visual weight, not an afterthought.

### From Concept A — The Standing Order
- The prayer/"How the Armor Works" section as a visually distinct band positioned between the interactive section and the cross-reference chart.
- The closing thought band at the bottom of the page.

---

## Rejected Ideas and Why

| Idea | Source concept | Reason for rejection |
|------|---------------|----------------------|
| Full-screen overlays for each armor piece | Concept B | Rejected by Chase — the two-pane right panel keeps the warrior visible while reading, which is the structurally better choice. |
| Filterable cross-reference chart (pill buttons, JS row filtering) | Concept C | Rejected by Chase this session — the chart is a simple table with no JS filtering required. Reduces implementation complexity and avoids the appearance of a data-dashboard. |
| Compact sticky piece-indicator icon strip | Concept A | Redundant once the tab strip is on the right pane. Eliminates a second navigation system doing the same job. |
| "Read all" flat-text mode toggle | Concept B | Adds complexity for a minor use case. Visitors who prefer linear reading can scroll through normally; the page structure is linear enough without a second mode. |
| Scroll-through inline sections per piece (all content exposed in scroll) | Concept A | Rejected in favor of the two-pane right-panel model, which keeps the warrior always adjacent to the content being read. |
| Piece "completed" state (visited ring on warrior) | Concept B | Kept in principle (soft state change on visited pieces) but will not use a ring or badge. The visual treatment is a subtle opacity or warmth shift — the distinction between "seen" and "unseen" states must feel atmospheric, not transactional. |

---

## Page and Section Inventory

The site is a single HTML document. All sections are on one page; there is no client-side routing.

### Sections in document order

1. **Hero State** — Full-viewport entry. The warrior illustration fills most of the viewport. Faded darkness visible at margins. Brief title and framing sentence. "Tap a piece to explore" instruction. Darkness tappable from first load. No scroll prompt is needed — the browser's natural scroll affordance is sufficient. A visible "start here" text block below the warrior image introduces the whole armor before interaction.

2. **Scroll Trigger** — Not a visible section; a behavioral threshold. When the visitor scrolls past approximately 80% of the hero section height, the layout transitions from the hero state to the two-pane study state. This is handled by an Intersection Observer (or CSS scroll-driven animation where browser support allows) watching the hero section's exit.

3. **Two-Pane Study Area** — The primary study environment. Warrior panel sticky on the left (approximately 45% width on desktop). Content panel on the right (approximately 55% width, scrollable). This section occupies the full screen height and the warrior stays locked to the viewport top as the visitor scrolls through individual content pieces.

   - **Default right-pane state:** Whole Armor Overview — a brief description of the panoplia (full set of armor), Paul's doubled "stand" command, the defensive posture of the armor as a whole, and a list of all six pieces with their one-line spiritual qualities. This is what a visitor sees the first time the two-pane layout appears and before any piece is tapped.
   - **Enemy panel state:** Right pane shows Ephesians 6:12, the four Greek titles with one-line explanations, and the JS-H 1:15–17 framing. Triggered by tapping the faded darkness.
   - **Piece panel states (six total, one per ARMOR-XXXX):** Right pane shows full content for the selected piece — scripture text, Greek word, Roman context, body-part map (inline small diagram), D&C addition where applicable, restoration note where applicable, Book of Mormon link where applicable, application habits, and cross-references. Triggered by tapping any armor piece on the warrior.

4. **Prayer / How the Armor Works** — A full-width band below the two-pane section. The warrior is no longer sticky here; the page returns to single-column layout. Ephesians 6:18 as the anchor verse. Explanatory content on prayer as the animating discipline. D&C 27:18 addition (unity-in-prayer) presented as a side-by-side or callout block comparing the Ephesians wording and the D&C wording.

5. **Cross-Reference Chart** — A full-width section below the prayer band. Simple table, no JS filtering. Columns: Reference | Standard Work | Piece(s). Six rows matching the content model (see `content-model.md`). Brief introductory sentence above the table clarifying that D&C 27 extends rather than merely repeats Ephesians 6.

6. **Closing Band** — Brief. One to two sentences of closing thought. Not a call to action, not a signup prompt — a quiet ending consistent with the reverent tone.

---

## Component Inventory

### Layout components
- `HeroSection` — positions the warrior image, manages the "before scroll" layout state
- `TwoPaneStudyArea` — manages the sticky warrior panel and the right content panel; listens for warrior-click events and updates the right pane
- `WarriorPanel` — contains the warrior illustration, manages hit areas (SVG or positioned buttons), manages piece-highlight and visited states, manages darkness click
- `ContentPanel` — the right pane; contains the seven distinct content states (overview, enemy, six pieces); switches states based on warrior events; manages its own internal scroll independently of the page scroll

### Content state components (rendered inside ContentPanel)
- `WholeArmorOverview` — default state; list of all six pieces with one-line qualities; framing copy
- `EnemyPanel` — Eph. 6:12 scripture block, four-title table, JS-H 1:15–17 quotation block
- `ArmorPiecePanel` — rendered with data from a specific ARMOR-XXXX object; contains: scripture block, Greek word block, Roman context block, body-part map, DC addition (conditional), restoration note (conditional), BOM link (conditional), application list, cross-reference links

### Navigation components
- `PieceTabStrip` — appears at the top of the ContentPanel; shows all six piece names as tabs; syncs with warrior-click; shows active state; collapses to Prev/Next arrows on narrow viewports
- `SkipToContent` — visually hidden link, appears on focus; targets the two-pane study area

### Supporting components
- `ScriptureBlock` — consistent styled block for displaying KJV scripture text with reference
- `GreekWordBlock` — displays Greek term, Strong's number, transliteration, and meaning
- `RomanContextBlock` — displays Roman military context with source attribution
- `BodyPartMap` — text description only (no visual diagram — DEC-0008)
- `ApplicationList` — two to four application habits per piece
- `CrossReferenceLinks` — links to other passages using canonical churchofjesuschrist.org URLs
- `DCAdditionBlock` — conditional; appears in sword and shoes panels; side-by-side Ephesians and D&C wording
- `RestorationNoteBlock` — conditional; appears in breastplate panel; JS-H 1:35 Urim and Thummim note
- `FourTitleTable` — used in EnemyPanel; table of four Greek titles with one-line explanations
- `PrayerSection` — full-width below TwoPaneStudyArea; includes Eph. 6:18 and D&C 27:18 comparison
- `CrossReferenceChart` — full-width table section; data-driven from content model; no JS filtering
- `ClosingBand` — single full-width band at page bottom

### Data layer
- `armor-data.js` — a single JS module (or JSON imported via a build step) containing all content objects keyed by ARMOR-ID; all six armor pieces, ARMOR-0007 (enemy), ARMOR-0008 (prayer), cross-reference chart rows. No content is hardcoded in HTML.

---

## Typography Direction

### Typeface selection
Fonts must be self-hosted — no Google Fonts CDN (the CDN is a remote dependency and creates a privacy/performance concern for a GitHub Pages static site). The technical plan specifies the exact self-hosting approach.

**Scripture text and headings:** A classical serif with genuine manuscript warmth. Candidates: EB Garamond or Cormorant Garamond (both are open-source and self-hostable). Cormorant Garamond is already used in scripture-atlas and has proven rendering quality. Preferred for scripture blocks, section headings, and major labels. Weight: 500 for body-scale scripture text, 600 for headings.

**Body text and UI elements:** A clean, highly readable sans-serif. Candidates: Inter or Lato (both open-source). Inter at 400/500 for body; 500/600 for labels and tab strips. This creates a clear visual register: classical serif for the sacred text and study headings, modern sans for navigational chrome and explanatory prose.

**Monospaced or specialized:** Not needed.

### Sizes (reference, not final)
- Hero title: clamp(2rem, 5vw, 3.5rem)
- Section headings (h2): clamp(1.5rem, 3vw, 2.25rem)
- Right-pane piece headings (h3): clamp(1.25rem, 2.5vw, 1.75rem)
- Scripture block text: clamp(1rem, 1.5vw, 1.2rem), leading 1.7
- Body prose: 1rem / 1.6 line height
- Small labels and captions: 0.85rem

### Type rhythm
Line height for all scripture blocks is generous (1.7 or above) — these lines must breathe. Prose sections use 1.6. Tab strip and small UI labels use 1.3.

---

## Color and Palette Direction

The palette is warm, light, and manuscript-adjacent. It is the inverse of scripture-atlas's dark palette. Where scripture-atlas uses near-black backgrounds and gold accents, The Illuminated Armory uses near-white backgrounds and warm amber/ochre accents — the visual feeling of parchment touched by natural light, not candlelight drama.

### Base palette (named tokens, not final hex values — implementation will pin these)

| Token | Role | Direction |
|-------|------|-----------|
| `--bg` | Page background | Warm off-white. Not pure `#ffffff`. Approximate: `#faf6ef` or `#f9f4ec` — the color of aged but clean paper |
| `--surface` | Card and panel backgrounds | Slightly warmer and slightly more opaque than the page background. `#f3ede1` or similar |
| `--surface-dark` | Warrior panel background, prayer band | The warmest and most saturated surface tone. `#ede5d3` — parchment at its richest |
| `--text` | Primary text | Deep warm near-black. `#1c1510` — not pure black, slightly brown |
| `--text-muted` | Secondary text, captions | `#6b5f50` — a mid-value warm brown |
| `--text-faint` | Placeholder, disabled states | `#9e9080` |
| `--accent` | Primary accent — armor highlights, active tab | Warm amber-gold. `#b07d2e` or `#a87028` — the color of hammered bronze, not neon gold |
| `--accent-soft` | Accent with transparency — hover states, piece highlight glow | `--accent` at 18–22% opacity |
| `--accent-warm` | A secondary warmer accent for darkness-related elements | A muted rust or deep ochre — `#8c4a2f` or similar. Used only in the enemy panel and darkness hover state. Not used elsewhere. |
| `--line` | Borders and dividers | Warm mid-tone `rgba(28, 21, 16, 0.12)` |
| `--shadow` | Elevation shadows | Warm-toned, never cool blue-gray: `rgba(28, 21, 16, 0.16)` |
| `--darkness` | The enemy darkness color in the warrior image | This is part of the illustration itself, not a CSS token. But the enemy panel background uses a deep, slightly desaturated warm tone that echoes the illustration: `#2a1f14` — very dark warm brown, never blue-black. |

### Color usage rules
- Never use pure white or pure black.
- The warrior illustration's watercolor palette must be specified with the illustrator to include: warm ochres, soft reds, and aged-parchment backgrounds for the figure; the surrounding darkness as warm-toned deep brown, not blue or charcoal.
- Armor piece highlights (active state on the warrior) use `--accent-soft` as a glow or brightening — not a colored overlay. The highlight reveals the piece more fully, it does not tint it.
- The darkness hover state uses `--accent-warm` as a very subtle pulse or brightening within the dark area — suggesting presence without being dramatic.
- The enemy panel (right pane in enemy state) uses the `--darkness` tone as its background. Light text on this dark background is the single exception to the light-palette rule, and it is intentional: the enemy panel feels different from the rest of the site.
- The prayer band uses `--surface-dark` — distinctly warmer than the two-pane area, signaling a mode shift.

---

## Motion and Animation Direction

All animation must feel earned, not decorative. The site is not a product demo. Motion serves two purposes only: wayfinding (helping the visitor understand what changed) and atmosphere (giving the warrior figure and its environment a sense of life). No bounce, spring, or playful easing. No particle effects or persistent looping animation.

### Scroll-trigger transition (hero to two-pane)
The most significant animation on the page. As the visitor scrolls past the hero threshold:
- The warrior image scales and repositions from its centered, full-viewport position into the left panel of the two-pane layout.
- The right content panel slides in from the right (or fades in; exact choreography to be decided in implementation, but it must be smooth and not abrupt).
- The transition duration should be approximately 400–500ms at a gentle ease-in-out curve.
- **Reduced-motion behavior:** With `prefers-reduced-motion: reduce`, the transition is instant — no animation. The layout change happens in a single frame. The warrior is simply in the left panel; the content panel is simply present. No slide, no scale.
- The transition must not be retriggered if the visitor scrolls back up past the threshold and then down again. Once entered, the two-pane state persists for that session.

### Piece selection (right-pane content swap)
When the visitor taps an armor piece on the warrior or selects a tab:
- The right pane content cross-fades. Old content fades out at 150ms; new content fades in at 200ms. Total: approximately 350ms.
- The warrior piece highlight appears simultaneously with the new content — a brief warmth/brightness increase on the active piece.
- **Reduced-motion:** Content swap is instant. Warrior highlight appears immediately with no opacity transition.

### Darkness interaction
- On hover (desktop): the darkness region gains a very subtle animated quality — a slow (3–5s period) opacity oscillation at very low amplitude. This communicates "alive" without being dramatic. Not a flicker.
- On click/tap: the enemy panel slides in from the right at approximately 300ms ease-out.
- **Reduced-motion:** No hover oscillation. Enemy panel appears instantly.

### Visited state on warrior pieces
After a piece panel has been opened and the visitor returns to any other state:
- The visited piece on the warrior shifts subtly — a very slight increase in brightness or a gentle warm tint. Not a ring, not a badge. Think: a piece of the illustration that has been touched by light.
- The change is instant (no transition required, even with motion enabled). It is a state change, not an animation.

### No animation permitted
- No looping decorative animations anywhere else on the page.
- No scroll-jacking (the visitor's scroll speed controls the browser's natural scroll speed at all times except during the scroll-trigger transition).
- No animated backgrounds, particle systems, or shimmer effects in the body content area.
- No celebratory animation when all pieces are visited.

---

## Responsive Rules

### Desktop (1025px and above)
- Hero state: warrior fills approximately 70–75% of viewport height, centered horizontally.
- Scroll-trigger two-pane layout: warrior panel 45% width, content panel 55% width. Both panels use `position: sticky` (warrior) and `overflow-y: auto` (content panel, height: 100vh).
- Tab strip visible with all six piece names.
- Prayer band and chart: full-width, max-width container centered.

### Mid-width tablet landscape (769px–1024px)
- Two-pane layout persists but column widths shift: warrior panel 40%, content panel 60%.
- Tab strip collapses to Previous/Next arrows with the active piece name displayed.
- Warrior figure scales down; touch targets (armor piece buttons) must remain minimum 44px in each dimension.
- Prayer and chart sections: full-width with tighter padding.

### Mobile and narrow tablet portrait (768px and below)
- **No scroll-trigger transition.** The hero state and two-pane state are both absent. The mobile layout is single-column, top-to-bottom.
- Warrior illustration appears at the top of the page at full width, with its natural aspect ratio. Height is approximately 55–65vw to keep it above the fold on most handsets.
- Armor pieces are tappable via positioned `<button>` elements over the illustration. Minimum touch target: 44px.
- Below the warrior: a horizontal strip of piece names (belt | breastplate | shoes | shield | helmet | sword | enemy). Tapping a name scrolls to or reveals that piece's content block below.
- Each armor piece's content appears as a full-width expandable section below the strip. Only one section is expanded at a time (accordion behavior). On initial load, the whole-armor overview text appears above the accordion, expanded by default.
- Prayer section and cross-reference table appear below the accordion in full-width layout.
- Cross-reference table: on mobile, each row becomes a card with the passage reference as the card heading.

### No hover-only interactions at any screen size
All interactions that are available on hover on desktop must also be available on tap on mobile. The "tap a piece" affordance is primary; hover states are supplementary.

---

## Accessibility Targets

Detailed documentation is in `accessibility-plan.md`. Summary:

- WCAG 2.1 Level AA conformance is the minimum target.
- Body text on page background: minimum 7:1 contrast ratio.
- Scripture block text on `--surface` background: minimum 4.5:1.
- Enemy panel (light text on dark background): minimum 4.5:1 for all text.
- Tab strip labels and piece names: minimum 4.5:1.
- Warrior piece hit areas: all reachable by keyboard (Tab key); all have visible focus indicators; all have descriptive `aria-label` values.
- Darkness interactive region: keyboard-reachable, labeled, opens enemy panel on Enter/Space.
- Content panel state changes announced to screen readers via `aria-live="polite"`.
- All meaningful images have `alt` text; decorative images use empty `alt`.
- `prefers-reduced-motion` support for every animation on the page.
- Skip-to-content link visible on focus.
- All scripture blocks structured with semantic HTML (no font-only distinction between scripture and prose).

---

## Prioritized Implementation Backlog

Priority order is from highest to lowest. Each item corresponds to a development phase.

### Phase 1 — Shell and data
1. Project scaffolding with Vite, correct base path, GitHub Pages deployment workflow
2. Self-hosted font files added to `public/`
3. CSS custom property tokens established (colors, typography, spacing)
4. `armor-data.js` content module with all ARMOR-XXXX objects and cross-reference rows
5. Data validation script: checks for missing source IDs, missing required fields, draft publication status

### Phase 2 — Hero and warrior
6. Hero section with warrior image at correct viewport proportions
7. Warrior interactive element — SVG or positioned-button approach (decision locked in technical plan)
8. Piece hit areas defined and keyboard-reachable
9. Darkness interactive region with keyboard support
10. Hero section layout and typography (title, framing sentence, instruction text)

### Phase 3 — Scroll trigger and two-pane
11. Intersection Observer watching hero section exit
12. Scroll-trigger layout transition (desktop only)
13. Sticky warrior panel in two-pane state
14. Content panel rendering the WholeArmorOverview default state
15. Piece-selection event wiring: warrior click updates content panel
16. Tab strip rendering and sync with warrior selection
17. Enemy panel state in content panel

### Phase 4 — Armor piece panels
18. ArmorPiecePanel component rendering from `armor-data.js`
19. ScriptureBlock, GreekWordBlock, RomanContextBlock, BodyPartMap components
20. DCAdditionBlock (sword and shoes panels)
21. RestorationNoteBlock (breastplate panel)
22. BOMLink block (shield panel)
23. ApplicationList component
24. CrossReferenceLinks component

### Phase 5 — Below-diagram sections
25. Prayer/How the Armor Works section
26. Cross-reference chart (simple table, data-driven)
27. Closing band

### Phase 6 — Mobile layout
28. Mobile single-column layout
29. Warrior at full-width with tap targets
30. Horizontal piece name strip
31. Accordion content sections
32. Mobile prayer and chart layout

### Phase 7 — Polish and release preparation
33. `prefers-reduced-motion` audit — every animation tested with motion disabled
34. Keyboard navigation full walkthrough — all interactive elements reachable and operable
35. Color contrast audit against specified targets
36. Screen reader walkthrough (VoiceOver on Safari, minimum)
37. Production build and base-path verification
38. Social preview image and favicon
39. 404 handling (GitHub Pages default 404 is sufficient if noted in README)
40. Content audit against `AI-writing-pitfalls.md`
41. Final content status check — no `publication_status: draft` blocks in production

---

## Acceptance Criteria

The site is ready for Gate 3 review when all of the following are true:

### Content
- [ ] All six armor pieces are represented with complete panel content (scripture, Greek, Roman context, body-part map, D&C addition where applicable, restoration note where applicable, BOM link where applicable, application habits, cross-references)
- [ ] Enemy panel includes Eph. 6:12, four Greek titles with explanations, and JS-H 1:15–17 framing
- [ ] Whole-armor overview is the default right-pane state on desktop and the default expanded state on mobile
- [ ] Prayer section includes both Eph. 6:18 and the D&C 27:18 comparison
- [ ] Cross-reference chart includes all six rows from the content model
- [ ] No content has `publication_status: draft`
- [ ] All claims carry source IDs traceable to `study/sources.md`

### Interaction
- [ ] On desktop, scrolling past the hero smoothly transitions to the two-pane layout
- [ ] Tapping any armor piece on the warrior opens that piece's content in the right panel
- [ ] Tapping the faded darkness opens the enemy panel
- [ ] The tab strip and warrior piece clicks stay in sync
- [ ] On mobile, tapping a piece name reveals that piece's accordion section
- [ ] Visited pieces have a subtle (non-gamified) visual distinction on the warrior

### Accessibility
- [ ] All interactive elements are keyboard-reachable in a logical tab order
- [ ] All interactive elements have visible focus indicators
- [ ] All armor piece buttons and the darkness button have descriptive `aria-label` values
- [ ] Content panel state changes are announced via `aria-live`
- [ ] Skip-to-content link appears on first Tab keypress
- [ ] With `prefers-reduced-motion: reduce` active, all transitions are instant
- [ ] Color contrast passes at all specified targets
- [ ] Screen reader can reach all content without depending on the warrior figure

### Technical
- [ ] Production build completes without errors
- [ ] All URLs work under the `/armor-of-god/` base path (no broken asset paths)
- [ ] No unapproved remote dependencies (no external CDN fonts, no analytics, no APIs)
- [ ] `armor-data.js` contains all content; no doctrine or citations are hardcoded in templates
- [ ] Data validation script passes with zero errors

### Quality
- [ ] All prose passes `AI-writing-pitfalls.md` audit
- [ ] No unsupported doctrinal statements
- [ ] No ESV text present without Chase's explicit approval
- [ ] Site loads under 3 seconds on a simulated 4G connection (Lighthouse performance)
- [ ] Three local review rounds completed and logged in `architecture/review-log.md`
