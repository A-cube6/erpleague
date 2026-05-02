import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy placeholder for ERPLeague Australia.",
};

export default function PrivacyPage() {
  return (
    <section className="section-shell bg-white py-16 sm:py-20 lg:py-24">
      <Container className="relative max-w-4xl">
        <div className="premium-card rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-600">Placeholder</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">Privacy Policy</h1>
          <div className="mt-8 space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              This is a placeholder privacy policy page for ERPLeague Australia. Replace this content with a formal policy reviewed for your business, jurisdiction, analytics setup, enquiry form handling, and any future client portal or subscription features.
            </p>
            <p>
              At this stage, the enquiry form API route validates and logs submitted enquiries on the server. When email, CRM, database storage, analytics, or authentication is added, update this page to describe the data collected and how it is used.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
