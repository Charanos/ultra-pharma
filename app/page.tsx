import Link from "next/link";
import { ArrowDown, ArrowRight, SealCheck, GlobeHemisphereEast, Scales, ArrowsClockwise } from "@phosphor-icons/react/dist/ssr";
import type { ElementType } from "react";
import { Section, SectionIndex } from "@/components/structure/section";
import { IndexRail } from "@/components/structure/index-rail";
import { Reveal } from "@/components/primitives/reveal";
import { FigureImage } from "@/components/content/figure-image";
import { PathwayRail } from "@/components/content/pathway-rail";
import { NumberedEntry } from "@/components/content/numbered-entry";
import { TeamCard } from "@/components/content/team-card";
import { ContactForm } from "@/components/forms/contact-form";
import { stages, type StageIcon } from "@/content/pathway";
import { entries } from "@/content/entries";
import { team } from "@/content/team";
import { channels, site } from "@/content/site";
import { media } from "@/content/media";
import { insights } from "@/content/insights";

const iconMap: Record<StageIcon, ElementType> = {
  SealCheck,
  GlobeHemisphereEast,
  Scales,
  ArrowsClockwise,
};

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
        className="relative flex min-h-[100dvh] flex-col justify-between border-b border-rule overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <FigureImage
            media={media.hero}
            sizes="100vw"
            priority
            aspect={undefined}
            className="h-full w-full rounded-none shadow-none"
            imgClassName="!filter-none"
          />
        </div>
        {/* Multi-layer atmospheric graded scrim and subtle teal ambient depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8, 14, 17, 0.72) 0%, rgba(8, 14, 17, 0.5) 35%, rgba(8, 14, 17, 0.65) 70%, rgba(8, 14, 17, 0.95) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(15, 110, 92, 0.24) 0%, transparent 75%)",
          }}
        />

        <div className="flex-1 flex flex-col justify-center pt-24 md:pt-32 pb-16">
          <div
            data-hero
            className="pointer-events-none relative mx-auto w-full max-w-[900px] px-6 text-center"
          >
            <p className="t-label m-0 mb-4 text-[#E8EBEA]/80 tracking-[0.12em]">
              Regulatory affairs and health technology assessment · Kenya and East Africa
            </p>
            <h1 className="m-0 mx-auto max-w-[28ch] font-display font-medium text-[2.25rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.25rem] leading-[1.12] tracking-[-0.02em] text-white drop-shadow-sm">
              Precision in healthcare.<br className="hidden sm:inline" /> Confidence in regulation.
            </h1>
            <p className="mx-auto mt-5 max-w-[54ch] text-[1rem] md:text-[1.125rem] leading-[1.6] text-white/85 font-light">
              Approval is no longer the finish line. We take healthcare products through
              registration with the Pharmacy and Poisons Board, and through the health
              technology assessment that decides whether the Social Health Authority will pay
              for them.
            </p>
            <div className="pointer-events-auto mt-8 flex flex-wrap justify-center gap-3.5">
              <Link href="#sec-02" className="btn btn-on-image-primary group">
                <span>See the pathway</span>
                <ArrowDown
                  size={18}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                  aria-hidden
                />
              </Link>
              <Link href="/contact" className="btn btn-on-image group">
                <span>Talk to us</span>
                <ArrowRight
                  size={18}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none relative w-full mt-auto">
          <div className="mx-auto w-full max-w-[1440px] px-6 pb-6">
            <div
              data-hero-stages
              className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] justify-center border-t border-white/20 pt-4"
            >
              {stages.map((stage) => {
                const Icon = iconMap[stage.icon];
                return (
                  <div key={stage.n} className="flex items-center justify-center gap-2.5">
                    <Icon size={18} weight="duotone" className="text-stamp-500" aria-hidden />
                    <span className="t-label text-[#E8EBEA]">{stage.name}</span>
                  </div>
                );
              })}
            </div>
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
        <div className="mx-auto grid max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(340px,1fr))] items-center gap-16 px-6 py-20 lg:py-32">
          <div className="order-1">
            <FigureImage
              media={media.care}
              sizes="(max-width: 1024px) 100vw, 45vw"
              aspect="4/5"
              className="min-h-[420px] rounded-[24px] ring-1 ring-white/10 shadow-2xl"
              imgClassName="!filter-none object-cover"
            />
          </div>
          <div className="order-2">
            <p className="t-label m-0 mb-6 text-deep-stamp">New capability · Stage 03</p>

            <h2 className="t-h2 m-0 max-w-[18ch] font-display font-medium text-deep-ink tracking-tight">
              Registered is not the same as reimbursed.
            </h2>
            
            <p className="t-body-lg mt-6 max-w-[60ch] text-deep-ink-soft leading-relaxed font-light">
              Kenya replaced NHIF with the Social Health Authority under the Social Health
              Insurance Act 2023. What SHA pays for, and at what tariff, is shaped by health
              technology assessment through the Benefits Package and Tariffs Advisory Panel.
            </p>
            <p className="t-body-lg mt-4 max-w-[60ch] text-deep-ink-soft leading-relaxed font-light">
              A product can be fully registered with the Pharmacy and Poisons Board and still
              sit outside the benefits package, competing on out-of-pocket price against a
              funded alternative. Closing that gap is a different discipline from
              registration, and it is the one we have built for.
            </p>

            {/* The only figure on the homepage, so it carries weight. */}
            <div className="mt-10 flex max-w-[58ch] items-start gap-5 border-t border-deep-rule/80 pt-6">
              <span className="font-mono text-3xl font-light text-deep-stamp leading-none pt-0.5">3</span>
              <span className="t-body-sm text-deep-ink-soft leading-relaxed">
                funds through which SHA coverage flows: <strong className="font-medium text-deep-ink">Primary Healthcare</strong>, <strong className="font-medium text-deep-ink">Social Health Insurance</strong>, and <strong className="font-medium text-deep-ink">Emergency, Chronic and Critical Illness</strong>.
              </span>
            </div>

            <Link href="/services/reimbursement" className="btn btn-deep group mt-10">
              <span>Health product assessment and benefit listing</span>
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
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
          <Link href="/services" className="btn btn-secondary group order-1 lg:order-2">
            <span>All services</span>
            <ArrowRight
              size={16}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </Reveal>

        <div data-reveal-group className="grid grid-cols-12 gap-8">
          {stages.map((stage, index) => {
            const Icon = iconMap[stage.icon];
            return (
              <article
                key={stage.n}
                className={`group col-span-12 flex flex-col gap-5 ${
                  index % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                <div className="overflow-hidden rounded-[20px] border border-rule/70 bg-paper-sunk shadow-xs">
                  <FigureImage
                    media={stage.image}
                    sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 50vw, 700px"
                    aspect="3/2"
                    className="rounded-none shadow-none"
                    imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-rule/80 bg-paper-sunk text-stamp-600 shadow-xs">
                      <Icon size={16} weight="duotone" aria-hidden />
                    </div>
                    <span className="t-label text-ink-900 font-semibold">{stage.name}</span>
                  </div>
                  {stage.isNew && (
                    <span className="stamp-pill text-[0.6875rem] py-0.5 px-2.5 font-medium leading-none">
                      New capability
                    </span>
                  )}
                </div>

                <p className="t-body m-0 max-w-[52ch] text-ink-700 font-light leading-relaxed">
                  {stage.blurb}
                </p>

                <ul className="m-0 flex flex-1 list-none flex-col border-t border-rule/70 p-0">
                  {stage.deliverables.map((item) => (
                    <li
                      key={item}
                      className="t-body-sm flex items-center justify-between border-b border-rule/70 py-3 text-ink-500 transition-colors group-hover:text-ink-700"
                    >
                      <span>{item}</span>
                      <span className="text-stamp-600/40 text-xs" aria-hidden>-</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={stage.href}
                  className="t-body-sm mt-auto inline-flex w-fit items-center gap-1.5 pt-3 font-medium text-stamp-700 no-underline transition-colors hover:text-stamp-600"
                >
                  <span>{stage.name} in detail</span>
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </article>
            );
          })}
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
      <Section index="05" width="wide">
        <Reveal className="mb-24 md:mb-32 mx-auto max-w-[720px] text-center">
          <SectionIndex index="05" label="Practice" className="mb-6 justify-center" />
          <h2 className="t-h2 m-0">Why partners choose Ultra Pharma</h2>
          <p className="t-lede mt-6 text-ink-700">
            Practical systems, in-country knowledge, and delivery models built to move
            healthcare products forward in Kenya and across Africa.
          </p>
        </Reveal>
        <div className="flex flex-col gap-28 md:gap-36">
          {entries.map((entry, index) => (
            <NumberedEntry key={entry.n} entry={entry} offset={index % 2 === 1} />
          ))}
        </div>
      </Section>

      {/* 06 · Proof. Portrait grid. Human. */}
      <Section index="06" width="wide" tone="sunk" bordered>
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
          className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6"
        >
          {team.map((member) => (
            <TeamCard key={member.initials} member={member} />
          ))}
        </div>
      </Section>

      {/* 07 · Insight. Three editorial cards. Content. Omitted below three pieces. */}
      {showInsights && (
        <Section index="07" width="wide">
          <Reveal className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-[640px]">
              <SectionIndex index="07" label="Insight" className="mb-6" />
              <h2 className="t-h2 m-0">Regulatory and access analysis</h2>
            </div>
            <Link href="/insights" className="btn btn-secondary group">
              <span>All insights</span>
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </Reveal>

          <div
            data-reveal-group
            className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8"
          >
            {recentInsights.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col justify-between rounded-[22px] border border-rule/80 bg-paper-raised p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-rule-strong hover:shadow-card"
              >
                <div>
                  <div className="overflow-hidden rounded-2xl border border-rule/60 bg-paper-sunk">
                    <FigureImage
                      media={post.image}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      aspect="16/9"
                      className="rounded-none shadow-none"
                      imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-2">
                    <span className="t-label text-stamp-700 font-semibold tracking-wider">
                      {post.category}
                    </span>
                    <span className="t-index text-ink-400 font-light text-xs">
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-[1.25rem] font-medium leading-[1.3] text-ink-900 transition-colors group-hover:text-stamp-700">
                    <Link
                      href={`/insights/${post.slug}`}
                      className="static no-underline before:absolute before:inset-0 before:content-['']"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="t-body-sm mt-3 text-ink-500 font-light line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-rule/70 pt-4 text-ink-400 t-index text-xs">
                  <span>{post.displayDate}</span>
                  <span className="text-stamp-700 font-medium group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    <span>Read</span>
                    <span aria-hidden>&rarr;</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}

      {/* 08 · Contact. Two columns, form and details. Transactional. */}
      <Section index="08" width="wide" bordered>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left information column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionIndex index="08" label="Contact" className="mb-6" />
              <h2 className="t-h2 m-0 text-ink-900 font-display font-medium">Talk to us</h2>
              <p className="t-lede mt-5 max-w-[46ch] text-ink-700 font-light leading-relaxed">
                Regulatory guidance, a proposal, or rapid-response support on something already
                in motion.
              </p>

              <div className="mt-10 border-t border-rule/80">
                {channels.map((channel) => (
                  <Link
                    key={channel.label}
                    href={channel.href}
                    className="group flex items-center justify-between border-b border-rule/80 py-4.5 no-underline transition-colors duration-200 hover:border-stamp-600/60"
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <span className="t-label text-ink-500 font-medium tracking-wider text-xs">
                      {channel.label}
                    </span>
                    <span className="t-data text-ink-900 group-hover:text-stamp-700 transition-colors inline-flex items-center gap-1.5 font-normal">
                      <span>{channel.value}</span>
                      {channel.external && <span className="text-xs text-ink-400 font-sans" aria-hidden>&nearr;</span>}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-rule/80 bg-paper-sunk/60 p-4.5">
              <span className="flex h-2 w-2 rounded-full bg-stamp-500 animate-pulse" aria-hidden />
              <p className="t-body-sm m-0 text-ink-700 font-light">{site.responseNote}</p>
            </div>
          </div>

          {/* Right form card (7 cols) */}
          <div className="lg:col-span-7 rounded-[26px] border border-rule/80 bg-paper-raised p-8 sm:p-10 shadow-xs">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
