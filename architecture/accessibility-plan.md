# Accessibility Plan — Armor of God

**Status:** Draft — awaiting Gate 2 approval
**Phase:** 2 — Architecture and Experience Design
**Prepared:** 2026-10-27
**Conformance target:** WCAG 2.1 Level AA

---

## Overview

The site has seven interactive elements on the warrior figure (six armor pieces and the darkness region), a piece tab strip, and a scroll-trigger layout transition. Each of these presents a specific accessibility challenge. This plan addresses every one of them explicitly.

The guiding principle: every piece of content on this site must be reachable and readable by a visitor who cannot see the warrior figure, cannot use a mouse, cannot interact with the scroll trigger, or has motion disabled. The warrior illustration is the emotional and visual center of the experience, but it must never be the only path to any content.

---

## 1. Semantic HTML Requirements

### Page structure
- The document must have a single `<main>` element containing all primary content.
- Section headings must follow a logical outline: one `<h1>` (the site title in the header), `<h2>` for each major section (Two-Pane Study Area, How the Armor Works, The Armor Across Scripture, etc.), `<h3>` for panel headings within the content panel (each armor piece name, "The Enemy We Face").
- The skip-to-content link must be the first focusable element in the document.
- The footer must use `<footer>`.
- The header must use `<header>`.
- Scripture quotations must use `<blockquote>` with a `<cite>` element or an adjacent reference paragraph — not styled `<div>` elements.
- The cross-reference table must use `<table>`, `<caption>`, `<thead>`, `<th scope="col">`, `<tbody>`, and `<td>`. Do not use CSS grid or flexbox to simulate a table for tabular data.
- The mobile accordion must use `<details>` and `<summary>` elements (native disclosure widget with built-in keyboard support) unless a more controlled ARIA pattern is required for specific behavior.

### Warrior interactive elements
The warrior illustration is a decorative image (the interactive pieces are separate button elements layered over it). Structure:

```html
<div class="warrior-stage" role="region" aria-label="Armor of God diagram">
  <img
    src="warrior.svg"
    alt="A warrior dressed in the six pieces of the armor of God as described by Paul in Ephesians 6."
    class="warrior-image"
  />
  <!-- Seven interactive buttons positioned over the image -->
  <button
    class="armor-hit-area"
    data-armor-id="ARMOR-0001"
    aria-label="Belt of Truth — tap to study this piece"
    aria-pressed="false"
  >
    <!-- Empty or visually hidden label text -->
  </button>
  <!-- ... repeat for ARMOR-0002 through ARMOR-0006 ... -->
  <button
    class="darkness-hit-area"
    data-armor-id="ARMOR-0007"
    aria-label="The enemy — tap to learn who we face"
    aria-pressed="false"
  >
  </button>
</div>
```

The `aria-pressed` attribute reflects whether that piece's content is currently displayed in the right panel. When a piece is selected, its button's `aria-pressed` updates to `"true"`. This communicates the current active state to screen readers without requiring the visitor to see the warrior highlight.

### Tab strip
The piece tab strip uses the ARIA tabs pattern:

```html
<div role="tablist" aria-label="Armor pieces">
  <button role="tab" aria-selected="true" aria-controls="panel-overview" id="tab-overview">Overview</button>
  <button role="tab" aria-selected="false" aria-controls="panel-ARMOR-0001" id="tab-ARMOR-0001">Belt of Truth</button>
  <!-- ... through ARMOR-0006 ... -->
</div>
<div role="tabpanel" id="panel-overview" aria-labelledby="tab-overview">
  <!-- WholeArmorOverview content -->
</div>
<div role="tabpanel" id="panel-ARMOR-0001" aria-labelledby="tab-ARMOR-0001" hidden>
  <!-- Belt of Truth content -->
</div>
```

Keyboard behavior for tab strip:
- Tab moves focus to the tab strip (to the active tab specifically, not the first tab).
- Left and right arrow keys move between tabs and automatically activate the focused tab (the "automatic activation" pattern is preferred here because content loading is instant — no fetch delay).
- Tab from within the tab strip moves focus into the active tab panel.
- The tab panel itself is not focusable (it is not `tabindex="0"`); Tab moves through the focusable elements within the panel.

