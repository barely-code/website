import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";
import { CtaBand } from "@/components/CtaBand";
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
                  <SectionLabel>// case study</SectionLabel>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                    {study.client}
                  </h2>
                  <p className="mt-3 max-w-xl text-lg text-muted">
                    {study.summary}
                  </p>
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

            {/* Screenshots */}
            {study.screenshots.length > 0 && (
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
