import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="About ERPLeague Australia"
            title="Boutique ERP consulting for teams that want clarity, control and progress"
            description="ERPLeague Australia helps organisations simplify ERP decisions, stabilise support, modernise SAP landscapes, and improve the way business processes run through technology."
          />
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The company is positioned for clients that need senior SAP and ERP expertise without the complexity of a large consulting engagement. The tone is practical: understand the problem, explain the options, deliver the right-sized solution, and support the business after go-live.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5">
          <h3 className="text-2xl font-semibold text-slate-950">How we work</h3>
          <div className="mt-6 grid gap-4">
            {[
              ["Diagnose", "Clarify the process pain, support gap, integration issue, or modernisation priority."],
              ["Prioritise", "Separate urgent operational risk from longer-term improvement work."],
              ["Deliver", "Use senior ERP capability to execute with clean communication and visible progress."],
              ["Improve", "Turn repeat issues into better workflows, documentation, reporting, and governance."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-slate-950">{title}</p>
                <p className="mt-2 text-base leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