### Content panel state announcements
When the content panel changes state (new armor piece selected, enemy panel opened):

```html
<div
  class="panel-announcer"
  aria-live="polite"
  aria-atomic="true"
  style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0);"
></div>
```

When a state change occurs, this element's text content is updated to, for example, "Belt of Truth panel opened" or "The enemy panel opened." The `polite` value lets any current reading finish before the announcement.

Note: focus is not automatically moved to the content panel heading when a warrior piece is tapped. Moving focus programmatically on a tap or click is disorienting for sighted keyboard users. The `aria-live` announcement is sufficient for screen reader users. If a keyboard user tabs to the warrior piece button and activates it, focus remains on the warrior button — the tab strip automatically syncs, and the next Tab press moves into the panel.

---

## 2. Keyboard Navigation

### Tab order (desktop two-pane state)

The logical tab order through the page is:

1. Skip-to-content link (visually hidden, first in DOM)
2. Site header (if it contains any focusable element; in the minimal design, it may not)
3. Warrior panel — seven buttons in this sequence:
   - Belt of Truth (ARMOR-0001)
   - Breastplate of Righteousness (ARMOR-0002)
   - Shoes of the Gospel of Peace (ARMOR-0003)
   - Shield of Faith (ARMOR-0004)
   - Helmet of Salvation (ARMOR-0005)
   - Sword of the Spirit (ARMOR-0006)
   - The enemy darkness (ARMOR-0007)
4. Tab strip — Overview tab (receives focus on initial arrival; arrow keys then move between tabs)
5. Active tab panel content — focusable elements within the currently displayed panel (scripture links, cross-reference links)
6. Prayer section focusable elements (any links)
7. Cross-reference table links (each reference links to churchofjesuschrist.org)
8. Footer links

This order ensures that a keyboard-only visitor who has never seen the warrior illustration can still navigate to every piece of content using only Tab and the arrow keys for the tab strip.

### Hero state (before scroll trigger fires, desktop)

In the hero state, the tab order is:
1. Skip-to-content link
2. The seven warrior buttons (same as above)
3. Any hero-state focusable elements (scroll affordance, if it is a `<button>`)

Activating a warrior button in the hero state fires the scroll-trigger transition and opens the selected content. Focus remains on the warrior button (now in the left panel).

### Mobile tab order

On mobile (no two-pane layout):
1. Skip-to-content link
2. Warrior hit-area buttons (all seven, in piece order)
3. Piece name strip items (if implemented as buttons, not the tab pattern)
4. Accordion `<summary>` elements within `<details>` (each armor piece and enemy)
5. Focusable content within each open accordion section
6. Prayer section links
7. Chart links
8. Footer links

### Keyboard shortcuts (no custom shortcuts)

No custom keyboard shortcuts. The native browser and operating system shortcuts must not be overridden. The only keyboard behaviors added are:
- Arrow key navigation within the tab strip (ARIA tabs pattern, standard behavior).
- Escape closes any open state that functions as a drawer (on mobile, if the enemy content expands as a sheet rather than an accordion item, Escape should collapse it — but this only applies if a drawer/sheet pattern is used on mobile).

---

## 3. Focus States

### Requirement
Every focusable element must have a visible focus indicator that meets WCAG 2.1 Success Criterion 2.4.7 (minimum) and ideally 2.4.11 (WCAG 2.2 enhanced). The indicator must be clearly visible on the element's background.

### Warrior piece buttons
The warrior buttons are positioned over the warrior illustration. Their background is the illustration itself, which varies in color. Focus indicators must be high-contrast against the illustration regardless of where the button overlaps the image.

**Approach:** A solid 3px outline in `--accent` (warm amber) with a 2px white (or `--bg`) offset gap. This two-tone outline technique ensures the indicator is visible against both light and dark areas of the illustration.

```css
.armor-hit-area:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 2px;
  box-shadow: 0 0 0 5px var(--bg); /* creates the white gap behind the accent outline */
}
```

The focus ring must not be hidden or have `outline: none` applied at any time. The `:focus-visible` pseudo-class (not `:focus`) is used so that mouse clicks do not show the focus ring — only keyboard focus shows it, which is the standard pattern.

