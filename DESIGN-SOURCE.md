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
the firm's own photography, replace the `src` in that one file.
