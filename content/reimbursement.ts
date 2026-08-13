/**
 * `/services/reimbursement`. Facts verified against `01 §4`.
 *
 * The panel is the Benefits Package and Tariffs Advisory Panel. The two
 * incorrect forms in circulation are rejected by `npm run lint:strings`, which
 * is why they are not spelled out here.
 */

export type Fact = {
  readonly key: string;
  readonly value: string;
};

/** Rendered in --t-data, because each one is checkable. */
export const facts: readonly Fact[] = [
  { key: "Body", value: "Benefits Package and Tariffs Advisory Panel" },
  { key: "Gazetted", value: "Notice No. 5044, 23 April 2025" },
  { key: "Inaugurated", value: "26 May 2025" },
  { key: "Chair", value: "Prof. Walter Jaoko" },
  { key: "Secretariat", value: "CEMA, University of Nairobi" },
  { key: "Method", value: "Health technology assessment" },
];

export type ReimbursementService = {
  readonly icon: "Files" | "Calculator" | "UsersThree";
  readonly name: string;
  readonly description: string;
};

export const reimbursementServices: readonly ReimbursementService[] = [
  {
    icon: "Files",
    name: "HTA dossier development",
    description:
      "Assembling the evidence a health technology assessment requires: clinical effectiveness against an appropriate local comparator, safety, and the value case in a form assessors can evaluate.",
  },
  {
    icon: "Calculator",
    name: "Cost-effectiveness and budget-impact modelling",
    description:
      "Incremental cost-effectiveness analysis using Kenyan cost and epidemiological inputs, and a budget-impact model showing what inclusion would mean for the relevant fund over a defined horizon.",
  },
  {
    icon: "UsersThree",
    name: "Stakeholder engagement and SHA liaison",
    description:
      "Structured engagement with the Ministry of Health, the Social Health Authority and the panel secretariat, sequenced so evidence arrives when it can be considered.",
  },
];

/**
 * Required verbatim under section 03 per `01 D-04`. The service is evidence
 * generation and structured engagement, not a promised filing route or outcome.
 */
export const caveat =
  "Kenya's HTA process is new and still taking shape. We work with the process as it currently operates, and we will tell you plainly what is established and what is not.";

export type EvidenceItem = {
  readonly n: string;
  readonly requirement: string;
};

export const evidence: readonly EvidenceItem[] = [
  { n: "01", requirement: "Clinical effectiveness against a comparator in current Kenyan practice" },
  { n: "02", requirement: "Safety profile and adverse-event data" },
  { n: "03", requirement: "Incremental cost-effectiveness analysis with local cost inputs" },
  { n: "04", requirement: "Budget-impact model against the relevant fund" },
  { n: "05", requirement: "Local epidemiological and disease-burden data" },
  { n: "06", requirement: "Equity and access considerations" },
  { n: "07", requirement: "Implementation feasibility within existing service delivery" },
];

export type Phase = {
  readonly n: string;
  readonly name: string;
  readonly description: string;
  readonly deliverable?: string;
};

export const phases: readonly Phase[] = [
  {
    n: "Phase 1",
    name: "Feasibility assessment",
    description:
      "We establish whether the evidence base supports a submission, and what is missing.",
    deliverable: "Deliverable: a feasibility opinion and evidence gap register.",
  },
  {
    n: "Phase 2",
    name: "Evidence generation",
    description:
      "Closing the gaps: comparator selection, model construction, local data sourcing.",
    deliverable: "Deliverable: a completed economic model and dossier draft.",
  },
  {
    n: "Phase 3",
    name: "Engagement",
    description: "Structured stakeholder engagement and submission support.",
    deliverable: "Deliverable: a final dossier and an engagement record.",
  },
  {
    n: "Phase 4",
    name: "Follow-through",
    description:
      "Responding to questions and supporting the review process to determination.",
  },
];
