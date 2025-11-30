import './App.css'
import Intro from './components/Intro/Intro.jsx';
import ScrollText from './components/ScrollText/ScrollText.jsx';  
import Interview from './components/InterviewSection/InterviewSection.jsx';
import BenefitsSection from './components/Benefits/BenefitsSection.jsx';
import ChartSection from './components/Chart/ChartSection.jsx';
import DemoSection from './components/Demo/DemoSection.jsx';
import DemoCTASection from './components/Demo/DemoCTASection.jsx';
import PresentationSection from './components/Presentation/PresentationSection.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Intro />
      <section className="intro-content text-style">
        <ScrollText text={"\"El mundo te espera, nosotros te llevamos.\""} />
      </section>
      <ChartSection />
      <section className="intro-content text-style">
        <ScrollText text={"\"La solución,\n WEPLAN.\""} />
      </section>
      <BenefitsSection />
      <DemoSection />
      <DemoCTASection />
      <Interview />
      <PresentationSection />
      <Footer />
    </>
  )
}

export default App
