import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { FigureImage } from "@/components/content/figure-image";
import { JsonLd } from "@/components/primitives/json-ld";
import { channels } from "@/content/site";
import { media } from "@/content/media";
import { contactPageSchema, breadcrumbSchema } from "@/lib/schema";
import {
  EnvelopeSimple,
  PhoneCall,
  LinkedinLogo,
  MapPin,
  Clock,
  ShieldCheck,
  UserCheck,
  MapTrifold,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact & Consultation",
  description:
    "Consult with our senior regulatory pharmacists in Nairobi regarding PPB drug registration, SHA reimbursement HTA submissions, and EAC market access.",
  alternates: { canonical: "/contact" },
};

const channelIcons = {
  Email: EnvelopeSimple,
  Phone: PhoneCall,
  LinkedIn: LinkedinLogo,
  Location: MapPin,
};

const advisorySteps = [
  {
    title: "Confidential Intake",
    description: "Initial gap analysis and NDA execution to protect proprietary dossier data, clinical summaries, and product formulations.",
    Icon: ShieldCheck,
  },
  {
    title: "Technical Assignment",
    description: "Direct alignment with a designated in-country regulatory lead holding specialized therapeutic category expertise.",
    Icon: UserCheck,
  },
  {
    title: "Filing Roadmap",
    description: "Definitive document register, milestone checklist, and committed filing dates to guide the submission across agencies.",
    Icon: MapTrifold,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />

      {/* Header Section with generous breathing room */}
      <section className="border-b border-rule bg-paper-sunk/30">
        <div className="mx-auto max-w-[1440px] px-6 pb-14 pt-36 sm:pt-40">
          <div className="flex flex-col gap-4 w-full">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-stamp-700 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-stamp-600" aria-hidden />
              <span>Ultra Pharma / Advisory & Technical Services</span>
            </div>

            <h1 className="m-0 font-display text-[2.25rem] sm:text-[2.75rem] font-medium text-ink-900 leading-[1.2] tracking-tight">
              Direct Consultation & Case Assessment
            </h1>

            <p className="m-0 text-ink-600 font-light text-[1.0625rem] sm:text-[1.125rem] leading-relaxed max-w-[54ch]">
              Consult with our regulatory leads in Nairobi to evaluate PPB dossier requirements, plan SHA/HTA reimbursement submissions, or structure regional market entry.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Channels & Operational Context (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <span className="t-label text-xs uppercase tracking-widest text-ink-400 font-semibold mb-6 block">
                Direct Channels
              </span>

              <div className="border-t border-rule/80">
                {channels.map((channel) => {
                  const Icon = channelIcons[channel.label as keyof typeof channelIcons] || MapPin;
                  return (
                    <Link
                      key={channel.label}
                      href={channel.href}
                      className="group flex items-center justify-between border-b border-rule/80 py-4.5 no-underline transition-colors duration-200 hover:border-stamp-600/60"
                      {...(channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className="text-stamp-600 shrink-0" aria-hidden />
                        <span className="t-label text-ink-500 font-medium tracking-wider text-xs">
                          {channel.label}
                        </span>
                      </div>
                      <span className="t-data text-ink-900 group-hover:text-stamp-700 transition-colors inline-flex items-center gap-1.5 font-normal text-sm">
                        <span>{channel.value}</span>
                        {channel.external && (
                          <ArrowUpRight size={13} className="text-ink-400" aria-hidden />
                        )}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Nairobi Headquarters Location Card */}
            <div className="rounded-[24px] border border-rule/80 bg-paper-raised overflow-hidden shadow-xs">
              <div className="overflow-hidden bg-paper-sunk">
                <FigureImage
                  media={media.place}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  aspect="16/9"
                  className="rounded-none shadow-none"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-stamp-700 uppercase tracking-wider font-medium">
                  <MapPin size={14} className="text-stamp-600" aria-hidden />
                  <span>Nairobi Headquarters</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-ink-400 border-t border-rule/60 pt-3">
                  <Clock size={13} aria-hidden />
                  <span>Mon – Fri: 08:30 – 17:30 EAT (GMT+3)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card (7 cols) */}
          <div className="lg:col-span-7 rounded-[28px] border border-rule/90 bg-paper-raised p-8 sm:p-12 shadow-xs">
            <div className="mb-8 flex items-center justify-between border-b border-rule/80 pb-6">
              <div>
                <span className="t-label text-xs uppercase tracking-widest text-stamp-700 font-semibold">
                  Technical Enquiry
                </span>
                <h2 className="mt-1 font-display text-2xl font-medium text-ink-900 m-0">
                  Send a Case Briefing
                </h2>
              </div>
              <span className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-ink-500 bg-paper-sunk border border-rule px-3 py-1.5 rounded-full">
                <ShieldCheck size={16} className="text-stamp-600" aria-hidden />
                <span>NDA Protected</span>
              </span>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Engagement Workflow 3-Step Strip (Alternating Sunk Tone) */}
      <section className="border-t border-rule bg-paper-sunk/60 py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 text-center max-w-[600px] mx-auto">
            <span className="t-label text-xs uppercase tracking-widest text-stamp-700 font-semibold">
              Engagement Standard
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium text-ink-900 m-0">
              How we onboard new cases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisorySteps.map((step) => (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-[24px] border border-rule/70 bg-gradient-to-b from-paper-raised to-paper/95 p-8 sm:p-9 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_8px_20px_-4px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.02)] dark:border-white/[0.04] dark:from-paper-raised dark:to-paper-sunk dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.03),0_12px_28px_-6px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-stamp-600/30 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_16px_36px_-6px_rgba(0,0,0,0.06)] dark:hover:border-stamp-500/30 dark:hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.06),0_20px_44px_-8px_rgba(0,0,0,0.5)] hover:-translate-y-1"
              >
                {/* Soft background artwork icon */}
                <div
                  className="pointer-events-none absolute -bottom-6 -right-6 text-ink-900/[0.04] dark:text-stamp-400/[0.07] transition-all duration-500 ease-out group-hover:text-stamp-700/[0.12] dark:group-hover:text-stamp-400/[0.16] group-hover:scale-105 group-hover:-rotate-3"
                  aria-hidden
                >
                  <step.Icon size={160} weight="duotone" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-display text-xl font-medium text-ink-900 m-0">
                    {step.title}
                  </h3>
                  <p className="t-body-sm mt-3 text-ink-600 font-light leading-relaxed m-0 text-[0.9375rem]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
