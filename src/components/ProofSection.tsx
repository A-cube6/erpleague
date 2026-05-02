import { proofPoints } from "@/lib/content";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

export function ProofSection() {
  return (
    <section id="proof" className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Typical results"
          title="Outcome-led proof without overstating public case studies"
          description="This section is intentionally written as example engagement outcomes. It gives credibility while avoiding any false claim of named client delivery until you choose to publish approved case studies."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point, index) => (
            <article key={point.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{point.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{point.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
