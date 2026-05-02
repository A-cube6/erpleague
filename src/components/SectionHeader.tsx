type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-cyan-600">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