### Tab strip
Tab buttons use the same two-tone outline. Active tabs have a distinct visual style (accent-colored bottom border) that already distinguishes them; focus adds the outline on top of that.

### Content panel links
Links within the content panel (scripture links, cross-reference links) use the browser default focus styles, potentially enhanced to match the site's color scheme. Minimum: visible outline, 3:1 contrast against surroundings.

### Darkness button
Same focus treatment as the armor piece buttons. The darkness region makes the amber outline particularly visible given the dark surrounding area.

---

## 4. Color Contrast Targets

All contrast ratios measured against WCAG 2.1 AA standards using the APCA algorithm as a secondary check.

| Element | Foreground | Background | Target ratio | Notes |
|---------|-----------|-----------|-------------|-------|
| Body text (prose) | `--text` (`#1c1510`) | `--bg` (`#faf6ef`) | 7:1 minimum | Exceeds AA; approaches AAA |
| Scripture block text | `--text` | `--surface` (`#f3ede1`) | 4.5:1 minimum | Scripture deserves high readability |
| Section headings | `--text` | `--bg` | 7:1 | Same as body |
| Tab strip labels (inactive) | `--text-muted` (`#6b5f50`) | `--surface` | 4.5:1 | Must verify — muted text on parchment |
| Tab strip labels (active) | `--accent` (`#b07d2e`) | `--surface` | 4.5:1 | Verify amber on parchment |
| Enemy panel text | Light variant of `--bg` (~`#f0ead8`) | `--darkness` (`#2a1f14`) | 4.5:1 minimum | Single exception to light-palette rule |
| Enemy panel four-title table | Same light color | `--darkness` | 4.5:1 | Verify table specifically |
| Focus indicator (amber outline) | `--accent` | Variable (illustration) | 3:1 minimum | Two-tone technique provides contrast against any background |
| Small captions and attributions | `--text-muted` | `--bg` or `--surface` | 4.5:1 | Verify these specifically in implementation |
| Footer text | `--text-muted` | `--bg` | 4.5:1 | |

Verification approach: during Phase 7 of implementation, run each pair through the WebAIM Contrast Checker and record results in `architecture/review-log.md`. Any pair that fails must be adjusted before Gate 3.

---

## 5. Reduced-Motion Support

All animations must respond to the `prefers-reduced-motion: reduce` media query. The implementation must test this explicitly — do not assume the JavaScript checks handle all cases.

### CSS reduced-motion baseline

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This baseline handles most cases. The following specific behaviors require explicit verification:

| Animation | Standard behavior | Reduced-motion behavior |
|-----------|-----------------|------------------------|
| Scroll-trigger layout transition | 400–500ms ease-in-out scale and position animation | Instant layout switch — warrior is in the left panel immediately with no animation |
| Content panel state swap | 350ms cross-fade (old content fades out, new fades in) | Instant swap — no transition |
| Darkness hover oscillation | 3–5s slow opacity oscillation at low amplitude | No oscillation — darkness is static |
| Warrior piece highlight (active state) | Brief warmth/brightness increase, ~200ms | Instant highlight, no transition |
| Enemy panel entry (mobile sheet or right-pane) | 300ms ease-out slide | Instant appearance |
| Visited state change on warrior | Instant (no transition even in standard mode) | No change — already instant |

### JavaScript check for reduced motion

The scroll-trigger Intersection Observer callback must check `prefers-reduced-motion` before applying the transition class:

```js
const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// If motionOK is false, apply the two-pane layout class without the transition class.
```

This ensures the scroll-trigger fires correctly even when CSS transitions are suppressed.

---

## 6. Screen Reader Experience

### Target screen readers for testing
- VoiceOver on Safari (macOS and iOS) — primary test environment given the Church audience
- NVDA on Firefox (Windows) — secondary
- TalkBack on Android Chrome — secondary (mobile)

### Screen reader journey (desktop)

