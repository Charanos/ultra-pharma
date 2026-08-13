import Link from "next/link";
import { footerColumns, site } from "@/content/site";
import { LogoMark } from "./logo-mark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer data-slot="site-footer" className="border-t border-rule bg-paper-sunk">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 px-6 pb-10 pt-20">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark size={24} className="text-stamp-600" />
            <p className="m-0 font-display text-xl font-medium">{site.name}</p>
          </div>
          <p className="t-body-sm mt-4 max-w-[32ch] text-ink-500">{site.description}</p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="t-label mb-5 text-ink-500">{column.title}</p>
            <ul className="flex list-none flex-col gap-3 p-0">
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.9375rem] text-ink-700 no-underline transition-colors hover:text-ink-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-4 border-t border-rule p-6">
        <p className="t-index text-ink-400">
          © {year} {site.name}. {site.location}.
        </p>
        <p className="t-index text-ink-400">{site.tagline}</p>
      </div>
    </footer>
  );
}
