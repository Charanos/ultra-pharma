import Link from "next/link";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Section, SectionIndex } from "@/components/structure/section";
import { IndexRail } from "@/components/structure/index-rail";
import { Reveal } from "@/components/primitives/reveal";
import { FigureImage } from "@/components/content/figure-image";
import { PathwayRail } from "@/components/content/pathway-rail";
import { NumberedEntry } from "@/components/content/numbered-entry";
import { TeamCard } from "@/components/content/team-card";
import { ContactForm } from "@/components/forms/contact-form";
import { stages } from "@/content/pathway";
import { entries } from "@/content/entries";
import { team } from "@/content/team";
import { channels, site } from "@/content/site";
import { media } from "@/content/media";
import { insights } from "@/content/insights";

const recentInsights = insights.slice(0, 3);

/** Section 07 is omitted entirely when there are fewer than three pieces. */
const showInsights = recentInsights.length >= 3;

const railSections = ["01", "02", "03", "04", "05", "06", ...(showInsights ? ["07"] : []), "08"];

export default function HomePage() {
  return (
    <>
      <IndexRail sections={railSections} />

      {/* 01 · Hero. Full-bleed photograph with type over it. Immersive. */}
      <section
        id="sec-01"
        data-sec="01"
        className="relative flex min-h-[min(86vh,860px)] flex-col justify-end border-b border-rule"
      >
        <div className="absolute inset-0 overflow-hidden">
          <FigureImage
            media={media.hero}
            sizes="100vw"
            priority
            aspect={undefined}
            className="h-full w-full rounded-none shadow-none"
          />
        </div>
        {/* Graded scrim, never flat. Hero copy is measured against the darkest band it sits on. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgb(12 20 24 / 0.9) 0%, rgb(12 20 24 / 0.72) 55%, rgb(12 20 24 / 0.58) 78%, rgb(12 20 24 / 0.3) 100%)",
          }}
        />

        <div
          data-hero
          className="pointer-events-none relative mx-auto w-full max-w-[900px] px-6 pt-40 text-center"
        >
          <p className="t-label m-0 mb-6 text-[#E8EBEA]">
            Regulatory affairs and health technology assessment · Kenya and East Africa
          </p>
          <h1 className="t-hero m-0 mx-auto max-w-[34ch] text-white">
            Precision in healthcare. Confidence in regulation.
          </h1>
          <p className="t-lede mx-auto mt-7 max-w-[63ch] text-[#E8EBEA]">
            Approval is no longer the finish line. We take healthcare products through
            registration with the Pharmacy and Poisons Board, and through the health
            technology assessment that decides whether the Social Health Authority will pay
            for them.
          </p>
          <div className="pointer-events-auto mt-10 flex flex-wrap justify-center gap-3">
            <Link href="#sec-02" className="btn btn-on-image-primary">
              See the pathway
              <ArrowDown size={18} aria-hidden />
            </Link>
            <Link href="/contact" className="btn btn-on-image">
              Talk to us
            </Link>
          </div>
        </div>

        <div className="pointer-events-none relative mx-auto w-full max-w-[1440px] px-6 pb-7 pt-14">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] justify-center border-t border-white/30 pt-3.5">
            {stages.map((stage) => (
              <div key={stage.n} className="flex items-baseline justify-center gap-2.5">
                <span className="t-index text-[#8A969C]">{stage.n}</span>
                <span className="t-label text-[#E8EBEA]">{stage.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 · The pathway. Horizontal rail, no cards. Structural. */}
      <Section index="02" width="wide">
        <Reveal className="grid max-w-[1200px] grid-cols-1 gap-6">
          <SectionIndex index="02" label="The pathway" />
          <h2 className="t-h2 m-0 max-w-[20ch]">From approval to funded access</h2>
          <p className="t-lede m-0 max-w-[60ch] text-ink-700">
            Four stages. A product can pass the first and still fail commercially at the
            third, which is where most of the Kenyan market currently is.
          </p>
        </Reveal>
        <PathwayRail />
      </Section>

      {/* 03 · Reimbursement feature band. Split, image left. Editorial. */}
      <section id="sec-03" data-sec="03" className="bg-paper-deep text-deep-ink">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(340px,1fr))] items-center gap-16 px-6 py-24 lg:py-40">
          <div className="order-1">
            <FigureImage
              media={media.care}
              sizes="(max-width: 1024px) 100vw, 45vw"
              aspect="4/5"
              className="min-h-[420px]"
            />
          </div>
          <div className="order-2">
            <p className="t-label m-0 mb-6 text-deep-stamp">New capability · Stage 03</p>
            <h2 className="t-h2 m-0 max-w-[18ch]">
              Registered is not the same as reimbursed.
            </h2>
            <p className="t-body-lg mt-7 max-w-[62ch] text-deep-ink-soft">
              Kenya replaced NHIF with the Social Health Authority under the Social Health
              Insurance Act 2023. What SHA pays for, and at what tariff, is shaped by health
              technology assessment through the Benefits Package and Tariffs Advisory Panel.
            </p>
            <p className="t-body-lg mt-5 max-w-[62ch] text-deep-ink-soft">
              A product can be fully registered with the Pharmacy and Poisons Board and still
              sit outside the benefits package, competing on out-of-pocket price against a
              funded alternative. Closing that gap is a different discipline from
              registration, and it is the one we have built for.
            </p>

            {/* The only figure on the homepage, so it carries weight. Never a bare number. */}
            <div className="mt-11 flex max-w-[60ch] items-start gap-6 border-t border-deep-rule pt-7">
              <span className="t-figure text-deep-ink">3</span>
              <span className="t-body-sm pt-2 text-deep-ink-soft">
                funds through which SHA coverage flows: Primary Healthcare, Social Health
                Insurance, and Emergency, Chronic and Critical Illness.
              </span>
            </div>

            <Link href="/services/reimbursement" className="btn btn-deep mt-11">
              Health product assessment and benefit listing
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* 04 · Services. Asymmetric grid, four stages. Informational. */}
      <Section index="04" width="wide">
        <Reveal className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div className="order-2 max-w-[640px] lg:order-1">
            <SectionIndex index="04" label="Services" className="mb-6" />
            <h2 className="t-h2 m-0">What each stage delivers</h2>
          </div>
          <Link href="/services" className="btn btn-secondary order-1 lg:order-2">
            All services
            <ArrowRight size={18} aria-hidden />
          </Link>
        </Reveal>

        <div data-reveal-group className="grid grid-cols-12 gap-8">
          {stages.map((stage, index) => (
            <article
              key={stage.n}
              className={`col-span-12 flex flex-col gap-5 ${
                index % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5"
              }`}
            >
              <FigureImage
                media={stage.image}
                sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 50vw, 700px"
                aspect="3/2"
              />
              <div className="flex items-center gap-3">
                <span className="t-index text-ink-400">{stage.n}</span>
                <span className="t-label">{stage.name}</span>
              </div>
              <p className="t-body m-0 max-w-[52ch] text-ink-700">{stage.blurb}</p>
              <ul className="m-0 list-none border-t border-rule p-0">
                {stage.deliverables.map((item) => (
                  <li
                    key={item}
                    className="t-body-sm border-b border-rule py-3 text-ink-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={stage.href}
                className="group/link t-body-sm mt-1 inline-flex w-fit items-center gap-1.5 text-ink-700 no-underline transition-colors hover:text-ink-900"
              >
                {stage.name} in detail
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* Full-bleed divider. A breath between chapters, no text over it. */}
      <div className="relative h-[200px] border-y border-rule">
        <FigureImage
          media={media.divider}
          sizes="100vw"
          className="h-full w-full rounded-none shadow-none"
        />
      </div>

      {/* 05 · Why partners choose us. Ruled list, large numerals. Typographic. */}
      <Section index="05">
        <Reveal className="mb-20 max-w-[720px]">
          <SectionIndex index="05" label="Practice" className="mb-6" />
          <h2 className="t-h2 m-0">Why partners choose Ultra Pharma</h2>
          <p className="t-lede mt-6 text-ink-700">
            Practical systems, in-country knowledge, and delivery models built to move
            healthcare products forward in Kenya and across Africa.
          </p>
        </Reveal>
        <div className="flex flex-col gap-16 [--entry-offset:0px] lg:[--entry-offset:64px]">
          {entries.map((entry, index) => (
            <NumberedEntry key={entry.n} entry={entry} offset={index % 2 === 1} />
          ))}
        </div>
      </Section>

      {/* 06 · Proof. Portrait grid. Human. */}
      <Section index="06" tone="sunk" bordered>
        <Reveal className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-[640px]">
            <SectionIndex index="06" label="Proof" className="mb-6" />
            <h2 className="t-h2 m-0">The people who do the work</h2>
          </div>
          <p className="t-body-sm m-0 max-w-[44ch] text-ink-500">
            Named leads with credentials, not a corporate history. Portraits and case notes
            go live when the firm supplies them.
          </p>
        </Reveal>
        <div
          data-reveal-group
          className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5"
        >
          {team.map((member) => (
            <TeamCard key={member.initials} member={member} />
          ))}
        </div>
      </Section>

      {/* 07 · Insight. Three editorial cards. Content. Omitted below three pieces. */}
      {showInsights && (
        <Section index="07" width="wide">
          <SectionIndex index="07" label="Insight" className="mb-12" />
          <div
            data-reveal-group
            className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8"
          >
            {recentInsights.map((post) => (
              <article key={post.slug} className="group relative flex flex-col gap-4">
                <FigureImage
                  media={post.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  aspect="16/9"
                  className="rounded-[18px]"
                  imgClassName="group-hover:scale-[1.03]"
                />
                <p className="t-label m-0 text-ink-500">{post.category}</p>
                <h3 className="m-0 font-display text-[1.375rem] font-medium leading-[1.3] text-ink-900">
                  <Link
                    href={`/insights/${post.slug}`}
                    className="static no-underline before:absolute before:inset-0 before:content-[''] group-hover:underline"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="t-index m-0 text-ink-400">
                  {post.displayDate} · {post.readingTime}
                </p>
              </article>
            ))}
          </div>
        </Section>
      )}

      {/* 08 · Contact. Two columns, form and details. Transactional. */}
      <Section index="08" bordered>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-16">
          <div>
            <SectionIndex index="08" label="Contact" className="mb-6" />
            <h2 className="t-h2 m-0">Talk to us</h2>
            <p className="t-lede mt-6 max-w-[48ch] text-ink-700">
              Regulatory guidance, a proposal, or rapid-response support on something already
              in motion.
            </p>
            <div className="mt-12 border-t border-rule">
              {channels.map((channel) => (
                <Link
                  key={channel.label}
                  href={channel.href}
                  className="group flex items-baseline gap-4 border-b border-rule py-5 no-underline transition-colors duration-200 hover:border-stamp-600"
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="t-label w-[100px] flex-none text-ink-500">
                    {channel.label}
                  </span>
                  <span className="t-data text-ink-900 group-hover:underline">
                    {channel.value}
                  </span>
                </Link>
              ))}
            </div>
            <p className="t-body-sm mt-6 text-ink-500">{site.responseNote}</p>
          </div>

          <div className="panel rounded-[20px] bg-paper-sunk p-10">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
