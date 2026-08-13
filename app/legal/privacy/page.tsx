import type { Metadata } from "next";
import { privacy } from "@/content/legal";
import { LegalPageBody } from "@/components/content/legal-page-body";

export const metadata: Metadata = {
  title: privacy.title,
  description: privacy.description,
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return <LegalPageBody page={privacy} />;
}
