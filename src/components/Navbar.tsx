"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";
import { BrandMark } from "./BrandMark";
import { Container } from "./Container";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/60 shadow-[0_12px_34px_rgba(8,17,31,0.06)] backdrop-blur-2xl">
      <Container className="flex h-[4.5rem] items-center justify-between sm:h-20">
        <Link href="/" className="glass-hover -ml-2 flex items-center gap-3 rounded-full border border-transparent px-2.5 py-2" aria-label="ERPLeague Australia home">
          <BrandMark />
          <span>
            <span className="block text-base font-black tracking-tight text-slate-950">ERPLeague</span>
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.24em] text-cyan-600">Australia</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/70 bg-white/55 p-1.5 shadow-sm backdrop-blur-xl lg:flex" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="glass-hover rounded-full border border-transparent px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/#contact" className="shadow-cyan-700/20">Book ERP Health Check</ButtonLink>
        </div>

        <button
          type="button"
          className="glass-hover inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/70 text-slate-950 shadow-sm lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/60 bg-white/80 shadow-2xl shadow-cyan-950/10 backdrop-blur-2xl lg:hidden">
          <Container className="space-y-2 py-5">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="glass-hover block rounded-2xl border border-transparent px-4 py-3 text-base font-semibold text-slate-700 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/#contact" className="mt-3 w-full" onClickCapture={() => setOpen(false)}>
              Book ERP Health Check
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
