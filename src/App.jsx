import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ValueSections from './components/ValueSections.jsx';
import Showcase from './components/Showcase.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <ValueSections />
        <Showcase />
      </main>
    </div>
  );
}

export default App;
