import { Rocket } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-slate-900 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              <Rocket size={18} />
            </span>
            <span>InfraIA</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900 transition">Offres</a>
            <a href="#expertise" className="hover:text-slate-900 transition">Expertise</a>
            <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
            <a href="#contact" className="ml-2 inline-flex items-center rounded-md bg-slate-900 px-3 py-2 text-white hover:bg-slate-800 transition">Parler à un expert</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
