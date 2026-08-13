import type { Metadata } from "next";
import { terms } from "@/content/legal";
import { LegalPageBody } from "@/components/content/legal-page-body";

export const metadata: Metadata = {
  title: terms.title,
  description: terms.description,
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return <LegalPageBody page={terms} />;
}
