import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { primaryCta } from "@/content/site";

/** Closing call-to-action band reused across pages. */
export function CtaBand({
  heading,
  sub,
}: {
  heading: string;
  sub: string;
}) {
  return (
    <section className="section-x py-24 sm:py-32">
      <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-elevated px-6 py-16 text-center sm:px-16">
        <div className="bg-glow pointer-events-none absolute inset-0" />
        <div className="relative">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{sub}</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={primaryCta.href} variant="primary">
              {primaryCta.label} →
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
