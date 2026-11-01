# Content Model — Armor of God

**Status:** Draft — Phase 2, Gate 1 approved 2026-10-27
**Do not add placeholder doctrine or invented citations.**

---

## Overview

The content model defines stable IDs and the relationships among all entities the site must represent. Every piece of content on the site must trace back to one of these entity types and to at least one approved source record in `study/sources.md`.

---

## Entity Types

### 1. Armor Pieces — ARMOR-XXXX

The six named pieces from Ephesians 6 plus the enemy darkness and the prayer section. Eight interactive elements total, though only six appear on the warrior figure itself.

| ID | Label | Verse(s) | Body part | Greek term | Offensive/Defensive |
|----|-------|----------|-----------|------------|---------------------|
| ARMOR-0001 | Belt of Truth | Eph. 6:14; D&C 27:16 | Loins | perizonnymi (G4024); cingulum | Defensive |
| ARMOR-0002 | Breastplate of Righteousness | Eph. 6:14; D&C 27:16 | Heart/chest | thorax (G2382); lorica | Defensive |
| ARMOR-0003 | Shoes of the Gospel of Peace | Eph. 6:15; D&C 27:16 | Feet | hupodeo (G5265); caligae | Defensive |
| ARMOR-0004 | Shield of Faith | Eph. 6:16; D&C 27:17 | Whole body (mobile) | thyreos (G2375); scutum | Defensive |
| ARMOR-0005 | Helmet of Salvation | Eph. 6:17; D&C 27:18 | Head | perikephalaia (G4030); galea | Defensive |
| ARMOR-0006 | Sword of the Spirit | Eph. 6:17; D&C 27:18 | Hand/arm (weapon) | machaira (G3162); rhema (G4487); gladius | Offensive |
| ARMOR-0007 | The Enemy / Faded Darkness | Eph. 6:12; JS-H 1:15–17 | n/a | archai, exousiai, kosmokratores, pneumatika | n/a |
| ARMOR-0008 | Prayer — How the Armor Works | Eph. 6:18; D&C 27:18 | n/a | n/a | n/a — animating practice |

**Display rule:** ARMOR-0001 through ARMOR-0006 are interactive elements on the warrior figure. ARMOR-0007 is the clickable faded darkness surrounding the figure. ARMOR-0008 is a separate section below the diagram, not part of the figure.

---

### 2. Passages — PASS-XXXX

Stable references to scripture passages studied and verified. Each panel draws from one or more passage records.

| ID | Reference | Volume | Role on site |
|----|-----------|--------|--------------|
| PASS-0001 | Ephesians 6:10–18 | New Testament (KJV) | Primary passage — foundation of all six armor pieces |
| PASS-0007 | D&C 27:15–18 | Doctrine and Covenants | Restoration restatement — adds D&C-specific content to shoes and sword panels; breastplate footnote |
| PASS-0008 | 1 Nephi 15:24 | Book of Mormon | Shield panel — iron rod quenches fiery darts |
| PASS-0009 | 2 Nephi 1:23 | Book of Mormon | Cross-reference chart — "armor of righteousness" |
| PASS-0002 | Isaiah 59:17 | Old Testament | Background only — not published per DEC-0003 |
| PASS-0003 | Isaiah 11:5 | Old Testament | Background only — D&C 27 footnote; not published |
| PASS-0010 | Alma 56–57 (stripling warriors) | Book of Mormon | Background only — not published per DEC-0005 |
| PASS-0011 | JS-H 1:15–17 | Pearl of Great Price | Enemy panel — Sacred Grove encounter as parallel to Eph. 6:12 |
| PASS-0012 | JS-H 1:35 | Pearl of Great Price | Breastplate panel — physical breastplate delivered by Moroni per DEC-0004 |
| PASS-0013 | 1 Thessalonians 5:8 | New Testament (KJV) | Background only — "hope of salvation" variant; not published per DEC-0003 |
| PASS-0014 | 2 Corinthians 4:4 | New Testament (KJV) | Background only — D&C 27:16 footnote cross-reference |
| PASS-0015 | Matthew 4:4, 7, 10 | New Testament (KJV) | Sword panel — Jesus using rhema in the wilderness temptations |

**Note:** PASS-0002 through PASS-0003 and PASS-0010 through PASS-0015 are assigned IDs here for traceability. Passages marked "background only" must not appear in published site content; they inform the content model only.

---

### 3. Armor Panel Content Blocks

Each armor piece panel (ARMOR-0001 through ARMOR-0006) contains the following structured content blocks. Each block maps to a source record.

