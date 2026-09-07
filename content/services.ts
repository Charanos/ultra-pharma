import type { IconName } from "@/lib/icons";
import type { StageIcon } from "./pathway";

export type Service = {
  readonly name: string;
  readonly description: string;
  /**
   * Its own mark. Where a service is the same labelled thing as a homepage
   * deliverable, both resolve to the same registry concept. `04 §9`.
   */
  readonly icon: IconName;
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
    icon: "approval",
    blurb:
      "Getting a healthcare product legally onto the Kenyan market, and keeping the quality systems behind it inspection-ready.",
    services: [
      {
        name: "Regulatory strategy",
        icon: "regulatoryStrategy",
        description:
          "Registration pathway selection, classification, gap analysis against Pharmacy and Poisons Board requirements, and a filing plan with realistic timelines.",
        produces: "A filing strategy and dossier gap register.",
      },
      {
        name: "Submissions and eCTD",
        icon: "submissions",
        description:
          "Dossier compilation, eCTD publishing, agency correspondence, and management of queries through to determination.",
        produces: "A submission-ready dossier and a query log with closure evidence.",
      },
      {
        name: "Compliance and quality",
        icon: "qualitySystems",
        description:
          "Quality management systems, SOP development, GxP readiness, and inspection preparation.",
        produces: "An SOP set, an audit-readiness assessment, and a remediation plan.",
      },
    ],
  },
  {
    n: "02",
    name: "Market entry",
    icon: "marketEntry",
    blurb:
      "Taking a registered product into additional markets without rebuilding the dossier each time.",
    services: [
      {
        name: "Multi-market dossiers",
        icon: "multiMarketDossiers",
        description:
          "Harmonised submissions for EAC and wider African markets, with local adaptation where each authority requires it.",
      },
      {
        name: "Specialised therapeutics",
        icon: "specialisedTherapeutics",
        description:
          "Pathways for products that do not fit standard routes: rare disease treatments, biologics, and advanced therapies.",
      },
    ],
  },
  {
    n: "03",
    name: "Reimbursement",
    icon: "reimbursement",
    href: "/services/reimbursement",
    blurb:
      "Health product assessment and national benefit listing, from HTA dossier development to structured engagement with SHA and the panel secretariat.",
    services: [
      {
        name: "HTA dossier development",
        icon: "htaDossier",
        description:
          "Assembling the evidence a health technology assessment requires: clinical effectiveness against an appropriate local comparator, safety, and the value case in a form assessors can evaluate.",
      },
      {
        name: "Cost-effectiveness and budget-impact modelling",
        icon: "economicModelling",
        description:
          "Incremental cost-effectiveness analysis using Kenyan cost and epidemiological inputs, and a budget-impact model against the relevant fund.",
      },
      {
        name: "Stakeholder engagement and SHA liaison",
        icon: "stakeholderEngagement",
        description:
          "Structured engagement with the Ministry of Health, the Social Health Authority and the panel secretariat, sequenced so evidence arrives when it can be considered.",
      },
    ],
  },
  {
    n: "04",
    name: "Lifecycle",
    icon: "lifecycle",
    blurb: "Sustaining a product's value after approval.",
    services: [
      {
        name: "Post-approval management",
        icon: "postApproval",
        description:
          "Variations, renewals, pharmacovigilance obligations, and commitment tracking.",
      },
      {
        name: "Label and indication expansion",
        icon: "labelExpansion",
        description: "Evidence assembly and submissions to broaden an approved indication.",
      },
    ],
  },
];
