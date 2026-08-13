import { site } from "@/content/site";
import { stages } from "@/content/pathway";

/**
 * `ProfessionalService`, a subtype of `LocalBusiness`. No `Review` and no
 * `AggregateRating`: there are none, and unverified ratings on a compliance
 * consultancy are a bad look. `02 §6`.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    addressCountry: "KE",
  },
  areaServed: [
    { "@type": "Country", name: "Kenya" },
    { "@type": "Place", name: "East Africa" },
  ],
  sameAs: [site.linkedin],
  knowsAbout: [
    "Pharmacy and Poisons Board registration",
    "Health Technology Assessment",
    "Benefits Package and Tariffs Advisory Panel",
    "Social Health Authority reimbursement",
    "eCTD submissions",
    "GxP compliance",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Regulatory and market access services",
    itemListElement: stages.map((stage) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: stage.name,
        description: stage.blurb,
      },
    })),
  },
} as const;

export function serviceSchema(input: {
  readonly name: string;
  readonly description: string;
  readonly path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${site.url}${input.path}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "Kenya" },
  };
}

export function breadcrumbSchema(trail: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function articleSchema(input: {
  readonly title: string;
  readonly description: string;
  readonly slug: string;
  readonly datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    url: `${site.url}/insights/${input.slug}`,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${site.url}/contact`,
    mainEntity: { "@id": `${site.url}/#organization` },
  };
}
