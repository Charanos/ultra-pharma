import Link from "next/link";
import type { LegalPage } from "@/content/legal";
import { allMedia } from "@/content/media";

export function LegalPageBody({ page }: { readonly page: LegalPage }) {
  return (
    <section className="mx-auto max-w-[720px] px-6 pb-32 pt-28">
      <p className="t-index m-0 mb-6 text-ink-400">{page.crumb}</p>
      <h1 className="t-h1 m-0">{page.title}</h1>

      <div className="mt-12 flex flex-col gap-6">
        {page.body.map((paragraph) => (
          <p key={paragraph} className="t-body-lg m-0 text-ink-700">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Attribution is not required under the Unsplash Licence and is given anyway. */}
      {page.slug === "terms" && (
        <div className="mt-14 border-t border-rule pt-8">
          <h2 className="t-label m-0 mb-5 text-ink-500">Photography credits</h2>
          <ul className="m-0 list-none border-t border-rule p-0">
            {allMedia.map((item) => (
              <li
                key={item.slot}
                className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-rule py-3"
              >
                <span className="t-index w-[140px] flex-none text-ink-400">{item.slot}</span>
                <span className="t-body-sm text-ink-700">{item.photographer}</span>
                <Link
                  href={item.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-body-sm"
                >
                  Source
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
