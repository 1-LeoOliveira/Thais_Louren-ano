"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WA_AGENDA, NAME } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Como posso ajudar", href: "#areas" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-rose-muted/30"
          : "bg-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between h-20 lg:h-24">
        {/* Logo / Name */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-display text-lg lg:text-xl text-slate">{NAME}</span>
          <span className="font-sans text-xs text-warm-stone tracking-widest uppercase mt-0.5">
            Psicóloga
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-sans">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-warm-stone hover:text-rose-dark transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={WA_AGENDA}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-rose gap-2"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Agendar sessão
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-slate"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-ivory/98 backdrop-blur-md border-t border-rose-muted/30">
          <div className="wrap py-6 space-y-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-sans text-slate/80 hover:text-rose-dark transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_AGENDA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rose w-full mt-2 flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Agendar sessão
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
