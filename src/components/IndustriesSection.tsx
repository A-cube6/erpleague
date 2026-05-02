import { industries } from "@/lib/content";
import { Container } from "./Container";
import { IndustryCard } from "./IndustryCard";
import { SectionHeader } from "./SectionHeader";

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-slate-50 py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Industries"
            title="Built for sectors where systems, process and accountability matter"
            description="The site is intentionally positioned for Australian SMEs, mid-market operators, government-adjacent organisations, and enterprise teams that need ERP advice they can actually use."
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {industries.map((industry) => (
            <IndustryCard key={industry} title={industry} />
          ))}
        </div>
      </Container>
    </section>
  );
}
