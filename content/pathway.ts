import { media, type Media } from "./media";

/** Phosphor icon names, fixed per `03 §8` so meaning stays stable. */
export type StageIcon =
  | "SealCheck"
  | "GlobeHemisphereEast"
  | "Scales"
  | "ArrowsClockwise";

export type Stage = {
  readonly n: string;
  readonly name: string;
  readonly question: string;
  readonly icon: StageIcon;
  readonly isNew: boolean;
  readonly href: string;
  readonly blurb: string;
  readonly deliverables: readonly string[];
  readonly image: Media;
  /** Homepage services grid: 7 and 5 alternating at lg. */
  readonly span: 7 | 5;
};

export const stages: readonly Stage[] = [
  {
    n: "01",
    name: "Approval",
    question: "Can it be sold?",
    icon: "SealCheck",
    isNew: false,
    href: "/services#stage-01",
    blurb:
      "Getting a healthcare product legally onto the Kenyan market, and keeping the quality systems behind it inspection-ready.",
    deliverables: [
      "Regulatory strategy",
      "Submissions and eCTD",
      "Compliance and quality systems",
    ],
    image: media.stage01,
    span: 7,
  },
  {
    n: "02",
    name: "Market entry",
    question: "Can it reach the market?",
    icon: "GlobeHemisphereEast",
    isNew: false,
    href: "/services#stage-02",
    blurb:
      "Taking a registered product into additional markets without rebuilding the dossier each time.",
    deliverables: ["Multi-market dossiers", "Local adaptation", "Expedited pathways"],
    image: media.stage02,
    span: 5,
  },
  {
    n: "03",
    name: "Reimbursement",
    question: "Will it be paid for?",
    icon: "Scales",
    isNew: true,
    href: "/services/reimbursement",
    blurb:
      "Building the evidence that supports inclusion in the national benefits package, so an approved product becomes a funded one.",
    deliverables: ["HTA dossiers", "Economic modelling", "SHA and BPTAP engagement"],
    image: media.stage03,
    span: 5,
  },
  {
    n: "04",
    name: "Lifecycle",
    question: "Does it stay valuable?",
    icon: "ArrowsClockwise",
    isNew: false,
    href: "/services#stage-04",
    blurb:
      "Sustaining a product's value after approval, from variations and renewals to broadening an approved indication.",
    deliverables: ["Post-approval monitoring", "Label expansion", "Portfolio strategy"],
    image: media.stage04,
    span: 7,
  },
];
