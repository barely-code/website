import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong">
      {/* accent edge on hover */}
      <span className="absolute left-0 top-6 h-0 w-px bg-accent transition-all duration-300 group-hover:h-8" />
      <span className="font-mono text-xs text-faint">{service.id}</span>
      <h3 className="mt-3 text-base font-semibold text-fg">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.blurb}</p>
    </div>
  );
}
