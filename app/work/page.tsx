import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";
import { CtaBand } from "@/components/CtaBand";
import { buttonClasses } from "@/components/ui/Button";
import { caseStudies, workIntro } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from BarelyCode. Proof over promises — here's what we've shipped.",
};

export default function WorkPage() {
  return (
    <>
      <section className="section-x pt-20 sm:pt-28">
        <PageHeader
          label={workIntro.label}
          heading={workIntro.heading}
          sub={workIntro.sub}
        />
      </section>

      <div className="section-x space-y-24 py-16 sm:py-20">
        {caseStudies.map((study) => (
          <article
            key={study.slug}
            id={study.slug}
            className="scroll-mt-24 border-t border-border pt-12"
          >
            {/* Case study header */}
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <SectionLabel>// case study</SectionLabel>
                    {study.status && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                        {study.status}
                      </span>
                    )}
                  </div>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                    {study.client}
                  </h2>
                  <p className="mt-3 max-w-xl text-lg text-muted">
                    {study.summary}
                  </p>
                  {study.liveUrl && (
                    <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonClasses("secondary")}
                        aria-label={`Visit the ${study.client} site (opens in a new tab)`}
                      >
                        Visit site
                        <span aria-hidden="true">↗</span>
                      </a>
                      {study.liveUrlNote && (
                        <span className="font-mono text-xs text-faint">
                          {study.liveUrlNote}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Narrative sections */}
            <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {study.sections.map((section, i) => (
                <Reveal key={section.label} delay={i * 60}>
                  <div className="border-l border-border pl-5">
                    <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                      {section.label}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {section.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Three tailored experiences */}
            {study.experiences && study.experiences.length > 0 && (
              <div className="mt-14">
                <SectionLabel>// one platform, three surfaces</SectionLabel>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {study.experiences.map((exp, i) => (
                    <Reveal key={exp.title} delay={i * 70}>
                      <div className="h-full rounded-xl border border-border bg-surface p-6">
                        <h3 className="text-base font-semibold text-fg">
                          {exp.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {exp.body}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {/* Capability highlights */}
            {study.capabilities && study.capabilities.length > 0 && (
              <div className="mt-14">
                <SectionLabel>// what it does</SectionLabel>
                <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                  {study.capabilities.map((cap, i) => (
                    <Reveal key={i} delay={(i % 2) * 60} as="li">
                      <div className="flex gap-3">
                        <span className="mt-1 select-none font-mono text-accent">
                          ▹
                        </span>
                        <span className="text-sm leading-relaxed text-muted">
                          {cap}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            )}

            {/* Screenshots */}
            {study.screenshots && study.screenshots.length > 0 && (
              <div className="mt-12">
                <SectionLabel>// screenshots</SectionLabel>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {study.screenshots.map((shot, i) => (
                    <Reveal key={shot.caption} delay={i * 60}>
                      <ScreenshotFrame shot={shot} />
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      <CtaBand
        heading="Want to be case study #2?"
        sub="Tell us what you're trying to ship. We usually reply within a day."
      />
    </>
  );
}
