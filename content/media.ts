/**
 * Every photograph on the site, in one file.
 *
 * Each entry corresponds to an `<image-slot>` in the design canvas and carries
 * that slot's category brief. Sources are Unsplash, selected against the six
 * criteria in `04 §6`. To swap in the firm's own photography, replace `src`
 * here and nothing else changes.
 */

export type Media = {
  /** The canvas slot id this fills. */
  readonly slot: string;
  /** Category brief carried by the canvas placeholder. */
  readonly brief: string;
  readonly src: string;
  /** Describes the subject. Never a keyword list. */
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly photographer: string;
  readonly source: string;
};

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const media = {
  hero: {
    slot: "up-hero",
    brief: "P1 · FACILITY : wide shot, sterile filling line or QC laboratory, unposed, 16:9",
    src: unsplash("1581091226825-a6a2a5aee158", 1800),
    alt: "A laboratory bench with analytical instruments and glassware under even overhead light.",
    width: 1800,
    height: 1000,
    photographer: "ThisisEngineering",
    source: "https://unsplash.com/photos/1581091226825-a6a2a5aee158",
  },
  care: {
    slot: "up-care",
    brief: "P3 · CARE : pharmacy counter, medicine handed across, African setting, 4:5",
    src: unsplash("1587854692152-cbe660dbde88", 900),
    alt: "A pharmacist reaching for boxed medicine on a dispensary shelf behind a counter.",
    width: 900,
    height: 1125,
    photographer: "Petr Magera",
    source: "https://unsplash.com/photos/1587854692152-cbe660dbde88",
  },
  stage01: {
    slot: "up-stage-01",
    brief: "P1 · FACILITY : quality control laboratory bench, wide, 3:2",
    src: unsplash("1579154204601-01588f351e67", 900),
    alt: "Rows of labelled sample vials on a quality control bench.",
    width: 900,
    height: 600,
    photographer: "Louis Reed",
    source: "https://unsplash.com/photos/1579154204601-01588f351e67",
  },
  stage02: {
    slot: "up-stage-02",
    brief: "P4 · PLACE : East African urban or logistics context, 3:2",
    src: unsplash("1611348586804-61bf6c080437", 900),
    alt: "A wide view across the Nairobi skyline in the late afternoon.",
    width: 900,
    height: 600,
    photographer: "Amani Nation",
    source: "https://unsplash.com/photos/1611348586804-61bf6c080437",
  },
  stage03: {
    slot: "up-stage-03",
    brief: "P3 · CARE : clinic waiting area or dispensing counter, 3:2",
    src: unsplash("1519494026892-80bbd2d6fd0d", 900),
    alt: "A naturally lit hospital corridor with seating along one wall.",
    width: 900,
    height: 600,
    photographer: "Adhy Savala",
    source: "https://unsplash.com/photos/1519494026892-80bbd2d6fd0d",
  },
  stage04: {
    slot: "up-stage-04",
    brief: "P2 · DOCUMENT : archive shelving or annotated dossier pages, 3:2",
    src: unsplash("1568667256549-094345857637", 900),
    alt: "Archive shelving filled with labelled box files.",
    width: 900,
    height: 600,
    photographer: "Jan Antonin Kolar",
    source: "https://unsplash.com/photos/1568667256549-094345857637",
  },
  divider: {
    slot: "up-divider-1",
    brief: "P5 · DETAIL : macro, blister foil or glass vials, heavily graded, no text",
    src: unsplash("1626716493137-b67fe9501e76", 1800),
    alt: "A macro view along a row of sealed glass vials.",
    width: 1800,
    height: 220,
    photographer: "Mufid Majnun",
    source: "https://unsplash.com/photos/1626716493137-b67fe9501e76",
  },
  practice: {
    slot: "up-practice",
    brief: "P4 · PLACE : Nairobi office interior, natural light, 3:2",
    src: unsplash("1497366216548-37526070297c", 900),
    alt: "An open office interior with desks along a wall of windows.",
    width: 900,
    height: 600,
    photographer: "Nastuh Abootalebi",
    source: "https://unsplash.com/photos/1497366216548-37526070297c",
  },
  place: {
    slot: "up-place",
    brief: "P4 · PLACE : Nairobi street or skyline, 16:9",
    src: unsplash("1580060839134-75a5edca2e99", 1600),
    alt: "A Nairobi street seen from above with traffic and roadside trees.",
    width: 1600,
    height: 900,
    photographer: "Sergey Pesterev",
    source: "https://unsplash.com/photos/1580060839134-75a5edca2e99",
  },
  insight1: {
    slot: "up-insight-1",
    brief: "P2 · DOCUMENT : annotated printed pages, 16:9",
    src: unsplash("1450101499163-c8848c66ca85", 800),
    alt: "A printed document marked up in pen beside a notebook.",
    width: 800,
    height: 450,
    photographer: "Green Chameleon",
    source: "https://unsplash.com/photos/1450101499163-c8848c66ca85",
  },
  insight2: {
    slot: "up-insight-2",
    brief: "P2 · DOCUMENT : official stamp on document, 16:9",
    src: unsplash("1554224155-6726b3ff858f", 800),
    alt: "A stamped and signed official document on a desk.",
    width: 800,
    height: 450,
    photographer: "Kelly Sikkema",
    source: "https://unsplash.com/photos/1554224155-6726b3ff858f",
  },
  insight3: {
    slot: "up-insight-3",
    brief: "P2 · DOCUMENT : filing cabinet drawer open, 16:9",
    src: unsplash("1544396821-4dd40b938ad3", 800),
    alt: "An open filing drawer with tabbed dividers separating the folders.",
    width: 800,
    height: 450,
    photographer: "Maksym Kaharlytskyi",
    source: "https://unsplash.com/photos/1544396821-4dd40b938ad3",
  },
  insight4: {
    slot: "up-insight-4",
    brief: "P2 · DOCUMENT : bound dossier volumes on a desk, 16:9",
    src: unsplash("1583912267550-d6c2ac3196c0", 800),
    alt: "Bound report volumes stacked on a desk beside a pen.",
    width: 800,
    height: 450,
    photographer: "Wesley Tingey",
    source: "https://unsplash.com/photos/1583912267550-d6c2ac3196c0",
  },
} as const satisfies Record<string, Media>;

export const allMedia: readonly Media[] = Object.values(media);
