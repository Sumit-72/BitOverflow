// Home.js
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSectionHeader from "./components/HeroSectionHeader";
import LatestQuestions from "./components/LatestQuestions";
import NavbarBoi from "./components/NavbarBoi";
import Sidebar from "./components/Sidebar"; // Import Sideba

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavbarBoi /> 
        <div className="flex flex-1 ">
          <aside className="w-[16%]  bg-slate-400">
            <Sidebar />
          </aside>
          <div className="flex-1 overflow-y-auto w-[84%]">
            <HeroSectionHeader />
            <LatestQuestions />
            <div className="m-10" />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
