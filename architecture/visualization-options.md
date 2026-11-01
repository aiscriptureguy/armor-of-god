# Visualization Options — Armor of God

**Status:** Draft — awaiting Chase's selection (Gate 2)
**Phase:** 2 — Architecture and Experience Design
**Gate 1 approved:** 2026-10-27

These three concepts are structurally different from one another. They are not variations in color or typography. Each produces a meaningfully different experience of the same content.

Locked decisions honored throughout: interactive warrior diagram, faded darkness as seventh clickable element, prayer as a separate "how the armor works" section (not on the warrior), light/airy watercolor palette, touch interactions required, cross-reference chart included, sword panel includes D&C 27 addition, breastplate panel includes Urim and Thummim note, shield panel links to 1 Ne. 15:24, enemy panel includes four Greek titles and JS-H 1:15–17.

---

## Concept A — The Standing Order

**Structure type:** Single-page progressive scroll with a persistent warrior

### 1. Memorable concept name

The Standing Order — named after Paul's threefold command to "stand" (Eph. 6:11, 13, 14). The site is a single unbroken scroll. The visitor moves through the armor from the ground up, as a soldier would don it. The warrior figure stays fixed on screen while content rises past it.

### 2. Primary user journey

1. Visitor lands on the page. The warrior figure fills the upper two-thirds of the viewport, set against its watercolor background. The faded darkness is visible at the margins and bottom. A brief title and anchor verse appear in a small typographic band above the fold.
2. Visitor scrolls. The page begins to rise. The warrior figure is sticky — it stays planted in the left half of the screen (desktop) or top half (mobile). The right side scrolls.
3. The first content section to scroll into view covers the enemy. The faded darkness on the warrior pulses gently in the margin, drawing the eye. A callout box beside the warrior reads "We wrestle not against flesh and blood" with a tap/click prompt. Tapping opens the enemy panel as a side drawer.
4. As the visitor continues scrolling, each armor piece comes into view from feet to head: belt, breastplate, shoes, shield, helmet, sword. Each piece in the content panel corresponds to the matching piece on the sticky warrior figure — that piece glows or gains a warm highlight on the figure as its section scrolls into the primary reading area.
5. Each armor section in the scroll is self-contained: scripture text, Greek word, Roman context, body-part map (a small inline diagram), application habits, and cross-references.
6. Below the six pieces: the prayer section ("How the Armor Works") as a visually distinct band — different background texture, slightly wider layout.
7. Below prayer: the cross-reference chart, presented as a full-width table.
8. Page ends with a brief closing thought.

### 3. Information hierarchy

- Top level: The warrior as a whole — the visual anchor and orientation device
- Second level: The enemy (why the armor is needed) — encountered before exploring pieces
- Third level: The six armor pieces in donning order (feet to head)
- Fourth level: Prayer as the animating discipline
- Fifth level: Cross-reference chart for reference and comparison

### 4. Navigation model

No separate pages. No tab system. Navigation is scroll-based with two supplements:

- A compact sticky "piece indicator" in the corner of the screen (small icons, no text labels, desktop only) shows which piece the visitor is currently reading. Clicking any icon scrolls directly to that piece's section.
- The warrior figure's piece highlights serve as ambient wayfinding — the visitor always knows where they are in the sequence because the figure shows it.
- All panels (enemy panel, any detailed Greek or Roman expandable) open as drawers or popovers anchored to the warrior side — they do not interrupt the scroll position.

### 5. Major page/section types

- **Hero band** — warrior figure with darkness, title, anchor verse
- **Enemy drawer** — opens from darkness click; closes without losing scroll position
- **Armor section** — one per piece (six total); each is a scroll section containing all panel content
- **Prayer band** — visually distinct section below the six pieces
- **Cross-reference chart** — table section
- **Closing band** — brief

The entire experience is one HTML document. No routing required.

### 6. How the warrior diagram is positioned and how the panels work

