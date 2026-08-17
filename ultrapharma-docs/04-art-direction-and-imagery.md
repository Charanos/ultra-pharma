# 04 · Art Direction and Imagery

The brief's central ask: use photography and icons comprehensively to break the text monotony. This document is how that happens without the site becoming a stock-photo catalogue, which is the failure mode one step past the one we are fixing.

---

## 1. The problem with adding photographs

The current site has none, and it reads flat. But the reflexive fix, dropping a stock photograph into every section, produces something worse: a site that looks like every other consultancy site, because everyone shops from the same twelve results for "pharmaceutical".

Two rules prevent that.

**Rule one: every image earns a job.** Photography here makes an invisible service concrete. Regulatory work has no visible output, so the site shows what it touches: the laboratory the product is tested in, the line it is made on, the clinic it ends up in, the document itself. An image that illustrates nothing specific is removed.

**Rule two: every image passes the same treatment pipeline.** Twelve photographs from twelve photographers with twelve white balances read as a scrapbook. The same twelve through one graded pipeline read as a commissioned shoot. `§4`.

---

## 2. The five categories

Nothing outside these five goes on the site.

| # | Category | What it is | Where |
|---|---|---|---|
| **P1** | **Facility** | Laboratories, cleanrooms, manufacturing lines, QC benches, cold chain, warehousing | Hero, service stages, Approval and Lifecycle |
| **P2** | **Document** | Dossiers, binders, printed submissions, annotated pages, stamps, archive shelving | Section transitions, the reimbursement band, Insights |
| **P3** | **Care** | Pharmacy counters, dispensing, clinics, consultations, patients receiving medicine | The reimbursement band specifically. This is where the argument ends |
| **P4** | **Place** | Nairobi, East African urban and clinical context, the firm's own office | Practice page, contact, OG images |
| **P5** | **Detail** | Macro: vials, blister foil, pipettes, a page edge, a barcode, a seal | Full-bleed dividers, texture, small accents |

**P3 is the one most sites get wrong and it is the one that matters most here.** The reimbursement service is about whether a person can actually get a medicine that is legal to sell. The image that carries that argument is a pharmacy counter or a clinic, not a laboratory. The whole point of the new service line is that it ends at a patient, and the photography should say so.

---

## 3. What never appears

Absolute. These are the images that make a professional services site look generic, and several of them are actively wrong for a regulatory firm.

- **The handshake.** In any form, at any angle.
- **People in lab coats pointing at a monitor**, or holding a clipboard and smiling at each other.
- **Pills scattered on a white surface**, or spilling from a bottle. The single most overused image in pharma and it says nothing.
- **Molecule renders, DNA helices, abstract blue medical swooshes, glowing hexagons.** Stock-illustration shorthand for "science".
- **A stethoscope on a laptop.**
- **Any identifiable branded medicine or packaging.** A regulatory consultancy showing a named competitor's product implies a relationship it does not have.
- **Any image implying the firm manufactures or dispenses.** It advises. `01 §2.1`.
- **Obviously non-African settings used to represent Kenyan work.** If an image is clearly a European or American facility, it does not go on a page about the Kenyan market. Use it for a generic Approval-stage illustration or not at all.
- **Faces of identifiable people used to imply they are clients, patients, or staff.** `§8`.
- **AI-generated imagery**, anywhere, for anything.

---

## 4. The treatment pipeline

Every photograph, regardless of source, is processed at build time. Not a CSS filter, which costs paint on every render and varies by browser.

**As shipped**, this is inverted: there is no build-time pipeline, and the grade is applied as a CSS `filter` (`--photo-grade`) on a shared `.photo` class, redefined per theme so dark theme pulls highlights back rather than reusing the light grade unchanged. See `DESIGN-SOURCE.md`. The desaturation-and-tint principle in this section still describes the intended look; only the mechanism differs from what is written below.

```
source (Unsplash, full resolution)
  → strip EXIF including GPS
  → convert to linear, correct white balance to neutral
  → desaturate to 35% of original saturation  ← the key step
  → apply a cool graded tint: shadows toward #0C1418, highlights toward #FBFBFA
  → lift blacks slightly (4%) so nothing is crushed
  → contrast curve: gentle S, no clipping
  → resize to the responsive set
  → AVIF primary, WebP fallback
  → generate blurhash placeholder
```

**The 35% desaturation is what unifies the set.** Not black and white, which would be a different design system and would fight the photography's job of making things feel real. Muted colour: a red hazard sign in a warehouse still reads red, but it reads *quietly*, and it never competes with `--stamp-600`.

