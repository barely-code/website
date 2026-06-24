"use client";

import { useState, type FormEvent } from "react";

const PROJECT_TYPES = [
  "Website",
  "Web App",
  "AI",
  "Automation",
  "MVP",
  "Other",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const fieldClass =
  "w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-fg placeholder:text-faint transition-colors focus:border-accent focus-visible:ring-0";
const labelClass = "block font-mono text-xs uppercase tracking-wider text-muted";

// Web3Forms is a public, client-side key by design (spam-protected + domain-locked
// in their dashboard). Free tier requires submitting from the browser, not the server.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

function validate(data: {
  name: string;
  email: string;
  message: string;
}): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Your name, please.";
  if (!data.email.trim()) {
    errors.email = "We need an email to reply.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "That email doesn't look right.";
  }
  if (data.message.trim().length < 10) {
    errors.message = "Tell us a little more (10+ characters).";
  }
  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      projectType: String(fd.get("projectType") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const found = validate(payload);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Honeypot — bots fill this hidden field; real users never do.
    if (String(fd.get("botcheck") ?? "")) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("submitting");
    try {
      let ok: boolean;
      if (WEB3FORMS_KEY) {
        // Deliver straight to the inbox via Web3Forms (browser → Web3Forms).
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `New project enquiry — ${payload.name}`,
            from_name: "BarelyCode website",
            replyto: payload.email,
            name: payload.name,
            email: payload.email,
            company: payload.company || "—",
            project_type: payload.projectType || "—",
            message: payload.message,
          }),
        });
        const result = (await res.json()) as { success?: boolean };
        ok = res.ok && Boolean(result.success);
      } else {
        // No key configured — fall back to our API route (logs in dev).
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        ok = res.ok;
      }
      if (!ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-accent/40 bg-accent/5 p-8 text-center"
      >
        <p className="font-mono text-sm text-accent">› message sent</p>
        <h2 className="mt-3 text-2xl font-semibold text-fg">
          Got it. We&apos;ll be in touch.
        </h2>
        <p className="mt-2 text-muted">
          We usually reply within a day. Talk soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot — visually hidden, off the tab order; bots fill it, humans don't. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`mt-2 ${fieldClass}`}
            placeholder="Ada Lovelace"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`mt-2 ${fieldClass}`}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClass}>
            Company <span className="text-faint">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={`mt-2 ${fieldClass}`}
            placeholder="Acme Inc."
          />
        </div>

        <div>
          <label htmlFor="projectType" className={labelClass}>
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue="Website"
            className={`mt-2 ${fieldClass} appearance-none`}
          >
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          What are you trying to ship?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`mt-2 ${fieldClass} resize-y`}
          placeholder="A few lines about the project, timeline, and what success looks like."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-md border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400"
        >
          Something went wrong sending that. Try again, or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}
