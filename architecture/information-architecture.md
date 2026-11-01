# Information Architecture — Armor of God

**Status:** Draft — awaiting Gate 2 approval
**Phase:** 2 — Architecture and Experience Design
**Prepared:** 2026-10-27

---

## Site Structure Overview

The site is a single HTML document published at:

```
https://aiscriptureguy.github.io/armor-of-god/
```

There is no client-side routing, no subpages, and no hash-based navigation that changes the URL. All content exists in the document at load time or is rendered from `armor-data.js` into pre-existing DOM containers. Section visibility is managed by CSS classes toggled by JavaScript.

The single-page structure eliminates the base-path complexity of client-side routing while keeping all content accessible via the keyboard and screen readers regardless of interaction state.

---

## Section Order and Content Inventory

The following sections appear in document order. The visitor encounters them from top to bottom. Sections below the two-pane study area are reached by scrolling past it.

---

### 1. Skip to Content Link

**Position in DOM:** First child of `<body>`, before all visible content.
**Visible:** Only on keyboard focus.
**Behavior:** Moves focus to the main content landmark (the two-pane study area on desktop, the warrior illustration on mobile).
**Why it is first:** Screen reader users and keyboard users need an exit from repeated navigation before the page content begins.

---

### 2. Site Header (minimal)

**Content:**
- Site name: "The Armor of God"
- Anchor verse attribution: Ephesians 6:11 (brief, not the full verse — the verse appears in the hero)

**Navigation chrome:** None. There is no traditional nav bar. The site is a single linear experience; traditional navigation would imply subpages that do not exist.

**On mobile:** Same. The header is present but minimal — title only.

---

### 3. Hero Section

**Desktop and mobile:** Present on both. Behavior differs only in that the scroll-trigger transition that follows is desktop-only.

**Content:**
- The warrior illustration, centered, filling most of the viewport height.
- The faded darkness surrounding the warrior is visible and tappable/clickable from this initial state.
- Brief site title displayed over or near the illustration (kept short; the image should carry most of the visual weight).
- One to two sentences of framing copy — what this site is; who Paul was writing to; the one-sentence purpose of the armor. These are positioned below or beside the illustration, not over the image in a way that competes with it.
- An instruction line: "Select a piece of armor to study it — or tap the surrounding darkness to learn who we face." This line fades (or reduces opacity significantly) after the visitor's first interaction with any element on the warrior.
- The darkness is interactive from this first state. Tapping it here opens the enemy panel. On desktop this will be displayed in the two-pane content panel (requiring the scroll-trigger transition to complete first — see below); on mobile it opens an in-page content section.

**Piece interactions in hero state (desktop):** When a visitor taps an armor piece before scrolling, the scroll-trigger transition fires — the layout moves to the two-pane state and the appropriate piece panel opens in the right pane. The scroll action is not required before interaction is possible. This makes the experience feel more immediate.

**Scroll affordance:** A subtle down-arrow or "scroll to explore" indicator at the bottom of the hero. It does not scroll the page automatically; it indicates that more is below.

---

### 4. Two-Pane Study Area (desktop only in two-pane form)

