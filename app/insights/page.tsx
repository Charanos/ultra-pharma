import type { Metadata } from "next";
import Link from "next/link";
import { FigureImage } from "@/components/content/figure-image";
import { JsonLd } from "@/components/primitives/json-ld";
import { insights } from "@/content/insights";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on SHA reimbursement, the Benefits Package and Tariffs Advisory Panel, Pharmacy and Poisons Board timelines and EAC harmonisation.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Insights", path: "/insights" }])} />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-28">
          <p className="t-index m-0 mb-6 text-ink-400">Ultra Pharma / Insights</p>
          <h1 className="t-h1 m-0">Insights</h1>
          <p className="t-lede mt-7 max-w-[58ch] text-ink-700">
            What is changing in Kenyan regulation and health financing, and what it means for
            a product moving through it.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div
          data-reveal-group
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10"
        >
          {insights.map((post) => (
            <article key={post.slug} className="group relative flex flex-col gap-4">
              <FigureImage
                media={post.image}
                sizes="(max-width: 768px) 100vw, 33vw"
                aspect="16/9"
                className="rounded-[18px]"
                imgClassName="group-hover:scale-[1.03]"
              />
              <p className="t-label m-0 text-ink-500">{post.category}</p>
              <h2 className="m-0 font-display text-[1.375rem] font-medium leading-[1.3] text-ink-900">
                <Link
                  href={`/insights/${post.slug}`}
                  className="static no-underline before:absolute before:inset-0 before:content-[''] group-hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="t-body-sm m-0 text-ink-700">{post.description}</p>
              <p className="t-index m-0 text-ink-400">
                {post.displayDate} · {post.readingTime}
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
