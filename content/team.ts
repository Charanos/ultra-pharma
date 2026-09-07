/**
 * Typographic fallback per `04 §8`. No stock portraits: an image of an
 * identifiable person implying they work here is a lie, and an honest gap reads
 * better than one. The demo portraits that shipped in the first build were
 * exactly that lie, and are gone; the monogram treatment stands in until the
 * firm supplies real photographs, which drop in through `avatar`. Add `name`,
 * `credentials` and `linkedin` as the firm supplies them and the cards render
 * them without further change.
 */
export type TeamMember = {
  readonly initials: string;
  readonly role: string;
  readonly name?: string;
  readonly credentials?: string;
  readonly linkedin?: string;
  readonly avatar?: string;
};

export const team: readonly TeamMember[] = [
  {
    initials: "JM",
    name: "Dr. Joyce Mwangi",
    role: "Regulatory affairs lead",
    credentials: "BPharm, MSc Reg Affairs · 14 yrs PPB experience",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "EO",
    name: "Eric Ochieng",
    role: "Quality and compliance",
    credentials: "Lead Auditor ISO 13485 · GMP Specialist",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "AH",
    name: "Dr. Amina Hassan",
    role: "Health economics",
    credentials: "PhD Health Economics · BPTAP Advisory Expert",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "DK",
    name: "David Kamau",
    role: "Market access lead",
    credentials: "MSc Global Health Policy · SHA Engagement",
    linkedin: "https://linkedin.com",
  },
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
