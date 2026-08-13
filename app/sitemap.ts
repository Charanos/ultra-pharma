import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { insights } from "@/content/insights";

/** Legal is excluded per `02 §7`. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/services/reimbursement", "/practice", "/insights", "/contact"];

  return [
    ...routes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...insights.map((post) => ({
      url: `${site.url}/insights/${post.slug}`,
      lastModified: new Date(post.datePublished),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
