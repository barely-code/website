/** Monospace `// label` used to head each section — part of the terminal motif. */
export function SectionLabel({ children }: { children: string }) {
  return <span className="mono-label">{children}</span>;
}
