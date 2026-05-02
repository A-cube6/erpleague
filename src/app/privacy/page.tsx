import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy placeholder for ERPLeague Australia.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Placeholder</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
          <p>
            This is a placeholder privacy policy page for ERPLeague Australia. Replace this content with a formal policy reviewed for your business, jurisdiction, analytics setup, enquiry form handling, and any future client portal or subscription features.
          </p>
          <p>
            At this stage, the enquiry form API route validates and logs submitted enquiries on the server. When email, CRM, database storage, analytics, or authentication is added, update this page to describe the data collected and how it is used.
          </p>
        </div>
      </Container>
    </section>
  );
}
