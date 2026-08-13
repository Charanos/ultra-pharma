import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Section, SectionIndex } from "@/components/structure/section";
import { IndexRail } from "@/components/structure/index-rail";
import { Reveal } from "@/components/primitives/reveal";
import { JsonLd } from "@/components/primitives/json-ld";
import { EvidenceList } from "@/components/content/evidence-list";
import { StageIcon } from "@/components/content/stage-icon";
import {
  caveat,
  evidence,
  facts,
  phases,
  reimbursementServices,
} from "@/content/reimbursement";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Health product assessment and benefit listing",
  description:
    "HTA dossier development, cost-effectiveness and budget-impact modelling, and stakeholder engagement to support inclusion in Kenya's SHA benefits package.",
  alternates: { canonical: "/services/reimbursement" },
};

const railSections = ["01", "02", "03", "04", "05", "06"];

export default function ReimbursementPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Health product assessment and national benefit listing",
          description:
            "HTA dossier development, cost-effectiveness and budget-impact modelling, and structured stakeholder engagement to support inclusion in Kenya's national health benefits package.",
          path: "/services/reimbursement",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Services", path: "/services" },
          { name: "Reimbursement", path: "/services/reimbursement" },
        ])}
      />
      <IndexRail sections={railSections} />

      <section className="border-b border-rule bg-paper-sunk">
        <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-28">
          <p className="t-index m-0 mb-6 text-ink-400">
            Ultra Pharma / Services / Stage 03
          </p>
          <span className="stamp-pill t-label mb-7">New capability</span>
          <h1 className="t-h1 m-0 max-w-[20ch]">
            Health product assessment and national benefit listing
          </h1>
          <p className="t-lede mt-7 max-w-[58ch] text-ink-700">
            Preparing the evidence that supports inclusion in Kenya&apos;s national health
            benefits package, so an approved product becomes a funded one.
          </p>
        </div>
      </section>

      {/* 01 · What changed */}
      <Section index="01" className="border-b border-rule">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-16">
          <Reveal>
            <SectionIndex index="01" label="What changed" className="mb-6" />
            <h2 className="t-h2 m-0 max-w-[20ch]">A new panel decides what SHA covers</h2>
          </Reveal>
          <Reveal>
            <p className="t-body-lg m-0 max-w-[64ch] text-ink-700">
              Kenya&apos;s Social Health Insurance Act 2023 replaced the National Hospital
              Insurance Fund with the Social Health Authority. Coverage now flows through
              three funds: the Primary Healthcare Fund, the Social Health Insurance Fund, and
              the Emergency, Chronic and Critical Illness Fund.
            </p>
            <p className="t-body-lg mt-5 max-w-[64ch] text-ink-700">
              The Ministry of Health established the Benefits Package and Tariffs Advisory
              Panel to guide what those funds cover and at what tariff. The panel was gazetted
              through <span className="t-data text-ink-900">Gazette Notice No. 5044 of 23 April 2025</span>{" "}
              and inaugurated in <span className="t-data text-ink-900">May 2025</span>, chaired
              by Prof. Walter Jaoko, with its secretariat at the Centre for Epidemiological
              Modelling and Analysis at the University of Nairobi. Its method is health
              technology assessment.
            </p>

            <dl className="mt-10 border-t border-rule">
              {facts.map((fact) => (
                <div
                  key={fact.key}
                  className="flex flex-wrap items-baseline gap-6 border-b border-rule py-3.5"
                >
                  <dt className="t-label w-[140px] flex-none text-ink-500">{fact.key}</dt>
                  <dd className="t-data m-0 text-ink-900">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* 02 · What it means for your product */}
      <section id="sec-02" data-sec="02" className="bg-paper-deep text-deep-ink">
        <div className="mx-auto max-w-[1200px] px-6 py-24 lg:py-32">
          <SectionIndex
            index="02"
            label="What it means for your product"
            tone="deep"
            className="mb-8"
          />
          <p className="t-h2 m-0 max-w-[24ch] border-l-2 border-deep-stamp pl-7">
            Registration establishes that a product may be sold. It does not establish that
            anyone will pay for it.
          </p>
          <p className="t-body-lg mt-10 max-w-[64ch] text-deep-ink-soft">
            A product outside the benefits package competes on out-of-pocket price against a
            funded alternative. In a market where most patients are covered through SHA, that
            is a decisive commercial disadvantage, and it is invisible on a regulatory
            timeline because it sits entirely after approval.
          </p>
        </div>
      </section>

      {/* 03 · What we do */}
      <Section index="03" className="border-b border-rule">
        <SectionIndex index="03" label="What we do" className="mb-12" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {reimbursementServices.map((service) => (
            <Reveal
              key={service.name}
              className="panel flex flex-col gap-4 px-8 py-9"
            >
              <StageIcon name={service.icon} className="text-ink-500" />
              <h3 className="t-h3 m-0">{service.name}</h3>
              <p className="t-body m-0 text-ink-700">{service.description}</p>
            </Reveal>
          ))}
        </div>
        {/* Required verbatim per 01 D-04. */}
        <p className="t-body m-0 mt-8 max-w-[70ch] rounded-xl border-l-2 border-stamp-600 bg-stamp-wash px-6 py-5 text-ink-900">
          {caveat}
        </p>
      </Section>

      {/* 04 · The evidence a submission needs */}
      <Section index="04" className="border-b border-rule">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-16">
          <Reveal className="lg:sticky lg:top-26">
            <SectionIndex
              index="04"
              label="The evidence a submission needs"
              className="mb-6"
            />
            <h2 className="t-h2 m-0 max-w-[18ch]">Seven things an assessment looks for</h2>
          </Reveal>
          <Reveal>
            <EvidenceList items={evidence} />
          </Reveal>
        </div>
      </Section>

      {/* 05 · How we work */}
      <Section index="05" className="border-b border-rule">
        <SectionIndex index="05" label="How we work" className="mb-12" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
          {phases.map((phase) => (
            <Reveal key={phase.n} className="border-t-2 border-stamp-600 pt-5">
              <p className="t-index m-0 text-stamp-700">{phase.n}</p>
              <h3 className="t-h3 mt-3">{phase.name}</h3>
              <p className="t-body mt-3.5 text-ink-700">{phase.description}</p>
              {phase.deliverable && (
                <p className="t-index mt-4.5 leading-[1.5] text-ink-500">
                  {phase.deliverable}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 06 · Next step */}
      <Section index="06">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div>
            <SectionIndex index="06" label="Next step" className="mb-5" />
            <h2 className="t-h2 m-0 max-w-[22ch]">Start with a feasibility assessment</h2>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Talk to us
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </Section>
    </>
  );
}
