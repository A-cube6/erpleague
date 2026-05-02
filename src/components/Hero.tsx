import { ArrowRight, CheckCircle2, GaugeCircle, Layers3, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";

const trustItems = ["Australian-focused", "SAP expertise", "ERP support", "Integration", "Cloud transformation"];

const scoreItems = [
  ["Support clarity", "92%"],
  ["Readiness focus", "S/4"],
  ["Delivery model", "Senior-led"],
];

const heroCapabilities = [
  { Icon: GaugeCircle, label: "Support model", text: "Flexible senior consultant-led delivery for day-to-day SAP and ERP issues." },
  { Icon: Layers3, label: "Modernisation", text: "S/4HANA, clean-core, cloud and SAP BTP readiness without unnecessary noise." },
  { Icon: Workflow, label: "Efficiency", text: "Fiori apps, integration, reporting and automation to improve business flow." },
];

export function Hero() {
  return (
    <section className="section-shell relative bg-[linear-gradient(135deg,#f7fdff_0%,#eef9ff_42%,#ffffff_100%)] py-16 sm:py-20 lg:py-24">
      <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <div>
          <div className="glass-surface mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-cyan-700">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Simplify your ERP journey
          </div>
          <h1 className="text-balance max-w-4xl text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-7xl lg:leading-[0.98]">
            SAP & ERP Services for Australian Businesses
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            Boutique Australian SAP and ERP specialists for practical support, S/4HANA readiness, SAP BTP/Fiori development, NetSuite and ERP advisory, integration, and managed support.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/#contact" className="w-full sm:w-auto">
              Book a 30-minute ERP Health Check <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/#services" variant="secondary" className="w-full sm:w-auto">
              Explore Services
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustItems.map((item) => (
              <span key={item} className="glass-hover inline-flex items-center gap-2 rounded-full border border-white/75 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-xl">
                <CheckCircle2 className="h-4 w-4 text-cyan-600" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/30 via-blue-500/10 to-slate-950/10 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/20 sm:p-6">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden="true" />
            <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">ERP control room</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">From firefighting to control</h2>
              </div>
              <div className="glass-surface flex h-12 w-12 items-center justify-center rounded-2xl text-cyan-600">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>

            <div className="relative mt-6 grid gap-4 sm:grid-cols-3">
              {scoreItems.map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl">
                  <p className="text-2xl font-black text-cyan-300">{value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-5 grid gap-4">
              {heroCapabilities.map(({ Icon, label, text }) => (
                <div key={label} className="group grid gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition hover:bg-white/[0.1] sm:grid-cols-[auto_1fr]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-300 ring-1 ring-cyan-300/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-cyan-300">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-5 rounded-3xl bg-white p-5 text-slate-950 shadow-xl shadow-black/10">
              <p className="text-sm font-bold text-cyan-700">Future-ready section included</p>
              <p className="mt-1 text-xl font-black tracking-tight">Client portal foundation</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A dedicated portal page is included now, ready to evolve into a private subscriber area for ERPLeague cloud products.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
