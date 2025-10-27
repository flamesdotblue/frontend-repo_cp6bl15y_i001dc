import React, { useMemo, useRef, useState } from 'react';
import { AlertTriangle, CheckCircle2, Bot, Send } from 'lucide-react';

function Message({ role, content }) {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
        role === 'user' ? 'bg-indigo-500 text-white' : 'bg-white/5 text-white/90 border border-white/10'
      }`}>{content}</div>
    </div>
  );
}

export default function ValueSections() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Bonjour, je suis Sylen — votre assistant IA. Comment puis-je aider ?' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const next = [...messages, { role: 'user', content: text }];
    // mini-LLM heuristic reply
    const lower = text.toLowerCase();
    let reply = "Je peux vous guider sur nos offres (MLOps, déploiement GPU, sécurité) et organiser un appel.";
    if (/(prix|tarif|coût)/.test(lower)) reply = "Nos tarifs sont adaptés au périmètre. Dites-moi votre cas d’usage et je vous propose une estimation rapide.";
    else if (/(gpu|déploiement|serving|latence|scal)/.test(lower)) reply = "Nous mettons en place un serving autoscalé (Kubernetes/Serverless), monitoring et optimisation de latence.";
    else if (/(sécur|rgpd|gdpr|conform)/.test(lower)) reply = "Nous appliquons chiffrement, contrôle d’accès, isolation des environnements et bonnes pratiques conformité.";
    else if (/(contact|appel|rdv|rendez|meeting)/.test(lower)) reply = "Partagez un créneau — ou cliquez sur ‘Réserver un appel’ pour planifier directement.";
    const withBot = [...next, { role: 'assistant', content: reply }];
    setMessages(withBot);
    setInput('');
    inputRef.current?.focus();
  };

  const conversation = useMemo(() => (
    <div className="space-y-2">
      {messages.map((m, i) => (
        <Message key={i} role={m.role} content={m.content} />
      ))}
    </div>
  ), [messages]);

  return (
    <section className="relative">
      <div id="problem" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-emerald-400">
              <AlertTriangle size={18} />
              <span className="text-sm uppercase tracking-wider text-white/70">Problème / Contexte</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold">De l’expérimentation à la production, le fossé est réel</h2>
            <p className="mt-3 text-white/70">
              Environnements hétérogènes, coûts GPU volatils, dette MLOps, sécurité et conformité… Autant d’obstacles
              qui retardent la mise en production et dégradent l’expérience utilisateur.
            </p>
            <ul className="mt-4 grid gap-2 text-white/80">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/40" /> Pipelines fragiles et non reproductibles</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/40" /> Serving non-scalable et coûteux</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/40" /> Manque de visibilité (monitoring, traçabilité)</li>
            </ul>
          </div>

          <div id="what-is-ai" className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-indigo-400">
              <CheckCircle2 size={18} />
              <span className="text-sm uppercase tracking-wider text-white/70">Solution / Proposition de valeur</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold">Un socle d’infrastructure IA prêt pour l’échelle</h2>
            <p className="mt-3 text-white/70">
              Nous concevons un runbook clair: entraînement reproductible, déploiement sécurisé, observabilité,
              coûts maîtrisés. Vous livrez plus vite, avec plus de confiance.
            </p>
            <div className="mt-4 grid gap-2">
              {[
                'Plateformes MLOps clé-en-main (K8s, CI/CD, feature store)',
                'Serving optimisé GPU/CPU avec autoscaling et A/B testing',
                'Sécurité de bout en bout, conformité et gouvernance des modèles',
              ].map((b) => (
                <div key={b} className="flex items-center gap-2 text-white/85">
                  <div className="h-5 w-5 rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-3 flex items-center gap-2 text-fuchsia-400">
              <Bot size={18} />
              <span className="text-sm uppercase tracking-wider text-white/70">Chatbot IA (mini-LLM Sylen)</span>
            </div>
            <div className="h-[320px] overflow-auto rounded-2xl border border-white/10 bg-black/20 p-4">
              {conversation}
            </div>
            <form onSubmit={handleSend} className="mt-3 flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez une question (tarifs, GPU, sécurité, RDV…)"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-fuchsia-500/40"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 px-4 py-2 text-sm font-medium hover:brightness-110"
              >
                <Send size={16} />
                Envoyer
              </button>
            </form>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Qu’est-ce que l’IA ?</h3>
            <p className="mt-3 text-white/70">
              L’intelligence artificielle regroupe des techniques permettant à des systèmes d’apprendre à partir de
              données et d’accomplir des tâches complexes: classification, génération, prédiction, optimisation…
              Notre rôle: transformer ces modèles en produits fiables, responsables et performants.
            </p>
            <a href="#services" className="mt-4 inline-block rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Explorer nos services</a>
          </div>
        </div>
      </div>
    </section>
  );
}
