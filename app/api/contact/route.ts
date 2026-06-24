import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  message?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  // Server-side validation (never trust the client)
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!emailRe.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // --- Email delivery ---
  // TODO: wire Resend (or your provider of choice). Example:
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "BarelyCode <hello@barelycode.in>",
  //     to: "hello@barelycode.in",
  //     replyTo: email,
  //     subject: `New project enquiry — ${name}`,
  //     text: `From: ${name} <${email}>\nCompany: ${data.company ?? "—"}\n` +
  //           `Type: ${data.projectType ?? "—"}\n\n${message}`,
  //   });
  //
  // Add RESEND_API_KEY to your environment variables (locally in .env.local,
  // and in the Vercel project settings) before going live.

  // For now we just log so the flow is verifiable end-to-end in dev.
  console.log("[contact] new enquiry:", {
    name,
    email,
    company: data.company ?? "",
    projectType: data.projectType ?? "",
    message,
  });

  return NextResponse.json({ ok: true });
}
