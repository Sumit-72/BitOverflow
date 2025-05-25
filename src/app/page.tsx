import LatestQuestions from "./components/sections/LatestQuestions";
import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/HeroSectionHeader';
import Features from './components/sections/Features';
import ClientSideEffects from './components/ClientSidesEffect';

function App() {
  return (
    <Layout>
      <ClientSideEffects />
      <div className="flex flex-col">
        <Hero />
        <Features />
        <LatestQuestions />
      </div>
    </Layout>
    // <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
    //   <div className="text-center p-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 animate-fade-in-up">
    //     <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
    //       Coming Soon!
    //     </h1>
    //     <p className="text-white text-lg md:text-xl">
    //       We’re working hard to bring something amazing. Stay tuned!
    //     </p>
    //   </div>
    //   <style>{`
    //     @keyframes fadeInUp {
    //       from {
    //         opacity: 0;
    //         transform: translateY(20px);
    //       }
    //       to {
    //         opacity: 1;
    //         transform: translateY(0);
    //       }
    //     }
    //     .animate-fade-in-up {
    //       animation: fadeInUp 1s ease-out forwards;
    //     }
    //   `}</style>
    // </div>
  );
}

export default App;