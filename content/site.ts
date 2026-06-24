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
  email: "hello.barelycode@gmail.com",
  founders: ["Vyom Narsana", "Samarth Vaghela"],
  // WhatsApp is our primary quick-contact channel (Vyom's number).
  whatsapp: {
    display: "+91 83205 36581",
    // Pre-filled message; edit the text after ?text= to taste.
    link: "https://wa.me/918320536581?text=Hi%20BarelyCode%2C%20I%27d%20like%20to%20start%20a%20project.",
  },
  social: {
    github: "https://github.com/barely-code",
    instagram: "https://www.instagram.com/barely_code/",
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

export const primaryCta = { label: "Start a project", href: "/contact" } as const;
export const secondaryCta = { label: "See our work", href: "/work" } as const;
