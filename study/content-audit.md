# Content Audit

Run the content-auditor agent to populate this file before Gate 1 and Gate 3.

## Last audit date
2026-10-27 — pre-Gate 1 audit by content-auditor agent

## Post-fix status (2026-10-27)
All 3 blockers addressed: Asay quote re-labeled with ⚠️ pending direct confirmation; Hales attribution given SRC-0004 tag and ⚠️; Alma 43:21 inline citation added to PASS-0010. Key warnings addressed: Paul intent claims labeled as interpretation; rhema frequency count tagged SRC-0005; Hebrew claims in PASS-0003 flagged for future Hebrew source loop; Ballard ⚠️ flag added to THEME-0001 opening; Matthew 4 reference added to THEME-0001 sword section. Remaining open items (non-blockers for Gate 1): dating claims (conventional scholarly dates, no Church source), SRC-0006 article specificity, a handful of missing inline tags for Roman equipment details. These are acceptable at Gate 1; must be resolved before Gate 3.

---

## Blockers (must be resolved before release)

- [study/themes/THEME-0001-practical-application.md, "Breastplate of righteousness" section, line ~45] Quoted text attributed to SRC-0010 (Elder Asay, Ensign August 1997): "It is written that 'the white garment symbolizes purity and helps assure modesty...a token of what Paul regarded as taking upon one the whole armor of God (Eph. 6:13).'" The SRC-0010 notes entry states "Some passages summarized by WebFetch AI — only sentences marked as verbatim should be treated as exact quotes." This quotation is presented as verbatim ("Exact quote from SRC-0010:") but was retrieved via WebFetch, which may have altered the wording. The quotation is not confirmed against the canonical URL. A verbatim quote presented with that label must be confirmed by direct retrieval from the canonical URL before publication.

- [study/themes/THEME-0001-practical-application.md, "What General Conference teaches" section, final line] Elder Robert D. Hales is listed as a GA teaching on record — "modern temptations are more accessible than ever; the armor is urgently needed" — with no SRC-XXXX reference and no talk title, date, or canonical URL. This speaker attribution does not appear in any source ledger entry. SRC-0004 (Seminary Teacher Manual) lists Harold B. Lee, M. Russell Ballard, Neal A. Maxwell, Carlos E. Asay, and Robert D. Hales in its Claims supported field, but SRC-0004's own notes confirm that "GA quotes referenced in this manual are NOT yet verified against the original individual talks." The content paraphrase for Hales has no source ID at all — not even the manual citation that the other four carry.

- [study/sources.md] SRC-0009 appears out of numerical order in the ledger — it is listed after SRC-0011. This is not a blocker on its own, but if a validator script processes entries sequentially it will fail to find SRC-0009 in the expected position. More importantly: the SRC-0009 entry covers Alma 43:18–21, but PASS-0010 body text cites the Alma 43 passage ("Alma 43:18–21 / Lamanites were 'exceedingly afraid... because of their armor, notwithstanding their number being so much greater than the Nephites'") without any inline SRC-XXXX tag. Every material factual claim requires a traceable source ID in the content itself, not only in the ledger.

## Warnings (should be resolved; flag to user if not)

- [study/passages/PASS-0001-ephesians-6-10-18.md, "Important words and phrases" section, Greek data header] States "Roman context from SRC-0006 Wikipedia." Multiple Roman military details follow — the lorica segmentata described as "tested as 'impenetrable to most direct hits and missile strikes'" (belt section, line ~88); the lorica hamata described as lasting "decades" (line ~89); the cingulum described as making "a distinctive sound when the soldier moved" (line ~84). These specific details are attributed only to SRC-0006 (Wikipedia). Wikipedia is approved for Roman historical context only, but the particular quoted phrase "impenetrable to most direct hits and missile strikes" appears in quotation marks with no article title or URL narrower than the general Wikipedia domain. The exact article and the exact wording behind that quoted phrase should be traceable to a specific Wikipedia article URL confirmed in SRC-0006.

- [study/passages/PASS-0001-ephesians-6-10-18.md, "Important words and phrases," helmet section, line ~122] "Lexicon note: the helmet represents 'the protection of the soul which consists in (the hope of) salvation'" — this is presented as a lexicon note with no SRC-XXXX tag. SRC-0005 (Blue Letter Bible) is listed at the top of the words-and-phrases header, but the attribution is not explicitly repeated here. Should carry an explicit SRC-0005 tag.

