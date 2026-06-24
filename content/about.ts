/** About page copy — manifesto + founders. */

export const about = {
  label: "// who we are",
  heading: "Two engineers who got tired of slow.",
  manifesto: [
    "BarelyCode is two engineers who got tired of bloated agencies, endless meetings, and over-planning that never ships.",
    "We believe in execution over planning, shipping over talking, and using AI to do in days what used to take months. The name is the whole philosophy: barely any code, because the leanest path to the outcome usually is the best one.",
    "When you hire BarelyCode, the founders build your thing. No outsourcing. No junior shuffle. No account manager standing between you and the people writing the code.",
  ],
};

export type Founder = {
  name: string;
  role: string;
  bio: string;
  /** Two initials used in the avatar placeholder */
  initials: string;
  linkedin?: string;
};

export const founders: Founder[] = [
  {
    name: "Vyom",
    role: "Co-founder · Engineering",
    bio: "[TODO: bio — background, what he loves building, AI/automation focus.]",
    initials: "VY",
    // linkedin: "[TODO]",
  },
  {
    name: "Samarth",
    role: "Co-founder · Engineering",
    bio: "[TODO: bio — background, what he loves building, AI/automation focus.]",
    initials: "SA",
    // linkedin: "[TODO]",
  },
];
