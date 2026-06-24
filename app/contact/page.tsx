import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're trying to ship. We usually reply within a day.",
};

export default function ContactPage() {
  return (
    <section className="section-x py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <PageHeader
            label="// start a project"
            heading="Tell us what you're trying to ship."
            sub="We usually reply within a day."
          />
          <Reveal delay={120}>
            <div className="mt-8 space-y-6 border-t border-border pt-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Fastest — WhatsApp
                </p>
                <a
                  href={site.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-lg text-fg transition-colors hover:text-accent"
                >
                  <span className="text-accent">›</span>
                  {site.whatsapp.display}
                </a>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Prefer email?
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block text-lg text-fg transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </div>

              <p className="text-sm leading-relaxed text-muted">
                No forms, no funnels, no follow-up sequence. Just two engineers
                who&apos;ll read your message and reply.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
