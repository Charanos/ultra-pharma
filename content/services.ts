import type { StageIcon } from "./pathway";

export type Service = {
  readonly name: string;
  readonly description: string;
  /** Rendered only when present. An empty string renders no row. */
  readonly produces?: string;
};

export type ServiceStage = {
  readonly n: string;
  readonly name: string;
  readonly icon: StageIcon;
  readonly blurb: string;
  /** Stage 03 links out to its own page rather than expanding here. */
  readonly href?: string;
  readonly services: readonly Service[];
};

export const serviceStages: readonly ServiceStage[] = [
  {
    n: "01",
    name: "Approval",
    icon: "SealCheck",
    blurb:
      "Getting a healthcare product legally onto the Kenyan market, and keeping the quality systems behind it inspection-ready.",
    services: [
      {
        name: "Regulatory strategy",
        description:
          "Registration pathway selection, classification, gap analysis against Pharmacy and Poisons Board requirements, and a filing plan with realistic timelines.",
        produces: "A filing strategy and dossier gap register.",
      },
      {
        name: "Submissions and eCTD",
        description:
          "Dossier compilation, eCTD publishing, agency correspondence, and management of queries through to determination.",
        produces: "A submission-ready dossier and a query log with closure evidence.",
      },
      {
        name: "Compliance and quality",
        description:
          "Quality management systems, SOP development, GxP readiness, and inspection preparation.",
        produces: "An SOP set, an audit-readiness assessment, and a remediation plan.",
      },
    ],
  },
  {
    n: "02",
    name: "Market entry",
    icon: "GlobeHemisphereEast",
    blurb:
      "Taking a registered product into additional markets without rebuilding the dossier each time.",
    services: [
      {
        name: "Multi-market dossiers",
        description:
          "Harmonised submissions for EAC and wider African markets, with local adaptation where each authority requires it.",
      },
      {
        name: "Specialised therapeutics",
        description:
          "Pathways for products that do not fit standard routes: rare disease treatments, biologics, and advanced therapies.",
      },
    ],
  },
  {
    n: "03",
    name: "Reimbursement",
    icon: "Scales",
    href: "/services/reimbursement",
    blurb:
      "Health product assessment and national benefit listing, from HTA dossier development to structured engagement with SHA and the panel secretariat.",
    services: [
      {
        name: "HTA dossier development",
        description:
          "Assembling the evidence a health technology assessment requires: clinical effectiveness against an appropriate local comparator, safety, and the value case in a form assessors can evaluate.",
      },
      {
        name: "Cost-effectiveness and budget-impact modelling",
        description:
          "Incremental cost-effectiveness analysis using Kenyan cost and epidemiological inputs, and a budget-impact model against the relevant fund.",
      },
      {
        name: "Stakeholder engagement and SHA liaison",
        description:
          "Structured engagement with the Ministry of Health, the Social Health Authority and the panel secretariat, sequenced so evidence arrives when it can be considered.",
      },
    ],
  },
  {
    n: "04",
    name: "Lifecycle",
    icon: "ArrowsClockwise",
    blurb: "Sustaining a product's value after approval.",
    services: [
      {
        name: "Post-approval management",
        description:
          "Variations, renewals, pharmacovigilance obligations, and commitment tracking.",
      },
      {
        name: "Label and indication expansion",
        description: "Evidence assembly and submissions to broaden an approved indication.",
      },
    ],
  },
];
