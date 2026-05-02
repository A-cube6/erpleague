import { ArrowUpRight, type LucideIcon } from "lucide-react";

export type CardIcon = LucideIcon;

type ServiceCardProps = {
  title: string;
  description: string;
  icon: CardIcon;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article className="glass-hover premium-card group flex min-h-[260px] flex-col rounded-[1.75rem] p-6 sm:p-7">
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100 transition group-hover:bg-cyan-500 group-hover:text-white group-hover:ring-cyan-300">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200/80 bg-white/70 text-slate-500 transition group-hover:border-cyan-200 group-hover:text-cyan-700">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
      <h3 className="mt-6 text-xl font-black tracking-tight text-slate-950">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
      <div className="mt-auto pt-6">
        <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 ring-1 ring-cyan-100">
          Explore
        </span>
      </div>
    </article>
  );
}
