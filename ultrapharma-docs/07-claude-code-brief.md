# 07 · Claude Code Brief

Paste the block below into Claude Code with `/ultrapharma-docs` in the repository.

---

You are the senior design engineer rebuilding `ultrapharma.co.ke` for Ultra Pharma, a regulatory affairs and health technology assessment consultancy in Nairobi. The existing site is a Next.js template shell with correct positioning and no visual identity. This is a complete overhaul of the presentation layer plus one significant new service line.

**Read first, in this order, and do not begin until you have:**

- `ultrapharma-docs/03-design-system-dossier.md` in full. The authority on every visual decision.
- `ultrapharma-docs/04-art-direction-and-imagery.md` in full. **The client's main ask is imagery, and this document is how it is done without producing a stock-photo catalogue.**
- `ultrapharma-docs/02-information-architecture.md` for routes and page composition.
- `ultrapharma-docs/05-copy-deck.md`. Every string comes from here, verbatim.
- `ultrapharma-docs/01-audit-and-decisions.md §4` before you touch the reimbursement service. It contains verified facts about a live Kenyan regulatory body that the client's own brief got wrong.
- `ultrapharma-docs/06-build-plan-and-agent-guide.md §4`.

**Stack:** Next.js 15 App Router, TypeScript strict, Tailwind v4 CSS-first, Phosphor Icons, GSAP for motion, MDX for insights. No component library, no CMS. Content lives in typed files.

**As built:** the Insights section is live (the client committed to it), fonts are Source Serif 4 / Nunito / IBM Plex Mono rather than Newsreader / Inter Tight / IBM Plex Mono, and Storybook was installed then removed after a security review found its dependency tree carrying unpatched CVEs with zero stories ever written against it — reinstall at current versions if component-isolation review becomes a real need. `DESIGN-SOURCE.md` at the repository root is the full log of where the shipped site diverges from this brief and from `03`/`04`.

## The idea

Regulatory affairs has one universal artefact: the dossier. Indexed, tabbed, evidenced, cross-referenced. The visual system is built from it, which is why every section on every page carries a mono index number and why the signature element is a sticky index rail.

Three principles:

1. **Everything is indexed.** Numbered sections, in mono, visibly. It gives a long scrolling page structure and it mirrors what this firm actually produces.
2. **Depth comes from photography and space, not ornament.** No gradients, no glass, no glow. The elevated quality comes from good pictures used large and generous space around small type.
3. **The accent is a stamp, not a theme colour.** It marks assessment and status, not every heading.

## Build order

**1 · Tokens and the image pipeline, together.** `03 §2` in both themes, three families self-hosted and subsetted. Then `04 §4`, the image treatment pipeline, as a build step. **Build the pipeline before sourcing any images**, or a grade change means reprocessing everything.

**2 · Tier 1 and 2 components**, `03 §7`.

**3 · The two signature components.** `NumberedEntry` (`03 §11`) and `PathwayRail`. Build them early: they are what tell you whether the direction holds.

**4 · `IndexRail`.** The sticky numbered rail, `03 §6`. Decorative in the accessibility tree; section numbers are announced as part of headings instead.

**5 · Imagery.** Source per the search briefs in `04 §6`. Run every candidate against the six selection criteria. Process, generate both theme variants, record credits.

**6 · Pages**, in this order: `/services/reimbursement` first, then `/`, then the rest. The reimbursement page is the commercial reason for the rebuild.

**7 · `/about` → `/practice` 301.** The old URL has inbound history.

## Non-negotiables

