import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/acl-logo.png.asset.json";

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sectores", href: "#sectores" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-[0_2px_16px_-4px_rgba(11,31,58,0.12)]" : "bg-white/85 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between gap-3">
        <a href="#inicio" className="flex items-center gap-2 min-w-0 shrink" aria-label="ACL Ingeniería y Soluciones Eléctricas S.A.S.">
          <img
            src={logoAsset.url}
            alt="ACL Ingeniería y Soluciones Eléctricas S.A.S."
            className="h-10 md:h-14 w-auto object-contain shrink-0"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-2 text-sm font-medium text-navy/80 hover:text-electric transition-colors relative group"
            >
              {n.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-electric scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block shrink-0">
          <Button asChild size="sm" className="bg-electric text-electric-foreground hover:bg-electric/90 shadow-sm">
            <a href="#contacto">Solicitar Asesoría</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-navy hover:bg-accent"
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-navy/80 hover:text-electric"
              >
                {n.label}
              </a>
            ))}
            <Button asChild className="mt-2 bg-electric text-electric-foreground hover:bg-electric/90">
              <a href="#contacto" onClick={() => setOpen(false)}>Solicitar Asesoría</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
