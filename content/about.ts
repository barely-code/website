/** About page copy — manifesto + founders. */

export const about = {
  label: "// who we are",
  heading: "A two-person studio, built to ship.",
  manifesto: [
    "BarelyCode is a two-person software studio. We build AI agents, automations, web apps, and websites for people who need working software — not a long roadmap and a bigger invoice.",
    "We keep the team small on purpose. You work directly with the two engineers writing your code, so decisions happen in a message, not a meeting. AI handles the repetitive work, which keeps our timelines short and our overhead — and your cost — low.",
    "The name is the approach: build the leanest thing that actually solves the problem, ship it, and improve it from real use. We'd rather get something working in front of you than spend weeks planning the perfect version.",
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
    name: "Vyom Narsana",
    role: "Co-founder · Engineering",
    // Optional — left empty for now; the card renders cleanly without it.
    bio: "", // [TODO: bio — background, what he loves building, AI/automation focus.]
    initials: "VN",
    linkedin: "https://www.linkedin.com/in/vyom-narsana-852aa7231/",
  },
  {
    name: "Samarth Vaghela",
    role: "Co-founder · Engineering",
    bio: "", // [TODO: bio — background, what he loves building, AI/automation focus.]
    initials: "SV",
    linkedin: "https://www.linkedin.com/in/samarth-vaghela-647a1b383/",
  },
];
