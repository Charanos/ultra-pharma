"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CircleNotch, SealCheck, Warning } from "@phosphor-icons/react";
import { site } from "@/content/site";
import { Button } from "@/components/primitives/button";

type Status = "idle" | "submitting" | "error" | "sent";

const needOptions = [
  "Registration",
  "Market entry",
  "Reimbursement",
  "Compliance",
  "Something else",
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
      // Every value is preserved. Nothing is cleared on failure.
      setStatus("error");
      setAttempts((count) => count + 1);
    }
  }

  if (status === "sent") {
    return (
      <div
        data-slot="contact-success"
        className="flex min-h-[420px] flex-col justify-center gap-4"
      >
        <SealCheck size={32} className="text-stamp-700" aria-hidden />
        <p
          className="m-0 font-display text-2xl font-medium leading-[1.3]"
          role="status"
        >
          Thank you. We will reply within one working day.
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="self-start"
          onClick={() => {
            setValues(emptyForm);
            setStatus("idle");
          }}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-busy={status === "submitting"}
      className="flex flex-col gap-5"
      noValidate={false}
    >
      {status === "error" && (
        <div
          role="alert"
          className="flex gap-3 rounded-xl border border-signal-blocked p-4 text-ink-900"
        >
          <Warning size={20} className="mt-0.5 flex-none text-signal-blocked" aria-hidden />
          <p className="t-body-sm m-0">
            That did not send. Nothing has been lost.{" "}
            {attempts >= 2 ? (
              <>
                Try again, or email us directly at{" "}
                <Link href={`mailto:${site.email}`}>{site.email}</Link>.
              </>
            ) : (
              "Try again."
            )}
          </p>
        </div>
      )}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
        <Field
          id="name"
          label="Name"
          required
          value={values.name}
          onChange={(value) => set("name", value)}
        />
        <Field
          id="organisation"
          label="Organisation"
          value={values.organisation}
          onChange={(value) => set("organisation", value)}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          value={values.email}
          onChange={(value) => set("email", value)}
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={values.phone}
          onChange={(value) => set("phone", value)}
        />
      </div>

      <label htmlFor="need" className="flex flex-col gap-2">
        <span className="t-label text-ink-500">What do you need?</span>
        <select
          id="need"
          name="need"
          className="field"
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
        <span className="t-label text-ink-500">Tell us about it</span>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="field"
          value={values.message}
          onChange={(event) => set("message", event.target.value)}
        />
      </label>

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" && (
          <CircleNotch size={18} className="animate-spin" aria-hidden />
        )}
        {status === "submitting" ? "Sending" : "Send message"}
      </Button>

      <p className="t-body-sm m-0 text-ink-500">
        Your details are used to reply to this enquiry and kept for twelve months.{" "}
        <Link href="/legal/privacy">Privacy notice</Link>.
      </p>
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
}: {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly type?: "text" | "email" | "tel";
  readonly required?: boolean;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="t-label text-ink-500">
        {label}
        {required && <span className="sr-only"> (required)</span>}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="field"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
