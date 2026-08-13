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
    avatar: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    initials: "EO",
    name: "Eric Ochieng",
    role: "Quality and compliance",
    credentials: "Lead Auditor ISO 13485 · GMP Specialist",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1751374858042-b8b9ff8480aa?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    initials: "AH",
    name: "Dr. Amina Hassan",
    role: "Health economics",
    credentials: "PhD Health Economics · BPTAP Advisory Expert",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1586171984069-1dbce3573a10?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    initials: "DK",
    name: "David Kamau",
    role: "Market access lead",
    credentials: "MSc Global Health Policy · SHA Engagement",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1688143029511-b37423aa60a2?auto=format&fit=crop&w=400&h=400&q=80",
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
