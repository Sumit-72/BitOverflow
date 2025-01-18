// Home.js
import Footer from "./components/Footer";
import HeroSectionHeader from "./components/HeroSectionHeader";
import LatestQuestions from "./components/LatestQuestions";
import NavbarBoi from "./components/NavbarBoi";
import Sidebar from "./components/Sidebar";
import { WavyBackground } from "@/components/ui/wavy-background";
import Grid from "./components/gridsec";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          <NavbarBoi />
        </div>

        {/* Sidebar and Main Content */}
        <div className="flex flex-1 pt-[4rem]">
          {" "}
          {/* Adjust padding-top for the navbar height */}
          {/* Fixed Sidebar */}
          <div>
            <aside className="fixed top-[4rem] left-0 h-[calc(100vh-4rem)] w-[16vw] bg-slate-400 shadow-lg">
              <Sidebar />
            </aside>
          </div>
          {/* Main Content Area */}
          <div className="ml-[16%] w-[84vw] overflow-y-auto overflow-x-hidden">
            <div className="relative">
              <WavyBackground>
                <HeroSectionHeader />
              </WavyBackground>
            </div>

            <div className="z-10">
              <Grid />
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
