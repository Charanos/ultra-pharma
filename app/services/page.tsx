import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/primitives/reveal";
import { JsonLd } from "@/components/primitives/json-ld";
import { Mark } from "@/components/primitives/mark";
import { IndexRail } from "@/components/structure/index-rail";
import { serviceStages } from "@/content/services";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Regulatory strategy, submissions, market entry, health technology assessment and lifecycle management for healthcare products in Kenya.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Services", path: "/services" }])} />
      <IndexRail sections={serviceStages.map((stage) => stage.n)} idPrefix="stage" />

      <section className="border-b border-rule bg-paper-sunk/30">
        <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-36 sm:pt-40">
          <div className="flex flex-col items-center text-center mx-auto max-w-[1040px] gap-5 w-full">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-mono tracking-wider text-stamp-700 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-stamp-600" aria-hidden />
              <span>Ultra Pharma / Capabilities & Solutions</span>
            </div>

            <h1 className="m-0 font-display text-[2.25rem] sm:text-[2.625rem] lg:text-[3rem] font-medium text-ink-900 leading-[1.16] tracking-tight text-balance">
              Services
            </h1>

            <p className="m-0 text-ink-600 font-light text-[1.0625rem] sm:text-[1.1875rem] leading-relaxed max-w-[68ch] text-balance">
              Organised the way a product moves: approval, market entry, reimbursement,
              and lifecycle management.
            </p>
          </div>
        </div>
      </section>

      {serviceStages.map((stage, index) => {
        const isEven = index % 2 === 1;

        return (
          <section
            key={stage.n}
            id={`stage-${stage.n}`}
            data-sec={stage.n}
            className="border-b border-rule scroll-mt-24 relative overflow-hidden group"
          >
            {/* Subtle massive background icon for open uncarded layout */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-ink-900/[0.02] dark:text-stamp-400/[0.03] transition-all duration-700 ease-out group-hover:text-stamp-700/[0.05] dark:group-hover:text-stamp-400/[0.06] group-hover:scale-110 group-hover:rotate-3 z-0 ${
                isEven ? "-left-32" : "-right-32"
              }`}
              aria-hidden
            >
              <Mark name={stage.icon} size={500} weight="duotone" />
            </div>

            <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12 items-start gap-16 lg:gap-24 px-6 py-24 lg:py-32 relative z-10">
              {/* Info Column */}
              <Reveal className={`lg:col-span-5 lg:sticky lg:top-32 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div data-icon-pop className="flex items-center gap-4 mb-6 text-stamp-600 dark:text-stamp-500">
                  <Mark name={stage.icon} size={88} weight="duotone" />
                </div>
                <h2 className="t-h2 m-0 font-display font-medium text-ink-900 leading-tight">{stage.name}</h2>
                <p className="t-body-lg mt-6 max-w-[38ch] text-ink-700 font-light leading-relaxed">{stage.blurb}</p>
                {stage.href && (
                  <Link href={stage.href} className="btn btn-primary group mt-10">
                    <span>Full detail on its own page</span>
                    <ArrowRight size={16} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
                  </Link>
                )}
              </Reveal>

              {/* Services List Column */}
              <Reveal className={`lg:col-span-7 flex flex-col gap-10 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                {stage.services.map((service, sIdx) => (
                  <div key={service.name} className={`group/service relative ${sIdx > 0 ? "border-t border-rule/70 pt-10" : ""}`}>
                    {/*
                      Each service carries its own mark, the same one the
                      homepage uses for the matching deliverable. Ten services,
                      ten marks: the stage mark labels the stage, not every
                      thing inside it. `04 §9`.
                    */}
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl border border-rule/80 bg-paper-sunk text-stamp-600 shadow-xs transition-colors duration-300 group-hover/service:border-stamp-600/40 group-hover/service:bg-stamp-wash/50">
                        <Mark name={service.icon} size={18} />
                      </span>
                      <h3 className="font-display text-[1.375rem] font-medium text-ink-900 m-0">{service.name}</h3>
                    </div>
                    <p className="t-body mt-4 max-w-[64ch] text-ink-700 font-light leading-relaxed">
                      {service.description}
                    </p>
                    {service.produces && (
                      <p className="t-body-sm mt-5 flex items-baseline gap-3 text-ink-500 font-light">
                        <span className="t-label flex-none text-stamp-700 tracking-wider text-[0.6875rem] uppercase font-medium">Produces</span>
                        <span className="font-mono text-[0.8125rem]">{service.produces}</span>
                      </p>
                    )}
                  </div>
                ))}
              </Reveal>
            </div>
          </section>
        );
      })}
    </>
  );
}
