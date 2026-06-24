import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { about, founders } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "BarelyCode is two engineers who believe in execution over planning and shipping over meetings. When you hire us, the founders build your thing.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-x pt-20 sm:pt-28">
        <PageHeader label={about.label} heading={about.heading} />
        <div className="mt-8 max-w-2xl space-y-5">
          {about.manifesto.map((para, i) => (
            <Reveal key={i} delay={i * 70}>
              <p className="text-lg leading-relaxed text-muted">{para}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section className="section-x py-20 sm:py-24">
        <Reveal>
          <span className="mono-label">// the team</span>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {founders.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 80}>
              <div className="h-full rounded-xl border border-border bg-surface p-7">
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder — swap for a real image when ready */}
                  <div
                    aria-hidden
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-border-strong bg-elevated font-mono text-sm font-bold text-accent"
                  >
                    {founder.initials}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-fg">
                      {founder.name}
                    </h2>
                    <p className="font-mono text-xs text-muted">
                      {founder.role}
                    </p>
                  </div>
                </div>
                {founder.bio && (
                  <p className="mt-5 leading-relaxed text-muted">{founder.bio}</p>
                )}
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-mono text-sm text-accent hover:text-accent-dim"
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        heading="Work directly with the founders."
        sub="No outsourcing, no junior shuffle. Let's build your thing."
      />
    </>
  );
}