1. Visitor arrives. VoiceOver announces: "The Armor of God — web content" (page title from `<title>`).
2. Skip link: "Skip to main content — link." Activating it moves to `<main>`.
3. Warrior region: announced as "Armor of God diagram — region."
4. Tab to first button: "Belt of Truth — tap to study this piece — button."
5. Visitor activates the button. `aria-live` region announces: "Belt of Truth panel opened."
6. `aria-pressed` on the button updates to "true." VoiceOver reads: "Belt of Truth — tap to study this piece — button — selected."
7. Tab moves to the tab strip. VoiceOver reads: "Armor pieces — tab group. Belt of Truth — selected, tab, 2 of 7."
8. Arrow keys move through tabs. VoiceOver reads each tab label and its position.
9. Tab moves into the Belt of Truth panel. VoiceOver reads the panel heading: "Belt of Truth — heading level 3."
10. Visitor continues tabbing through the scripture block, Greek word block, Roman context, application list, and cross-reference links.
11. All content is reachable without visual reference to the warrior image.

### Screen reader journey (mobile)

1. Page title announced.
2. Warrior image announced: "A warrior dressed in the six pieces of the armor of God as described by Paul in Ephesians 6. — image."
3. Tab through the seven warrior buttons (same labels as desktop).
4. Whole-armor overview text is present in the DOM and readable.
5. Piece accordion: VoiceOver announces each `<summary>` element: "Belt of Truth — collapsed" (or "expanded" when open).
6. Activating a summary reveals the content below and VoiceOver reads it.

### What screen readers must NOT need to do
- No screen reader user should need to activate the warrior image itself (it is `alt`-described but not interactive as an `<img>`).
- No screen reader user should be required to complete the scroll-trigger animation to access any content.
- No content should be accessible only via hover interactions.

---

## 7. Warrior Diagram — Seven Interactive Elements

This section documents the specific implementation decisions for each of the seven interactive hit areas on the warrior figure.

### Implementation approach

The warrior illustration will be an SVG file (preferred) or a raster image with positioned button overlays. The SVG approach is preferred because:
- Hit areas can be `<button>` elements embedded directly within the SVG, or transparent `<a>`/`<button>` elements positioned within an SVG coordinate system.
- The SVG scales perfectly at all screen sizes, keeping hit areas correctly positioned relative to armor pieces.
- SVG text and group elements can carry accessibility attributes directly.
- The technical plan documents the exact implementation decision.

