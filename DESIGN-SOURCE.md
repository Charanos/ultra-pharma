# Design source of truth

The implementation follows the Claude Design canvas:

- Project: `Ultrapharma Website Revamp` (`7c529bad-62f9-4fdc-a034-1d8c62ce0ddb`)
- File: `Ultra Pharma.dc.html`

The canvas is the authority on visual decisions. `ultrapharma-docs/` remains the
authority on copy, facts and information architecture.

## Where the canvas overrides the dossier docs

Recorded so the difference reads as a decision rather than a mistake.

| Concern | `03-design-system-dossier.md` | Canvas (implemented) |
|---|---|---|
| Display face | Newsreader 300/400 | Source Serif 4, weight 500 |
| Button radius | `--r-md` 4px | 999px pill |
| Panel radius | `--r-md` 4px | 18 to 20px |
| Input radius | `--r-sm` 2px | 10px |
| Card elevation | 1px rule, never a shadow | `--shadow-card` on team, service and form panels |
| Photo treatment | Build-time grade, no CSS filters | `--photo-grade` CSS filter |
| Theme image variants | Two graded variants per image | One asset, one filter, both themes |
| Index rail side | Left of viewport | Right of viewport |

Everything else, including the palette, the three-token stamp rule, the type
scale, the section numbering and the 16px body floor, matches the docs.

## Image slots

The canvas ships `<image-slot>` placeholders carrying a category brief, for
example `P1 · FACILITY — wide shot, sterile filling line or QC laboratory,
unposed, 16:9`. Images dropped into the canvas could not be exported: the design
API caps file reads at 256 KiB and `.image-slots.state.json` returned truncated.

Every slot is therefore filled from Unsplash against its own brief and the six
selection criteria in `04 §6`. All sources live in `content/media.ts`. To swap in
the firm's own photography, replace the `src` in that one file. The hero is the
one exception: it uses a supplied local asset, `public/hero-bg.jpg`, rather than
an Unsplash source.

## Round two: the refinement pass

After the initial build, a second implementation pass (a separate front-end
agent, then a review and fix pass) took the site further from the written docs
in ways worth recording as decisions rather than drift. Some were confirmed
directly with the client; the rest are objectively-scoped fixes (accessibility,
structural HTML, unverifiable copy) rather than taste calls, so they are noted
here rather than re-litigated.

| Concern | Docs said | Shipped, and why |
|---|---|---|
| Signature element | `--t-numeral` mono numeral is "the system's most distinctive typographic move," appearing only on `PathwayRail` and `NumberedEntry` | Both components are icon-led instead: a Phosphor duotone icon in place of the numeral. Confirmed directly with the client after flagging the change explicitly — the icon treatment stays. `--t-numeral` and `--numeral` remain in the token set (still used for `FigureBlock`-style standalone figures) but no longer anchor the two signature components |
| Icon weight | Phosphor "regular weight... no filled variants mixed with regular ones" | Three weights in deliberate, consistent roles: **duotone** for large decorative badge and background-watermark icons, **bold** for small inline utility icons (arrows, close, check), **regular** elsewhere. Not mixed at random — each role is fixed |
| UI font | Inter Tight | Nunito |
| Button and card elevation | "Panels and cards use a 1px `--rule-strong`, never a shadow"; hover is "border shift... no lift" | Cards (team, service, insight, phase) carry `--shadow-card`/`--shadow-xs` and lift 1px on hover. The hero header controls additionally use `backdrop-filter: blur(...)` on their pill nav and mobile drawer — the one deliberate use of glass in the system, scoped to the transparent-header-over-hero-photograph state only, never elsewhere |
| Header behaviour | Implied static/sticky per `03 §7` Tier 2 listing | `position: fixed`, transparent with white text over the homepage hero, opaque on scroll and on every other route, hides on scroll-down and reappears on scroll-up (GSAP + ScrollTrigger). Pages must clear its height with top padding since it no longer occupies flow |
| Motion recipe | `03 §5`: opacity plus a 16px rise, nothing else specified | Extended: an 8px blur-to-focus is layered onto every reveal; icon and rail-marker pop-ins use `back.out` overshoot easing; the reimbursement feature band's image and copy slide in from opposite sides; the two hero CTAs carry a small pointer-magnetic pull on desktop. Still no parallax, no scroll-jacking, no counting-up figures |
| Team and Proof block | `04 §8`: real photographs only, or the typographic-initials fallback; "stock portraits are a lie" | Client's own instruction, given directly during this build: ship named individuals, credentials and Unsplash portraits as **demo data for a presentation**, explicitly to be replaced before the site is real. `content/team.ts` carries this as fabricated names and fake LinkedIn links, not verified people. **This is the one item in this table that is not production-ready and must not go live to a real audience unswapped** |
| `/contact` page copy | `05 §5` | Rewritten with more detail (NDA availability, a named-lead promise, a three-step onboarding strip). Kept where it stayed inside what is checkable; an early draft asserted "senior regulatory pharmacists" and an active "NDA Protected" status and a specialist bench that the firm has not confirmed — corrected to state these as things that happen for an enquiry (a confidentiality agreement is available, a named lead is assigned) rather than as existing credentials or infrastructure |

### Fixed during the review pass, not decisions

Objective defects, corrected rather than logged as taste:

- `/insights` and `/insights/[slug]` each nested a second `<main>` inside the one `layout.tsx` already provides. Changed to a plain `<div>`.
- `.icon-btn`'s hit area had shrunk under the 44px touch-target minimum during a sizing pass. The visual box is unchanged; the invisible `::after` hit-area extension was widened to restore 44px.
- `font-semibold` (600) had crept into eyebrow labels across most pages, over the stated 500 ceiling. Normalised to `font-medium`.
- The reimbursement page's fact list (gazette number, dates, chair, secretariat) rendered in body type instead of `--t-data`. Corrected.
- The hero image's declared dimensions (2400×1600) didn't match the asset's real dimensions (4252×3145); corrected so `sizes`-based responsive selection works from accurate metadata.
- An unused `media.divider` entry (superseded when the homepage divider was changed to reuse the hero photograph) still surfaced on the `/legal/terms` photo-credits list, crediting an image no longer shown anywhere. Removed.
- The reimbursement "how we work" lede described the process ending in formal panel "submission and defense," implying a specific confirmed procedural step beyond what `01 §4` verifies. Softened to "submission and the review process that follows."
