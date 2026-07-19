import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const REGION =
  process.env.SES_REGION || process.env.AWS_REGION || "us-east-1";
const FROM = process.env.SES_FROM_EMAIL;
const TO = process.env.DEMO_TO_EMAIL;

const ses = new SESClient({ region: REGION });

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function escapeHtml(v: string) {
  return v.replace(
    /[<>&"]/g,
    (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c] as string,
  );
}

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const company = String(data.company ?? "").trim();
  const industry = String(data.industry ?? "").trim();
  const message = String(data.message ?? "").trim();
  // Honeypot: bots fill this hidden field. Silently accept and drop.
  const honeypot = String(data.company_website ?? "").trim();

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !company) {
    return NextResponse.json(
      { error: "Please fill in your name, work email, and company." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!FROM || !TO) {
    console.error(
      "Demo form not configured: set SES_FROM_EMAIL and DEMO_TO_EMAIL.",
    );
    return NextResponse.json(
      { error: "The form isn't configured yet. Please email us directly." },
      { status: 500 },
    );
  }

  const subject = `Demo request — ${company}`;
  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    industry ? `Industry: ${industry}` : null,
    "",
    message || "(no message)",
  ]
    .filter((v): v is string => v !== null)
    .join("\n");

  const htmlBody =
    `<h2>New demo request</h2>` +
    `<p><strong>Name:</strong> ${escapeHtml(name)}<br>` +
    `<strong>Email:</strong> ${escapeHtml(email)}<br>` +
    `<strong>Company:</strong> ${escapeHtml(company)}` +
    (industry ? `<br><strong>Industry:</strong> ${escapeHtml(industry)}` : "") +
    `</p>` +
    `<p>${escapeHtml(message || "(no message)").replace(/\n/g, "<br>")}</p>`;

  try {
    await ses.send(
      new SendEmailCommand({
        Source: FROM,
        Destination: { ToAddresses: [TO] },
        ReplyToAddresses: [email],
        Message: {
          Subject: { Data: subject, Charset: "UTF-8" },
          Body: {
            Text: { Data: textBody, Charset: "UTF-8" },
            Html: { Data: htmlBody, Charset: "UTF-8" },
          },
        },
      }),
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("SES send failed:", err);
    return NextResponse.json(
      {
        error:
          "Something went wrong sending your request. Please try again or email us directly.",
      },
      { status: 502 },
    );
  }
}
