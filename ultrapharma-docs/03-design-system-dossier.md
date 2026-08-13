# 03 · Design System · "Dossier"

**Consumer:** Claude Design and Claude Code. Authority on every visual decision.
**Aesthetic:** the regulatory dossier. Indexed, evidenced, precise, and considerably more elegant than the thing it describes.

---

## 1. The idea

Regulatory affairs has one universal artefact: **the dossier.** The Common Technical Document, five modules, tabbed, indexed, cross-referenced, submitted. Everyone in this industry has handled one. It is the physical form of the firm's work.

The visual system is built from it:

| Artefact | Becomes |
|---|---|
| The CTD module stack | The pathway rail, and the numbering system throughout |
| The tab divider | Section transitions, the ruled index, the sticky section marker |
| The approval stamp | The one accent moment, used for outcomes and status |
| The evidence table | Data presentation, the HTA evidence list |
| The submission timeline | The process rails on the services pages |
| The archive photograph | The imagery treatment, `04` |

Three principles:

1. **Everything is indexed.** Sections are numbered, in mono, visibly. A dossier without an index is not a dossier, and the numbering is what gives a long scrolling page a sense of structure and progress.
2. **Depth comes from photography and space, not from ornament.** No gradients, no glass, no glow. The elevation in this design comes from good pictures used large and confidently, and from generous space around small type.
3. **The accent is a stamp, not a theme colour.** It appears where something has been assessed, approved, or marked. Not on every heading.

---

## 2. Palette

Cool, deep, editorial. Distinct from a clinical blue and from a corporate navy.

### Light

```css
:root {
  /* Ground */
  --paper:          #FBFBFA;   /* page */
  --paper-raised:   #FFFFFF;   /* panels */
  --paper-sunk:     #F2F2F0;   /* fields, quiet blocks, table headers */
  --paper-deep:     #0C1418;   /* inverted bands, the reimbursement feature */

  /* Ink — cool graphite with a green cast, not a blue one */
  --ink-900:        #0C1418;
  --ink-700:        #27343A;
  --ink-500:        #5A686F;
  --ink-400:        #8A969C;
  --ink-300:        #B9C2C6;

  /* Structure */
  --rule:           #E2E5E4;
  --rule-strong:    #C6CBCA;
  --rule-ink:       #0C1418;

  /* Assessment — the stamp. The single accent. */
  --stamp-600:      #0F6E5C;   /* primary fill, 5.6:1 on paper */
  --stamp-500:      #148872;   /* hover */
  --stamp-700:      #0B5546;   /* accent text on paper-sunk */
  --stamp-wash:     #E6F2EF;

  /* Signals — status only, never decoration */
  --signal-pending: #8A5A0B;
  --signal-blocked: #A32A22;
  --signal-cleared: #0F6E5C;   /* deliberately the stamp colour */

  --scrim:          rgb(12 20 24 / 0.62);
}
```

### Dark

Not an inversion. The ground deepens, the stamp lifts.

```css
[data-theme="dark"] {
  --paper:          #0B1216;
  --paper-raised:   #121C21;
  --paper-sunk:     #080E11;
  --paper-deep:     #F4F5F4;   /* inverted band inverts back to light */

  --ink-900:        #F4F5F4;
  --ink-700:        #D2D8D9;
  --ink-500:        #92A0A5;
  --ink-400:        #67757B;
  --ink-300:        #414E54;

  --rule:           #1E2A30;
  --rule-strong:    #303F46;
  --rule-ink:       #F4F5F4;

  --stamp-600:      #3FBFA3;
  --stamp-500:      #55D4B8;
  --stamp-700:      #6FDCC3;   /* accent text, lifted for contrast on dark */
  --stamp-wash:     #0D2621;

  --signal-pending: #E0A93F;
  --signal-blocked: #F0766B;
  --signal-cleared: #3FBFA3;

  --scrim:          rgb(0 0 0 / 0.72);
}
```

### The three-token accent rule

