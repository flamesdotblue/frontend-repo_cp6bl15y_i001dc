import React from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Accueil' },
  { href: '#about', label: 'Qui sommes-nous' },
  { href: '#services', label: 'Produits & Services' },
  { href: '#contact', label: 'Contact' },
  { href: '#what-is-ai', label: "Qu’est-ce que l’IA ?" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const closeOnResize = () => setOpen(false);
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-orange-400" />
              <span className="font-semibold tracking-tight">Sylen AI Infrastructure</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
