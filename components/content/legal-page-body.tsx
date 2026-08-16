import Link from "next/link";
import type { LegalPage } from "@/content/legal";
import { allMedia } from "@/content/media";

export function LegalPageBody({ page }: { readonly page: LegalPage }) {
  return (
    <>
      <section className="border-b border-rule bg-paper-sunk/30">
        <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-36 sm:pt-40">
          <div className="flex flex-col items-center text-center mx-auto max-w-[1040px] gap-5 w-full">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-mono tracking-wider text-stamp-700 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-stamp-600" aria-hidden />
              <span>{page.crumb}</span>
            </div>

            <h1 className="m-0 font-display text-[2.25rem] sm:text-[2.625rem] lg:text-[3rem] font-medium text-ink-900 leading-[1.16] tracking-tight text-balance">
              {page.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[720px] px-6 pb-32 pt-16">
        <div className="flex flex-col gap-6">
          {page.body.map((paragraph) => (
            <p key={paragraph} className="t-body-lg m-0 text-ink-700 font-light leading-relaxed">
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
  </>
);
}
