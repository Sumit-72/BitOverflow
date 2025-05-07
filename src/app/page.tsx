"use client"
import LatestQuestions from "./components/sections/LatestQuestions";
import React, { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/HeroSectionHeader';
import Features from './components/sections/Features';
import { animations } from './lib/animation';

function App() {
  useEffect(() => {
    // Add animations stylesheet
    const style = document.createElement('style');
    style.textContent = animations;
    document.head.appendChild(style);

    // Update page title
    document.title = 'BitOverflow';

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Layout>
      <div className="flex flex-col">
        <Hero />
        <Features />
        <LatestQuestions />
      </div>
    </Layout>
  );
}

export default App;