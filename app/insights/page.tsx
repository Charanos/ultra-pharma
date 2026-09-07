import type { Metadata } from "next";
import Link from "next/link";
import { InsightPlate, topicMark } from "@/components/content/insight-plate";
import { JsonLd } from "@/components/primitives/json-ld";
import { insights } from "@/content/insights";
import { breadcrumbSchema } from "@/lib/schema";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Mark } from "@/components/primitives/mark";

export const metadata: Metadata = {
  title: "Insights & Regulatory Intelligence",
  description:
    "In-depth analysis on SHA reimbursement, the Benefits Package and Tariffs Advisory Panel (BPTAP), Pharmacy and Poisons Board review timelines, and EAC harmonisation.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const [featuredPost, ...otherPosts] = insights;
  const categories = Array.from(new Set(insights.map((p) => p.category)));

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Insights", path: "/insights" }])} />

      {/* Header Section */}
      <section className="border-b border-rule bg-paper-sunk/30">
        <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-36 sm:pt-40">
          <div className="flex flex-col items-center text-center mx-auto max-w-[1040px] gap-5 w-full">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-mono tracking-wider text-stamp-700 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-stamp-600" aria-hidden />
              <span>Ultra Pharma / Intelligence & Analysis</span>
            </div>

            <h1 className="m-0 font-display text-[2.25rem] sm:text-[2.625rem] lg:text-[3rem] font-medium text-ink-900 leading-[1.16] tracking-tight text-balance">
              Insights & Regulatory Intelligence
            </h1>
            
            <p className="m-0 text-ink-600 font-light text-[1.0625rem] sm:text-[1.1875rem] leading-relaxed max-w-[72ch] text-balance">
              Critical analysis on Kenyan healthcare regulation, health technology assessment under SHA, and market access across East Africa.
            </p>
          </div>

          {/* Category Quick Filter Strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 pt-6 border-t border-rule/70">
            <span className="text-xs font-mono text-ink-400 mr-2 uppercase tracking-wider flex items-center gap-1.5">
              <Mark name="topics" size={14} className="text-stamp-600" />
              Topics:
            </span>
            <span className="stamp-pill text-xs py-1 px-3 bg-stamp-wash border-stamp-500/30 text-stamp-700 font-medium">
              All Articles ({insights.length})
            </span>
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-rule bg-paper px-3 py-1 text-xs text-ink-600 font-normal transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content area. Not a <main>: layout.tsx already provides the page's landmark. */}
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:py-24">
        {/* Featured Article Card */}
        {featuredPost && (
          <div className="mb-16">
            <div className="mb-6 flex items-center justify-between">
              <span className="t-label text-xs uppercase tracking-widest text-stamp-700 font-medium flex items-center gap-1.5">
                <Mark name="featured" size={16} weight="duotone" />
                Featured Editorial
              </span>
            </div>

            <article className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-[28px] border border-rule/90 bg-paper-raised p-6 lg:p-10 shadow-xs transition-all duration-300 hover:border-rule-strong hover:shadow-card">
              <div className="lg:col-span-4 overflow-hidden rounded-[20px] border border-rule/60">
                <InsightPlate post={featuredPost} size="feature" />
              </div>

              {/* Centred against the cover rather than stretched to it, so the
                  block reads as a caption to the cover, not as a column with a
                  hole in the middle. */}
              <div className="lg:col-span-8 flex flex-col py-2">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="stamp-pill inline-flex items-center gap-1.5 text-[0.6875rem] py-0.5 px-2.5 font-medium leading-none">
                      <Mark name={topicMark(featuredPost.category)} size={12} />
                      {featuredPost.category}
                    </span>
                    <span className="t-index text-xs text-ink-400 flex items-center gap-1">
                      <Mark name="readingTime" size={13} />
                      {featuredPost.readingTime}
                    </span>
                  </div>

                  <h2 className="mt-5 font-display text-2xl lg:text-3xl font-medium leading-[1.25] text-ink-900 transition-colors group-hover:text-stamp-700">
                    <Link
                      href={`/insights/${featuredPost.slug}`}
                      className="static no-underline before:absolute before:inset-0 before:content-['']"
                    >
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="t-body mt-4 text-ink-700 font-light leading-relaxed line-clamp-3">
                    {featuredPost.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-rule/70 pt-5 text-xs text-ink-400 font-mono">
                  <span>{featuredPost.displayDate}</span>
                  <span className="font-sans font-medium text-stamp-700 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                    <span>Read in-depth analysis</span>
                    <ArrowRight size={14} weight="bold" aria-hidden />
                  </span>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Remaining Articles Grid */}
        <div className="mt-16">
          <h2 className="t-label text-xs uppercase tracking-widest text-ink-400 mb-8 font-medium">
            All Recent Analysis
          </h2>

          <div
            data-reveal-group
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {otherPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col justify-between rounded-[24px] border border-rule/80 bg-paper-raised p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-rule-strong hover:shadow-card"
              >
                <div>
                  <div className="overflow-hidden rounded-[18px] border border-rule/60">
                    <InsightPlate post={post} />
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-2">
                    <span className="t-label text-stamp-700 font-medium tracking-wider text-xs">
                      {post.category}
                    </span>
                    <span className="t-index text-ink-400 font-light text-xs flex items-center gap-1">
                      <Mark name="readingTime" size={12} />
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

                  <p className="t-body-sm mt-3 text-ink-500 font-light line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-rule/70 pt-4 text-ink-400 t-index text-xs">
                  <span>{post.displayDate}</span>
                  <span className="text-stamp-700 font-medium group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 font-sans">
                    <span>Read analysis</span>
                    <span aria-hidden>&rarr;</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
