import Header from './components/Header';
import Footer from './components/Footer';
import HeroSectionHeader from './components/HeroSectionHeader';
import LatestQuestions from './components/LatestQuestions';
import Sidebar from './components/Sidebar';


export default function Home() {
  return (
    <>
      <div>
        <Header />
        {/* <Sidebar /> */}
        <HeroSectionHeader />        
        <LatestQuestions />
        <div className='m-10' /> 
        <Footer />
      </div>
    </>
  );
}
