// Home.js
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSectionHeader from './components/HeroSectionHeader';
import LatestQuestions from './components/LatestQuestions';
import NavbarBoi from './components/NavbarBoi';
import Sidebar from './components/Sidebar'; // Import Sidebar

export default function Home() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div >
        <Sidebar /> {/* Add Sidebar here */}
        </div>
        <div style={{ flexGrow: 1 }} className='w-[80vw]'>
          {/* <Header /> */}
          <NavbarBoi />
          <HeroSectionHeader />        
          <LatestQuestions />
          <div className='m-10' /> 
          <Footer />
        </div>
      </div>
    </>
  );
}
