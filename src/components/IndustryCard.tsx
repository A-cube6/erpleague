import { ArrowUpRight } from "lucide-react";

type IndustryCardProps = {
  title: string;
};

export function IndustryCard({ title }: IndustryCardProps) {
  return (
    <article className="glass-hover premium-card group flex items-center justify-between gap-4 rounded-[1.6rem] p-5 sm:p-6">
      <h3 className="text-base font-black tracking-tight text-slate-950">{title}</h3>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300 shadow-sm transition group-hover:bg-cyan-500 group-hover:text-white">
        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
      </span>
    </article>
  );
}
