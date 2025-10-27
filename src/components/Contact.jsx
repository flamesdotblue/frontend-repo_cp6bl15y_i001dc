import { useState } from 'react'
import { Rocket } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailto = () => {
    const subject = encodeURIComponent('Projet Infrastructure IA')
    const body = encodeURIComponent(`Bonjour InfraIA,%0D%0A%0D%0AJe suis ${name}.\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:contact@infraia.example?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Discutons de votre roadmap IA</h3>
            <p className="mt-3 text-slate-600">Expliquez-nous vos objectifs — nous revenons vers vous sous 24h avec des premières recommandations.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="text-sm font-semibold text-slate-900">Déploiement accéléré</div>
                <div className="text-sm text-slate-600">De 0 à prod en quelques semaines</div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="text-sm font-semibold text-slate-900">Architecture sur mesure</div>
                <div className="text-sm text-slate-600">Adaptée à vos contraintes</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                  <Rocket size={16} />
                </span>
                <h4 className="font-semibold text-slate-900">Contact rapide</h4>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email professionnel"
                  className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Décrivez votre besoin (infrastructure, MLOps, sécurité, coûts...)"
                  rows={5}
                  className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
                <button
                  onClick={mailto}
                  className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800 transition"
                >
                  Envoyer la demande
                </button>
                <p className="text-xs text-slate-500">En cliquant, votre client mail s'ouvrira avec votre message pré-rempli.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} InfraIA — Agence d'infrastructure d'IA
        </div>
      </div>
    </section>
  )
}
