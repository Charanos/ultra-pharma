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

const unsplash = (id: string, w: number, q = 85) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const media = {
  hero: {
    slot: "up-hero",
    brief: "P1 · FACILITY : wide shot, sterile filling line or QC laboratory, unposed, 16:9",
    src: "/hero-bg.jpg",
    alt: "Ultra Pharma laboratory and regulatory operations in Kenya.",
    width: 2400,
    height: 1600,
    photographer: "Ultra Pharma",
    source: "/hero-bg.jpg",
  },
  care: {
    slot: "up-care",
    brief: "P3 · CARE : pharmaceutical capsules and clinical supply, sharp focus, 4:5",
    src: unsplash("1584308666744-24d5c474f2ae", 1600, 90),
    alt: "Pharmaceutical capsules and blister packaging in a clean clinical setting.",
    width: 1600,
    height: 2000,
    photographer: "Volodymyr Hryshchenko",
    source: "https://unsplash.com/photos/1584308666744-24d5c474f2ae",
  },
  stage01: {
    slot: "up-stage-01",
    brief: "P1 · FACILITY : quality control laboratory bench, wide, 3:2",
    src: unsplash("1579154204601-01588f351e67", 1400, 85),
    alt: "Rows of labelled sample vials on a quality control bench.",
    width: 1400,
    height: 933,
    photographer: "Louis Reed",
    source: "https://unsplash.com/photos/1579154204601-01588f351e67",
  },
  stage02: {
    slot: "up-stage-02",
    brief: "P1 · FACILITY : a pharmacist examining medication in a pharmacy, 3:2",
    src: unsplash("1758573467057-955f803660a9", 1400, 85),
    alt: "A pharmacist examining a medication bottle in a dispensary setting.",
    width: 1400,
    height: 933,
    photographer: "Navy Medicine",
    source: "https://unsplash.com/photos/a-man-in-a-pharmacy-examines-a-bottle-D08dZ8UvWiY",
  },
  stage03: {
    slot: "up-stage-03",
    brief: "P3 · CARE : a doctor showing a patient information on a tablet, 3:2",
    src: unsplash("1666886573531-48d2e3c2b684", 1400, 85),
    alt: "A healthcare provider consulting with a patient using a digital tablet.",
    width: 1400,
    height: 933,
    photographer: "Nappy",
    source: "https://unsplash.com/photos/a-doctor-showing-a-patient-something-on-the-tablet-J5UTvRgse7Q",
  },
  stage04: {
    slot: "up-stage-04",
    brief: "P2 · DOCUMENT : a professional using a digital tablet for records, 3:2",
    src: unsplash("1666886573212-2de95596d509", 1400, 85),
    alt: "A professional managing healthcare records and data on a digital tablet.",
    width: 1400,
    height: 933,
    photographer: "Nappy",
    source: "https://unsplash.com/photos/a-man-using-a-tablet-EjajCMK7CJM",
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
    src: unsplash("1694434948850-ed51bd461733", 1600),
    alt: "A panoramic view of Nairobi city expressway and skyline.",
    width: 1600,
    height: 900,
    photographer: "Unsplash",
    source: "https://unsplash.com/photos/1694434948850-ed51bd461733",
  },
  insight1: {
    slot: "up-insight-1",
    brief: "P2 · DOCUMENT : annotated printed pages, 16:9",
    src: unsplash("1450101499163-c8848c66ca85", 1200, 85),
    alt: "A printed document marked up in pen beside a notebook.",
    width: 1200,
    height: 675,
    photographer: "Green Chameleon",
    source: "https://unsplash.com/photos/1450101499163-c8848c66ca85",
  },
  insight2: {
    slot: "up-insight-2",
    brief: "P2 · DOCUMENT : official stamp on document, 16:9",
    src: unsplash("1554224155-6726b3ff858f", 1200, 85),
    alt: "A stamped and signed official document on a desk.",
    width: 1200,
    height: 675,
    photographer: "Kelly Sikkema",
    source: "https://unsplash.com/photos/1554224155-6726b3ff858f",
  },
  insight3: {
    slot: "up-insight-3",
    brief: "P2 · DOCUMENT : filing cabinet drawer open, 16:9",
    src: unsplash("1544396821-4dd40b938ad3", 1200, 85),
    alt: "An open filing drawer with tabbed dividers separating the folders.",
    width: 1200,
    height: 675,
    photographer: "Maksym Kaharlytskyi",
    source: "https://unsplash.com/photos/1544396821-4dd40b938ad3",
  },
  insight4: {
    slot: "up-insight-4",
    brief: "P2 · DOCUMENT : bound dossier volumes on a desk, 16:9",
    src: unsplash("1450133064473-71024230f91b", 1200, 85),
    alt: "Document files and reports arranged on a workspace desk.",
    width: 1200,
    height: 675,
    photographer: "Scott Graham",
    source: "https://unsplash.com/photos/1450133064473-71024230f91b",
  },
} as const satisfies Record<string, Media>;

export const allMedia: readonly Media[] = Object.values(media);
