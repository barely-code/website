import Link from "next/link";

/** "BarelyCode" wordmark — bracket + "Code" in the accent color. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-mono text-lg font-bold tracking-tight text-fg ${className}`}
      aria-label="BarelyCode — home"
    >
      <span className="text-accent">{"<"}</span>
      Barely<span className="text-accent">Code</span>
      <span className="text-accent">{" />"}</span>
    </Link>
  );
}
