import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { BrandMark } from "./BrandMark";
import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";

const footerServices = [
  "SAP Application Support",
  "S/4HANA Readiness",
  "SAP BTP & Fiori",
  "ERP Managed Support",
  "NetSuite / ERP Support",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-400/12 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />

      <Container className="relative py-10 sm:py-12">
        <div className="glass-hover mb-10 grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">Ready to improve ERP control?</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">Start with a focused SAP/ERP health check.</h2>
          </div>
          <ButtonLink href="/#contact" className="w-full lg:w-auto">
            Book a conversation <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="ERPLeague Australia home">
              <BrandMark inverse />
              <span>
                <span className="block text-base font-black tracking-tight">ERPLeague Australia</span>
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">SAP & ERP Services</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Boutique Australian SAP and ERP specialists for support, advisory, S/4HANA readiness, BTP/Fiori development, integration, and managed ERP support.
            </p>
            <p className="mt-5 text-sm font-bold text-cyan-300">Built for Australian businesses.</p>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">Services</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {footerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.phone}</li>
              <li>
                <Link href="/portal" className="hover:text-white">
                  Client Portal
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="relative border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ERPLeague Australia. All rights reserved.</p>
          <p>SAP & ERP Services for Australian Businesses</p>
        </Container>
      </div>
    </footer>
  );
}
