import { ArrowRight, ClipboardCheck } from "lucide-react";
import { healthCheckItems } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";

export function HealthCheckSection() {
  return (
    <section id="health-check" className="bg-white py-24 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-950/15 lg:grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400 text-slate-950">
                <ClipboardCheck className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Lead generation offer</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Book a 30-minute ERP Health Check</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                A focused conversation to understand where your SAP or ERP environment is creating friction, risk, cost, or missed opportunity.
              </p>
              <ButtonLink href="/#contact" className="mt-8">
                Request Health Check <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
          <div className="bg-white p-8 sm:p-10 lg:p-12">
            <h3 className="text-2xl font-semibold text-slate-950">What the session covers</h3>
            <ul className="mt-6 grid gap-4">
              {healthCheckItems.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-base font-medium text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
