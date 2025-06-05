import LatestQuestions from "./components/sections/LatestQuestions";
import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/HeroSectionHeader';
import Features from './components/sections/Features';
import ClientSideEffects from './components/ClientSidesEffect';

export const dynamic = "force-dynamic";

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
  );
}

export default App;