import { Cpu, Cloud, Shield, Server } from 'lucide-react'

const services = [
  {
    title: 'MLOps & Pipelines',
    desc: "CI/CD pour modèles, registre d'expériences, déploiements canaris et surveillance continue.",
    icon: Cpu,
  },
  {
    title: 'Cloud & GPU',
    desc: 'Conception de clusters GPU, optimisation coûts/performances, orchestrateurs Kubernetes.',
    icon: Cloud,
  },
  {
    title: 'Sécurité & Conformité',
    desc: 'Secrets, IAM, chiffrement, traçabilité et conformité RGPD/SOC2 by design.',
    icon: Shield,
  },
  {
    title: 'Data & Serving',
    desc: "Stockage objet/vec, feature store, API d'inférence à faible latence et haute dispo.",
    icon: Server,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Nos offres principales</h2>
          <p className="mt-3 text-slate-600">Des fondations robustes pour accélérer vos projets IA, de la R&D à la production.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-blue-500/30" />
            </div>
          ))}
        </div>

        <div id="expertise" className="mt-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="font-semibold text-slate-900">Notre approche</h4>
          <p className="mt-2 text-sm text-slate-600">
            Nous privilégions des architectures cloud-native, des patterns GitOps et une observabilité de bout en bout. Chaque
            engagement commence par un audit technique, suivi d'une feuille de route concrète.
          </p>
        </div>
      </div>
    </section>
  )
}
