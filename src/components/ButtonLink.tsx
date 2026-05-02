import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "", ...props }: ButtonLinkProps) {
  const styles = {
    primary:
      "border border-cyan-400/70 bg-[linear-gradient(135deg,#071526_0%,#063d5f_52%,#00a7d8_100%)] text-white shadow-[0_18px_45px_rgba(0,119,190,0.26)] hover:text-white focus-visible:outline-cyan-500",
    secondary:
      "glass-surface border border-white/70 text-slate-950 hover:text-slate-950 focus-visible:outline-cyan-500",
    ghost:
      "border border-transparent bg-white/0 text-slate-700 hover:border-white/70 hover:bg-white/50 hover:text-slate-950 focus-visible:outline-cyan-500",
  };

  return (
    <Link
      href={href}
      className={`glass-hover inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center">{children}</span>
    </Link>
  );
}
