import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HealthCheckSection } from "@/components/HealthCheckSection";
import { Hero } from "@/components/Hero";
import { IndustriesSection } from "@/components/IndustriesSection";
import { MetricStrip } from "@/components/MetricStrip";
import { PortalPreview } from "@/components/PortalPreview";
import { ProofSection } from "@/components/ProofSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhySection } from "@/components/WhySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricStrip />
      <ServicesSection />
      <IndustriesSection />
      <WhySection />
      <ProofSection />
      <HealthCheckSection />
      <PortalPreview />
      <AboutSection />
      <ContactSection />
    </>
  );
}
