import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag } from "@phosphor-icons/react/dist/ssr";
import { FigureImage } from "@/components/content/figure-image";
import { JsonLd } from "@/components/primitives/json-ld";
import { insights, getInsight } from "@/content/insights";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { Prose } from "@/components/content/prose";

type Params = { readonly slug: string };

export function generateStaticParams(): Params[] {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};

  return {
    title: `${post.title} · Ultra Pharma Insights`,
    description: post.description,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
    },
  };
}

export default async function InsightPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const { default: Article } = await import(`@/content/insights/${slug}.mdx`);

  // Related insights (excluding current post)
  const relatedInsights = insights.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          slug: post.slug,
          datePublished: post.datePublished,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Insights", path: "/insights" },
          { name: post.title, path: `/insights/${post.slug}` },
        ])}
      />

      {/* Article Header */}
      <header className="border-b border-rule bg-paper-sunk/30 relative">
        <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-36 sm:pt-40">
          <div className="mx-auto max-w-[1080px] flex flex-col items-center text-center">
            <Link
              href="/insights"
              className="t-label inline-flex items-center gap-2 text-xs font-mono text-stamp-700 no-underline transition-colors hover:text-stamp-600 mb-8 uppercase tracking-wider group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" aria-hidden />
              <span>Back to all insights</span>
            </Link>

            <div className="flex items-center justify-center gap-3">
              <span className="stamp-pill text-xs py-0.5 px-3 font-medium flex items-center gap-1.5">
                <Tag size={12} aria-hidden />
                {post.category}
              </span>
              <span className="text-xs font-mono text-ink-400">· Regulatory Intelligence Briefing</span>
            </div>

            <h1 className="mt-6 font-display text-[2.125rem] sm:text-[2.625rem] lg:text-[3rem] font-medium text-ink-900 leading-[1.16] tracking-tight text-balance">
              {post.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-rule/80 pt-6 text-xs font-mono text-ink-500 w-full">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-stamp-600" aria-hidden />
                {post.displayDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-stamp-600" aria-hidden />
                {post.readingTime}
              </span>
              <span className="text-ink-400">· Ultra Pharma Advisory Practice</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article body and sidebar grid. Not a <main>: layout.tsx already provides the page's landmark. */}
      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Article Content Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="overflow-hidden rounded-[24px] border border-rule/70 bg-paper-sunk shadow-xs mb-10">
              <FigureImage
                media={post.image}
                sizes="(max-width: 1024px) 100vw, 900px"
                aspect="16/9"
                className="rounded-none shadow-none"
                priority
              />
            </div>

            <p className="t-lede font-normal text-ink-900 leading-relaxed border-l-2 border-stamp-600 pl-6 py-1 my-6 text-[1.1875rem] max-w-[70ch]">
              {post.description}
            </p>

            <div className="max-w-[70ch]">
              <Prose>
                <Article />
              </Prose>
            </div>

            {/* Post-article Guidance Box */}
            <div className="mt-16 max-w-[70ch] rounded-[24px] border border-rule bg-paper-raised p-8 shadow-xs">
              <span className="t-label text-xs uppercase tracking-wider text-stamp-700 font-medium">
                Strategic Briefing & Practice Advisory
              </span>
              <h3 className="mt-2 font-display text-xl font-medium text-ink-900">
                Need guidance navigating these requirements?
              </h3>
              <p className="t-body-sm mt-3 text-ink-700 font-light leading-relaxed">
                Our in-country regulatory specialists evaluate how these policy changes and submission pathways apply directly to your active dossiers and pipeline in Kenya.
              </p>
              <Link href="/contact" className="btn btn-primary btn-sm mt-6 inline-flex">
                <span>Discuss with our team</span>
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>

            <div className="mt-12 max-w-[70ch] flex items-center justify-between border-t border-rule/70 pt-8">
              <Link href="/insights" className="btn btn-secondary btn-sm">
                <ArrowLeft size={16} aria-hidden />
                <span>All insights</span>
              </Link>
            </div>
          </div>

          {/* Sticky Intelligence Sidebar (4 cols) */}
          <aside className="lg:col-span-4 sticky top-28 flex flex-col gap-8">
            {/* Quick Summary Card */}
            <div className="rounded-[22px] border border-rule bg-paper-raised p-6 shadow-xs">
              <span className="t-label text-xs uppercase tracking-widest text-ink-400 font-medium">
                Briefing Metadata
              </span>
              <div className="mt-4 flex flex-col gap-3.5 border-t border-rule/70 pt-4 text-xs font-mono text-ink-700">
                <div className="flex justify-between items-center">
                  <span className="text-ink-400">Jurisdiction</span>
                  <span className="font-medium text-ink-900">Kenya / EAC Region</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ink-400">Primary Authority</span>
                  <span className="font-medium text-ink-900">PPB / SHA / BPTAP</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ink-400">Topic Area</span>
                  <span className="stamp-pill text-[0.6875rem] py-0.5 px-2 font-medium">{post.category}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ink-400">Reading Time</span>
                  <span className="font-medium text-ink-900">{post.readingTime}</span>
                </div>
              </div>
            </div>

            {/* Related Analysis Sidebar Widget */}
            {relatedInsights.length > 0 && (
              <div className="rounded-[22px] border border-rule bg-paper-sunk/50 p-6">
                <span className="t-label text-xs uppercase tracking-widest text-ink-500 font-medium mb-4 block">
                  Related Analysis
                </span>
                <div className="flex flex-col gap-4">
                  {relatedInsights.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/insights/${related.slug}`}
                      className="group flex flex-col gap-1.5 rounded-xl border border-rule/80 bg-paper-raised p-4 no-underline transition-all hover:border-stamp-600/40 hover:shadow-xs"
                    >
                      <span className="text-[0.6875rem] font-mono text-stamp-700 uppercase tracking-wider font-medium">
                        {related.category}
                      </span>
                      <h4 className="m-0 font-display text-[0.9375rem] font-medium text-ink-900 group-hover:text-stamp-700 transition-colors leading-snug">
                        {related.title}
                      </h4>
                      <span className="text-[0.6875rem] font-mono text-ink-400 mt-2">
                        {related.readingTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
