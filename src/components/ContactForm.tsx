"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

const serviceOptions = [
  "SAP Application Support",
  "S/4HANA Readiness & Migration",
  "SAP BTP / Fiori / UI5 Development",
  "SAP Integration Services",
  "ERP Advisory / Digital Transformation",
  "Oracle NetSuite / ERP Support",
  "Managed ERP Support",
  "Reporting / Automation / Process Improvement",
  "Client Portal / Cloud Product Enquiry",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send enquiry.");
      }

      setStatus("success");
      setMessage(result.message || "Thanks. Your enquiry has been received.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="premium-card grid gap-5 rounded-[2rem] p-6 sm:p-8">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <Field label="Company" name="company" autoComplete="organization" />
      </div>
      <div>
        <label htmlFor="serviceInterest" className="mb-2 block text-sm font-bold text-slate-800">
          Service interest
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          required
          className="input-glass w-full rounded-2xl px-4 py-3 text-slate-950 outline-none"
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us briefly about your SAP/ERP environment, pain point, or project need."
          className="input-glass w-full resize-none rounded-2xl px-4 py-3 text-slate-950 outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="glass-hover inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-400/70 bg-[linear-gradient(135deg,#071526_0%,#063d5f_52%,#00a7d8_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(0,119,190,0.24)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span className="relative z-10 inline-flex items-center">
          {status === "submitting" ? "Sending..." : "Submit enquiry"}
          <Send className="ml-2 h-4 w-4" aria-hidden="true" />
        </span>
      </button>
      {message ? (
        <p className={`rounded-2xl px-4 py-3 text-sm font-semibold ${status === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
};

function Field({ label, name, type = "text", autoComplete, required = false }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-bold text-slate-800">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="input-glass w-full rounded-2xl px-4 py-3 text-slate-950 outline-none"
      />
    </div>
  );
}
