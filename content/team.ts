/**
 * Typographic fallback per `04 §8`. No stock portraits: an image of an
 * identifiable person implying they work here is a lie, and an honest gap reads
 * better than one. Add `name`, `credentials` and `linkedin` as the firm
 * supplies them and the cards render them without further change.
 */
export type TeamMember = {
  readonly initials: string;
  readonly role: string;
  readonly name?: string;
  readonly credentials?: string;
  readonly linkedin?: string;
};

export const team: readonly TeamMember[] = [
  { initials: "RA", role: "Regulatory affairs lead" },
  { initials: "QA", role: "Quality and compliance" },
  { initials: "HE", role: "Health economics" },
  { initials: "MA", role: "Market access" },
];

/**
 * Anonymised outcomes. Empty until the firm supplies publishable ones, and the
 * section does not render while it is empty. `02 §8`.
 */
export type CaseNote = {
  readonly context: string;
  readonly action: string;
  readonly result: string;
};

export const caseNotes: readonly CaseNote[] = [];
