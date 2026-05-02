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
    <section id="services" className="section-shell bg-white py-20 sm:py-24 lg:py-28">
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeader
            eyebrow="Services"
            title="Practical ERP capability without the big-firm slowdown"
            description="ERPLeague supports Australian businesses across core SAP and ERP operations, modernisation programs, integration needs, and ongoing support. The focus is simple: clear advice, useful delivery, and less noise."
          />
          <div className="rounded-[1.75rem] border border-cyan-100 bg-cyan-50/60 p-5 text-sm leading-7 text-slate-700 shadow-sm">
            <strong className="text-slate-950">Designed for enterprise conversations:</strong> each service card is intentionally direct, outcome-focused, and easy for a CIO, CFO, operations lead, or SAP manager to scan quickly.
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} icon={icons[index]} />
          ))}
        </div>
      </Container>
    </section>
  );
}
