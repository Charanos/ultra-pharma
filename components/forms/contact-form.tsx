"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CircleNotch, SealCheck, Warning, ArrowRight } from "@phosphor-icons/react";
import { site } from "@/content/site";

type Status = "idle" | "submitting" | "error" | "sent";

const needOptions = [
  "Registration & PPB Submissions",
  "Market Entry & Regional Expansion",
  "Reimbursement & HTA (SHA / BPTAP)",
  "Quality & Compliance Audits",
  "General Advisory or Rapid Response",
] as const;

const emptyForm = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  need: needOptions[0] as string,
  message: "",
};

type FormValues = typeof emptyForm;

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [attempts, setAttempts] = useState(0);

  const set = <K extends keyof FormValues>(key: K, value: FormValues[K]) =>
    setValues((previous) => ({ ...previous, [key]: value }));

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("sent");
      setAttempts(0);
    } catch {
      setStatus("error");
      setAttempts((count) => count + 1);
    }
  }

  if (status === "sent") {
    return (
      <div
        data-slot="contact-success"
        className="flex min-h-[420px] flex-col items-center justify-center gap-4 text-center p-6"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-stamp-wash text-stamp-600 border border-stamp-500/20">
          <SealCheck size={32} weight="duotone" aria-hidden />
        </div>
        <h3 className="m-0 font-display text-2xl font-medium text-ink-900">
          Message received
        </h3>
        <p className="m-0 max-w-[36ch] text-ink-500 text-sm leading-relaxed">
          Thank you for reaching out. A regulatory lead will reply within one working day.
        </p>
        <button
          type="button"
          className="btn btn-secondary btn-sm mt-4 cursor-pointer"
          onClick={() => {
            setValues(emptyForm);
            setStatus("idle");
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-busy={status === "submitting"}
      className="flex flex-col gap-6"
      noValidate={false}
    >
      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-signal-blocked/40 bg-signal-blocked/10 p-4 text-ink-900"
        >
          <Warning size={20} weight="duotone" className="mt-0.5 shrink-0 text-signal-blocked" aria-hidden />
          <p className="t-body-sm m-0 text-xs leading-relaxed">
            Message could not be sent. All entered details are preserved.{" "}
            {attempts >= 2 ? (
              <>
                Please email us directly at{" "}
                <Link href={`mailto:${site.email}`} className="font-medium underline">
                  {site.email}
                </Link>
                .
              </>
            ) : (
              "Please try again."
            )}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          id="name"
          label="Your Name"
          required
          placeholder="e.g. Dr. Sarah Kimani"
          value={values.name}
          onChange={(value) => set("name", value)}
        />
        <Field
          id="organisation"
          label="Organisation"
          placeholder="e.g. Apex Therapeutics"
          value={values.organisation}
          onChange={(value) => set("organisation", value)}
        />
        <Field
          id="email"
          label="Work Email"
          type="email"
          required
          placeholder="sarah@company.com"
          value={values.email}
          onChange={(value) => set("email", value)}
        />
        <Field
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="+254 700 000 000"
          value={values.phone}
          onChange={(value) => set("phone", value)}
        />
      </div>

      <label htmlFor="need" className="flex flex-col gap-2">
        <span className="t-label text-ink-500 text-xs uppercase tracking-wider">Primary Need</span>
        <select
          id="need"
          name="need"
          className="field cursor-pointer font-normal text-[0.9375rem] text-ink-900 bg-paper transition-all focus:border-stamp-600"
          value={values.need}
          onChange={(event) => set("need", event.target.value)}
        >
          {needOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="message" className="flex flex-col gap-2">
        <span className="t-label text-ink-500 text-xs uppercase tracking-wider">Project Context</span>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about the product, timeline, or current regulatory stage..."
          className="field text-[0.9375rem] text-ink-900 transition-all focus:border-stamp-600"
          value={values.message}
          onChange={(event) => set("message", event.target.value)}
        />
      </label>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-primary group cursor-pointer w-full md:w-auto"
        >
          {status === "submitting" ? (
            <>
              <CircleNotch size={18} className="animate-spin" aria-hidden />
              <span>Sending enquiry...</span>
            </>
          ) : (
            <>
              <span>Send enquiry</span>
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </>
          )}
        </button>

        <p className="t-index m-0 text-xs text-ink-400 font-light">
          Kept for 12 months, then deleted.{" "}
          <Link href="/legal/privacy" className="text-ink-500 underline hover:text-ink-900">
            Privacy policy
          </Link>
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
}: {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly type?: "text" | "email" | "tel";
  readonly required?: boolean;
  readonly placeholder?: string;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="t-label text-ink-500 text-xs uppercase tracking-wider">
        {label}
        {required && <span className="text-stamp-600 ml-0.5">*</span>}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="field text-[0.9375rem] text-ink-900 placeholder:text-ink-300 transition-all focus:border-stamp-600"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
