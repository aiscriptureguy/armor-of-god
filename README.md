# Armor of God

An interactive scripture study site exploring the armor of God — Ephesians 6:10–18 — with each piece studied across the Bible, Book of Mormon, and Doctrine and Covenants.

**Published:** https://aiscriptureguy.github.io/armor-of-god/

## Local Development

No build step. Open the files directly in a browser, or run a local server for accurate relative-path behavior:

```bash
python3 -m http.server 8080
# then open http://localhost:8080/
```

Or use the workspace script from the project root:

```bash
bash ../scripts/dev-server.sh .
```

## Content Structure

```
study/
  project-brief.md   — scope and goals
  questions.md       — study questions
  sources.md         — source ledger (SRC-XXXX)
  research-log.md    — session log
  passages/          — passage records (PASS-XXXX.md)
  themes/            — theme notes
  patterns/          — pattern records
  decisions/         — content and design decisions
  open-questions.md  — unresolved questions
  content-audit.md   — content quality audit
architecture/        — UX, content model, design direction
```

## Sourcing and Permissions

Primary source: churchofjesuschrist.org. All material factual and doctrinal claims are traceable to source IDs in `study/sources.md`. No ESV text appears in published content.

## Deployment

GitHub Pages — deployed from the `main` branch, root folder. Pushing to `main` publishes the site. No build step required.

Repository: https://github.com/aiscriptureguy/armor-of-god
