export type NavItem = {
  readonly label: string;
  readonly href: string;
};

export const site = {
  name: "Ultra Pharma",
  url: "https://ultrapharma.co.ke",
  tagline: "Precision in healthcare. Confidence in regulation.",
  description:
    "Regulatory affairs, compliance and health technology assessment for healthcare products in Kenya and Africa.",
  email: "j.k@ultrapharma.co.ke",
  phone: "+254 20 5618353",
  phoneHref: "+254205618353",
  linkedin: "https://www.linkedin.com/in/ultra-pharma-kenya/",
  linkedinHandle: "ultra-pharma-kenya",
  locality: "Nairobi",
  country: "Kenya",
  location: "Nairobi, Kenya",
  responseNote: "We reply to enquiries within one working day.",
} as const;

export const navItems: readonly NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Reimbursement", href: "/services/reimbursement" },
  { label: "Practice", href: "/practice" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export type ContactChannel = {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly external?: boolean;
};

export const channels: readonly ContactChannel[] = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
  {
    label: "LinkedIn",
    value: site.linkedinHandle,
    href: site.linkedin,
    external: true,
  },
  { label: "Location", value: site.location, href: "/contact" },
];

export type FooterColumn = {
  readonly title: string;
  readonly links: readonly NavItem[];
};

export const footerColumns: readonly FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Approval", href: "/services#stage-01" },
      { label: "Market entry", href: "/services#stage-02" },
      { label: "Reimbursement", href: "/services/reimbursement" },
      { label: "Lifecycle", href: "/services#stage-04" },
    ],
  },
  {
    title: "Firm",
    links: [
      { label: "Practice", href: "/practice" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy notice", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
    ],
  },
];