Carried over as house practice, because a single accent token doing three jobs fails contrast in one theme or the other every time.

| Token | Job |
|---|---|
| `--stamp-600` | Fills, rules, borders, focus rings |
| `--stamp-700` | **Accent-coloured text** on `--paper` or `--paper-sunk` |
| `--stamp-on` | **Text on a stamp fill.** `#FFFFFF` in light, `--paper` in dark |

```css
:root               { --stamp-on: #FFFFFF; }
[data-theme="dark"] { --stamp-on: var(--paper); }
```

A raw `--stamp-600` on a `color` property fails lint.

### Discipline

The accent appears on: the primary button, the pathway rail's active stage, stage numerals, section index numbers, the stamp component, focus rings, and link underlines. **Nowhere else.** It never fills a large area except the primary button and the inverted feature band.

---

## 3. Typography

| Role | Family | Weights | Job |
|---|---|---|---|
| Display | **Newsreader** | 300, 400 | Headlines, section titles, pull quotes |
| Text and UI | **Inter Tight** | 400, 500 | Everything read as information or interacted with |
| Data | **IBM Plex Mono** | 400, 500 | Index numbers, stage numerals, dates, figures, references, gazette numbers |

All three from Google Fonts. **Weight ceiling 500. No bold, no italics.** `font-synthesis: none` globally.

**Newsreader** is an editorial serif with optical sizing, drawn for reading at scale. At 300 it gives the elevated, considered feel the brief asks for without tipping into luxury-brand territory, which would be wrong for a firm selling rigour.

**Inter Tight** is Inter with reduced sidebearings: the same legibility, more density, which suits a site with a lot of precise nouns in it.

**IBM Plex Mono** carries genuine scientific and industrial association, and it is the right face for a gazette number or a module reference. It is doing semantic work, not decorative work.

### Scale

| Token | Family | Size | Line height | Tracking | Use |
|---|---|---|---|---|---|
| `--t-hero` | Newsreader 300 | `clamp(2.75rem, 6.5vw, 5rem)` | 1.02 | `-0.02em` | Hero, once per page |
| `--t-h1` | Newsreader 300 | `clamp(2.25rem, 4.5vw, 3.5rem)` | 1.08 | `-0.015em` | Page title |
| `--t-h2` | Newsreader 400 | `clamp(1.75rem, 3vw, 2.5rem)` | 1.15 | `-0.01em` | Section |
| `--t-h3` | Inter Tight 500 | `1.25rem` | 1.35 | `-0.005em` | Card and block headings |
| `--t-h4` | Inter Tight 500 | `1rem` | 1.4 | `0` | Sub-headings |
| `--t-lede` | Newsreader 400 | `clamp(1.125rem, 1.6vw, 1.375rem)` | 1.55 | `0` | Standfirst under a hero or section title |
| `--t-body-lg` | Inter Tight 400 | `1.0625rem` | 1.65 | `0` | Lead paragraph |
| `--t-body` | Inter Tight 400 | `1rem` | 1.65 | `0` | Default |
| `--t-body-sm` | Inter Tight 400 | `0.9375rem` | 1.55 | `0` | Secondary, captions |
| `--t-label` | Inter Tight 500 uppercase | `0.75rem` | 1.2 | `0.11em` | Eyebrows, field labels, stage names |
| `--t-index` | Plex Mono 400 | `0.8125rem` | 1.4 | `0.02em` | Section index numbers, references |
| `--t-numeral` | Plex Mono 300 | `clamp(2.5rem, 5vw, 4rem)` | 1 | `-0.02em` | **The large stage and list numerals.** A signature |
| `--t-figure` | Plex Mono 400 | `clamp(2rem, 3.5vw, 3rem)` | 1.1 | `-0.01em` | Statistics and data points |
| `--t-data` | Plex Mono 400 | `0.9375rem` | 1.5 | `0` | Dates, gazette numbers, tabular values |

Body measure caps at 72 characters. Lede caps at 60, because a lede is scanned rather than read.

`tabular-nums` on every figure set in Inter Tight.

