import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[960px] px-6 pb-32 pt-36 sm:pt-44 flex flex-col items-center text-center">
      <div className="inline-flex items-center justify-center gap-2 text-xs font-mono tracking-wider text-stamp-700 uppercase mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-stamp-600" aria-hidden />
        <span>Ultra Pharma / 404</span>
      </div>

      <h1 className="m-0 font-display text-[2.25rem] sm:text-[2.625rem] lg:text-[3rem] font-medium text-ink-900 leading-[1.16] tracking-tight text-balance">
        That page is not here
      </h1>

      <p className="m-0 mt-5 text-ink-600 font-light text-[1.0625rem] sm:text-[1.1875rem] leading-relaxed max-w-[58ch] text-balance">
        The address may have changed. Services and contact are both one step away.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3.5">
        <Link href="/services" className="btn btn-primary">
          Services
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Contact
        </Link>
      </div>
    </section>
  );
}
