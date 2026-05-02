import { proofPoints } from "@/lib/content";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

export function ProofSection() {
  return (
    <section id="proof" className="section-shell bg-[linear-gradient(180deg,#eef9ff_0%,#ffffff_100%)] py-20 sm:py-24 lg:py-28">
      <Container className="relative">
        <SectionHeader
          eyebrow="Typical results"
          title="Outcome-led proof without overstating public case studies"
          description="Written as example engagement outcomes: credible, conservative and honest until you decide to publish approved client case studies."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point, index) => (
            <article key={point.title} className="glass-hover premium-card rounded-[1.75rem] p-6 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-cyan-300 shadow-lg shadow-slate-950/15">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-xl font-black tracking-tight text-slate-950">{point.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{point.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