**Desktop layout:**
```
┌────────────────────────────────────────────────────────────┐
│  Warrior Panel (sticky, 45% width)                         │
│                                                            │
│  [Warrior illustration — full panel height]                │
│  [Armor piece buttons — invisible, positioned over figure] │
│  [Darkness button — invisible, positioned over dark areas] │
│  [Piece tab strip or visual hint at bottom of warrior panel│
│   if tab strip is above content panel instead]             │
│                                                            │
├────────────────────────────────────────────────────────────┤
│  Content Panel (scrollable, 55% width)                     │
│                                                            │
│  [Piece Tab Strip — all six piece names + "Overview"]      │
│  [Active content state — one of seven states below]        │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

The warrior panel uses `position: sticky; top: 0; height: 100vh`. The content panel uses `overflow-y: auto; height: 100vh`. The containing row is `min-height: 100vh`.

**Mobile layout:** The two-pane layout does not appear on mobile. See the Mobile Layout section.

#### Content States in the Right Panel

All seven states are in the DOM at load time. Only one is visible at any moment. The active state is controlled by data attributes and CSS.

| State ID | Trigger | Content |
|----------|---------|---------|
| `state-overview` | Default on load; "Overview" tab | WholeArmorOverview — panoplia concept, Paul's doubled stand command, defensive posture framing, one-line summary of each of the six pieces with a tap prompt for each |
| `state-enemy` | Tap darkness on warrior or "Enemy" if listed | EnemyPanel — Eph. 6:12 scripture block, four Greek titles table, JS-H 1:15–17 quotation block with brief framing |
| `state-ARMOR-0001` | Tap Belt of Truth on warrior or belt tab | ArmorPiecePanel for the Belt of Truth |
| `state-ARMOR-0002` | Tap Breastplate of Righteousness on warrior | ArmorPiecePanel for the Breastplate of Righteousness |
| `state-ARMOR-0003` | Tap Shoes of the Gospel of Peace on warrior | ArmorPiecePanel for the Shoes |
| `state-ARMOR-0004` | Tap Shield of Faith on warrior | ArmorPiecePanel for the Shield of Faith |
| `state-ARMOR-0005` | Tap Helmet of Salvation on warrior | ArmorPiecePanel for the Helmet |
| `state-ARMOR-0006` | Tap Sword of the Spirit on warrior | ArmorPiecePanel for the Sword |

Note: There are seven interactive elements on the warrior (six armor pieces + darkness), giving eight total right-pane states including the default overview. The "enemy" state does not have a tab in the tab strip — it is reached only via the darkness. The tab strip shows: Overview | Belt | Breastplate | Shoes | Shield | Helmet | Sword (seven tabs).

#### Tab Strip Behavior

- Active tab is visually distinct: the accent color underline and slightly bolder label weight.
- Keyboard: the strip uses `role="tablist"` with `role="tab"` elements. Arrow keys move between tabs; Enter/Space activates. The associated content panel is `role="tabpanel"` with `aria-labelledby`.
- Sync rule: clicking a warrior piece updates the active tab. Clicking a tab updates the warrior piece highlight. These are always in sync.
- On mid-width (769–1024px): tab strip collapses to Previous/Next chevrons with the active piece name centered between them.

---

### 5. Prayer / How the Armor Works Section

**Position:** Immediately below the two-pane study area. Full-width. The warrior panel's sticky behavior ends here — it is no longer `position: sticky` below this threshold.

**Content:**
- Section heading: "How the Armor Works"
- Anchor verse: Ephesians 6:18 — "Praying always with all prayer and supplication in the Spirit..."
- Explanatory content: prayer as the animating practice; the pieces are put on and kept active through prayer. Written in second person, concise (not a sermon).
- D&C 27:18 comparison: a side-by-side or callout block showing the Ephesians wording and the D&C addition. A brief caption explains what D&C 27 adds (the communal, unified-prayer dimension).

**Visual treatment:** Distinct background — `--surface-dark` (the warmest parchment tone). A top and bottom border-line in `--line` to mark the section boundaries cleanly.

---

### 6. Cross-Reference Chart Section

**Position:** Below the Prayer section.

**Content:**
- Section heading: "The Armor Across Scripture"
- One introductory sentence clarifying the table's purpose: "These passages from across the standard works each illuminate a different facet of the armor God offers. D&C 27 extends and deepens Ephesians 6 rather than simply restating it."
- Table with columns: Reference | Standard Work | Piece(s)
- Six rows (data from `content-model.md`):

| Reference | Standard Work | Piece(s) |
|-----------|--------------|---------|
| Ephesians 6:10–18 | New Testament | All six pieces |
| D&C 27:15–18 | Doctrine and Covenants | All six (with additions) |
| 1 Nephi 15:24 | Book of Mormon | Shield of Faith (fiery darts) |
| 2 Nephi 1:23 | Book of Mormon | Breastplate (armor of righteousness) |
| JS-H 1:35 | Pearl of Great Price | Breastplate (physical breastplate) |
| JS-H 1:15–17 | Pearl of Great Price | Enemy panel (Sacred Grove encounter) |

- Each reference in the table links to the canonical churchofjesuschrist.org scripture URL for that passage.
- No JavaScript filtering. The table is a static HTML `<table>`. Standard works are visually distinguished by a subtle left border or row background tint (one color per volume: New Testament, Book of Mormon, D&C, Pearl of Great Price — all within the warm palette, no bold contrast colors).

**Mobile:** Each table row becomes a `<dl>` card with the reference as the `<dt>` heading and the other fields as `<dd>` entries. This preserves semantic structure without requiring horizontal scroll on narrow screens.

---

### 7. Closing Band

**Position:** Last section before the footer.

**Content:**
- One to two sentences of closing thought grounded in the study's conclusions.
- No call to action.
- No social sharing.
- No newsletter prompt.
- Consistent with the reverent tone of the whole site.

---

### 8. Site Footer

**Content:**
- Copyright line.
- Source attribution line: "All scripture quotations are from The Church of Jesus Christ of Latter-day Saints scriptures (KJV for biblical text). Greek word data from Blue Letter Bible. Roman context from public historical sources."
- If any ESV text is approved for publication, the required Crossway copyright notice appears here.
- A link to the churchofjesuschrist.org home page.
- No analytics, no third-party embeds, no social media links.

---

## Navigation Model Summary

| Navigation method | Available on desktop | Available on mobile | What it controls |
|------------------|---------------------|--------------------|--------------------|
| Tap warrior piece | Yes — triggers scroll-trigger then opens piece panel | Yes — scrolls to / reveals piece accordion section | Active content state |
| Tap darkness | Yes | Yes — reveals enemy content section | Active content state (enemy) |
| Tab strip (piece tabs) | Yes | No (replaced by piece name strip) | Active content state |
| Piece name strip (horizontal) | No | Yes | Active accordion section |
| Skip-to-content link | Yes | Yes | Moves focus to main content |
| Scroll | Yes — triggers layout transition past hero; normal scroll in prayer and chart sections | Yes — single continuous scroll throughout | Page position |
| Keyboard (Tab, arrow keys) | Yes — all interactive elements reachable | Yes — all interactive elements reachable | Focus position; active content state |

There is no browser back-button dependency. All state changes are in-page. The URL does not change when a piece is selected.

---

## URL Structure

Because there is no routing, there is exactly one URL for the site:

```
https://aiscriptureguy.github.io/armor-of-god/
```

Individual armor pieces do not have URLs. This is an intentional decision: the site is a self-contained study experience, not a reference database that needs linkable piece URLs. If a future phase adds deep linking (e.g., `#belt-of-truth`), that decision requires Chase's approval and a review of the content model's ID-to-URL mapping.

