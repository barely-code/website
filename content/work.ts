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
  /** Optional status badge, e.g. "Launching soon". Omit once live. */
  status?: string;
  /** Optional public-safe stack line, e.g. "Next.js · Supabase". */
  stack?: string;
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
      "End-to-end digital management for a doorstep laundry service — web app, WhatsApp booking, store ops, and an admin control centre.",
    tags: ["Web App", "WhatsApp Bot", "Next.js", "Supabase"],
    status: "Phase 1 MVP · Launching soon",
    stack: "Next.js · Supabase · WhatsApp Business API",
    featured: true,
    sections: [
      {
        label: "The client",
        body: "The Laundry Mill is a Delhi-based laundry and dry-cleaning service that picks up clothes from the customer's door, cleans them at a central hub, and delivers them back. The operation runs on a hub-and-spoke model — local stores handle pickup and delivery while a central hub handles the cleaning.",
      },
      {
        label: "The challenge",
        body: "Bookings ran on phone calls and manual coordination — easy to miss, hard to track, with no visibility into where an order or an individual garment was at any moment. They needed to digitise the entire pipeline — scheduling, pickup, cleaning, multi-store logistics, billing, and customer comms — without forcing customers to install an app.",
      },
      {
        label: "What we built",
        body: "A single platform with tailored experiences for customers, store staff, and admins — covering the full journey from a doorstep pickup, through cleaning at the central hub, to the final delivery. WhatsApp-first, so customers can book and stay updated without downloading anything.",
      },
      {
        label: "The result",
        body: "Phase 1 is built and preparing to go live in Delhi: one platform replacing phone-and-paper coordination with real-time, garment-level tracking from pickup to doorstep. [TODO: add live outcome metrics once launched.]",
      },
    ],
    experiences: [
      {
        title: "Customer — web + WhatsApp",
        body: "Book a pickup, choose a time slot, track the order live, manage wallet & membership, and raise complaints — all without an app. On WhatsApp, an unknown number is registered on the spot; a known number gets a menu.",
      },
      {
        title: "Store panel",
        body: "Today's pickups, order management and status updates, rider assignment, delivery OTP verification, customer & wallet management, and batch dispatch between store and hub.",
      },
      {
        title: "Admin control centre",
        body: "City-wide dashboard with store, staff, service, pricing, and slot configuration, an all-orders view with audit trail, complaints management, and reporting on revenue, volume, SLAs, and slot utilisation.",
      },
    ],
    capabilities: [
      "Pickup scheduling with real-time slot availability and capacity control.",
      "Real-time, garment-level tracking (QR-tagged) through every cleaning stage — stain removal, washing, pressing, packaging, delivery.",
      "Live ETAs shown to customers and updated as the order progresses.",
      "Automatic itemised billing — garments logged and priced at the store, the bill generated and sent automatically.",
      "Prepaid wallet & tiered memberships (Silver / Gold / Platinum / Family / Corporate).",
      "Automated WhatsApp notifications across the whole order lifecycle.",
      "Re-engagement automation that nudges customers who've gone quiet.",
      "Complaint registration with SLA tracking and automatic escalation.",
      "Multi-store + central-hub logistics with batch dispatch and garment scanning.",
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
