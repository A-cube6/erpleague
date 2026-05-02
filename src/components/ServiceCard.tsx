import type { LucideIcon } from "lucide-react";

export type CardIcon = LucideIcon;

type ServiceCardProps = {
  title: string;
  description: string;
  icon: CardIcon;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-950/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition group-hover:bg-sky-500 group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
    </article>
  );
}
