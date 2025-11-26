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
        Hola Conchi
    </div>
    A WePlan Application
    </>
   
  )
}

export default App
