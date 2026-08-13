import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionIndex } from "@/components/structure/section";
import { IndexRail } from "@/components/structure/index-rail";
import { Reveal } from "@/components/primitives/reveal";
import { FigureImage } from "@/components/content/figure-image";
import { TeamCard } from "@/components/content/team-card";
import { JsonLd } from "@/components/primitives/json-ld";
import { team } from "@/content/team";
import { media } from "@/content/media";
import { breadcrumbSchema } from "@/lib/schema";
import {
  ArrowRight,
  ShieldCheck,
  FileText,
  Users,
  GlobeHemisphereEast,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

const railSections = ["01", "02", "03", "04"];

export const metadata: Metadata = {
  title: "Practice & Operating Standard",
  description:
    "How Ultra Pharma works, our regulatory team, operating principles, and execution models for healthcare products entering Kenya and East Africa.",
  alternates: { canonical: "/practice" },
};

const principles = [
  {
    title: "No Blind Forwarding",
    description:
      "Every regulatory query from the Pharmacy and Poisons Board is thoroughly analyzed with recommended solutions and draft responses before reaching your desk.",
    Icon: FileText,
  },
  {
    title: "Accountable Named Leads",
    description:
      "Engagements are led by qualified regulatory pharmacists with deep therapeutic category experience, not passed down to junior account handlers.",
    Icon: Users,
  },
  {
    title: "Financing & HTA Synergy",
    description:
      "We connect market authorization directly to Social Health Authority (SHA) and BPTAP reimbursement pathways so products become commercially funded.",
    Icon: ShieldCheck,
  },
  {
    title: "EAC Regional Harmonisation",
    description:
      "Submissions are architected to leverage Kenyan approvals for mutual recognition and joint assessments across Uganda, Tanzania, and Rwanda.",
    Icon: GlobeHemisphereEast,
  },
];

export default function PracticePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Practice", path: "/practice" }])} />
      <IndexRail sections={railSections} />

      {/* Header Section with generous breathing room */}
      <section className="border-b border-rule bg-paper-sunk/30">
        <div className="mx-auto max-w-[1440px] px-6 pb-14 pt-36 sm:pt-40">
          <div className="flex flex-col gap-4 w-full">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-stamp-700 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-stamp-600" aria-hidden />
              <span>Ultra Pharma / Firm & Operating Standard</span>
            </div>

            <h1 className="m-0 font-display text-[2.25rem] sm:text-[2.75rem] font-medium text-ink-900 leading-[1.2] tracking-tight">
              Practice & Operating Standard
            </h1>

            <p className="m-0 text-ink-600 font-light text-[1.0625rem] sm:text-[1.125rem] leading-relaxed max-w-[54ch]">
              How we structure regulatory engagements, the practitioners leading the dossiers, and the rigorous principles that define our track record in Kenya and East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* 01 · Methodology & Infrastructure */}
      <Section index="01" width="wide" className="border-b border-rule">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col justify-between">
            <Reveal>
              <SectionIndex index="01" label="Methodology" className="mb-6" />
              <h2 className="t-h2 m-0 font-display font-medium text-ink-900 leading-tight">
                Dossiers, deadlines, and technical depth
              </h2>
              <p className="t-lede mt-5 text-ink-700 font-light leading-relaxed">
                We work in rigorous dossiers and committed deadlines. Every engagement begins with an exhaustive gap analysis against active Pharmacy and Poisons Board CTD guidelines, followed by a time-bound filing plan.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-col gap-4 border-t border-rule/80 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle size={20} weight="duotone" className="text-stamp-600 shrink-0 mt-0.5" aria-hidden />
                <p className="t-body-sm m-0 text-ink-700 font-light">
                  <strong className="font-medium text-ink-900">Pre-Submission CTD Audits:</strong> Complete module-by-module compliance audit before submission fees are incurred.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} weight="duotone" className="text-stamp-600 shrink-0 mt-0.5" aria-hidden />
                <p className="t-body-sm m-0 text-ink-700 font-light">
                  <strong className="font-medium text-ink-900">Live Document Register:</strong> Transparent status tracking covering every query, document iteration, and milestone date.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} weight="duotone" className="text-stamp-600 shrink-0 mt-0.5" aria-hidden />
                <p className="t-body-sm m-0 text-ink-700 font-light">
                  <strong className="font-medium text-ink-900">Active Regulatory Representation:</strong> Direct technical liaison with committee evaluators during formal board sittings.
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-1 lg:col-span-6">
            <Reveal>
              <div className="overflow-hidden rounded-[26px] border border-rule/80 bg-paper-raised shadow-xs">
                <div className="overflow-hidden bg-paper-sunk">
                  <FigureImage
                    media={media.practice}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    aspect="3/2"
                    className="rounded-none shadow-none"
                  />
                </div>
                <div className="p-6 border-t border-rule/70 flex items-center justify-between text-xs font-mono text-ink-500">
                  <span>Nairobi Regulatory Office</span>
                  <span className="text-stamp-700 font-medium">Direct PPB & SHA Liaison Hub</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 02 · Operating Principles */}
      <Section index="02" width="wide" tone="sunk" bordered className="border-b border-rule">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-[500px]">
            <SectionIndex index="02" label="Principles" className="mb-6" />
            <h2 className="t-h2 m-0 font-display font-medium text-ink-900">
              How we protect your timelines
            </h2>
          </div>
          <p className="t-body max-w-[48ch] text-ink-600 font-light leading-relaxed m-0 pb-1">
            The operational tenets that distinguish our advisory work from generic forwarding agencies.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle) => (
            <Reveal
              key={principle.title}
              className="group relative overflow-hidden rounded-[24px] border border-rule/70 bg-gradient-to-b from-paper-raised to-paper/95 p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_8px_20px_-4px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.02)] dark:border-white/[0.04] dark:from-paper-raised dark:to-paper-sunk dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.03),0_12px_28px_-6px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-stamp-600/30 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_16px_36px_-6px_rgba(0,0,0,0.06)] dark:hover:border-stamp-500/30 dark:hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.06),0_20px_44px_-8px_rgba(0,0,0,0.5)] hover:-translate-y-1"
            >
              {/* Soft background artwork icon */}
              <div
                className="pointer-events-none absolute -bottom-5 -right-5 text-ink-900/[0.04] dark:text-stamp-400/[0.07] transition-all duration-500 ease-out group-hover:text-stamp-700/[0.12] dark:group-hover:text-stamp-400/[0.16] group-hover:scale-105 group-hover:-rotate-3"
                aria-hidden
              >
                <principle.Icon size={145} weight="duotone" />
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-lg font-medium text-ink-900 m-0">
                  {principle.title}
                </h3>
                <p className="t-body-sm mt-3 text-ink-600 font-light leading-relaxed m-0 text-sm">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 03 · The People Who Lead the Work */}
      <Section index="03" width="wide" className="border-b border-rule">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <p className="order-2 lg:order-1 t-body max-w-[48ch] text-ink-600 font-light leading-relaxed m-0 pb-1">
            Named leads with verifiable credentials, specialized therapeutic experience, and in-country regulatory accountability.
          </p>
          <div className="order-1 lg:order-2 max-w-[500px]">
            <SectionIndex index="03" label="Practitioners" className="mb-6" />
            <h2 className="t-h2 m-0 font-display font-medium text-ink-900">The people who do the work</h2>
          </div>
        </Reveal>

        <div
          data-reveal-group
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <TeamCard key={member.initials} member={member} />
          ))}
        </div>
      </Section>

      {/* 04 · Engagement Next Step (Alternating Sunk Tone) */}
      <Section index="04" width="wide" tone="sunk" bordered>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rounded-[28px] border border-rule bg-paper-raised p-8 lg:p-12 shadow-xs">
          <div className="max-w-[640px]">
            <SectionIndex index="04" label="Engagement" className="mb-4" />
            <h2 className="t-h2 m-0 font-display font-medium text-ink-900">
              Start with a confidential dossier gap audit
            </h2>
            <p className="t-body mt-3 text-ink-600 font-light leading-relaxed">
              Submit your active CTD files or product profiles for an objective feasibility assessment, timeline projection, and regulatory roadmap.
            </p>
          </div>

          <Link href="/contact" className="btn btn-primary btn-lg group shrink-0">
            <span>Initiate consultation</span>
            <ArrowRight size={18} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </Section>
    </>
  );
}