- [study/passages/PASS-0001-ephesians-6-10-18.md, "Important words and phrases," belt section, line ~81] "Roman soldiers 'ungirded themselves' as a sign of going off duty or surrendering" — this detail is attributed to SRC-0006 (Wikipedia) at the top of the section but the specific sourced claim is not called out with a SRC tag inline. If the source was not directly confirmed for this specific claim (ungirding = surrender), it should be flagged.

- [study/passages/PASS-0001-ephesians-6-10-18.md, "Important words and phrases," shield section, line ~107] "Paul's word choice is deliberate: he did not choose the small round shield. He chose the word for the largest, most body-covering shield in the Greek military vocabulary" — this is analytical interpretation of Paul's intent, not a plain textual observation. It is presented in the "Important words and phrases" section without a label distinguishing interpretation from observation.

- [study/passages/PASS-0001-ephesians-6-10-18.md, "Important words and phrases," rhema section, line ~137] "Used 70 times in NT (translated 'word' 56x, 'saying' 9x)" — this count is presented as a fact with no SRC-XXXX tag. The section header attributes Greek data to SRC-0005, but the count is a specific statistic that needs the explicit attribution carried through, not implied from the section header.

- [study/passages/PASS-0001-ephesians-6-10-18.md, "Important words and phrases," machaira section, line ~129] "The Roman equivalent was the gladius (~60cm, leaf-shaped blade, worn on the right hip)" — this specific equipment detail (60cm length, leaf-shaped, worn on right hip) requires SRC-0006 citation inline, not only in the section header.

- [study/passages/PASS-0001-ephesians-6-10-18.md, "Official Church teachings," GA quotes block, lines ~215–222] Four GA quotes are presented with the note "⚠️ Quote not yet verified — referenced in Seminary Teacher Manual." These are already flagged. Noted here to confirm the existing flags were found. (See NOTE section.)

- [study/passages/PASS-0001-ephesians-6-10-18.md, "The enemy" section, line ~171] "The KJV editors treat the First Vision encounter as a direct example of the 'principalities and powers' Paul names in verse 12." This is an interpretive claim about editorial intent. The footnote cross-reference exists (verified, SRC-0011), but concluding that the cross-reference means the editors "treat" the Vision as a direct example is an interpretation beyond what the footnote itself states. It is not labeled as interpretation in this location.

- [study/passages/PASS-0002-isaiah-59-14-21.md, "Possible patterns," line ~70] "Paul edits out vengeance: The garments of vengeance and cloak of zeal that describe God's judgment are absent from Paul's list entirely. Paul's version of the armor has no retributive element — it is purely protective and redemptive. This is an observation worth noting as intentional." The word "intentional" attributes deliberate editorial intent to Paul without a source. The rest of the sentence describes the textual difference correctly, but characterizing the omission as "intentional" crosses from observation into interpretation. No SRC-XXXX supports attributing intent to Paul here.

- [study/passages/PASS-0003-isaiah-11-5.md, line ~43] "'Reins' (Hebrew: kilyah) refers to the kidneys, understood in Hebrew thought as the seat of the inner being, conscience, and deepest moral convictions" — this linguistic and cultural-anthropological claim has no SRC-XXXX tag. It may draw on SRC-0005 (Blue Letter Bible), but the source is not cited here and SRC-0005 is a Greek, not a Hebrew, lexicon. The Hebrew reference needs its own source citation.

- [study/passages/PASS-0003-isaiah-11-5.md, line ~59–60] "Faithfulness and truth are closely linked in both Hebrew (emunah) and Greek (aletheia / pistis) thought" — this comparative linguistic claim has no SRC-XXXX tag.

- [study/passages/PASS-0004-1-thessalonians-5-8.md, header] The dating "~50–51 AD" for 1 Thessalonians and "~60–62 AD" for Ephesians (repeated in PAT-0003) is presented as fact. No SRC-XXXX supports these dates. SRC-0007 covers the scripture texts but does not record any dating claim.

- [study/passages/PASS-0010-stripling-warriors.md, "Note on physical armor" section, line ~56] "The Lamanites are 'exceedingly afraid... because of their armor, notwithstanding their number being so much greater than the Nephites' (43:21)" — this is presented as a quote from Alma 43:21. The passage record carries SRC-0001 and SRC-0009, and SRC-0009 does cover Alma 43:18–21. However, the inline quote itself is not tagged with a SRC-XXXX. The body of the note should carry the citation inline rather than relying solely on the header source list.

