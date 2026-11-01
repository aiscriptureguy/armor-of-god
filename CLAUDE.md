# armor-of-god — Project CLAUDE.md

## Project Overview
Study topic: The armor of God metaphor — Ephesians 6:10–18, Book of Mormon, and D&C passages. Each piece examined for Greek/Hebrew word meaning, Roman historical context, cross-scripture parallels, and modern application. Interactive watercolor warrior diagram, Q&A, and cross-reference chart.
Phase: 3 — Development
Gate 0 approved: 2026-10-26
Gate 1 approved: 2026-10-27
Gate 2 approved: 2026-10-28

## Build Commands

No build step. The repository is the deployment artifact.

```bash
# Local development server
python3 -m http.server 8080
# open http://localhost:8080/

# Or use the workspace script
bash ../scripts/dev-server.sh .
```

GitHub Pages deploys automatically from the `main` branch root on push.

## Architecture

Plain HTML + CSS + JS. No framework, no bundler.

- `index.html` — the entire site (one document)
- `armor-data.js` — all content, attaches to `window.ArmorData`
- `app.js` — all interaction logic
- `styles.css` — all styles (imports `fonts.css`)
- `fonts.css` — `@font-face` declarations
- `fonts/` — self-hosted Cormorant Garamond + Inter (WOFF2)
- `assets/warrior.png` — approved warrior illustration

All asset paths are relative, compatible with both localhost and the GitHub Pages base path.

## Key Files
- `study/project-brief.md` — scope and acceptance criteria
- `study/questions.md` — study question priority list
- `study/sources.md` — source ledger (SRC-XXXX)
- `study/research-log.md` — session log
- `architecture/design-direction.md` — approved design (after Gate 2)

## Conventions
- Passage IDs: PASS-XXXX (sequential, padded to 4 digits)
- Source IDs: SRC-XXXX (sequential, padded to 4 digits)
- All passage records in `study/passages/`
- All pattern records in `study/patterns/`

## Links
- Workspace CLAUDE.md: ../CLAUDE.md
- Full workflow: ../SCRIPTURE_STUDY_SITE_WORKFLOW.md
- Writing standard: ../AI-writing-pitfalls.md
