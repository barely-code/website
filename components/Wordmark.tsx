import Link from "next/link";

/**
 * "barelycode" wordmark — mirrors the logo: a `</>` mark, "barely" in the
 * foreground colour, and "code" in the violet→blue brand gradient.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-baseline gap-1.5 font-mono text-lg font-bold tracking-tight ${className}`}
      aria-label="barelycode — home"
    >
      <span className="text-gradient-brand">{"</>"}</span>
      <span>
        <span className="text-fg">barely</span>
        <span className="text-gradient-brand">code</span>
      </span>
    </Link>
  );
}
