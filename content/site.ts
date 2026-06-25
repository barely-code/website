/**
 * Global site config — brand, navigation, footer, contact details.
 * Edit copy here; components read from these constants.
 */

export const site = {
  name: "BarelyCode",
  tagline: "Less code. More outcomes.",
  description:
    "BarelyCode is a lean software studio building AI agents, automations, web apps, and websites — senior-built, AI-accelerated, and shipped in days, not quarters. Less code, more outcomes.",
  domain: "barelycode.in",
  url: "https://barelycode.in",
  email: "hello.barelycode@gmail.com",
  founders: ["Vyom Narsana", "Samarth Vaghela"],
  // WhatsApp is our primary quick-contact channel (Vyom's number).
  whatsapp: {
    display: "+91 83205 36581",
    // Pre-filled message; edit the text after ?text= to taste.
    link: "https://wa.me/918320536581?text=Hi%20BarelyCode%2C%20I%27d%20like%20to%20book%20a%20demo.",
  },
  social: {
    github: "https://github.com/barely-code",
    // Removed for now — restore the URL to bring the link back.
    instagram: "", // "https://www.instagram.com/barely_code/"
    // Not ready yet — leave empty and the link stays hidden until filled in.
    linkedin: "", // [TODO: company LinkedIn URL]
  },
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta = { label: "Book a demo", href: "/contact" } as const;
export const secondaryCta = { label: "See our work", href: "/work" } as const;
