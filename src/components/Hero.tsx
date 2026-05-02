import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";

const trustItems = ["Australian-focused", "SAP expertise", "ERP support", "Integration", "Cloud transformation"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_34%),linear-gradient(135deg,#ffffff_0%,#f8fafc_42%,#eaf6ff_100%)] py-20 sm:py-24 lg:py-28">
      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-blue-900/10 blur-3xl" aria-hidden="true" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Boutique Australian SAP & ERP specialists
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            SAP & ERP Services for Australian Businesses
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">
            Practical support, S/4HANA readiness, SAP BTP/Fiori development, NetSuite and ERP advisory, integration, and managed support for growing Australian organisations.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/#contact">
              Book a 30-minute ERP Health Check <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/#services" variant="secondary">
              Explore Services
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {trustItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                <CheckCircle2 className="h-4 w-4 text-sky-600" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sky-300/40 via-blue-500/20 to-slate-950/10 blur-2xl" aria-hidden="true" />
          <div className="relative rounded-[2rem] border border-white/70 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-sky-300">ERP Health Snapshot</p>
                <h2 className="mt-2 text-2xl font-semibold">From firefighting to control</h2>
              </div>
              <ShieldCheck className="h-10 w-10 text-sky-300" aria-hidden="true" />
            </div>

            <div className="mt-6 grid gap-4">
              {[
                ["Support model", "Flexible senior consultant-led delivery"],
                ["Modernisation", "S/4HANA, clean core, cloud and BTP readiness"],
                ["Efficiency", "Fiori apps, integration, reporting and automation"],
              ].map(([label, text]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <p className="text-sm font-semibold text-sky-300">{label}</p>
                  <p className="mt-2 text-base leading-7 text-slate-200">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-white p-5 text-slate-950">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Workflow className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500">Future-ready section included</p>
                  <p className="text-lg font-semibold">Client portal foundation</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                A dedicated portal page is included now, ready to evolve into a private subscriber area for ERPLeague cloud products.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
