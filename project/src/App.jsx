import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/Intro/Intro.jsx';

function App()
{
  return (
    <>
     <Intro></Intro>
    <div className="intro-content">
        Empieza el scroll normal aquí ↓
    </div>

    <h2>BOMBOCLAT</h2>
    <h2>pito</h2>
    <h2>chococonhi</h2>
    </>
   
  )
}

export default App
