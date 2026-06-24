/**
 * Global site config — brand, navigation, footer, contact details.
 * Edit copy here; components read from these constants.
 */

export const site = {
  name: "BarelyCode",
  tagline: "Less code. More outcomes.",
  description:
    "BarelyCode is a two-person software studio that ships fast. Websites, web apps, AI, and automation — built lean, shipped quick, done right.",
  domain: "barelycode.in",
  url: "https://barelycode.in",
  email: "hello@barelycode.in",
  founders: ["Vyom", "Samarth"],
  social: {
    // [TODO: replace with real LinkedIn URL before launch]
    linkedin: "https://www.linkedin.com/company/barelycode",
  },
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta = { label: "Start a project", href: "/contact" } as const;
export const secondaryCta = { label: "See our work", href: "/work" } as const;
