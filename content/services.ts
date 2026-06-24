/** Service categories — shown on Home (tight grid) and the Services page. */

export type Service = {
  /** Monospace index shown as a label, e.g. "01" */
  id: string;
  title: string;
  blurb: string;
};

export const services: Service[] = [
  {
    id: "01",
    title: "AI Agents & Integrations",
    blurb: "Autonomous agents, copilots, RAG, and LLM features wired into your product and workflows — doing real work, not demos.",
  },
  {
    id: "02",
    title: "Automations & Workflows",
    blurb: "Agentic workflows that kill the repetitive manual work. Connect your tools so they run themselves.",
  },
  {
    id: "03",
    title: "Web Apps & Internal Dashboards",
    blurb: "Custom tools that replace the spreadsheet chaos your team is drowning in.",
  },
  {
    id: "04",
    title: "Business Websites & Landing Pages",
    blurb: "Fast, modern, and built to convert. Live in days, not quarters.",
  },
  {
    id: "05",
    title: "MVP Development",
    blurb: "Idea to production fast — built to validate, structured to scale.",
  },
  {
    id: "06",
    title: "Fractional Tech Partner",
    blurb: "Ongoing senior engineering for startups that don't have a CTO yet.",
  },
];

export const servicesIntro = {
  label: "// what we build",
  heading: "Six ways we put dents in your backlog.",
  sub: "No bloated retainers. No junior handoffs. Pick what you need — we ship it.",
};