In dark theme the same assets are used with a slightly different grade: shadows deepen toward `--paper`, highlights pull back to about 88% so a bright image does not glare against a dark page. Generate both variants at build time and serve by `prefers-color-scheme` or the theme cookie.

### The overlay rule

Any photograph carrying text over it gets a graded scrim, never a flat one:

```css
background: linear-gradient(
  to top,
  rgb(12 20 24 / 0.88) 0%,
  rgb(12 20 24 / 0.62) 42%,
  rgb(12 20 24 / 0.18) 100%
);
```

Text over an image is checked for contrast **against the darkest region the text actually sits on**, not against the average. Hero copy must clear 4.5:1 at every viewport width, which is verified by measuring the composited result rather than assuming the scrim handles it.

---

## 5. Placement, block by block

Where images go on the homepage, per `02 §3`. Total: seven images plus team portraits, which is enough to break the monotony and few enough to hold the performance budget.

| Block | Image | Category | Treatment |
|---|---|---|---|
| 1 · Hero | One, full-bleed, 16:9 desktop and 4:5 mobile | P1 facility | Graded scrim, type over |
| 2 · Pathway | None | — | Icons and rules only. The structural block stays clean |
| 3 · Reimbursement band | One, contained, on `--paper-deep` | **P3 care** | Full treatment, `--shadow-image` |
| 4 · Services | Four small, one per stage | P1, P4, P3, P5 | Contained, 3:2, `--r-lg` |
| 5 · Numbered entries | None | — | Typographic block, deliberately |
| 6 · Proof | Team portraits | Real people | Consistent crop and grade |
| 7 · Insight | One per card | P2 document, varied | 16:9 thumbnails |
| 8 · Contact | One, or a map | P4 place | Contained |

**Blocks 2 and 5 have no imagery on purpose.** A page where every section has a photograph is as monotonous as one where none does. The rhythm in `02 §3` alternates immersive and typographic, and these two are the typographic beats.

### Full-bleed dividers

Between major sections, at most twice per page: a P5 detail macro at full width, 120 to 200px tall, heavily graded, no text over it. It functions as a breath rather than as content, and it is the cheapest way to give a long page a sense of chapters.

---

## 6. Sourcing from Unsplash

### The licence position, stated properly

Unsplash images are free to use commercially without attribution under the Unsplash Licence. Three qualifications that matter for this client specifically:

1. **The licence does not grant model or property releases.** A photograph of an identifiable person cannot be used in a way that implies endorsement, or that they are a client, patient or employee. On this site, that means P3 care imagery must not be captioned or positioned to suggest the person shown is an Ultra Pharma client.
2. **Trademarks in an image are not licensed.** A photograph showing branded packaging or a recognisable logo does not go on the site. `§3`.
3. **Attribution is not required but is given anyway.** A small credit line, `--t-body-sm`, `--ink-400`, in the image caption or in a credits block on `/legal/terms`. It costs nothing and it is the right practice for a firm that sells integrity.

**Record the source URL and photographer for every image** in a `credits.json` alongside the assets, generated into the credits block. If an image is ever challenged, the provenance is one file lookup rather than an archaeology exercise.

### Search briefs

Specific queries per category, because vague searches return the clichés in `§3`.

**P1 · Facility**
`pharmaceutical manufacturing line` · `cleanroom production` · `laboratory glassware bench` · `quality control laboratory` · `cold storage pharmaceutical` · `sterile filling line` · `microscope laboratory work` · `warehouse pharmaceutical logistics`

Prefer: wide shots of real equipment, empty or with people at a distance and not posed. Avoid: close crops of a smiling technician.

**P2 · Document**
`archive shelves files` · `document binder stack` · `annotated printed pages` · `official stamp document` · `filing cabinet drawer open` · `paper index tabs`

This category is the most on-brand and the least used by competitors. Lean on it.

**P3 · Care**
`pharmacy counter dispensing` · `pharmacist shelves medicine` · `clinic waiting area` · `community health worker Africa` · `hospital corridor natural light` · `medicine handed over counter`

Prefer: African settings where they exist and are authentic. Avoid: anything that reads as a stock "caring professional" portrait.

**P4 · Place**
`Nairobi city` · `Nairobi skyline aerial` · `Kenya urban street` · `African city business district` · `modern office interior natural light`

**P5 · Detail**
`glass vials macro` · `blister pack macro` · `pipette droplet` · `paper edge macro` · `barcode label close` · `wax seal document`

### Selection criteria

For every candidate image, all six must hold:

1. Does it show something this firm actually touches?
2. Would it survive 35% desaturation, or does it depend on colour?
3. Is there a region where overlaid text could clear 4.5:1, if text is going over it?
4. Are there identifiable faces, and if so is that use defensible under `§8`?
5. Is there any visible branding or trademark?
6. Does it look like a photograph rather than a stock photograph?

