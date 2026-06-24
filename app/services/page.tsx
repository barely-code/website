import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services, servicesIntro } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, web apps, AI integrations, automations, MVPs, and fractional engineering — built lean and shipped fast by BarelyCode.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-x pt-20 sm:pt-28">
        <PageHeader
          label={servicesIntro.label}
          heading={servicesIntro.heading}
          sub={servicesIntro.sub}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        heading="Not sure which one you need?"
        sub="Tell us the problem. We'll tell you the leanest way to ship the fix."
      />
    </>
  );
}
