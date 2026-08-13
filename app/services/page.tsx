import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/primitives/reveal";
import { StageIcon } from "@/components/content/stage-icon";
import { JsonLd } from "@/components/primitives/json-ld";
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

      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-28">
          <p className="t-index m-0 mb-6 text-ink-400">Ultra Pharma / Services</p>
          <h1 className="t-h1 m-0">Services</h1>
          <p className="t-lede mt-7 max-w-[58ch] text-ink-700">
            Organised the way a product moves: approval, market entry, reimbursement,
            lifecycle.
          </p>
        </div>
      </section>

      {serviceStages.map((stage) => (
        <section
          key={stage.n}
          id={`stage-${stage.n}`}
          data-sec={stage.n}
          className="border-b border-rule scroll-mt-24"
        >
          <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-16 px-6 py-24">
            <Reveal className="lg:sticky lg:top-26">
              <div className="t-numeral">{stage.n}</div>
              <div className="mt-5 flex items-center gap-2.5 text-ink-500">
                <StageIcon name={stage.icon} />
                <h2 className="t-label m-0 text-ink-900">{stage.name}</h2>
              </div>
              <p className="t-body-lg mt-5 max-w-[38ch] text-ink-700">{stage.blurb}</p>
              {stage.href && (
                <Link href={stage.href} className="btn btn-primary btn-sm mt-7">
                  Full detail on its own page
                  <ArrowRight size={18} aria-hidden />
                </Link>
              )}
            </Reveal>

            <Reveal className="flex flex-col">
              {stage.services.map((service) => (
                <div key={service.name} className="border-t border-rule py-7">
                  <h3 className="t-h3 m-0">{service.name}</h3>
                  <p className="t-body mt-3.5 max-w-[64ch] text-ink-700">
                    {service.description}
                  </p>
                  {service.produces && (
                    <p className="t-body-sm mt-4.5 flex items-baseline gap-3 text-ink-500">
                      <span className="t-label flex-none text-stamp-700">Produces</span>
                      <span className="font-mono">{service.produces}</span>
                    </p>
                  )}
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
