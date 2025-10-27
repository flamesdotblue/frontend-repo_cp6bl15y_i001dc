import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,0.25),transparent_55%)]" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[50vh] w-[50vw] bg-gradient-to-b from-fuchsia-500/20 to-transparent blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Sparkles size={14} className="text-fuchsia-400" />
            Agence d’infrastructure IA — fiable, scalable, sécurisée
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Bâtissez votre plateforme IA avec un socle robuste
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            De l’entraînement sur GPU au déploiement de modèles en production. Nous concevons des architectures MLOps,
            optimisons les coûts cloud et sécurisons la chaîne de valeur IA.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110">
              Réserver un appel gratuit
            </a>
            <a href="#problem" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">
              Découvrir
            </a>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
