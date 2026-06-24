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
    title: "Business Websites & Landing Pages",
    blurb: "Fast, modern, and built to convert. Live in days, not quarters.",
  },
  {
    id: "02",
    title: "Web Apps & Internal Dashboards",
    blurb: "Custom tools that replace the spreadsheet chaos your team is drowning in.",
  },
  {
    id: "03",
    title: "AI Integrations",
    blurb: "Chatbots, copilots, RAG, and LLM features wired into your product or workflow.",
  },
  {
    id: "04",
    title: "Automations & Workflows",
    blurb: "Kill the repetitive manual work. Connect your tools so they run themselves.",
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
