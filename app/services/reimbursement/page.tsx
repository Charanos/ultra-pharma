import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Section, SectionIndex } from "@/components/structure/section";
import { IndexRail } from "@/components/structure/index-rail";
import { Reveal } from "@/components/primitives/reveal";
import { FigureImage } from "@/components/content/figure-image";
import { media } from "@/content/media";
import { JsonLd } from "@/components/primitives/json-ld";
import { EvidenceList } from "@/components/content/evidence-list";
import {
  caveat,
  evidence,
  facts,
  phases,
  reimbursementServices,
} from "@/content/reimbursement";
import {
  Lightbulb,
  ChartBar,
  Users,
  CheckCircle,
  Files,
  Calculator,
  UsersThree,
  Info,
} from "@phosphor-icons/react/dist/ssr";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const phaseIcons = [Lightbulb, ChartBar, Users, CheckCircle];
const serviceIconMap: Record<string, React.ElementType> = {
  Files,
  Calculator,
  UsersThree,
};

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

      <section className="border-b border-rule bg-paper-sunk/30">
        <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-36 sm:pt-40">
          <div className="flex flex-col items-center text-center mx-auto max-w-[1100px] gap-5 w-full">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-mono tracking-wider text-stamp-700 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-stamp-600" aria-hidden />
              <span>Ultra Pharma / Services / Stage 03</span>
            </div>

            <h1 className="m-0 font-display text-[2.25rem] sm:text-[2.625rem] lg:text-[3rem] font-medium text-ink-900 leading-[1.16] tracking-tight text-balance">
              Health product assessment and national benefit listing
            </h1>

            <p className="m-0 text-ink-600 font-light text-[1.0625rem] sm:text-[1.1875rem] leading-relaxed max-w-[72ch] text-balance">
              Preparing the evidence that supports inclusion in Kenya&apos;s national health
              benefits package, so an approved product becomes a funded one.
            </p>
          </div>
        </div>
      </section>

      {/* 01 · What changed */}
      <Section index="01" width="wide" className="border-b border-rule">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="order-1 lg:order-1 lg:col-span-6 flex flex-col justify-between">
            <Reveal>
              <SectionIndex index="01" label="What changed" className="mb-6" />
              <h2 className="t-h2 m-0 font-display font-medium text-ink-900 leading-tight">
                A new panel decides what SHA covers
              </h2>
              <div className="mt-5 text-ink-700 font-light leading-relaxed">
                <p className="m-0">
                  Kenya&apos;s Social Health Insurance Act 2023 replaced the National Hospital
                  Insurance Fund with the Social Health Authority. Coverage now flows through
                  three funds: the Primary Healthcare Fund, the Social Health Insurance Fund, and
                  the Emergency, Chronic and Critical Illness Fund.
                </p>
                <p className="mt-5">
                  The Ministry of Health established the Benefits Package and Tariffs Advisory
                  Panel to guide what those funds cover and at what tariff. The panel was gazetted
                  through <span className="t-data text-ink-900">Gazette Notice No. 5044 of 23 April 2025</span>{" "}
                  and inaugurated in <span className="t-data text-ink-900">May 2025</span>, chaired
                  by Prof. Walter Jaoko, with its secretariat at the Centre for Epidemiological
                  Modelling and Analysis at the University of Nairobi. Its method is health
                  technology assessment.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <dl className="mt-14 border-t border-rule/80">
                {facts.map((fact) => (
                  <div
                    key={fact.key}
                    className="flex flex-wrap items-baseline gap-6 border-b border-rule/80 py-4 hover:bg-paper-raised/30 transition-colors"
                  >
                    <dt className="t-label w-[160px] flex-none text-ink-500 uppercase tracking-wider text-[0.6875rem] font-semibold">{fact.key}</dt>
                    <dd className="t-body-sm m-0 text-ink-900">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          
          <div className="order-2 lg:order-2 lg:col-span-6">
            <Reveal>
              <div className="overflow-hidden rounded-[26px] border border-rule/80 bg-paper-raised shadow-xs">
                <div className="overflow-hidden bg-paper-sunk">
                  <FigureImage
                    media={media.stage03}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    aspect="4/3"
                    className="rounded-none shadow-none"
                    imgClassName="transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 border-t border-rule/70 flex items-center justify-between text-xs font-mono text-ink-500">
                  <span>Policy & Health Economics</span>
                  <span className="text-stamp-700 font-medium">BPTAP Advisory Context</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 02 · What it means for your product */}
      <section id="sec-02" data-sec="02" className="bg-paper-deep text-deep-ink">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-12">
            <p className="order-2 lg:order-1 mt-6 lg:mt-0 t-body max-w-[50ch] text-deep-ink-soft font-light leading-relaxed m-0 pb-1">
              A product outside the benefits package competes on out-of-pocket price against a
              funded alternative. In a market where most patients are covered through SHA, that
              is a decisive commercial disadvantage, and it is invisible on a regulatory
              timeline because it sits entirely after approval.
            </p>
            <div className="order-1 lg:order-2 max-w-[640px]">
              <SectionIndex
                index="02"
                label="Market Reality"
                tone="deep"
                className="mb-8"
              />
              <h2 className="t-h2 m-0 font-display font-medium text-deep-ink leading-tight">
                Registration establishes that a product may be sold. It does not establish that
                anyone will pay for it.
              </h2>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 · What we do */}
      <Section index="03" width="wide" className="border-b border-rule">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-[500px]">
            <SectionIndex index="03" label="What we do" className="mb-6" />
            <h2 className="t-h2 m-0 font-display font-medium text-ink-900 leading-tight">
              Our HTA and Reimbursement Services
            </h2>
          </div>
          <p className="t-body max-w-[48ch] text-ink-600 font-light leading-relaxed m-0 pb-1">
            Navigating the intersection of health economics, clinical evidence, and regulatory requirements to achieve national benefit listing.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {reimbursementServices.map((service) => {
            const ServiceIcon = serviceIconMap[service.icon] || Files;
            return (
              <Reveal
                key={service.name}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-rule/80 bg-paper-raised p-8 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-rule-strong hover:shadow-card min-h-[280px]"
              >
                {/* Soft background artwork icon */}
                <div
                  className="pointer-events-none absolute -bottom-6 -right-6 text-ink-900/[0.035] dark:text-stamp-400/[0.06] transition-all duration-500 ease-out group-hover:text-stamp-700/[0.08] dark:group-hover:text-stamp-400/[0.12] group-hover:scale-105 group-hover:-rotate-3"
                  aria-hidden
                >
                  <ServiceIcon size={150} weight="duotone" />
                </div>

                <div className="relative z-10 flex flex-col">
                  {/* Fixed min-height title container to align description baselines across all 3 cards */}
                  <div className="min-h-[3.25rem] flex items-start">
                    <h3 className="font-display text-[1.1875rem] sm:text-[1.25rem] font-medium text-ink-900 leading-snug m-0 transition-colors group-hover:text-stamp-700">
                      {service.name}
                    </h3>
                  </div>

                  <p className="t-body-sm mt-4 text-ink-600 font-light leading-relaxed m-0 text-[0.9375rem]">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
        {/* Required verbatim per 01 D-04. */}
        <div className="mt-12 flex items-start gap-4 max-w-[64ch] border-t border-rule/70 pt-6">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-paper-sunk border border-rule/80 text-stamp-600">
            <Info size={14} weight="bold" aria-hidden />
          </div>
          <p className="t-body-sm m-0 text-ink-600 font-light leading-relaxed">
            <strong className="font-medium text-ink-900">Regulatory Advisory: </strong>
            {caveat}
          </p>
        </div>
      </Section>

      {/* 04 · The evidence a submission needs */}
      <Section index="04" width="wide" className="border-b border-rule">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <Reveal>
              <EvidenceList items={evidence} />
            </Reveal>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col justify-between lg:sticky lg:top-26">
            <Reveal>
              <SectionIndex
                index="04"
                label="The Evidence"
                className="mb-6"
              />
              <h2 className="t-h2 m-0 font-display font-medium text-ink-900 leading-tight">
                Seven things an assessment looks for
              </h2>
              <p className="t-lede mt-5 text-ink-700 font-light leading-relaxed">
                A successful listing requires a rigorous presentation of data across clinical, economic, and operational domains to prove value to the Social Health Authority.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 05 · How we work */}
      <Section index="05" width="wide" className="border-b border-rule">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-[500px]">
            <SectionIndex index="05" label="How we work" className="mb-6" />
            <h2 className="t-h2 m-0 font-display font-medium text-ink-900 leading-tight">
              Phases of Engagement
            </h2>
          </div>
          <p className="t-body max-w-[48ch] text-ink-600 font-light leading-relaxed m-0 pb-1">
            A structured workflow taking your product from initial feasibility modeling through to formal advisory panel submission and defense.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => {
            const PhaseIcon = phaseIcons[index % phaseIcons.length];
            return (
              <Reveal 
                key={phase.n} 
                className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-rule/80 bg-paper-raised p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-rule-strong hover:shadow-card min-h-[300px]"
              >
                {/* Background Artwork Icon */}
                <div
                  className="pointer-events-none absolute -bottom-6 -right-6 text-ink-900/[0.035] dark:text-stamp-400/[0.06] transition-all duration-500 ease-out group-hover:text-stamp-700/[0.08] dark:group-hover:text-stamp-400/[0.12] group-hover:scale-105 group-hover:-rotate-3"
                  aria-hidden
                >
                  <PhaseIcon size={145} weight="duotone" />
                </div>

                <div className="relative z-10 flex flex-1 flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-stamp-700 font-semibold">{phase.n}</span>
                    <h3 className="font-display text-[1.125rem] font-medium text-ink-900 mt-3 m-0 leading-snug transition-colors group-hover:text-stamp-700">
                      {phase.name}
                    </h3>
                    <p className="t-body-sm mt-2.5 text-ink-600 font-light leading-relaxed m-0 text-[0.875rem]">
                      {phase.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-rule/60 flex items-center min-h-[44px]">
                    {phase.deliverable ? (
                      <p className="inline-flex items-start gap-2 text-[0.8125rem] font-medium text-ink-700 leading-snug m-0">
                        <CheckCircle size={15} weight="duotone" className="text-stamp-600 shrink-0 mt-0.5" aria-hidden />
                        <span>{phase.deliverable}</span>
                      </p>
                    ) : (
                      <p className="inline-flex items-center gap-2 text-[0.8125rem] font-light text-ink-400 leading-snug m-0 italic">
                        <span className="h-1.5 w-1.5 rounded-full bg-stamp-500/50" aria-hidden />
                        <span>End-to-end review determination</span>
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 06 · Next step */}
      <Section index="06" width="wide">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div>
            <SectionIndex index="06" label="Next step" className="mb-5" />
            <h2 className="t-h2 m-0 max-w-[22ch]">Start with a feasibility assessment</h2>
          </div>
          <Link href="/contact" className="btn btn-primary group">
            <span>Talk to us</span>
            <ArrowRight size={16} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </Section>
    </>
  );
}
