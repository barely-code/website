import { site } from "@/content/site";

/**
 * Organization structured data (schema.org JSON-LD).
 * Rendered once in app/layout.tsx so Google + AI search engines understand
 * who BarelyCode is, our contact channels, and our profiles.
 *
 * All values read from content/site.ts — keep that file as the source of truth.
 */
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: `${site.name} Studio`,
    url: site.url,
    logo: `${site.url}/opengraph-image`,
    image: `${site.url}/opengraph-image`,
    description: site.description,
    email: site.email,
    foundingDate: "2026",
    slogan: site.tagline,
    founders: site.founders.map((name) => ({ "@type": "Person", name })),
    knowsAbout: [
      "AI agents",
      "LLM integration",
      "Workflow automation",
      "Web application development",
      "Next.js",
      "MVP development",
    ],
    sameAs: [
      site.social.github,
      site.social.linkedin,
      site.social.instagram,
    ].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      url: `${site.url}/contact`,
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
