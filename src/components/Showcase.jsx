import React from 'react';
import { Rocket, Cpu, Shield, Database, Users, Wrench, Star, Check, MessageSquare } from 'lucide-react';

export default function Showcase() {
  return (
    <section id="services" className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <Cpu className="text-indigo-300" />, title: 'MLOps & Plateformes', desc: 'Pipelines CI/CD, feature store, traçabilité, gouvernance.' },
            { icon: <Rocket className="text-fuchsia-300" />, title: 'Serving & Scaling', desc: 'Kubernetes/Serverless, autoscaling, A/B testing, canary.' },
            { icon: <Shield className="text-emerald-300" />, title: 'Sécurité & Conformité', desc: 'Chiffrement, IAM, audit, RGPD, secrets management.' },
            { icon: <Database className="text-orange-300" />, title: 'Data & Observabilité', desc: 'Data quality, monitoring, alerting, cost tracking.' },
            { icon: <Users className="text-sky-300" />, title: 'Enablement Équipe', desc: 'Templates, runbooks, coaching, accélération delivery.' },
            { icon: <Wrench className="text-pink-300" />, title: 'Optimisation GPU/Coûts', desc: 'Planification GPU, spot instances, kernels, quantization.' },
          ].map((f) => (
            <div key={f.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-dashed border-white/15 bg-white/5 p-6">
          <p className="text-sm text-white/80">
            Offres: packs détaillés disponibles sur la page dédiée (Discovery, Build, Scale). Contactez-nous pour un
            cadrage en 30 minutes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold">Témoignages</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-1 text-amber-300">
                    {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} size={16} />)}
                  </div>
                  <p className="mt-2 text-sm text-white/80">“Mise en production en 6 semaines, latence divisée par 3, coûts GPU -35%.”</p>
                  <p className="mt-1 text-xs text-white/50">CTO — Scale-up SaaS</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Nos outils</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Kubernetes','Ray','MLflow','Weights&Biases','Grafana','Prometheus','dbt','Kafka','Snowflake','Airflow']
                .map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-semibold">Études de cas</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {[{
              title: 'Assistant client voix',
              desc: 'Pipeline temps réel, transcription, RAG, serving low-latency.',
            },{
              title: 'Vision industrielle',
              desc: 'Détection de défauts, entraînement distribué, monitoring qualité.',
            }].map((c) => (
              <div key={c.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold">{c.title}</h4>
                <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                <a href="#cta" className="mt-4 inline-block text-sm text-fuchsia-300 hover:underline">Voir le déroulé</a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4">
          <h3 className="text-xl font-semibold">FAQ</h3>
          <div className="space-y-3">
            {[
              { q: 'Combien de temps pour un premier livrable ?', a: 'Généralement 2 à 6 semaines selon le périmètre.' },
              { q: 'Pouvez-vous travailler on-premise ?', a: 'Oui, nous opérons sur cloud public, privé et on‑prem.' },
              { q: 'Aidez-vous sur la partie conformité ?', a: 'Nous intégrons sécurité, gouvernance et politiques de confidentialité.' },
            ].map((item) => (
              <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/5 p-4">
                <summary className="flex cursor-pointer items-center justify-between text-sm text-white/90">
                  <span>{item.q}</span>
                  <Check className="ml-4 h-4 w-4 text-emerald-300 transition group-open:rotate-45" />
                </summary>
                <p className="mt-2 text-sm text-white/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div id="cta" className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-orange-400/10 p-8 text-center">
          <h3 className="text-2xl font-semibold">Prêt à accélérer votre roadmap IA ?</h3>
          <p className="mt-2 text-white/80">Réservez un appel gratuit avec un architecte IA pour cadrer vos enjeux.</p>
          <a href="mailto:contact@sylen.ai?subject=RDV%20IA%20-%20Sylen" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/20">
            <MessageSquare size={16} />
            Réserver un appel gratuit
          </a>
        </div>

        <div id="contact" className="mt-10 text-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} Sylen — Agence d’infrastructure IA. Tous droits réservés.</p>
          <p className="mt-1">contact@sylen.ai • Paris / Remote</p>
        </div>
      </div>
    </section>
  );
}