**Desktop:** The warrior is sticky, occupying the left 45% of the screen from the moment the visitor passes the hero. As the visitor scrolls through each armor section on the right, the corresponding piece on the warrior is highlighted — a warm glow or subtle watercolor-consistent brightening on that piece. The warrior returns to neutral (all pieces visible, none highlighted) when the visitor is between sections or on the prayer/chart sections.

**Panel behavior:** There are no modal overlays for the six armor pieces. All content for each piece is inline in the scroll on the right side. The warrior is annotation, not navigation. The only panels that open as drawers are the enemy darkness (ARMOR-0007) and optionally the Greek/Roman detail (expandable within each section). This keeps the reading experience uninterrupted.

### 7. How the cross-reference chart appears

A full-width table section near the bottom of the page. The table has columns: Passage | Standard Work | Armor Piece(s). Rows are color-coded by standard work (a subtle background tint, not heavy color). On mobile the table collapses to a card-per-row layout with the passage as the heading.

### 8. How the prayer/"How the armor works" section appears

A distinct horizontal band with a slightly different background (parchment texture or a slightly warmer tint than the main background). It sits between the sixth armor piece (sword) and the cross-reference chart. It is not part of the sticky warrior panel — the warrior fades or moves out of the sticky position at this point, signaling a transition to a different mode. The content covers Ephesians 6:18, the D&C 27:18 unity-in-prayer addition, and the overarching principle that prayer is how all six pieces are put on and kept active.

### 9. How the enemy darkness panel works

The faded darkness is visible in the watercolor composition from the first moment — atmospheric wisps at the margins of the warrior figure. It does not look like a button; it looks like part of the painting. A subtle animated shimmer (reduced-motion alternative: a dotted border) and small "learn more" text below the figure invite interaction.

Clicking or tapping anywhere in the darkness region opens a side drawer (desktop: slides in from the right; mobile: slides up from the bottom). The drawer contains:
- Ephesians 6:12 KJV text in a scripture style block
- Four Greek titles in a small table (KJV phrase | Greek | Meaning)
- JS-H 1:15–17 quotation in a distinct indented block, framed as "A real encounter with these powers"
- A close button (X) and swipe-to-dismiss on mobile

The warrior figure dims slightly while the drawer is open, focusing attention on the content.

### 10. Mobile behavior

- The warrior is not sticky on mobile. It appears as a full-width hero image at the top of the page.
- Tapping a piece of the warrior image (touch targets defined by hotspot areas over the image) jumps the visitor to that section further down the page — a skip-to function rather than a panel overlay.
- Each armor section appears as a full-width card with its content below the figure.
- The piece indicator (navigation strip) appears at the bottom of the mobile viewport as a horizontal strip of small icons — thumb-reachable.
- The enemy drawer slides up from the bottom (sheet pattern).
- The cross-reference table becomes a vertical card stack.

### 11. Accessibility considerations

- The warrior is `<img>` with alt text: "A warrior dressed in the armor of God as described by Paul in Ephesians 6." Each highlighted piece is announced via an aria-live region when scroll changes the active piece.
- All interactive elements (darkness region, piece hotspots on mobile, drawer close button) have visible focus indicators and keyboard support (Enter/Space to open, Escape to close).
- Scroll-triggered highlighting uses `IntersectionObserver` — no animation is required; motion can be disabled entirely with `prefers-reduced-motion` and the highlighting is achieved with opacity change rather than transition.
- Color contrast targets: body text 7:1, scripture quotations 4.5:1 minimum on their background, piece indicator icons 3:1.
- Semantic HTML: each armor section is `<article>` with a `<h2>` heading. The enemy drawer is `role="dialog"` with `aria-labelledby`.
- Skip-to-content link at the top of the document.

### 12. Strengths

- The scroll metaphor maps naturally to "putting on" armor — visitors experience the sequence Paul wrote.
- No learning curve: scrolling is the most universal navigation pattern on the web.
- The sticky warrior gives constant orientation without requiring any interaction.
- All content is always accessible without requiring a click — good for assistive technology and for visitors who simply prefer to read.
- Minimal JavaScript surface area: sticky positioning is CSS, scroll highlighting is IntersectionObserver, drawers are simple show/hide.

