import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/content/site";

type Payload = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  need: string;
  message: string;
};

function isPayload(value: unknown): value is Payload {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.name === "string" &&
    typeof record.email === "string" &&
    typeof record.message === "string"
  );
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: NextRequest) {
  const body: unknown = await request.json();

  if (!isPayload(body)) {
    return NextResponse.json({ error: "Malformed request" }, { status: 400 });
  }

  const { name, organisation, email, phone, need, message } = body;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json(
      { error: "Name, email and message are required" },
      { status: 400 },
    );
  }

  const rows: readonly [string, string][] = [
    ["Name", name],
    ["Organisation", organisation || "Not given"],
    ["Email", email],
    ["Phone", phone || "Not given"],
    ["Need", need || "Not given"],
  ];

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT ?? "465", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_INBOX ?? site.email,
      replyTo: email,
      subject: `Website enquiry: ${need || "General"}, ${name}`,
      text: [
        ...rows.map(([key, value]) => `${key}: ${value}`),
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <table style="font-family:system-ui,sans-serif;font-size:15px">
          ${rows
            .map(
              ([key, value]) =>
                `<tr><td style="padding:4px 16px 4px 0;color:#5A686F">${key}</td><td>${escapeHtml(value)}</td></tr>`,
            )
            .join("")}
        </table>
        <p style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }
}
