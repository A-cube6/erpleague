import Link from "next/link";
import { siteConfig } from "@/lib/content";
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
    <footer className="bg-slate-950 text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="ERPLeague Australia home">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-black text-slate-950">ERP</span>
            <span>
              <span className="block text-base font-bold tracking-tight">ERPLeague Australia</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">SAP & ERP Services</span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Boutique Australian SAP and ERP specialists for support, advisory, S/4HANA readiness, BTP/Fiori development, integration, and managed ERP support.
          </p>
          <p className="mt-5 text-sm font-semibold text-sky-300">Built for Australian businesses.</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Services</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h2>
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
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ERPLeague Australia. All rights reserved.</p>
          <p>SAP & ERP Services for Australian Businesses</p>
        </Container>
      </div>
    </footer>
  );
}