### 13. Trade-offs and risks

- **Desktop real estate:** The sticky warrior consumes significant horizontal space on mid-width screens (1024–1280px). The reading column will feel narrow at these widths if not carefully proportioned.
- **Scroll fatigue:** Visitors who only want a single armor piece must scroll through everything above it (mitigated by the piece-indicator jump links, but still requires discipline in implementation).
- **Piece highlighting fidelity:** Highlighting the correct piece on the warrior figure as the visitor scrolls requires accurate hit detection against the illustration's composition. If the warrior image is a raster watercolor, hover/highlight states will need to be implemented as SVG overlays or transparent `<area>` maps layered over the image — technically workable but requires knowing the final illustration dimensions.
- **No clear "entry point" for return visitors** who want a specific piece quickly. The piece indicator helps, but it is a secondary pattern, not the primary one.

### 14. Why this concept fits this specific content

Paul's armor passage is itself a sequence. He dresses the soldier from the midsection outward in the order a Roman would don the equipment. The scroll structure respects that sequence rather than flattening it into a navigation grid. The sticky warrior rewards visitors who want to see the whole picture while giving inline depth to those who want to study each piece carefully. The content volume per piece — Greek word, Roman context, body-part map, application, cross-references — is substantial enough that revealing it as a scroll section (rather than a modal) keeps the reading experience comfortable and avoids the "modal within modal" problem that can develop when panel content is rich.

---

## Concept B — The Armory

**Structure type:** Diagram-first, modal-complete — the warrior is the entire interface; content lives inside full-screen overlays

### 1. Memorable concept name

The Armory — a place where you go to inspect each piece of equipment individually. You do not read about armor; you walk up to it, pick it up, examine it, and put it back. The warrior figure is the entire navigation system. Clicking a piece opens a world for that piece alone.

### 2. Primary user journey

1. Visitor lands. The warrior fills the entire viewport — edge to edge, vertically centered. No hero text, no scroll prompt. The figure and the darkness around it are the only things visible. A minimal title and a brief instruction ("Select a piece of armor to study it") appear in a small typographic bar at the very top.
2. The visitor's eye is drawn to the figure. The faded darkness pulses. One piece of armor has a faint warm glow on initial load — not a highlighted state, more like early morning light touching one edge of the figure — an invitation without prescription.
3. The visitor taps or clicks the darkness. A full-screen overlay appears, covering the warrior completely. It presents the enemy content (Eph. 6:12, four titles, JS-H 1:15–17) against a background that echoes the darkness texture. A back button (top left, or swipe right) returns to the warrior.
4. The visitor taps or clicks an armor piece. A full-screen overlay opens. All content for that piece fills the screen: scripture text at the top, then Greek word, Roman context, body-part map, application habits, cross-references. The visitor reads at their own pace, scrolls within the overlay if content exceeds the viewport.
5. The visitor closes the overlay (back button, X, or Escape). They are back at the warrior. The piece they just read has a subtle completed state — a gentle warm ring or a faint change in tone — so they can track which pieces they have visited.
6. After exploring all pieces, the visitor scrolls past the warrior. Below the fold (the first scroll action reveals this): the prayer section, then the cross-reference chart.
7. Optional: A "Read all" button at the bottom of the warrior screen links to a flat reading-mode version of all content — the same information without the interaction model, for visitors who prefer linear text.

### 3. Information hierarchy

- Top level: The warrior figure as a whole — environment, navigation, and dramatic context simultaneously
- Second level: Individual pieces (accessed via overlay) — each piece is self-contained and complete
- Third level: Prayer section (below the warrior, requires scroll)
- Fourth level: Cross-reference chart (below prayer)

The hierarchy is radial rather than linear. All six pieces are equally accessible from the warrior; there is no implied order (though a "Start here" nudge can suggest a starting point).