| Block | Description | Sources |
|-------|-------------|---------|
| `scripture_text` | KJV verse text (Ephesians primary; D&C where applicable) | PASS-0001, PASS-0007 |
| `greek_word` | Greek term, Strong's number, transliteration, and meaning | SRC-0005 |
| `roman_context` | Roman military equipment description and function | SRC-0006 |
| `body_protection` | Body part protected and spiritual domain | SRC-0003, SRC-0004 |
| `application` | Daily habits — two to four per piece | SRC-0003, SRC-0004 (THEME-0001) |
| `cross_references` | Linked passages from other standard works | per piece |
| `dc_addition` | D&C 27 wording and what it adds (shoes and sword panels only) | PASS-0007 |
| `restoration_note` | Breastplate panel only — Urim and Thummim / JS-H 1:35 | PASS-0012, SRC-0008 |
| `bom_link` | Shield panel only — 1 Ne. 15:24 | PASS-0008 |

---

### 4. Enemy Panel Content Blocks — ARMOR-0007

| Block | Description | Sources |
|-------|-------------|---------|
| `anchor_verse` | Ephesians 6:12 KJV text | PASS-0001 |
| `four_titles` | Four Greek terms with one-line explanation each | SRC-0005 |
| `jsh_connection` | JS-H 1:15–17 verbatim text and brief framing | PASS-0011, SRC-0001, SRC-0011 |

---

### 5. Cross-Reference Chart

A structured table showing which passages from each standard work touch the armor theme. Published on the site as a standalone section.

| Passage | Standard work | Piece(s) addressed | Published |
|---------|--------------|-------------------|-----------|
| Ephesians 6:10–18 | New Testament | All six | Yes |
| D&C 27:15–18 | Doctrine and Covenants | All six (with additions) | Yes |
| 1 Nephi 15:24 | Book of Mormon | Shield (fiery darts) | Yes |
| 2 Nephi 1:23 | Book of Mormon | Breastplate (armor of righteousness) | Yes |
| JS-H 1:35 | Pearl of Great Price | Breastplate (physical breastplate) | Yes |
| JS-H 1:15–17 | Pearl of Great Price | Enemy panel | Yes |

**Decided:** Isaiah passages excluded per DEC-0003. Stripling warriors excluded per DEC-0005.

---

### 6. Sources — SRC-XXXX

All factual and doctrinal claims must carry a source ID. The full ledger lives in `study/sources.md`. Key sources for the site's published content:

| ID | Type | Use on site |
|----|------|-------------|
| SRC-0001 | churchofjesuschrist.org scripture | KJV text for all passages |
| SRC-0003 | Institute Student Manual | Body-part mapping, spiritual domains |
| SRC-0004 | Seminary Teacher Manual 2023 | GA teaching citations, application content |
| SRC-0005 | Blue Letter Bible (Greek data) | Greek terms and definitions |
| SRC-0006 | Wikipedia (Roman military equipment) | Roman historical context |
| SRC-0008 | churchofjesuschrist.org (D&C 27 footnotes) | D&C cross-reference data |
| SRC-0010 | Elder Carlos E. Asay, Ensign August 1997 | Temple garment / breastplate connection |
| SRC-0011 | churchofjesuschrist.org (JS-H) | Sacred Grove enemy encounter text |

---

### 7. Relationships

```
ARMOR-XXXX
  ├── has_one scripture_text    → PASS-XXXX
  ├── has_one greek_word        → SRC-0005
  ├── has_one roman_context     → SRC-0006
  ├── has_one body_protection   → SRC-0003, SRC-0004
  ├── has_many application      → SRC-0003, SRC-0004
  └── has_many cross_references → PASS-XXXX

PASS-XXXX
  ├── belongs_to volume         → NT | BOM | DC | PGP
  └── cited_by                  → ARMOR-XXXX

ARMOR-0007 (enemy panel)
  ├── cites PASS-0001           → Eph. 6:12 anchor
  ├── cites PASS-0011           → JS-H 1:15-17
  └── greek_terms               → four titles from SRC-0005

Cross-reference chart
  └── aggregates                → PASS-0001, PASS-0007, PASS-0008, PASS-0009, PASS-0011, PASS-0012
```

---

### 8. Content Status Fields

Every content block in the data layer must carry:

- `source_ids` — one or more SRC-XXXX values
- `verified` — boolean; false if flagged with ⚠️ in study notes (GA quotes cited in curriculum but not independently verified)
- `publication_status` — draft | reviewed | approved

No block with `publication_status: draft` should render in the final production build.

---

### 9. Data Layer Strategy

Content should be stored as structured JSON (or equivalent) separate from presentation. A single data file (e.g., `armor-data.json` or `armor-data.js`) should contain:

- All six armor piece objects, keyed by ARMOR-ID
- The enemy panel object (ARMOR-0007)
- The prayer section object (ARMOR-0008)
- The cross-reference chart rows
- Each object containing all content blocks with source IDs

This separation allows content to be updated or audited without touching the rendering code. The technical plan will specify the exact format after Gate 2.
