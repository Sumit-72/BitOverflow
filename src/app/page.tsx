// Home.js
import Particles from "@/components/magicui/particles";
import Footer from "./components/Footer";
import HeroSectionHeader from "./components/HeroSectionHeader";
import LatestQuestions from "./components/LatestQuestions";
import NavbarBoi from "./components/NavbarBoi";
import Sidebar from "./components/Sidebar";

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
         
          <div className="ml-[16%] w-[84vw] overflow-y-auto">
            <div className="relative">
              {/* <HeroSectionHeader /> */}
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