### 4. Navigation model

The warrior is the navigation. There is no persistent nav bar, no tabs, no sidebar. The only navigation chrome is:
- The piece overlays (back button within each)
- A minimal "visited" state on the warrior (which pieces have been opened)
- Scroll below the warrior to reach prayer and chart
- Optional: a "Guide" button in the top bar that opens a simple list of all seven interactive elements with links — a fallback for visitors who cannot interact with the figure (accessibility or device limitations)

### 5. Major page/section types

- **Warrior stage** — full-viewport, the interactive figure; this is not a "section," it is the application
- **Piece overlay** — one per armor piece (six); full-screen, scrollable within
- **Enemy overlay** — the darkness panel; full-screen
- **Prayer section** — below the warrior, revealed on first scroll; standard reading section
- **Cross-reference chart** — table section below prayer
- **Read-all mode** — optional; a flat single-column view of all armor content, toggled by a button

This concept uses `position: fixed` overlays rather than routes or separate pages. All content is in the DOM; overlays show and hide via JS class toggling.

### 6. How the warrior diagram is positioned and how the panels work

**Desktop:** The warrior is centered, vertically and horizontally, in the viewport. It is sized so that each piece is large enough to be a comfortable click target (minimum 48×48px hit area). The darkness extends to the viewport edges — it is not a contained box but fills the background behind and around the figure.

**Overlays:** Each piece's overlay takes the full screen. The overlay background is a soft off-white or warm parchment (consistent with the illuminated-manuscript direction) rather than a harsh white or a dark background. Overlays slide in from the right (or up on mobile). An `aria-modal` trap keeps keyboard focus inside.

**Visited state on warrior:** After closing an overlay, the visited piece on the warrior gains a very subtle change — perhaps the piece appears slightly more "settled" or has a thin warm ring. This is a soft affordance, not a progress bar or score.

### 7. How the cross-reference chart appears

Below the prayer section, full-width. Same table structure as Concept A: Passage | Standard Work | Piece(s). Because this concept positions everything else above it, the chart functions more as a reference appendix for visitors who want it — it does not compete with the primary interaction. On mobile, it becomes a vertical card stack.

### 8. How the prayer/"How the armor works" section appears

The first thing below the warrior stage. The visitor's first scroll down reveals it. It is a horizontal band with a visual transition from the warrior's background (the darkness gradually dissolving into the parchment background of the reading sections). The content is identical in substance to the other concepts but it is read in a different sequence — after the visitor has explored all the armor pieces, prayer as "how it all works" lands differently than if it is read first.

### 9. How the enemy darkness panel works

The darkness is embedded directly in the warrior composition. It does not look like a button or a region — it looks like the painting's atmosphere. A single line of small text below the warrior reads: "What are we facing?" with a subtle tap/click cue.

Clicking or tapping the darkness opens the enemy overlay full-screen, consistent with how armor piece overlays work. The background of the overlay uses the darkness texture rather than parchment. The visitor reads:
- Ephesians 6:12 in a large scripture block
- The four-title table
- JS-H 1:15–17 in a framed quotation block
- Brief explanatory copy (two to three sentences, not a sermon) connecting the two

Closing returns to the warrior.

### 10. Mobile behavior

- The warrior is fully visible in portrait orientation without scroll — it may need to be slightly compressed vertically or the figure repositioned so touch targets are accessible.
- Piece touch targets are defined as invisible `<button>` elements layered over the image using absolute positioning and percentage-based coordinates (relative to the image container). Each target has a visible focus ring and an aria-label.
- Overlays on mobile slide up from the bottom as a sheet (max-height: 92vh, scrollable inside, with a drag handle indicator).
- The "Guide" button is more prominent on mobile — some visitors will not intuitively know to tap the figure.
- Prayer and chart sections scroll normally below the warrior stage on mobile, just as on desktop.

### 11. Accessibility considerations

