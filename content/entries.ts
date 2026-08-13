/**
 * The six "why partners choose us" entries, kept almost verbatim from the
 * existing site because they are the best writing the firm has. `05 §2`.
 */
export type EntryIcon =
  | "Target"
  | "Lightning"
  | "Compass"
  | "ShieldCheck"
  | "Handshake"
  | "GraduationCap";

export type Entry = {
  readonly n: string;
  readonly heading: string;
  readonly body: string;
  readonly why: string;
  readonly icon: EntryIcon;
};

export const entries: readonly Entry[] = [
  {
    n: "01",
    heading: "Outcome-driven submissions",
    body: "We build dossiers around approval triggers: pre-submission audits, agency-ready narratives, and checklist-driven gap closure.",
    why: "Fewer questions from regulators, shorter review cycles.",
    icon: "Target",
  },
  {
    n: "02",
    heading: "Rapid-response regulatory unit",
    body: "A dedicated team that activates for urgent filings, regulatory queries, or inspection support.",
    why: "Reduces stoppages and protects launch windows.",
    icon: "Lightning",
  },
  {
    n: "03",
    heading: "Local architects, regional reach",
    body: "In-country specialists translate global standards into locally acceptable strategies, coordinating with partners and stakeholders on the ground.",
    why: "Smoother market entry with fewer reworks.",
    icon: "Compass",
  },
  {
    n: "04",
    heading: "Compliance by design",
    body: "Quality systems, SOPs and traceable records integrated from the outset: digital-first, audit-ready, scalable.",
    why: "Inspection resilience and lower remediation cost across the lifecycle.",
    icon: "ShieldCheck",
  },
  {
    n: "05",
    heading: "Client-aligned commercial models",
    body: "Milestone fees, retainer and milestone hybrids, or outcome-linked engagements tailored to project risk.",
    why: "Aligns incentives and reduces upfront budget friction.",
    icon: "Handshake",
  },
  {
    n: "06",
    heading: "Capacity and knowledge transfer",
    body: "Practical workshops, SOP handovers and on-the-job mentoring so your team gains autonomy.",
    why: "Long-term capability, less reliance on external support.",
    icon: "GraduationCap",
  },
];