### Applied rules

- Sentence case throughout except `--t-label`.
- Newsreader for display and lede only. **Never inside a control, never below 1rem.**
- Plex Mono for anything that is a reference, an identifier, a date or a quantity. *Gazette Notice No. 5044 of 23 April 2025* renders in mono inside an Inter Tight paragraph, and that texture break is deliberate: it marks a checkable fact.
- Large numerals (`--t-numeral`) are the system's most distinctive typographic move. They appear on the pathway stages and the six "why partners choose us" entries, in `--stamp-700`, and nowhere else.
- No italics. Where convention wants emphasis, use `--ink-900` against `--ink-700`, or the mono switch.

---

## 4. Space, grid, radius, elevation

```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
--s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
--s-9: 96px; --s-10: 128px; --s-11: 160px;
```

Section rhythm is generous: `--s-10` between page sections on desktop, `--s-8` on mobile. **Space is where the "elevated" quality actually comes from.** The current site's sections are 48px apart and that is most of why it feels cramped and templated.

Containers: `--container-text 720px`, `--container-page 1200px`, `--container-wide 1440px`, plus full-bleed for imagery.

Breakpoints: `sm 480 · md 768 · lg 1024 · xl 1280 · 2xl 1536`.

Radius, restrained:

```css
--r-none: 0;   /* rules, index markers, full-bleed images, the inverted band */
--r-sm: 2px;   /* inputs, chips */
--r-md: 4px;   /* buttons, panels */
--r-lg: 8px;   /* modals, contained images */
--r-full: 999px; /* avatars only */
```

Elevation:

```css
--shadow-overlay: 0 1px 2px rgb(12 20 24 / 0.05), 0 16px 40px rgb(12 20 24 / 0.12);
--shadow-image:   0 2px 4px rgb(12 20 24 / 0.06), 0 24px 60px rgb(12 20 24 / 0.14);
```

Two shadows. `--shadow-overlay` for modals and popovers. `--shadow-image` **only for contained photographs**, because a photograph sitting on a page with no shadow reads as pasted on, and this is the one place elevation genuinely helps. Panels and cards use a 1px `--rule-strong`, never a shadow.

---

## 5. Motion

Restrained, and it does one job: confirming that a section has arrived.

```css
--dur-fast: 160ms; --dur-base: 240ms; --dur-slow: 400ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
```

| Moment | Motion |
|---|---|
| Button press | Scale 0.985, `--dur-fast` |
| Card or row hover | Border shift, `--dur-fast`, no lift |
| Section entry | Opacity plus 16px rise, `--dur-slow`, `once: true`, 60ms stagger on children capped at six |
| Image entry | Opacity plus a 1.04 to 1.0 scale settle, `--dur-slow`. The one place scale is used |
| Pathway rail | The connecting line draws left to right on entry, `--dur-slow`. Once |
| Header on scroll | Background and rule fade in after 8px |
| Theme toggle | Instant. Never animated |

**No parallax. No scroll-jacking. No counting-up figures.** A statistic that animates from zero is briefly wrong, and this firm sells accuracy.

`prefers-reduced-motion` removes every translate and scale; sections and images appear at their end state immediately.

---

## 6. The signature element: the index rail

Every design system needs one memorable thing. Here it is the dossier's index, made structural.

A thin sticky rail on the left of the viewport at `lg` and above, showing the page's sections as numbered entries in `--t-index`, with the current section marked by a `--stamp-600` bar. It is 3px of colour and a column of small mono numerals, and it does three things:

1. Tells a reader where they are in a long page.
2. Gives the page the visual grammar of an indexed document, which is exactly what this firm produces.
3. Costs almost nothing in weight or attention.

```
  01  ▏
  02  ▏
  03  ▎ ← current section, stamp bar
  04  ▏
  05  ▏
```

Below `lg` it collapses into a slim progress bar under the header. Section numbers still render inline at the top of each section in `--t-index`, so the numbering survives without the rail.