Question six is a judgement call and it is the one that matters most. The tell is usually posing: real work photographs have people looking at their work, not at each other or the camera.

---

## 7. Performance

Imagery is the main risk to the budget in `02 §7`, so it is engineered rather than hoped for.

| Control | Detail |
|---|---|
| Format | AVIF primary, WebP fallback, no JPEG |
| Responsive set | 480, 768, 1024, 1440, 1920 |
| `sizes` | Set accurately per placement. A wrong `sizes` attribute is the most common cause of a blown image budget |
| Dimensions | Explicit width and height on every image, always. No CLS |
| Loading | `loading="lazy"` on everything except the hero, which gets `fetchpriority="high"` and a preload hint |
| Placeholder | Blurhash, generated at build. Never a spinner, never an empty box |
| Hero budget | Under 140kb after treatment at 1440 |
| Total above the fold | Under 200kb |
| Total page, homepage | Under 900kb with all images loaded |
| CLS | Under 0.05 |
| LCP | Under 2.2s on a 4G profile |

Measured in CI with a Lighthouse budget that fails the build.

---

## 8. People in photographs

The rule that keeps this ethical and legally clean.

- **Real team photographs are strongly preferred over any stock alternative** for the Proof block. A named person with a credential and a face is worth more than any amount of design. `01 §7` question 10.
- **Stock photographs of people are used only as environmental context**, where the person is incidental to the scene, not the subject of it, and never captioned in a way that implies identity or relationship.
- **No image of an identifiable person appears on the Proof block, the team section, or anywhere a reader could reasonably infer they work for or are a client of the firm.**
- Patients are shown as context in P3 imagery only, never as a subject with an implied story.
- If the firm cannot supply team photographs, the Proof block uses initials in a typographic treatment rather than stock portraits. That is an honest gap; stock portraits are a lie.

**As shipped, this section is knowingly not followed**, on the client's own direct instruction during the build: `content/team.ts` carries four fabricated names, fabricated credentials, fabricated LinkedIn links and Unsplash stock portraits, explicitly as demo data for a presentation, to be replaced with real people before the site reaches a real audience. This is the single highest-priority item to close out before launch. See `DESIGN-SOURCE.md`.

---

## 9. Icons, and why they are not imagery

Icons and photographs do different jobs and should never substitute for one another.

Photographs make an abstract service feel real. Icons label and classify. A section with an icon in place of a photograph feels thin; a section with a photograph in place of an icon loses its taxonomy.

Phosphor, weight assignments in `03 §8`. Rules:

- One icon per labelled thing. Never an icon beside a heading purely for visual interest.
- Icons never appear in the hero, the numbered entries, or over photographs. **As shipped, all three are now deliberate exceptions**, confirmed during the refinement pass: the hero's two call-to-action buttons carry a directional arrow (a standard, functional pattern used on every button sitewide, not hero-specific decoration); the hero stages ribbon sits over the hero photograph with an icon per stage; `NumberedEntry` is icon-led, per `03 §11`. See `DESIGN-SOURCE.md`.
- Icon size is tied to role: 16 to 32px inline or in a badge, up to 500px as a low-opacity decorative background watermark on a card (`03 §8`).
- Icons take `--ink-500` by default and `--stamp-600` only when marking the active pathway stage, an accent badge, or a decorative watermark.
- Weight is tied to role, not mixed at random: duotone for decorative badges and watermarks, bold for small inline utility icons, regular elsewhere. `03 §8`.

---

## 10. Illustration and diagram

One exception to "no illustration": **process diagrams**, which are genuinely useful on `/services/reimbursement`.

The evidence-requirements list and the engagement timeline are drawn as diagrams in the design system's own vocabulary: rules, mono numerals, `--stamp-600` markers. Built as inline SVG, themed with CSS variables so they work in both themes, and never as a raster image.

They are diagrams, not illustrations. No characters, no metaphors, no isometric offices.

---

## 11. Art direction checklist, per image

Before any image ships:

- [ ] Falls in one of the five categories
- [ ] Not on the never-appears list in `§3`
- [ ] Passes all six selection criteria in `§6`
- [ ] Processed through the pipeline, both theme variants generated
- [ ] Text over it, if any, measured at 4.5:1 against the composited darkest region
- [ ] Meaningful alt text written, describing the subject, not keywords
- [ ] Source URL and photographer recorded in `credits.json`
- [ ] No trademark, no identifiable branded product
- [ ] Responsive set generated, `sizes` set correctly, dimensions explicit
- [ ] Within the placement budget for its block
