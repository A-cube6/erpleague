import type { Metadata } from "next";
import { ArrowRight, Boxes, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Client Portal Preview",
  description:
    "ERPLeague Australia client portal preview for future registered and subscriber cloud products, support workspaces, and ERP tools.",
};

const plannedProducts = [
  {
    title: "ERP Health Check Dashboard",
    status: "Planned",
    description: "A future client dashboard for ERP maturity, support risks, process pain points, and improvement actions.",
  },
  {
    title: "SAP Support Workspace",
    status: "Planned",
    description: "A future place to track support requests, priorities, knowledge notes, and engagement artefacts.",
  },
  {
    title: "Automation & Reporting Toolkit",
    status: "Planned",
    description: "A future launchpad for small ERP automation, reporting, and process visibility tools.",
  },
];

export default function PortalPage() {
  return (
    <section className="bg-[radial-gradient(circle_at_top_right,#e0f2fe,transparent_32%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-sky-300 shadow-xl shadow-slate-950/20">
            <LockKeyhole className="h-8 w-8" aria-hidden="true" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Client Portal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Future subscriber access for ERPLeague cloud products
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            This portal page is a professional placeholder for future registered-client access. Authentication, subscriptions, product dashboards, and secure data storage can be added later using Vercel, Supabase, and API routes.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/#contact">
              Enquire about portal access <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/" variant="secondary">
              Back to website
            </ButtonLink>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {plannedProducts.map((product) => (
            <article key={product.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Boxes className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                  {product.status}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-slate-950">{product.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{product.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-5 rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/15 md:grid-cols-2 lg:p-8">
          <div className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
            <Sparkles className="h-8 w-8 text-sky-300" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-semibold">Suggested next build phase</h2>
            <p className="mt-3 text-base leading-7 text-slate-300">
              Add Supabase authentication, organisation-level roles, subscription status, and a secure dashboard layout for approved clients.
            </p>
          </div>
          <div className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
            <ShieldCheck className="h-8 w-8 text-sky-300" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-semibold">Security note</h2>
            <p className="mt-3 text-base leading-7 text-slate-300">
              This version does not store client data or expose private products. It is safe as a public placeholder until backend access control is added.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
