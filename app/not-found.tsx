import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[720px] px-6 pb-32 pt-28">
      <p className="t-index m-0 mb-6 text-ink-400">Ultra Pharma / 404</p>
      <h1 className="t-h1 m-0">That page is not here</h1>
      <p className="t-lede mt-7 max-w-[48ch] text-ink-700">
        The address may have changed. Services and contact are both one step away.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
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
