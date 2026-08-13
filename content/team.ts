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
  readonly avatar?: string;
};

export const team: readonly TeamMember[] = [
  {
    initials: "JM",
    name: "Dr. Joyce Mwangi",
    role: "Regulatory affairs lead",
    credentials: "BPharm, MSc Reg Affairs · 14 yrs PPB experience",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    initials: "EO",
    name: "Eric Ochieng",
    role: "Quality and compliance",
    credentials: "Lead Auditor ISO 13485 · GMP Specialist",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    initials: "AH",
    name: "Dr. Amina Hassan",
    role: "Health economics",
    credentials: "PhD Health Economics · BPTAP Advisory Expert",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    initials: "DK",
    name: "David Kamau",
    role: "Market access lead",
    credentials: "MSc Global Health Policy · SHA Engagement",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80",
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