- **BPTAP is the Benefits Package and Tariffs Advisory Panel.** Never "Benefit Package Technical Advisory Panel", never "BTAP". The client's brief has this wrong; `01 §4` has the verified detail including the gazette number and chair. A string check fails the build on either wrong form.
- **No unverifiable claim ships.** The existing site claims 25+ years, 100M+ patients and 50+ countries. All three are deleted, along with the strings listed in `05 §9`. If content lacks a source, flag it rather than publishing it.
- **The reimbursement service is described as evidence generation and structured engagement, not as guaranteed filing or outcome.** `01 D-04`.
- `--stamp-600` fills and rules, `--stamp-700` accent text, `--stamp-on` text on a stamp fill. Never substituted; a raw `--stamp-600` on a `color` property fails lint.
- Every image passes the `04 §4` pipeline with both theme variants generated at build. **No CSS filters on photographs.**
- **Nothing from the never-appears list in `04 §3`.** No handshakes, no scattered pills, no molecule renders, no stethoscope on a laptop, no AI-generated imagery, no branded packaging.
- Text over an image is contrast-measured against the composited darkest region it actually sits on, not assumed safe because a scrim exists.
- **Icons label something or they are removed.** No icon beside a heading for visual interest.
- **No section renders an empty container.** If content does not exist, the section does not render. This is the specific thing that makes a small site look abandoned.
- **No two adjacent homepage blocks share a layout pattern.** `02 §3` sets the alternation, and it is most of the fix for "monotonous".
- Weight 400 and 500 only. No italics. `font-synthesis: none`.
- Body 16px minimum, `--t-label` and `--t-index` the only named exceptions.
- Every checkable fact, date and reference number in `--t-data`.
- No em dashes, no exclamation marks, no emoji.
- Real legal pages. No `#` links anywhere.
- TypeScript strict, no `any`.

Read `03 §10` before building the homepage. It names the specific choices that would make this look like every other consultancy template, several of which the current site already makes.

## Budget

LCP under 2.2s on 4G. Hero image under 140kb after treatment. Above the fold under 200kb. Homepage under 900kb fully loaded. CLS under 0.05. Enforced by a Lighthouse budget in CI that fails the build.

Imagery is the main risk. `sizes` set accurately per placement is the single highest-leverage thing you will do for this budget.

## Definition of done, per component

TypeScript props with no `any`. `forwardRef`. `data-slot` on internal elements. Every interactive state. Full keyboard. Stated `aria` contract. Both themes. 360px layout. Empty and error states where data renders. ~~Storybook covering default, hover, focus, disabled, loading, error and dark~~ — not currently required; see the stack note above.

## When the spec is wrong

Stop, name the document and section, propose the change with its consequences, and update the document in the same pull request.

## Start here

Read `03`, then `04`. Produce a short plan: the token file, the image pipeline approach, the first ten components, and any conflict between the specification and what Next.js 15 with Tailwind v4 permits. Tell me specifically how you intend to generate the two theme variants of each processed image at build time without doubling the asset payload delivered to any single visitor, since that is the one part of `04 §4` where I have specified the outcome rather than the mechanism. Wait for confirmation before writing code.

---

## Follow-up prompts

**Imagery sourcing**

> Read `04` in full. Source five candidates for the hero from the P1 facility search briefs in `§6`. Run each against the six selection criteria and give me a shortlist with source URLs, photographer, and your reasoning, including whether each has a region where hero copy could clear 4.5:1. Nothing goes in the repository until I have picked.

**The signature component**

> Read `03 §11` and `05 §2`. Build `NumberedEntry` for the six "why partners choose us" items. Plex Mono numeral in `--stamp-700` in its own column at `lg`, above the heading below it. Hairline under the heading. The consequence is the darkest text in the entry. No card, no shadow, no box. Both themes, 360px, Storybook.

**The reimbursement page**

> Read `01 §4`, `02 §5` and `05 §4`. Build `/services/reimbursement`. Seven numbered sections tracked by `IndexRail`. Gazette number and all dates in `--t-data`. The evidence requirements as `EvidenceList`, ruled rows, mono markers, no bullets. Include the caveat line under section 03 exactly as written in the copy deck.

**The feature band**

> Read `03 §11` and `04 §5`. Build `FeatureBand` for the homepage reimbursement block. Full-bleed `--paper-deep`, split at `lg` with a treated P3 care photograph, stacked below with the image first. One `FigureBlock` inside, and it is the only figure on the homepage. `--s-11` vertical padding on desktop.
