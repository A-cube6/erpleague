import { ArrowUpRight } from "lucide-react";

type IndustryCardProps = {
  title: string;
};

export function IndustryCard({ title }: IndustryCardProps) {
  return (
    <article className="flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-200 hover:shadow-lg hover:shadow-slate-950/5">
      <h3 className="text-base font-semibold text-slate-950">{title}</h3>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
      </span>
    </article>
  );
}