Every section on every page carries an index number. On `/services/reimbursement` the numbers correspond to the seven sections in `02 §5`, which means a client can say "section 05, the evidence list" on a call. That is the dossier metaphor doing actual work.

---

## 7. Components

Thirty-eight, five tiers.

### Tier 1 · Primitives

`Button` (primary, secondary, ghost, link) · `IconButton` · `Input` · `Textarea` · `Select` · `Checkbox` · `Label` · `HelperText` · `Rule` · `Spinner` · `Skeleton` · `ThemeToggle`

`Button` primary is `--stamp-600` fill with `--stamp-on` text. Secondary is a `--rule-strong` outline with `--ink-900` text. Ghost is text plus an underline on hover.

### Tier 2 · Structure

`SiteHeader` · `SiteFooter` · `Section` · `IndexRail` · `SectionIndex` · `PageHeader` · `Panel` · `Drawer` · `Modal` · `Accordion` · `Breadcrumb` · `Container`

`Section` enforces the `--s-10` rhythm and owns the index number, so numbering cannot drift out of sequence.

### Tier 3 · Content and display

| Component | Notes |
|---|---|
| `PathwayRail` | The four stages. Horizontal at `lg`, vertical below. The site's spine |
| `StageCard` | One stage: numeral, name, question, three deliverables |
| `NumberedEntry` | The "why partners choose us" treatment. `--t-numeral`, a rule, the mechanism, then the consequence in `--ink-500` |
| `ServiceBlock` | A service with icon, name, description, deliverables list |
| `EvidenceList` | The HTA evidence requirements. Ruled rows, mono markers, no bullets |
| `FeatureBand` | Full-bleed inverted band on `--paper-deep`. Used once per page, for reimbursement |
| `FigureBlock` | A statistic with its denominator and date. **Never a bare number** |
| `Stamp` | The assessment marker: a ruled box with `--t-label` text and a mono date |
| `ProcessTimeline` | Phased engagement, numbered, with durations in mono |
| `PullQuote` | Newsreader 300, large, with a `--stamp-600` left rule |
| `TeamCard` | Portrait, name, role, credentials, LinkedIn |
| `CaseNote` | Anonymised outcome: context, action, result. Only rendered if real |
| `InsightCard` | Editorial: image, category, title, date, reading time |
| `ContactBlock` | Channels, hours, location |
| `Figure` | Photograph with caption and credit. `04 §6` |

### Tier 4 · Forms

`ContactForm` · `FormErrorSummary` · `FieldGroup` · `SubmitState`

The form preserves every value on failure, always, and offers the direct email as a fallback when submission fails twice.

### Tier 5 · Utility

`Portal` · `VisuallyHidden` · `FocusTrap` · `ScrollArea` · `Tooltip`

### Component contract

TypeScript props, no `any`. `forwardRef`. `data-slot` on internal elements. Every interactive state. Full keyboard. Stated `aria` contract. **Both themes.** 360px layout. Empty and error states where data is rendered. Storybook covering default, hover, focus, disabled, loading, error, and dark.

---

## 8. Iconography

**Phosphor Icons**, regular weight, 1.5px equivalent stroke, sizes 16 / 20 / 24 / 32.

Chosen over Tabler deliberately: Phosphor's slightly rounder terminals sit better with Newsreader's warmth, and this is a different project from the ones using Tabler.

**Icons carry taxonomy, never decoration.** Every icon labels a stage, a service type, a document class, or a status. An icon that sits next to a heading purely to fill space is removed.

Fixed assignments so meaning stays stable:

| Concept | Icon |
|---|---|
| Approval stage | `SealCheck` |
| Market entry | `GlobeHemisphereEast` |
| Reimbursement | `Scales` |
| Lifecycle | `ArrowsClockwise` |
| Dossier or submission | `Files` |
| Evidence or data | `ChartLineUp` |
| Economic modelling | `Calculator` |
| Stakeholder engagement | `UsersThree` |
| Compliance and quality | `ShieldCheck` |
| Timeline | `Clock` |
| Regulator or authority | `Bank` |

