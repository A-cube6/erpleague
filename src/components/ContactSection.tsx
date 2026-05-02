import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { ContactForm } from "./ContactForm";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Start with a practical ERP conversation"
            description="Use the form to request a 30-minute ERP Health Check, discuss support needs, or explore a future cloud product/portal use case."
          />
          <div className="mt-8 grid gap-4">
            <ContactItem icon={Phone} label="Phone" value={siteConfig.phone} />
            <ContactItem icon={Mail} label="Email" value={siteConfig.email} />
            <ContactItem icon={MapPin} label="Focus" value="Australian SAP and ERP services" />
          </div>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}

type ContactItemProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

function ContactItem({ icon: Icon, label, value }: ContactItemProps) {
  return (
    <div className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
        <p className="mt-1 text-base font-semibold text-slate-950">{value}</p>
      </div>
    </div>
  );
}
