import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

/** Shared header block for inner pages: mono label → heading → optional sub. */
export function PageHeader({
  label,
  heading,
  sub,
}: {
  label: string;
  heading: string;
  sub?: string;
}) {
  return (
    <Reveal>
      <SectionLabel>{label}</SectionLabel>
      <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight text-fg sm:text-5xl">
        {heading}
      </h1>
      {sub && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{sub}</p>
      )}
    </Reveal>
  );
}
