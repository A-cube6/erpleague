import { ArrowRight, LockKeyhole, Rocket, ShieldCheck } from "lucide-react";
import { portalFeatures } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

const icons = [LockKeyhole, Rocket, ShieldCheck];

export function PortalPreview() {
  return (
    <section id="client-portal" className="section-shell bg-white py-20 sm:py-24 lg:py-28">
      <Container className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Client portal"
            title="A  cloud product home for registered and subscriber clients"
            description="The site includes a client portal entry point now. It is designed as a professional placeholder until authentication, subscriptions, product dashboards, and secure client workspaces are added later."
          />
          <ButtonLink href="/portal" variant="secondary" className="mt-8 w-full sm:w-auto">
            View portal preview <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {portalFeatures.map((feature, index) => {
            const Icon = icons[index];
            return (
              <article key={feature.title} className="glass-hover premium-card rounded-[1.75rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-black tracking-tight text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