---

## Content ID to UI Element Mapping

The following table maps content model IDs to the UI elements that display them. This mapping must be stable — renaming an ARMOR-ID requires updating both the data file and any DOM references.

| Content ID | UI element | Trigger |
|------------|------------|---------|
| ARMOR-0001 | `state-ARMOR-0001` in ContentPanel; tab "Belt"; warrior hit area for belt | Click/tap belt area on warrior or belt tab |
| ARMOR-0002 | `state-ARMOR-0002` in ContentPanel; tab "Breastplate"; warrior hit area for breastplate | Click/tap breastplate area on warrior or breastplate tab |
| ARMOR-0003 | `state-ARMOR-0003` in ContentPanel; tab "Shoes"; warrior hit area for shoes | Click/tap shoes area on warrior or shoes tab |
| ARMOR-0004 | `state-ARMOR-0004` in ContentPanel; tab "Shield"; warrior hit area for shield | Click/tap shield area on warrior or shield tab |
| ARMOR-0005 | `state-ARMOR-0005` in ContentPanel; tab "Helmet"; warrior hit area for helmet | Click/tap helmet area on warrior or helmet tab |
| ARMOR-0006 | `state-ARMOR-0006` in ContentPanel; tab "Sword"; warrior hit area for sword | Click/tap sword area on warrior or sword tab |
| ARMOR-0007 | `state-enemy` in ContentPanel; darkness hit area on warrior | Click/tap darkness surrounding warrior |
| ARMOR-0008 | Prayer section (static, always visible below two-pane) | Scroll |
| Cross-reference chart | Chart section (static, always visible below prayer) | Scroll |

---

## Mobile Layout Structure

On screens 768px and below, the document sections appear in this order as a single vertical scroll:

1. Site header (title only)
2. Warrior illustration (full width, approximately 55–65vw height, with piece tap targets)
3. Whole-armor overview text (always visible, not inside accordion)
4. Piece name strip — horizontal, scrollable if needed: Belt | Breastplate | Shoes | Shield | Helmet | Sword | Enemy
5. Accordion section for each of the seven items. Default: all closed. Tapping a piece name in the strip opens its accordion section and closes any other open section.
6. Prayer / How the Armor Works section (full width)
7. Cross-reference chart (card layout, one card per row)
8. Closing band
9. Footer

The scroll-trigger two-pane transition is not present on mobile. The warrior is not sticky. The experience is a standard vertical scroll with the warrior and piece strip as entry points.

---

## Data Flow

```
armor-data.js
  └── exports armorData object
        ├── pieces[ARMOR-0001..0006]  → rendered into seven ContentPanel states
        ├── enemy[ARMOR-0007]         → rendered into enemy ContentPanel state
        ├── prayer[ARMOR-0008]        → rendered into Prayer section (static)
        └── chartRows[]               → rendered into CrossReferenceChart table

At page load:
  1. armor-data.js is imported
  2. All ContentPanel states are rendered into the DOM from the data
  3. All warrior hit areas are positioned based on warrior image dimensions
  4. Default state (state-overview) is shown
  5. Intersection Observer is initialized on hero section (desktop only)

On warrior piece tap:
  1. Hit area fires click event with ARMOR-ID
  2. ContentPanel switches to matching state
  3. Tab strip updates active tab
  4. Warrior highlights the tapped piece
  5. aria-live region announces the new panel name

On scroll past hero threshold (desktop only):
  1. Intersection Observer callback fires
  2. CSS class applied to document root triggers layout transition
  3. Warrior animates to left panel position
  4. ContentPanel slides in from right
  5. Two-pane state is active; hero state is inert
```

---

## Source Citation Placement

Sources are not prominently displayed in the visitor-facing UI — the site is a study aid, not an academic paper. Citations follow these placement rules:

- **Scripture quotations:** A reference line in the ScriptureBlock component (e.g., "Ephesians 6:14, KJV") links to the canonical churchofjesuschrist.org URL.
- **Greek word data:** A small attribution line in the GreekWordBlock component: "Greek data from Blue Letter Bible" with the SRC-0005 URL.
- **Roman context:** A small attribution line in the RomanContextBlock.
- **Application habits that cite General Conference:** Speaker name, talk title, and year (no full URL in visible UI — the source is logged in `study/sources.md`).
- **D&C passages:** Reference and link, same as scripture blocks.
- **Footer:** Aggregated source attributions as described in the footer section above.

No footnote system, no inline superscript numbers. The goal is a clean reading experience with traceable claims — not the visual apparatus of academic citation.
