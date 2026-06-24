/**
 * Case studies. Add #2, #3 by appending to this array — the /work page maps over it.
 * Use `[TODO: ...]` for anything you still need to fill in before launch.
 */

export type CaseStudySection = {
  label: string;
  body: string;
};

export type Screenshot = {
  /** Short caption shown under the framed placeholder */
  caption: string;
  /** Aspect ratio hint for the frame: "wide" | "tall" | "square" */
  ratio?: "wide" | "tall" | "square";
};

export type CaseStudy = {
  slug: string;
  client: string;
  /** One-line summary for the card */
  summary: string;
  /** Short tags shown on the card, e.g. ["Website", "5 days"] */
  tags: string[];
  featured?: boolean;
  sections: CaseStudySection[];
  screenshots: Screenshot[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dr-diet",
    client: "Dr Diet",
    summary:
      "A credible digital presence for a nutrition practice — designed, built, and shipped fast.",
    tags: ["Website", "Branding", "Shipped fast"],
    featured: true,
    sections: [
      {
        label: "The client",
        body: "Dr Diet — [TODO: one-line description of the practice, e.g. a clinical nutrition & weight-management practice run by Dr. ___].",
      },
      {
        label: "The challenge",
        body: "They needed a professional website and a real digital presence, fast — something that looked credible the moment a prospective client landed on it, and that turned interest into booked consultations.",
      },
      {
        label: "What we built",
        body: "[TODO: describe the deliverable — e.g. a fast, mobile-first marketing site with service pages, an enquiry/booking flow, and on-brand visuals.] Built lean and shipped in days, not weeks.",
      },
      {
        label: "The result",
        body: "[TODO: metric or outcome — e.g. live in X days, N enquiries in the first month, a presence the practice could confidently share with clients.]",
      },
    ],
    screenshots: [
      { caption: "Homepage — hero & positioning", ratio: "wide" },
      { caption: "Services / treatment overview", ratio: "wide" },
      { caption: "Enquiry / booking flow", ratio: "tall" },
    ],
  },
];

export const workIntro = {
  label: "// selected work",
  heading: "Proof over promises.",
  sub: "Here's what we've shipped.",
};
