import type { Metadata } from "next";
import { Section, SectionIndex } from "@/components/structure/section";
import { IndexRail } from "@/components/structure/index-rail";
import { Reveal } from "@/components/primitives/reveal";
import { FigureImage } from "@/components/content/figure-image";
import { TeamCard } from "@/components/content/team-card";
import { JsonLd } from "@/components/primitives/json-ld";
import { team, caseNotes } from "@/content/team";
import { media } from "@/content/media";
import { breadcrumbSchema } from "@/lib/schema";

const railSections = ["01", "02", ...(caseNotes.length > 0 ? ["03"] : [])];

export const metadata: Metadata = {
  title: "Practice",
  description:
    "How we work, our team, and what we have delivered for healthcare products entering the Kenyan market.",
  alternates: { canonical: "/practice" },
};

export default function PracticePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Practice", path: "/practice" }])} />
      <IndexRail sections={railSections} />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-28">
          <p className="t-index m-0 mb-6 text-ink-400">Ultra Pharma / Practice</p>
          <h1 className="t-h1 m-0">Practice</h1>
          <p className="t-lede mt-7 max-w-[52ch] text-ink-700">
            How we work, who does the work, and what we have done.
          </p>
        </div>
      </section>

      <Section index="01">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-16">
          <Reveal>
            <SectionIndex index="01" label="How we work" className="mb-6" />
            <p className="t-lede m-0 max-w-[60ch] text-ink-900">
              We work in dossiers and deadlines. Every engagement starts with a gap analysis
              against the requirements that actually apply, and a filing plan with dates we
              hold ourselves to. You get a named lead, a document register you can see, and
              correspondence handled rather than forwarded.
            </p>
          </Reveal>
          <Reveal>
            <FigureImage
              media={media.practice}
              sizes="(max-width: 1024px) 100vw, 45vw"
              aspect="3/2"
            />
          </Reveal>
        </div>
      </Section>

      <Section index="02" tone="sunk" bordered className="border-b border-rule">
        <SectionIndex index="02" label="The team" className="mb-12" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          {team.map((member) => (
            <TeamCard key={member.initials} member={member} />
          ))}
        </div>
        <p className="t-index mt-6 text-ink-400">
          Names, credentials and LinkedIn links replace this fallback once supplied.
        </p>
      </Section>

      {/* Renders only when there are publishable outcomes. `02 §8`. */}
      {caseNotes.length > 0 && (
        <Section index="03">
          <SectionIndex index="03" label="What we have done" className="mb-12" />
          <div className="flex flex-col gap-10">
            {caseNotes.map((note) => (
              <Reveal key={note.context} className="border-t border-rule pt-7">
                <p className="t-body m-0 text-ink-700">
                  <span className="t-label mr-3 text-ink-500">Context</span>
                  {note.context}
                </p>
                <p className="t-body mt-3 text-ink-700">
                  <span className="t-label mr-3 text-ink-500">What we did</span>
                  {note.action}
                </p>
                <p className="t-body-lg mt-3 text-ink-900">
                  <span className="t-label mr-3 text-ink-500">Result</span>
                  {note.result}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
