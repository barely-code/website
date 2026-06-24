import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  message?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Fallback contact endpoint.
 *
 * Real delivery happens client-side via Web3Forms (see components/ContactForm.tsx)
 * because the Web3Forms free tier only accepts browser submissions. This route is
 * the fallback used when NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY isn't set (e.g. local dev):
 * it validates and logs so the flow stays testable. If you later move to a provider
 * that supports server-side sending (e.g. Resend on a verified domain), do the send
 * here and point the form back at /api/contact.
 */
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

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!emailRe.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  console.log("[contact] new enquiry (fallback — not emailed):", {
    name,
    email,
    company: data.company ?? "",
    projectType: data.projectType ?? "",
    message,
  });

  return NextResponse.json({ ok: true });
}