If a raster image is used, invisible `<button>` elements are absolutely positioned over the image container using percentage-based coordinates (relative to the image's rendered dimensions). This approach is workable but requires careful coordinate recalculation if the image aspect ratio changes.

### Hit area specifications per piece

Minimum touch target for each button: 44px × 44px (WCAG 2.1 SC 2.5.5).

| ARMOR-ID | Label | Body location on figure | aria-label value |
|----------|-------|------------------------|-----------------|
| ARMOR-0001 | Belt of Truth | Midsection / waist | "Belt of Truth — tap to study this piece" |
| ARMOR-0002 | Breastplate of Righteousness | Chest / torso | "Breastplate of Righteousness — tap to study this piece" |
| ARMOR-0003 | Shoes of the Gospel of Peace | Feet / lower legs | "Shoes of the Gospel of Peace — tap to study this piece" |
| ARMOR-0004 | Shield of Faith | Shield arm / shield face | "Shield of Faith — tap to study this piece" |
| ARMOR-0005 | Helmet of Salvation | Head | "Helmet of Salvation — tap to study this piece" |
| ARMOR-0006 | Sword of the Spirit | Sword hand / sword | "Sword of the Spirit — tap to study this piece" |
| ARMOR-0007 | The enemy darkness | Surrounding dark area | "The enemy — tap to learn who we face" |

The darkness hit area (ARMOR-0007) is the most visually unusual. It covers the margins of the illustration where the darkness is visible. On desktop this may be defined as the full image container minus the warrior figure's bounding box. On mobile, it may be a dedicated band below the warrior image labeled with a visible text prompt. The exact hit area boundaries depend on the final illustration composition.

### Visited state (ARIA)

After a piece has been opened, its button's `aria-label` updates to include "— visited" at the end: "Belt of Truth — tap to study this piece — visited." This communicates the visited state to screen readers without requiring a visual badge.

Alternatively, a separate `aria-describedby` pointing to a visually hidden "You have studied this piece" element achieves the same result with less label length.

---

## 8. Image Alt Text

| Image | Alt text |
|-------|----------|
| Warrior illustration (main) | "A warrior dressed in the six pieces of the armor of God as described by Paul in Ephesians 6." |
| Body-part map diagrams (inline in piece panels) | Descriptive: e.g., "Outline of a human figure with the chest area highlighted, indicating the body part protected by the Breastplate of Righteousness." |
| Any decorative border or texture images | `alt=""` (empty alt, treated as decorative) |
| Favicon / social preview | Not applicable to alt text |

---

## 9. Focus Management

### When a warrior piece is clicked (mouse or touch)
- Focus stays on the warrior button that was clicked.
- The content panel updates via `aria-live` announcement.
- The visitor's next Tab press enters the active tab in the tab strip, then the panel content.
- Rationale: moving focus automatically on a click/tap is disorienting when there is no overlay or dialog being opened — it is the tab strip and panel that update, not a new modal context.

### When the enemy panel is opened (darkness click)
- Focus stays on the darkness button.
- `aria-live` announces: "The enemy panel opened."
- Tab moves to the tab strip (the Overview tab is the first in the strip; the enemy state has no tab, so the strip stays on whatever was previously active — the Overview tab if this is the first interaction).
- Rationale: same as above — no modal is opened, so no focus trap or programmatic focus move is needed.

### If a modal or drawer pattern is used on mobile (enemy content as a bottom sheet)
- Focus moves to the bottom sheet's heading on open.
- A focus trap confines Tab to elements within the sheet while it is open.
- Escape key closes the sheet and returns focus to the darkness button.
- This follows the ARIA dialog pattern.

---

## 10. `<noscript>` Fallback

A `<noscript>` block renders a plain, complete content list when JavaScript is unavailable. This list contains:

- The whole-armor overview text.
- All six armor piece names as headings, each followed by their full content (scripture, Greek, Roman context, application) in a simple reading layout.
- The enemy section content.
- The prayer section.
- The cross-reference table.

This ensures the site's content is fully accessible even without JavaScript. The `<noscript>` fallback is invisible when JS is enabled; it takes the place of the two-pane interactive layout when JS is disabled.

---

## 11. Checklist for Pre-Release Accessibility Audit

Complete this checklist during Phase 7 of implementation and before Gate 3.

### Keyboard navigation
- [ ] Every interactive element is reachable by Tab in a logical order
- [ ] Tab order matches the visual layout on desktop
- [ ] Arrow keys navigate the tab strip
- [ ] Escape closes any open drawer or sheet on mobile
- [ ] No focus traps exist outside of intended modal/dialog contexts
- [ ] Skip-to-content link appears on first Tab keypress and works correctly

### Focus states
- [ ] Every focusable element has a visible focus indicator using `:focus-visible`
- [ ] Focus indicators are visible on both light and dark backgrounds (two-tone outline technique applied to warrior buttons)
- [ ] No `outline: none` anywhere in the stylesheet

### Color contrast
- [ ] Body text contrast verified: 7:1 on page background
- [ ] Scripture block contrast verified: 4.5:1 on surface background
- [ ] Tab strip inactive labels verified: 4.5:1
- [ ] Accent color (active tab) verified: 4.5:1
- [ ] Enemy panel light text on dark background verified: 4.5:1
- [ ] Muted text and captions verified: 4.5:1
- [ ] Focus indicator (amber outline) verified: 3:1 against illustration background

### Screen reader
- [ ] VoiceOver on Safari can reach all content using Tab and arrow keys
- [ ] All warrior buttons have descriptive aria-labels
- [ ] aria-live announcements fire on piece selection and panel change
- [ ] aria-pressed reflects the current active state on warrior buttons
- [ ] All images have appropriate alt text or empty alt=""
- [ ] Table has caption and correct scope on th elements
- [ ] Accordion summaries are correctly announced as expanded/collapsed

### Motion
- [ ] prefers-reduced-motion: reduce disables scroll-trigger animation
- [ ] prefers-reduced-motion: reduce disables content panel cross-fade
- [ ] prefers-reduced-motion: reduce disables darkness hover oscillation
- [ ] JavaScript checks motionOK before applying transition classes

### Structural
- [ ] Single h1 on the page
- [ ] Section headings follow logical h2/h3 hierarchy
- [ ] All scripture quotations use blockquote with cite
- [ ] Cross-reference table uses semantic table markup
- [ ] noscript fallback renders all content accessibly
