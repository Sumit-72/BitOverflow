// // Home.js
"use client"
// import Footer from "./components/Footer";
// import HeroSectionHeader from "./components/sections/HeroSectionHeader";
import LatestQuestions from "./components/sections/LatestQuestions";
// import NavbarBoi from "./components/NavbarBoi";
// import Sidebar from "./components/layout/Sidebar";
// import { HeroParallax } from "../components/ui/hero-parallax";
// import { SparklesCore } from "../components/ui/sparkles";
 
// export default function Home() {
//   return (
//     <>
//       <div className="flex flex-col h-screen">
//         {/* Fixed Navbar */}
//         <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
//           <NavbarBoi />
//         </div>

//         <div className="flex flex-1 pt-[4rem]">
//           <div>
//             <aside >
//               <Sidebar />
//             </aside>
//           </div>
//           {/* Main Content Area */}

//           <div className="ml-[16%] w-[84vw] overflow-y-auto">
//           <SparklesCore
//           id="tsparticlesfullpage"
//           background="transparent"
//           minSize={0.6}
//           maxSize={1.4}
//           particleDensity={100}
//           className="w-full h-full fixed"
//           particleColor="#FFFFFF"
//         />
//             <div className="relative">
             
              
//               <HeroSectionHeader></HeroSectionHeader>
//               <HeroParallax products={products} />
//               <LatestQuestions />
//               <div className="m-10" />
//               <Footer />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// const products = [
//   {
//     title: "Moonbeam",
//     link: "https://gomoonbeam.com",
//     thumbnail: "/Clubs.png",
//   },
//   {
//     title: "Events",
//     link: "/events",
//     thumbnail:
//       "/Events.png",
//   },
//   {
//     title: "Clubs",
//     link: "/club",
//     thumbnail:
//       "/Clubs.png",
//   },

//   {
//     title: "Remap",
//     link: "https://eloquent-semifreddo-c8e593.netlify.app",
//     thumbnail:
//       "/remap.jpg",
//   },
//   {
//     title: "Events",
//     link: "/events",
//     thumbnail:
//       "/Events.png",
//   },
  
//   {
//     title: "Aceternity UI",
//     link: "https://ui.aceternity.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
//   },
//   {
//     title: "AskAQuestion",
//     link: "https://algochurn.com",
//     thumbnail:
//       "/AskAQuestion.png",
//   },
//   {
//     title: "Questions",
//     link: "/questions",
//     thumbnail:
//       "/question.png",
//   },
//   {
//     title: "Remap",
//     link: "https://eloquent-semifreddo-c8e593.netlify.app",
//     thumbnail:
//       "/remap1.png",
//   },
// ];

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
        <section id="latest-questions" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Latest Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Explore the most recent questions from our community.
              </p>
            </div>
            {/* <LatestQuestions /> */}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App;