- The warrior figure itself is a decorative image; all interaction is on the transparent `<button>` elements layered over it. Each button has `aria-label` (e.g., "Open the Belt of Truth panel") and `aria-expanded`.
- The "Guide" button is the guaranteed accessible path — it opens a list of all interactive elements as links. This is also the keyboard path: Tab moves through each piece button in reading order (belt to sword), then the darkness button.
- All overlays use `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing to the overlay's heading, and focus trap. Focus returns to the triggering button on close.
- `prefers-reduced-motion`: the visited-state change is instant (no transition); overlay appears instantly rather than sliding.
- Color contrast: same targets as Concept A. The darkness overlay uses light text on dark background — verify contrast for the four-title table specifically.
- A `<noscript>` fallback renders a plain linked list of all sections so non-JS visitors can access content.

### 12. Strengths

- The warrior is not a decoration beside a text column — it is the experience. This is the most faithful realization of the locked design intent.
- Full focus per piece: when a visitor opens the belt panel, nothing else competes for attention. This encourages deeper reading.
- The absence of a traditional navigation structure makes the site feel distinct — it does not look or behave like a blog post or a manual chapter.
- The "completed" state on the warrior gives natural closure without gamification. There is no score, no badge — just a quiet indication that you have been through each piece.
- The overlay pattern scales cleanly: adding future pieces or expanding content within a piece does not require restructuring the page.

### 13. Trade-offs and risks

- **Discoverability risk:** Some visitors will not know to click the warrior. The instruction text and the "Guide" button mitigate this, but the affordance is less immediately obvious than a scroll-down interface.
- **Content depth per overlay:** Each armor piece has substantial content (scripture, Greek, Roman history, body map, application, cross-references). An overlay that scrolls 2–3 viewport heights is not wrong, but it asks the visitor to scroll within a modal — this can feel disorienting on mobile if not handled carefully.
- **Illustration dependency:** This concept depends most heavily on the final warrior illustration. If the figure is small, piece hit targets become cramped. If it is very tall, mobile needs careful handling. The concept requires knowing approximate figure proportions before implementation begins.
- **Prayer section timing:** Moving prayer below the warrior means some visitors may never scroll to it. A brief teaser at the bottom of the warrior stage ("The armor requires one more thing — scroll to continue") can mitigate this.
- **No guaranteed reading sequence:** A visitor could open the sword before the belt, which is the opposite of the donning order. Whether this is a problem depends on whether sequential understanding matters; for this content, it probably does not — each piece stands on its own.

### 14. Why this concept fits this specific content

The six pieces of armor are, theologically, distinct practices — not a narrative sequence. The belt is not a prerequisite for the breastplate. Presenting them as equal, independently accessible objects on the warrior figure honors that structure. The concept also creates the most visceral connection between the visual metaphor and the study — the visitor literally interacts with the armor, choosing each piece one at a time. For a site whose central image is a warrior dressed for battle, making that warrior the interface rather than an illustration-beside-text is the most structurally honest choice.

---

## Concept C — The Study Table

**Structure type:** Two-pane reference environment — warrior persistent on one side, structured study content on the other; the cross-reference chart is a peer section, not a footnote

### 1. Memorable concept name

The Study Table — named after the experience of spreading a reference work open on a table: everything in front of you, nothing hidden, deep material available without having to hunt for it. The visitor sits down and works through the armor as a student, not a visitor touring an exhibit.

### 2. Primary user journey

1. Visitor lands. A brief full-width introductory band spans the top — site title, a sentence of framing, and a direct "Begin with the Belt of Truth" prompt (or "Start with why armor matters" pointing to the enemy panel). This is the only guided prompt on the site.
2. The visitor scrolls past the intro band. The page divides into two panes: the warrior (left, 40%) and a content panel (right, 60%). Both panes are visible above the fold on desktop.
3. On initial load, the right pane shows a "Start here" state — the overview of the armor as a complete set. This includes the panoplia concept, Paul's doubled command, and the defensive-posture framing. The warrior shows the full figure with no piece highlighted.
4. The visitor clicks or taps the faded darkness. The right pane transitions to the enemy content. The warrior figure dims slightly — an atmospheric shift. The visitor reads the enemy panel in the right pane, not in an overlay.
5. The visitor clicks or taps an armor piece on the warrior. The right pane transitions to that piece's content. The selected piece is highlighted on the warrior. The pane change is smooth but not animated (or uses a brief cross-fade if motion is acceptable).
6. The visitor can move between pieces by clicking the warrior, or by using the piece navigation — a small vertical strip of piece names in the right pane's sidebar at narrow desktop widths, or an inline "next piece" link at the bottom of each content block.
7. After exploring armor pieces, the visitor scrolls below the two-pane section. The layout collapses to full-width. Below: the prayer section, then the cross-reference chart as a peer section (not a small table but a full, well-designed reference section).
8. The cross-reference chart section has its own sub-navigation: filter by standard work (All | NT | BOM | DC | PGP). Clicking a filter highlights only the relevant rows.

### 3. Information hierarchy

- Top level: The armor as a complete set — the "start here" state in the right pane establishes context before any single piece is studied
- Second level: The enemy (why armor is needed) — accessible first via the darkness click
- Third level: The six armor pieces (any order, user-directed, but with a suggested sequence via the start-here state)
- Fourth level: Prayer — treated as a peer section after the two-pane area, not subordinate to the warrior
- Fifth level: Cross-reference chart — a genuine reference section, not an afterthought

### 4. Navigation model

Hybrid: within the two-pane section, the warrior is the primary navigation. Below the two-pane section, normal vertical scroll takes over. Supplementary navigation:
- A thin piece-list tab strip at the top of the right pane (desktop): belt | breastplate | shoes | shield | helmet | sword. The active piece is indicated. Clicking a tab changes the right pane — identical behavior to clicking the warrior.
- On narrow desktop/tablet: the tab strip collapses to a "< Prev | Next >" control.
- A "Jump to chart" anchor link in the right pane header lets visitors skip directly to the reference section.

### 5. Major page/section types

- **Intro band** — full-width, minimal; context-setting only
- **Two-pane study area** — warrior left, content panel right; sticky on desktop
- **Start-here state** — the default content in the right pane before any piece is selected
- **Enemy pane state** — right pane showing enemy content on darkness click
- **Armor piece pane state** — right pane showing one piece; six states total
- **Prayer section** — full-width below the two-pane area
- **Cross-reference section** — full-width, filterable table with its own heading and framing copy

### 6. How the warrior diagram is positioned and how the panels work

**Desktop:** The warrior occupies the left pane (sticky, full pane height). It is not as large as in Concept B, but it is always visible and always interactive. The right pane is a scrollable reading area that changes based on warrior clicks.

**Panel behavior:** No overlays or drawers. All panel content appears in the right pane. This means the visitor never leaves the two-pane context, never has to return to the warrior from a modal — the warrior is always present beside the content. This is the key structural difference from Concept B.

**Pane content depth:** Because content appears in a scrollable pane rather than a full-screen overlay, the visitor can scroll the pane while the warrior stays fixed. This handles the depth-per-piece problem more gracefully than an overlay. At 60% of screen width, a typical desktop piece panel (scripture + Greek + Roman context + application) fits within one to two pane heights.

### 7. How the cross-reference chart appears

A dedicated full-width section below the two-pane area, with its own `<h2>` heading ("Armor of God Across Scripture"), introductory sentence, and filterable table. The filter controls (All | New Testament | Book of Mormon | Doctrine & Covenants | Pearl of Great Price) appear as pill buttons above the table. Clicking a filter fades unmatched rows and leaves matching ones at full opacity — no rows removed from the DOM, just visually filtered.

The table columns: Reference | Standard Work | Piece(s) | What It Adds. The "What It Adds" column is short — one phrase per row, not a paragraph. For D&C 27 rows this distinguishes which D&C additions correspond to which piece.

### 8. How the prayer/"How the armor works" section appears

A full-width section between the two-pane area and the cross-reference chart. It has a distinct visual weight — perhaps a large pull-quote from Ephesians 6:18 in a classical serif, followed by the explanatory content. The section is explicitly labeled "How the Armor Works" (matching the locked decision) with a subhead distinguishing it from the six wearable pieces.

The D&C 27:18 unity-in-prayer addition is included here, formatted as a callout with the D&C wording beside the Ephesians wording.

### 9. How the enemy darkness panel works

The darkness is visible on the warrior figure in the left pane from the first moment the two-pane layout appears. A line of explanatory text above the warrior reads "The armor is worn against an unseen enemy" with a tap/click nudge on the darkness.

Clicking the darkness changes the right pane to the enemy content state. The warrior in the left pane visually shifts — the figure dims slightly, the darkness takes on more visual weight — while the right pane presents:
- Ephesians 6:12 as a full scripture block
- The four Greek titles in a compact table
- JS-H 1:15–17 in an indented quotation block

A "Return to armor" link or tab at the top of the right pane re-selects the start-here state and restores the warrior to its neutral state.

### 10. Mobile behavior

- The two-pane layout collapses on mobile. The warrior appears as a large image at the top. Below it: a horizontal scrolling strip of piece names (belt | breastplate | shoes | shield | helmet | sword | enemy). Tapping a name reveals that piece's content as a full-width section below the strip.
- Alternatively (if horizontal strips feel awkward for sacred content): a vertical accordion below the warrior, with each piece as a collapsible row. The warrior piece does not highlight on mobile (since the user is below the warrior); instead, the active accordion item has a clear visual state.
- The cross-reference section and prayer section appear below the accordion, in full-width reading layout.
- The cross-reference filter on mobile is a select element or a single horizontal scrolling pill row.

### 11. Accessibility considerations

- The tab strip above the right pane uses `role="tablist"` with `role="tab"` and `aria-selected`. The right pane is `role="tabpanel"` with `aria-labelledby` pointing to the active tab. Keyboard: Tab to reach the strip, arrow keys to move between tabs, Enter/Space to select.
- The warrior click targets (transparent `<button>` elements over the image) are the same as Concept B — each with `aria-label` and `aria-pressed` reflecting whether that piece's pane is currently active.
- On desktop, when a visitor clicks a piece on the warrior, the focus moves to the heading of the right pane's new content. An `aria-live="polite"` region announces the piece name.
- The cross-reference filter buttons use `aria-pressed`. The table uses `<caption>` and `<thead>` / `<th scope>`.
- `prefers-reduced-motion`: pane transitions are instant rather than cross-fading. The darkness shift on enemy click is a simple opacity change.
- The start-here state is the correct initial right-pane content for screen readers arriving in tab order — it provides context before the interactive warrior.
- Color contrast targets same as Concept A.

### 12. Strengths

- The two-pane layout is the most familiar reference-tool pattern — visitors who have used any side-by-side documentation or study interface will orient instantly.
- The warrior is always visible beside the content being read. The visitor never has to remember what the armor looks like — they see it while studying each piece.
- The cross-reference chart is a first-class section rather than a table tucked at the bottom. Visitors who arrive specifically to compare passages across standard works will find it useful as a primary destination.
- The tab strip makes sequencing explicit and voluntary — the visitor can follow the donning order (belt to sword) or jump to any piece.
- The pane-based content model means all six pieces can be preloaded in the DOM with CSS show/hide — fast, no fetch delay, works without complex routing.
- The "start-here" state provides genuine orientation that the other concepts rely on instructional text to supply.

### 13. Trade-offs and risks

- **The classic two-pane can feel utilitarian** — reference-like rather than reverential. The illuminated-manuscript warmth of the palette will need to work harder to counteract this. The warrior and the pane must feel like one composed piece, not a split screen.
- **Desktop-primary assumption is most exposed here.** At 768–1024px, 40/60 column split can become cramped. Careful breakpoint handling (possibly shifting to 35/65 at mid-width, or switching to a stacked layout earlier) is necessary.
- **Warrior size is smaller than Concept B.** In 40% of the screen the figure may feel less impressive than in a full-viewport presentation. If the illustration has fine-grained detail in each piece, it needs to be legible at this smaller scale.
- **The piece tab strip duplicates the warrior as navigation.** Two navigation systems doing the same thing can confuse visitors about which to use. The tab strip and the warrior clicks must stay in sync perfectly, and the visual priority between them needs to be clear.
- **Scroll below the two-pane feels like a different site.** The transition from the sticky two-pane to full-width scroll for prayer and chart can feel abrupt if not handled with a clear visual cue.

### 14. Why this concept fits this specific content

The armor of God is fundamentally a reference text. Serious students of scripture return to it repeatedly — to look up a specific piece, to compare the D&C and Ephesians wording, to trace a cross-reference. The two-pane study table is designed for that repeat-visit behavior. It also honors the cross-reference chart as a study tool in its own right, which fits the project's ambition to document the armor's presence across all four standard works. Visitors who want a guided first experience will find the start-here state and the piece tab strip guiding. Visitors who want to dive directly to the sword or the shield can do so immediately. The concept makes depth available without burying it.

---

## Comparison Summary

| | Concept A — The Standing Order | Concept B — The Armory | Concept C — The Study Table |
|---|---|---|---|
| Primary metaphor | Putting on armor in sequence | Walking into an armory to inspect each piece | Opening a reference work and studying it |
| Warrior role | Ambient companion, annotation | The entire interface and navigation | Persistent side-pane navigator |
| How panels open | Inline scroll sections | Full-screen overlays | Right pane content swap |
| Content sequence | Fixed (feet to head, Paul's order) | User-chosen (any order) | User-chosen (suggested order available) |
| Best for | First-time visitors; narrative learners | Visual-first learners; focused deep study | Return visitors; reference users; comparative study |
| Mobile strength | Good (scroll is universal) | Moderate (overlay depth on mobile is manageable but requires care) | Moderate (two-pane collapses to accordion) |
| JS complexity | Low (IntersectionObserver + drawer) | Medium (overlay management, focus traps) | Medium (tab/pane sync, warrior highlight sync) |
| Cross-reference chart | Below the scroll | Below the warrior stage | First-class section with filter |
| Prayer section timing | Read in sequence before chart | After all overlays, requires scroll | After two-pane, before chart |
| Enemy panel | Drawer from darkness | Full-screen overlay | Right pane state |
| Illustration dependency | Moderate (piece highlight zones needed) | High (click targets depend on final figure size) | Moderate (smaller figure; less precision needed) |

---

## Visualization Notes Applicable to All Concepts

### The warrior figure as navigation — misreading risk

All three concepts use the warrior illustration as an interactive element. The primary risk of misreading: visitors may not realize the figure is interactive without clear visual affordance. Mitigation:

- A visible instruction line on initial load ("Tap a piece of armor to explore it") that fades after first interaction
- A "Guide" or piece list as a guaranteed non-visual path to all content
- Keyboard tab order traverses all interactive elements (piece buttons + darkness button) so keyboard and screen reader users never depend on the figure

### Cross-reference chart — misreading risk

A table comparing passages across standard works risks implying doctrinal equivalence or that the passages say the same thing. Mitigation:

- The "What It Adds" column (Concept C) or a brief framing sentence (Concepts A and B) before the table clarifies that D&C 27 extends and deepens rather than merely repeats Ephesians 6
- Table caption or introductory sentence states plainly what the table shows

### The darkness as interactive — misreading risk

A clickable darkness surrounding the warrior figure could be interpreted as the site being dramatic or sensationalist about spiritual opposition. Mitigation:

- The darkness in the watercolor is atmospheric, not horror-movie
- The panel content is measured and grounded in scripture — no embellishment
- The JS-H 1:15–17 text is presented in a sober quotation style, not dramatized
- No animation that suggests menace (no flickering, no screaming color contrast)
