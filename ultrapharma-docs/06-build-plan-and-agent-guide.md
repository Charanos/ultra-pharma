# 06 · Build Plan and Agent Guide

---

## 1. Phases

### Phase 0 · Foundations
Tokens from `03 §2` in both themes, the three families self-hosted and subsetted, Tailwind v4 config, the image pipeline from `04 §4` as a build step, CI with the Lighthouse budget.

**Gate:** the pipeline processes a test image into both theme variants and the responsive set. Contrast verified on `--stamp-600`, `--stamp-700` and `--stamp-on` in both themes.

### Phase 1 · Design system
Tiers 1 and 2, plus `IndexRail`, `NumberedEntry`, `PathwayRail`, `FeatureBand`, `Figure`.

**Gate:** the numbered entry and the pathway rail render correctly in both themes at 360, 768 and 1440. The index rail tracks sections and collapses correctly below `lg`.

### Phase 2 · Content and imagery
Copy from `05` into typed content files. Images sourced per `04 §6`, processed, credits recorded.

**Gate:** every image passes the checklist in `04 §11`. No image on the never-appears list. Alt text written for all.

### Phase 3 · Pages
Homepage, services, reimbursement, practice, contact, legal. The `/about` redirect.

**Gate:** LCP under 2.2s on 4G, CLS under 0.05, axe clean on every route, homepage under 900kb fully loaded.

### Phase 4 · Insights, conditional
Built only if `01 §7` question 7 is answered yes with three pieces in hand.

### Phase 5 · Launch
Schema validated, sitemap, redirects, form delivery tested against a real inbox, legal pages live, analytics decision made.

---

## 2. Critical path

```
Phase 0 ──▶ Phase 1 ──▶ Phase 3 ──▶ Phase 5
              │             │
   Imagery ───┘             │
   sourcing                 │
                            │
   Client: BPTAP pathway ───┤   blocks /services/reimbursement §03
   Client: statistics ──────┤   blocks /practice
   Client: team photos ─────┘   blocks the Proof block
```

Three client answers block real pages. Send `01 §7` on day one.

---

## 3. Definition of done

| # | Condition | Proof |
|---|---|---|
| 1 | No unverifiable claim anywhere on the site | Manual review against `05 §9` |
| 2 | BPTAP named correctly in every instance | Automated string check for `BTAP` and `Technical Advisory Panel` |
| 3 | LCP under 2.2s on 4G, CLS under 0.05 | Lighthouse in CI |
| 4 | Homepage under 900kb fully loaded, under 200kb above the fold | Budget in CI |
| 5 | Every image processed, credited, alt-texted, both theme variants | Asset manifest check |
| 6 | Text over imagery clears 4.5:1 against the composited darkest region | Measured, not assumed |
| 7 | Both themes complete, no unstyled state | Manual pass on every route |
| 8 | axe clean, keyboard traversable, 200% zoom without horizontal scroll | CI plus manual |
| 9 | `/about` 301s to `/practice` | Redirect test |
| 10 | Legal pages live with real content, no `#` links anywhere | Link crawl |
| 11 | Contact form delivers to a real monitored inbox and preserves values on failure | End-to-end test plus a live send |
| 12 | No section renders an empty container | Manual pass with content removed |

---

## 4. Agent operating guide

### Read before writing

| Task | Read first |
|---|---|
| Any UI | `03`, then `05` |
| Any imagery | **`04` entirely** |
| Any route or page structure | `02` |
| Any copy | `05` |
| Anything about the new service | `01 §4` and `05 §4` |

### Absolute rules

1. **BPTAP is the Benefits Package and Tariffs Advisory Panel.** Never "Benefit Package Technical Advisory Panel", never "BTAP". A string check for both fails the build.
2. **No claim ships that cannot be checked.** If content lacks a source, flag it rather than publishing it. `01 D-03`.
3. **The reimbursement service is described as evidence and engagement, not as guaranteed filing or outcome.** `01 D-04`.
4. **`--stamp-600` for fills and rules, `--stamp-700` for accent text, `--stamp-on` for text on a stamp fill.** Never substituted. A raw `--stamp-600` on a `color` property fails lint.
5. **Every image passes the pipeline in `04 §4`** and both theme variants are generated at build time. No CSS filters on photographs.
6. **No image from the never-appears list in `04 §3`.** No handshakes, no scattered pills, no molecule renders, no AI-generated imagery.
7. **Text over an image is contrast-measured against the composited result**, not assumed safe because a scrim exists.
8. **Icons label something or they are removed.** `03 §8`, `04 §9`.
9. **No section renders an empty container.** If the content does not exist, the section does not render.
10. No font weight above 500. No italics. `font-synthesis: none`.
11. Body 16px minimum, with `--t-label` and `--t-index` as the only named exceptions.
12. Every checkable fact, date and reference number renders in `--t-data`.
13. No em dashes, no exclamation marks, no emoji, anywhere.
14. No two adjacent homepage blocks share a layout pattern. `02 §3`.
15. TypeScript strict, no `any`.

### File layout

```
src/
  app/
    (site)/  layout.tsx  page.tsx
    services/  services/reimbursement/  practice/  contact/  legal/
    insights/  ← only if built
  components/
    primitives/  structure/  content/  forms/
  content/
    services.ts  pathway.ts  entries.ts  team.ts  cases.ts  insights/*.mdx
  lib/
    images/     ← the treatment pipeline
    schema-ld/
public/
  media/        ← processed, both theme variants
  credits.json  ← 04 §6
scripts/
  process-images.ts
  check-strings.ts   ← rule 1 and the deleted-strings list
```

---

## 5. Prompt patterns

**A component**

> Read `03 §11` and `05 §2`. Build `NumberedEntry`. Plex Mono numeral in `--stamp-700` in its own column at `lg` and above the heading below it, a hairline under the heading, the consequence as the darkest text in the entry. No card, no shadow. Both themes, 360px, Storybook.

**Imagery**

> Read `04` in full. Source five P1 facility candidates using the search briefs in `§6`, run each against the six selection criteria in `§6`, process through the `§4` pipeline, and give me the shortlist with source URLs and the reasoning for each before anything goes in the repository.

**The reimbursement page**

> Read `01 §4`, `02 §5` and `05 §4`. Build `/services/reimbursement`. Seven numbered sections tracked by the index rail. All dates and the gazette number in `--t-data`. The evidence list as `EvidenceList`, ruled rows, no bullets. Include the caveat line under section 03 exactly as written.

---

## 6. Review checklist

- [ ] BPTAP named correctly, string check passes
- [ ] No unverifiable claim
- [ ] Stamp token used in the correct role
- [ ] Images processed, both variants, credited, alt-texted
- [ ] Text over image measured for contrast
- [ ] No banned imagery
- [ ] Icons label something
- [ ] No empty container rendered
- [ ] Weight 400 or 500 only, no italics
- [ ] Copy from `05`, no em dashes or exclamation marks
- [ ] Both themes, 360px, keyboard, axe clean
- [ ] Within the performance budget

---

## 7. First week

1. Send `01 §7` to the client, pressing hardest on questions 1, 3 and 10. Two of them block pages and one of them cannot legally stay as it is.
2. Write `scripts/check-strings.ts` before any content lands. It catches the BPTAP misnaming and the deleted-strings list, and it takes thirty lines.
3. Build the image pipeline before sourcing images. Sourcing first means reprocessing everything when the grade changes.
4. Build `NumberedEntry` and `PathwayRail` early. They are the two components that tell you whether the design direction holds.
5. Draft `/services/reimbursement` first among the pages. It is the commercial reason for the rebuild and the one with the least competition in search.
