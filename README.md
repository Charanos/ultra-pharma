# Ultra Pharma

Regulatory affairs and health technology assessment consultancy, Nairobi.
`ultrapharma.co.ke`

Next.js 15 App Router, TypeScript strict, Tailwind v4 CSS-first, Phosphor
Icons, GSAP, MDX.

## Design source

The visual system is the Claude Design canvas `Ultra Pharma.dc.html`. Copy,
facts and information architecture come from `ultrapharma-docs/`. Where the two
disagree, and why, is recorded in [DESIGN-SOURCE.md](DESIGN-SOURCE.md).

## Commands

```bash
npm run dev            # development server
npm run build          # production build
npm run typecheck      # tsc --noEmit
npm run lint           # eslint
npm run lint:strings   # BPTAP naming, deleted claims, dead links, em dashes
npm run storybook      # component catalogue
```

`lint:strings` is the guard that matters most. It fails on the two incorrect
forms of the BPTAP name, on every unverifiable claim deleted in `05 §9`, on
`href="#"`, on em dashes and on emoji.

## Layout

```
app/          routes. One page per route, content imported not inlined
components/
  primitives/ button, theme toggle, reveal, json-ld
  structure/  header, footer, section, index rail, logo
  content/    pathway rail, numbered entry, evidence list, team card, figures
  forms/      contact form
  motion/     the GSAP layer
content/      every string and image reference, typed
  insights/   MDX articles
lib/          schema, motion tokens, utils
scripts/      check-strings
```

## Content

Nothing is hardcoded in a page. To change copy, edit the file in `content/`.

- `content/site.ts` navigation, contact channels, footer
- `content/media.ts` every photograph, with credit and alt text
- `content/pathway.ts` the four stages
- `content/entries.ts` the six numbered entries
- `content/services.ts` the services page
- `content/reimbursement.ts` the reimbursement page, facts verified against `01 §4`
- `content/team.ts` team and case notes
- `content/insights.ts` article index, with bodies in `content/insights/*.mdx`

## Standing rules

- The panel is the Benefits Package and Tariffs Advisory Panel. The build fails
  on either incorrect form.
- No claim ships that cannot be checked.
- The reimbursement service is evidence generation and structured engagement,
  not guaranteed filing or outcome.
- `--stamp-600` fills and rules, `--stamp-700` accent text, `--stamp-on` text on
  a stamp fill.
- No section renders an empty container.
- Weight 400 and 500 only, no italics.
- Body 16px minimum. `--t-label` and `--t-index` are the only exceptions.
- Every checkable fact, date and reference number in `--t-data`.

## Outstanding

Blocking items from `01 §7`, still with the client:

1. Is there a published applicant pathway for submitting to BPTAP?
2. Team names, credentials, photographs and LinkedIn. The Proof block uses the
   typographic fallback until these arrive.
3. Real case outcomes. The section does not render while there are none.
4. A street address beyond "Nairobi, Kenya".

Photography is Unsplash placeholder, sourced against the canvas slot briefs.
Replace `src` in `content/media.ts` to swap in the firm's own.

## Environment

Copy `.env.example` to `.env.local` and fill in the SMTP values for the contact
form.