- [study/themes/THEME-0001-practical-application.md, "Shoes" section, line ~60] "the Roman caligae (hobnailed boots) gave grip and endurance; spiritual shoes mean stability in the long walk, not just a sprint" — the Roman military context detail is plausible from SRC-0006, but no SRC tag appears here. The application claim ("not just a sprint") is not attributed to any Church source.

- [study/themes/THEME-0001-practical-application.md, "Sword of the Spirit" section, line ~104] "Jesus modeled this in the temptations in the wilderness — each of Satan's three attacks was met with a specific, exact scripture applied to the specific attack ('It is written...')" — this claim is accurate but has no SRC-XXXX citation. The relevant Gospel texts (Matthew 4 / Luke 4) are not listed in the source ledger and no passage record exists for them. The claim is also a doctrinal application beyond the Ephesians 6 text itself and needs a Church source or at minimum the scripture reference tagged.

- [study/themes/THEME-0001-practical-application.md, "How to put on the armor" opening section, line ~13] President M. Russell Ballard: "numerous smaller acts woven together" — the notes acknowledge this is unverified from the original talk, but this is the first time the quote appears without the ⚠️ flag that it carries in PASS-0001. The flag is present later in PASS-0001 but not at this first appearance in THEME-0001 line ~13.

- [study/sources.md] SRC-0010 notes: "Some passages summarized by WebFetch AI — only sentences marked as verbatim should be treated as exact quotes." This warning is in the ledger but the corresponding risk — that non-marked text from that retrieval may appear in study notes — has partially materialized (see Blocker above). The ledger note does not constitute clearance; it identifies a risk that must be resolved before any SRC-0010 content appears in publishable content.

## ESV Flags (require user decision)

- CLEAR — No ESV text appears in any of the audited files. All passages carry the note "ESV (research only — not approved for publication yet)" or "n/a (Restoration scripture)." No ESV quotations are reproduced. No permissions review is required for the current study-note content, but ESV is approved for research use only and must not enter published content without completing the permissions review step defined in the workflow.

## AI Prose Flags

- [study/passages/PASS-0007-dc-27-15-18.md, "What the Restoration context adds" section, lines ~97–103] Five-item numbered list. Items 1–5 follow a "The X is Y" or "The X includes Z" structure that reads as formulaic parallelism. Each item is grammatically clean and semantically clear, so this is a mild flag rather than a serious one — but the mechanical parallel structure of five items in identical syntactic form is a sign of list-compulsion (AI Pitfall: Exact Bullet Points / Rule of Three extended to five).

- [study/themes/THEME-0001-practical-application.md, "Belt of truth" section, line ~31] "The belt holds everything else in place — truth is the foundation piece that makes the other armor function" — this is clear and accurate, but "foundation piece that makes the other armor function" is a mildly generic metaphor. Minor.

- [study/themes/THEME-0001-practical-application.md, "Sword of the Spirit" section, line ~105] "The sword is not swung in the abstract; it is used in a particular moment against a particular attack" — this is a "not X; it is Y" contrastive frame (AI Pitfall: Contrastive Framing). The point is valid; the phrasing pattern is mechanical.

- [study/themes/THEME-0001-practical-application.md, "Shield of faith" section, line ~75] "The shield is the only piece given a specific named threat to counter and is the only piece described as protecting the *whole* body. Paul names it 'above all'..." — two "only" statements in succession is a mild emphasis pattern. Not severe but worth reviewing for variety.

- [study/patterns/PAT-0002-wearer-shift.md, "What this pattern may mean" section, lines ~43–45] "The armor is not a set of behaviors to perform; it is participation in the character of Christ himself." — this is a "not X; it is Y" contrastive frame (AI Pitfall: Contrastive Framing). The sentence is theologically substantive, not empty — but the structure is the most recognizable AI-prose framing pattern and should be reworded if it appears in published copy.

- [study/passages/PASS-0008-1-nephi-15-24.md, "What this passage adds" section, line ~36] "'Hold fast unto it' — the iron rod must be actively grasped and maintained. This adds a kinetic, ongoing dimension to the word-of-God-as-weapon that Ephesians' sword image suggests but doesn't state as explicitly." — the phrase "kinetic, ongoing dimension" is slightly elevated and abstract (borderline AI vocabulary). Minor.

