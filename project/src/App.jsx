import './App.css'
import Intro from './components/Intro/Intro.jsx';
import ScrollText from './components/ScrollText/ScrollText.jsx';  
import Interview from './components/InterviewSection/InterviewSection.jsx';
import BenefitsSection from './components/Benefits/BenefitsSection.jsx';
import ChartSection from './components/Chart/ChartSection.jsx';

function App() {
  return (
    <>
      <Intro />
      <section className="intro-content text-style">
        <ScrollText text={"\"El mundo te espera, nosotros te llevamos.\""} />
      </section>
      <ChartSection />
      <Interview />
      <BenefitsSection />
    </>
  )
}

export default App
