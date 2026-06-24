import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-mono text-sm text-accent">404</span>
      <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-fg sm:text-5xl">
        This page barely exists.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The link is broken or the page moved. Let&apos;s get you back to
        something that ships.
      </p>
      <div className="mt-8">
        <ButtonLink href="/" variant="primary">
          Back home →
        </ButtonLink>
      </div>
    </section>
  );
}
