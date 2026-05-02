export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span
      className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl text-sm font-black tracking-tight shadow-lg ${
        inverse
          ? "bg-white text-slate-950 shadow-black/20"
          : "border border-white/75 bg-white/85 text-slate-950 shadow-cyan-950/10 backdrop-blur-xl"
      }`}
      aria-hidden="true"
    >
      <span className="absolute -right-4 -top-4 h-9 w-9 rounded-full bg-cyan-300/50 blur-xl" />
      <span className="relative">E</span>
      <span className="relative text-cyan-600">RP</span>
    </span>
  );
}
