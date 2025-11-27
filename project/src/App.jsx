import './App.css'
import Intro from './components/Intro/Intro.jsx';
import ScrollText from './components/ScrollText/ScrollText.jsx';  
import Interview from './components/InterviewSection/InterviewSection.jsx';
import BenefitsSection from './components/Benefits/BenefitsSection.jsx';

function App() {
  return (
    <>
      <Intro />
      <section className="intro-content text-style">
        <ScrollText text={"\"Miles de mensajes. Cientos de dudas. Una sola app.\""} />
      </section>
      <Interview />
      <BenefitsSection />
    </>
  )
}

export default App
