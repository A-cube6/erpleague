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
      "bg-sky-500 text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400 focus-visible:outline-sky-400",
    secondary:
      "bg-white text-slate-950 ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:outline-slate-400",
    ghost: "text-slate-700 hover:bg-slate-100 focus-visible:outline-slate-400",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
