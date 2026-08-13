import Link from "next/link";
import { footerColumns, site } from "@/content/site";
import { LogoMark } from "./logo-mark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer data-slot="site-footer" className="border-t border-rule bg-paper-sunk/60 text-ink-900 transition-colors">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 px-6 pb-16 pt-20">
        {/* Brand & Mission Column */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark size={28} className="text-stamp-600" />
              <span className="m-0 font-display text-2xl font-medium tracking-tight text-ink-900">{site.name}</span>
            </div>
            <p className="t-body-sm mt-4 max-w-[38ch] text-ink-700 font-light leading-relaxed">
              {site.description}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs font-mono text-ink-500">
            <span className="h-2 w-2 rounded-full bg-stamp-500" aria-hidden />
            <span>Nairobi HQ · Operating across East & Central Africa</span>
          </div>
        </div>

        {/* Links Navigation Columns */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="t-label mb-5 text-ink-900 font-semibold tracking-wider text-xs">{column.title}</p>
              <ul className="flex list-none flex-col gap-3.5 p-0 m-0">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.875rem] text-ink-500 no-underline transition-all duration-200 hover:text-stamp-700 hover:translate-x-0.5 inline-flex items-center gap-1 font-light"
                    >
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Sub-footer Bar */}
      <div className="border-t border-rule/80 bg-paper-sunk">
        <div className="mx-auto flex max-w-[1440px] flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6 text-xs text-ink-400 font-mono">
          <p className="m-0">
            © {year} {site.name}. All rights reserved. · {site.location}
          </p>
          <p className="m-0 text-ink-400 font-light text-center sm:text-right">
            {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
