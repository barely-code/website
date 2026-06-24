import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBand } from "@/components/CtaBand";
import { services, servicesIntro } from "@/content/services";
import { hero, process, why, closingCta } from "@/content/home";
import { caseStudies } from "@/content/work";
import { secondaryCta } from "@/content/site";

export default function HomePage() {
  const featured = caseStudies.find((c) => c.featured) ?? caseStudies[0];

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <div className="bg-dotgrid pointer-events-none absolute inset-0 opacity-60" />
        <div className="bg-glow pointer-events-none absolute inset-0" />
        <div className="section-x relative grid gap-12 py-24 sm:py-32 lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-36">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Two-person software studio
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-fg sm:text-6xl lg:text-7xl">
                Less code.{" "}
                <span className="text-accent">More outcomes.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {hero.sub}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href="/contact" variant="primary">
                  Book a demo →
                </ButtonLink>
                <ButtonLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          {/* Terminal motif */}
          <Reveal delay={200} className="lg:justify-self-end">
            <div className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                <span className="ml-3 font-mono text-[11px] text-faint">
                  ~/barelycode
                </span>
              </div>
              <div className="space-y-2 p-5 font-mono text-sm">
                {hero.terminalLines.map((line, i) => (
                  <p
                    key={i}
                    className={i === 0 ? "text-fg" : "text-muted"}
                  >
                    {line}
                  </p>
                ))}
                <p className="text-accent">
                  › done{" "}
                  <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent align-middle" />
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- What we do ---------- */}
      <section className="section-x py-20 sm:py-24">
        <Reveal>
          <SectionLabel>{servicesIntro.label}</SectionLabel>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-xl text-balance text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              {servicesIntro.heading}
            </h2>
            <Link
              href="/services"
              className="font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              All services →
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- How we work ---------- */}
      <section className="section-x py-20 sm:py-24">
        <Reveal>
          <SectionLabel>{process.label}</SectionLabel>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            {process.heading}
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {process.steps.map((step, i) => (
            <Reveal key={step.id} delay={i * 80} as="li">
              <div className="h-full rounded-xl border border-border bg-surface p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-2xl font-bold text-accent">
                    {step.id}
                  </span>
                  <h3 className="text-xl font-semibold text-fg">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ---------- Why BarelyCode ---------- */}
      <section className="section-x py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionLabel>{why.label}</SectionLabel>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              {why.heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Lean team means no middlemen and no account managers. You talk to
              the people writing the code — accelerated by AI, so you pay for
              outcomes, not hours.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {why.points.map((point, i) => (
              <Reveal key={point.title} delay={i * 70}>
                <div className="h-full rounded-xl border border-border bg-surface p-6">
                  <h3 className="flex items-center gap-2 text-base font-semibold text-fg">
                    <span className="text-accent">→</span>
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Selected work ---------- */}
      {featured && (
        <section className="section-x py-20 sm:py-24">
          <Reveal>
            <SectionLabel>// selected work</SectionLabel>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Proof over promises.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/work"
              className="group mt-10 block overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong"
            >
              <div className="grid gap-0 md:grid-cols-2">
                <div className="bg-dotgrid flex aspect-[16/10] items-center justify-center md:aspect-auto">
                  <span className="font-mono text-xs text-faint">
                    [ {featured.client} — preview ]
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-accent">
                      Case study
                    </span>
                    {featured.status && (
                      <span className="font-mono text-[11px] text-faint">
                        {featured.status}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-fg">
                    {featured.client}
                  </h3>
                  <p className="mt-3 text-muted">{featured.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 font-mono text-sm text-fg transition-colors group-hover:text-accent">
                    Read the case study →
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      {/* ---------- Closing CTA ---------- */}
      <CtaBand heading={closingCta.heading} sub={closingCta.sub} />
    </>
  );
}
