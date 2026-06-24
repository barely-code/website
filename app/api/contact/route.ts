import { NextResponse } from "next/server";
import { site } from "@/content/site";

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
  const company = data.company?.trim() ?? "";
  const projectType = data.projectType?.trim() ?? "";

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

  // --- Email delivery via Web3Forms (free, no domain/DNS needed) ---
  // Get a free access key at https://web3forms.com — enter hello.barelycode@gmail.com,
  // the key is emailed instantly. Put it in .env.local (and Vercel env) as:
  //   WEB3FORMS_ACCESS_KEY=your-key-here
  // Messages then arrive at that inbox, with the sender's address as reply-to.
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (accessKey) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New project enquiry — ${name}`,
          from_name: `${site.name} website`,
          replyto: email,
          // Fields included in the email body:
          name,
          email,
          company: company || "—",
          project_type: projectType || "—",
          message,
        }),
      });
      const result = (await res.json()) as { success?: boolean };
      if (!res.ok || !result.success) {
        throw new Error("Web3Forms rejected the submission");
      }
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error("[contact] delivery failed:", err);
      return NextResponse.json(
        { error: "Could not send your message. Please email us directly." },
        { status: 502 },
      );
    }
  }

  // No key configured yet (e.g. local dev) — log so the flow stays verifiable.
  console.log("[contact] new enquiry (no WEB3FORMS_ACCESS_KEY set — not emailed):", {
    name,
    email,
    company,
    projectType,
    message,
  });

  return NextResponse.json({ ok: true });
}
