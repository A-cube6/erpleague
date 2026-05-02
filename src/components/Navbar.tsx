"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="ERPLeague Australia home">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/15">
            ERP
          </span>
          <span>
            <span className="block text-base font-bold tracking-tight text-slate-950">ERPLeague</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">Australia</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/#contact">Book ERP Health Check</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 p-3 text-slate-900 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="space-y-2 py-5">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/#contact" className="mt-2 w-full" onClickCapture={() => setOpen(false)}>
              Book ERP Health Check
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
