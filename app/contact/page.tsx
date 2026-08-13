import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { FigureImage } from "@/components/content/figure-image";
import { JsonLd } from "@/components/primitives/json-ld";
import { channels, site } from "@/content/site";
import { media } from "@/content/media";
import { contactPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to our regulatory team in Nairobi about registration, market access or reimbursement.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />

      <section className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-16 px-6 pb-32 pt-28">
        <div>
          <p className="t-index m-0 mb-6 text-ink-400">Ultra Pharma / Contact</p>
          <h1 className="t-h1 m-0">Talk to us</h1>
          <p className="t-lede mt-7 max-w-[48ch] text-ink-700">
            Regulatory guidance, a proposal, or rapid-response support on something already in
            motion.
          </p>

          <div className="mt-12 border-t border-rule">
            {channels.map((channel) => (
              <Link
                key={channel.label}
                href={channel.href}
                className="group flex items-baseline gap-4 border-b border-rule py-5 no-underline transition-colors duration-200 hover:border-stamp-600"
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="t-label w-[100px] flex-none text-ink-500">
                  {channel.label}
                </span>
                <span className="t-data text-ink-900 group-hover:underline">
                  {channel.value}
                </span>
              </Link>
            ))}
          </div>

          <p className="t-body-sm mt-6 text-ink-500">{site.responseNote}</p>

          <FigureImage
            media={media.place}
            sizes="(max-width: 1024px) 100vw, 45vw"
            aspect="16/9"
            className="mt-10"
          />
        </div>

        <div className="panel rounded-[20px] bg-paper-sunk p-10">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