## Clear

- PASS-0001: Publication status correctly marked Draft. Scripture text block verified from canonical URL and labeled as verified. Cross-reference structure (footnote network) is sourced. Interpretive sections are labeled as interpretive. Existing ⚠️ flags are present on all four unverified GA quotes. No ESV text reproduced.
- PASS-0002: Publication status correctly marked Draft. KJV text verified and labeled. The "Paul edits out vengeance" observation is partially an interpretation issue (flagged above), but the observational base (Paul omits garments and cloak) is textually accurate and attributed correctly.
- PASS-0003: Publication status correctly marked Draft. KJV text verified and labeled. Cross-reference to KJV footnote confirmed. Hebrew/Greek comparative claims flagged above; the core textual observations are sound.
- PASS-0004: Publication status correctly marked Draft. KJV text verified. Interpretive cautions are present and clear. All datings flagged above; the armor comparison table itself is textual observation, not interpretation.
- PASS-0005: Publication status correctly marked Draft. KJV text verified. The interpretive reading in "Key observation" is explicitly labeled "(This is an interpretive reading, clearly labeled as such.)" — good practice.
- PASS-0006: Publication status correctly marked Draft. KJV text verified. Contrast table is clearly structured and observational. No Church sources claimed where none exist.
- PASS-0007: Publication status correctly marked Draft. KJV text verified. Footnote cross-references cited with SRC-0008. Interpretive sections labeled. D&C 35:13–15 correctly flagged as "related but distinct."
- PASS-0008: Publication status correctly marked Draft. Scripture text verified from canonical URL. Source IDs present in header. Cross-reference to D&C 27:17 footnote confirmed.
- PASS-0009: Publication status correctly marked Draft. Scripture text verified. Isaiah 52:1–2 echo noted as "likely echoing" (not stated as certain). Alma 5:7 connection noted appropriately.
- PASS-0010: Publication status correctly marked Draft. Scripture text verified from two canonical URLs. Stripling warrior survival statistics are drawn from the scriptural text itself. Physical vs. spiritual armor distinction is framed as complementary, not contradictory. Inline Alma 43 quote flagged in Warnings above.
- PAT-0001: Approval status is explicitly "Draft — pending Chase review." Strength of evidence rated "Strong" is defensible for a 5:1 structural ratio. Disconfirming passages are listed. Interpretive reading labeled.
- PAT-0002: Approval status "Draft — pending Chase review." Strength "Supported" appropriate (depends on literary dependence inference). Disconfirming passages listed, including the important note that Paul strips the retributive pieces.
- PAT-0003: Approval status "Draft — pending Chase review." Development argument depends on dating (flagged). Disconfirming passages listed. Interpretive sections labeled.
- sources.md: All 11 source entries (SRC-0001 through SRC-0011, with SRC-0009 out of order) have the required fields: Title, Canonical URL, Domain, Date accessed, Approval status. No rejected sources appear. No pending sources appear. ESV source does not appear in the ledger — consistent with ESV not being used yet. SRC-0006 (Wikipedia) approval is explicitly user-approved with a date.

## Notes (existing ⚠️ flags — acknowledged, not new issues)

- NOTE [PASS-0001, line ~215]: Harold B. Lee quote "most vulnerable to the powers of darkness" — already flagged ⚠️ as unverified from original source.
- NOTE [PASS-0001, line ~217]: M. Russell Ballard chain-mail quote — already flagged ⚠️ as unverified from original source.
- NOTE [PASS-0001, line ~219]: Neal A. Maxwell "putting off the natural man" quote — already flagged ⚠️ as unverified from original source.
- NOTE [PASS-0001, line ~221]: Carlos E. Asay garment/armor connection quote — already flagged ⚠️ as unverified from original source.
- NOTE [THEME-0001, line ~15]: Neal A. Maxwell quote — already flagged ⚠️ as unverified from original source.
- NOTE [THEME-0001, line ~22]: Harold B. Lee "most vulnerable" quote — already flagged ⚠️ as unverified from original source.
- NOTE [THEME-0001, line ~90]: Second Harold B. Lee reference — already flagged ⚠️ as unverified from original source.
- NOTE [THEME-0001, line ~132]: Technical note on JavaScript-rendered GA talk pages — already documented in source notes. The limitations of WebFetch for GA talks is acknowledged.
