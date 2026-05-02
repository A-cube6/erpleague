const metrics = [
  { value: "Senior", label: "consultant-led ERP support" },
  { value: "SAP + ERP", label: "technical and functional capability" },
  { value: "Flexible", label: "advisory, delivery and managed support" },
  { value: "Australia", label: "market-aligned communication" },
];

export function MetricStrip() {
  return (
    <section className="bg-slate-950 py-8 text-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {metrics.map((metric) => (
          <div key={metric.value} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-2xl font-semibold text-sky-300">{metric.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
