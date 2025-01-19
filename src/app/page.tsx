// Home.js
import Particles from "@/components/magicui/particles";
import Footer from "./components/Footer";
import HeroSectionHeader from "./components/HeroSectionHeader";
import LatestQuestions from "./components/LatestQuestions";
import NavbarBoi from "./components/NavbarBoi";
import Sidebar from "./components/Sidebar";
import { HeroParallax } from "../components/ui/hero-parallax";
import { SparklesCore } from "../components/ui/sparkles";
 
export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          <NavbarBoi />
        </div>

        <div className="flex flex-1 pt-[4rem]">
          <div>
            <aside >
              <Sidebar />
            </aside>
          </div>
          {/* Main Content Area */}

          <div className="ml-[16%] w-[84vw] overflow-y-auto">
          <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full fixed"
          particleColor="#FFFFFF"
        />
            <div className="relative">
             
              
              <HeroSectionHeader></HeroSectionHeader>
              <HeroParallax products={products} />
              <LatestQuestions />
              <div className="m-10" />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/Clubs.png",
  },
  {
    title: "Events",
    link: "/events",
    thumbnail:
      "/Events.png",
  },
  {
    title: "Clubs",
    link: "/club",
    thumbnail:
      "/Clubs.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Events",
    link: "/events",
    thumbnail:
      "/Events.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "AskAQuestion",
    link: "https://algochurn.com",
    thumbnail:
      "/AskAQuestion.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
