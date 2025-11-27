import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/Intro/Intro.jsx';
import ScrollText from './components/ScrollText/ScrollText.jsx';  

function App()
{
  return (
    <>
      <Intro></Intro>
      <section className="intro-content text-style ">
          <ScrollText className="text-style" text={"la vida es como un sople de hielo que va marchitando flores"}/>
          
          <p>
            Hola conchi
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos delectus dolor magni, obcaecati et quo, dolorem qui possimus eveniet sapiente nisi nesciunt sed nemo mollitia maxime vero ipsam cum.
          </p>

      </section>
    </>
  )
}

export default App
