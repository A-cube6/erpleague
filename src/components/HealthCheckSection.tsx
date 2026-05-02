import { ArrowRight, CheckCircle2, ClipboardCheck } from "lucide-react";
import { healthCheckItems } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";

export function HealthCheckSection() {
  return (
    <section id="health-check" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="overflow-hidden rounded-[2.25rem] bg-slate-950 shadow-2xl shadow-slate-950/15 lg:grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative p-7 text-white sm:p-10 lg:p-12">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/12 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-xl shadow-cyan-500/20">
                <ClipboardCheck className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">Lead generation offer</p>
              <h2 className="mt-4 text-balance text-3xl font-black tracking-tight sm:text-4xl">Book a 30-minute ERP Health Check</h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                A focused conversation to understand where your SAP or ERP environment is creating friction, risk, cost, or missed opportunity.
              </p>
              <ButtonLink href="/#contact" className="mt-8 w-full sm:w-auto">
                Request Health Check <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
          <div className="bg-white/95 p-7 sm:p-10 lg:p-12">
            <h3 className="text-2xl font-black tracking-tight text-slate-950">What the session covers</h3>
            <ul className="mt-6 grid gap-4">
              {healthCheckItems.map((item) => (
                <li key={item} className="glass-hover flex gap-3 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4 text-base font-semibold text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
