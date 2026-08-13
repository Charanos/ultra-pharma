import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
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
    title: post.title,
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

      <article className="mx-auto max-w-[720px] px-6 pb-32 pt-28">
        <p className="t-index m-0 mb-6 text-ink-400">
          Ultra Pharma / Insights / {post.category}
        </p>
        <h1 className="t-h1 m-0">{post.title}</h1>
        <p className="t-index mt-6 text-ink-400">
          {post.displayDate} · {post.readingTime}
        </p>

        <FigureImage
          media={post.image}
          sizes="(max-width: 768px) 100vw, 720px"
          aspect="16/9"
          className="mt-12 rounded-[18px]"
          priority
        />

        <Prose>
          <Article />
        </Prose>

        <Link href="/insights" className="btn btn-secondary btn-sm mt-16">
          <ArrowLeft size={18} aria-hidden />
          All insights
        </Link>
      </article>
    </>
  );
}
