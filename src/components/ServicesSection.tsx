import {
  BarChart3,
  CloudCog,
  Code2,
  DatabaseZap,
  GitBranch,
  Handshake,
  LifeBuoy,
  RefreshCcw,
} from "lucide-react";
import { services } from "@/lib/content";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";

const icons = [LifeBuoy, RefreshCcw, Code2, GitBranch, Handshake, CloudCog, DatabaseZap, BarChart3];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="Practical ERP capability without the big-firm slowdown"
          description="ERPLeague supports Australian businesses across core SAP and ERP operations, modernisation programs, integration needs, and ongoing support. The focus is simple: clear advice, useful delivery, and less noise."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} icon={icons[index]} />
          ))}
        </div>
      </Container>
    </section>
  );
}
