/**
 * Case studies. Add #2, #3 by appending to this array — the /work page maps over it.
 * Use `[TODO: ...]` for anything you still need to fill in before launch.
 *
 * Public-safe only: no pricing/commercial terms, no internal architecture, DB
 * schema, keys, or region. Get client sign-off before featuring a name/logo.
 */

export type CaseStudySection = {
  label: string;
  body: string;
};

export type Experience = {
  title: string;
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
  /** Short tags shown on the card, e.g. ["Web App", "WhatsApp"] */
  tags: string[];
  /** Optional status badge, e.g. "Launching soon" or "Live". */
  status?: string;
  /** Optional live site URL — rendered as a "Visit site" CTA. */
  liveUrl?: string;
  /** Optional caption beside the CTA, e.g. to flag the link as the client's old site. */
  liveUrlNote?: string;
  featured?: boolean;
  sections: CaseStudySection[];
  /** Optional: distinct product surfaces (customer / store / admin, etc.). */
  experiences?: Experience[];
  /** Optional: punchy capability highlights. */
  capabilities?: string[];
  screenshots: Screenshot[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "the-laundry-mill",
    client: "The Laundry Mill",
    summary:
      "We built the complete digital system behind a doorstep laundry service. Customers book and track in a tap, staff run the day from one screen, and the owner sees the whole business in real time.",
    tags: ["Web App", "WhatsApp Booking", "Live Tracking", "Doorstep Logistics"],
    status: "Coming soon · Rajkot",
    liveUrl: "https://thelaundrymill.in/",
    liveUrlNote: "Their old website — the platform we built launches soon.",
    featured: true,
    sections: [
      {
        label: "The challenge",
        body: "A doorstep laundry service run on phone calls and paper slips — orders slipped through, and no one could say where a customer's clothes were.",
      },
      {
        label: "What we built",
        body: "One platform for the whole business: customers book and track on WhatsApp or the web, staff run pickups and deliveries, and the owner sees every order, payment, and store in real time.",
      },
      {
        label: "The result",
        body: "Built and launching in Rajkot shortly — every order tracked from doorstep to doorstep, so there are no lost tickets and no more \"where's my order?\" calls.",
      },
    ],
    experiences: [
      {
        title: "For customers",
        body: "Book, pay, and track a pickup live — on WhatsApp or the web, with no app to install.",
      },
      {
        title: "For staff",
        body: "Run the day's pickups, deliveries, riders, and payments from a single screen.",
      },
      {
        title: "For the owner",
        body: "A live dashboard for every order, store, and rupee — plus pricing and staff control.",
      },
    ],
    capabilities: [
      "WhatsApp & web booking — no app to download.",
      "Live order tracking from pickup to doorstep, tagged at every stage.",
      "Automatic billing, prepaid wallet, and memberships.",
      "Automated WhatsApp updates across the whole journey.",
      "Multi-store logistics around a central cleaning hub.",
    ],
    // No screenshots yet — project isn't live. Add framed shots here once ready.
    screenshots: [],
  },
];

export const workIntro = {
  label: "// selected work",
  heading: "Proof over promises.",
  sub: "Here's what we're shipping.",
};
