import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg hover:bg-accent-dim font-semibold",
  secondary:
    "border border-border-strong text-fg hover:border-accent hover:text-accent bg-transparent",
  ghost: "text-muted hover:text-fg",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
} & Omit<ComponentProps<typeof Link>, "href">;

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export const buttonClasses = (variant: Variant = "primary") =>
  `${base} ${variants[variant]}`;
