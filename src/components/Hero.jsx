import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),rgba(99,102,241,0.05)_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900"
            >
              Infrastructure IA
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                performante et sécurisée
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg text-slate-600"
            >
              Nous concevons, déployons et opérons des plateformes IA cloud-natives, optimisées pour l'entraînement et l'inférence à l'échelle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition">
                Parler à un architecte
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-slate-900 ring-1 ring-slate-200 hover:ring-slate-300 transition">
                Découvrir nos offres
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-xl overflow-hidden">
              <div className="absolute inset-0 opacity-90" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.15), transparent 30%), radial-gradient(circle at 80% 10%, rgba(99,102,241,0.15), transparent 32%), radial-gradient(circle at 10% 80%, rgba(14,165,233,0.15), transparent 30%)'}} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-6 w-full">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="h-20 rounded-lg bg-white/70 backdrop-blur border border-slate-200 shadow-sm" />
                  ))}
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-slate-600 bg-white/80 backdrop-blur rounded-md px-3 py-2 border border-slate-200 inline-block">
                  Clusters GPU, mise à l'échelle automatique, réseaux haut débit, stockage optimisé — prêts pour vos charges IA.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
