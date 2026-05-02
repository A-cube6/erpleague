import { CheckCircle2 } from "lucide-react";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

const reasons = [
  "Australian market understanding and clear local communication",
  "Senior consultant-led delivery instead of heavy handovers",
  "Practical, no-nonsense SAP and ERP support",
  "Flexible engagement models for advisory, project and managed support",
  "Strong SAP technical and functional capability",
  "Faster response and sharper focus than large consulting firms",
  "Transparent communication, realistic scope and practical next steps",
];

export function WhySection() {
  return (
    <section id="why-erpleague" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-950/15 sm:p-9 lg:p-10">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-cyan-400/18 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-blue-500/14 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">Why ERPLeague</p>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight sm:text-4xl">A specialist partner for teams that need momentum.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
              Many ERP issues do not need a large transformation machine. They need a senior person who can understand the process, diagnose the system, explain the trade-offs, and move the work forward.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass-hover rounded-3xl border border-white/10 bg-white/[0.07] p-5">
                <p className="text-3xl font-black text-cyan-300">Boutique</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">Direct access, less bureaucracy, and faster decisions.</p>
              </div>
              <div className="glass-hover rounded-3xl border border-white/10 bg-white/[0.07] p-5">
                <p className="text-3xl font-black text-cyan-300">Practical</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">Advice tied to business operations, not just slide decks.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Operating model"
            title="Support that feels close to the business"
            description="ERPLeague is positioned to work alongside your team, not above it. That makes the website tone direct, useful and credible for Australian buyers."
          />
          <ul className="mt-8 grid gap-4">
            {reasons.map((reason) => (
              <li key={reason} className="glass-hover flex gap-3 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-4 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" aria-hidden="true" />
                <span className="text-base font-medium leading-7">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