Icon-only controls carry an `aria-label` and a tooltip, and are limited to the theme toggle and social links.

---

## 9. Accessibility

- WCAG 2.1 AA minimum, AAA for body text where the palette already achieves it.
- Contrast 4.5:1 for text under 18.66px, 3:1 above and for UI components. **Both themes checked**, including `--stamp-700` for accent text and `--stamp-on` for text on a stamp fill.
- Body 16px minimum. The only exceptions are `--t-label` and `--t-index`, both 12 to 13px, neither of which is prose. Named exhaustively so the rule cannot be quietly broken.
- Focus ring 2px `--stamp-600` at 2px offset, never removed.
- Touch targets 44×44px minimum, 8px between adjacent targets.
- Full keyboard traversal, skip link to main, `Esc` closes overlays, focus returns to trigger.
- One `h1`, no skipped levels, landmarks on every page.
- 200% zoom with no truncation and no horizontal scroll.
- `prefers-reduced-motion` honoured throughout.
- **Photographs carry meaningful alt text describing the subject**, never "image" and never a keyword list. `04 §6`.
- The index rail is decorative in the accessibility tree; section numbers are announced as part of the heading instead, so a screen reader user gets the structure without a duplicated navigation list.

---

## 10. Anti-patterns

| Avoid | Instead |
|---|---|
| A grid of six identical service cards | The pathway, then asymmetric stage blocks |
| Blue-to-purple gradient hero | Full-bleed treated photograph with type over it |
| Glassmorphism, blurred panels | Rules and space |
| A statistics band of unverified large numbers | `FigureBlock` with a denominator and a date, or nothing |
| Counting-up number animations | The figure, correct, immediately |
| Stock photo of a handshake, or of people in lab coats pointing at a screen | `04 §3` |
| Pills scattered on a white background | `04 §3` |
| DNA helices, molecule renders, abstract blue medical swooshes | Real photography of real facilities |
| An icon beside every heading | Icons only where they label something |
| Testimonial carousel | Named team, credentials, real case notes |
| "Global leader in pharmaceutical innovation" | What the firm actually does, verifiably |
| A chat widget | A contact form that works and a phone number |
| Dead `#` links in the footer | Real legal pages |
| Card shadows everywhere | One shadow, for photographs |

---

## 11. Two surfaces specified precisely

### The numbered entry

The treatment for the six "why partners choose us" items, promoted from the current site's flat list.

```
  01                Outcome-driven submissions
  ──────────────────────────────────────────────────────────────
                    We build dossiers around approval triggers:
                    pre-submission audits, agency-ready narratives,
                    and checklist-driven gap closure.

                    WHY IT MATTERS
                    Fewer questions from regulators, shorter review cycles.
```

- The numeral in `--t-numeral`, Plex Mono 300, `--stamp-700`, occupying its own column at `lg` and sitting above the heading below `lg`.
- A `--rule` hairline spanning the full entry width beneath the heading.
- The body in `--t-body`, `--ink-700`.
- `WHY IT MATTERS` in `--t-label`, `--ink-500`, followed by the consequence in `--ink-900`. The consequence is the payload and it is the darkest text in the entry.
- Entries are separated by `--s-8`, not boxed. No cards.

### The reimbursement feature band

The one inverted band on the homepage, and the only place `--paper-deep` is used.

- Full-bleed, `--paper-deep` ground, `--r-none`.
- Split at `lg`: a treated photograph on one side, type on the other. Stacked below `lg`, image first.
- Eyebrow `NEW CAPABILITY` in `--t-label`, `--stamp-600`.
- Headline in Newsreader 300, `--t-h2`, in the inverted ink.
- One `FigureBlock` inside the band, and it is the only figure on the homepage, so it carries weight.
- A single `Button` secondary, outlined in the inverted ink, to `/services/reimbursement`.
- Vertical padding `--s-11` on desktop. This band should feel like a held breath between sections, and space is what does that.
