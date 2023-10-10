import React from 'react'
import './home.css'
import Nav from './Nav/Nav'
import Frame from './CodingFrame/Frame'
import Intro from './IntroPart/Intro'
import { useCont } from './Context/ContextProvider'
import Terminal from './Terminal/Terminal'
export default function Home() {
  const context=useCont()
  return (
    <div id='Home' className='scrollbar' >
        <Nav/>
        <div className="IntroLine" ref={context.state.references["Home"]}>
          <Frame/>
          <Intro/>
        </div>
        <Terminal/>
    </div>
  )
}
