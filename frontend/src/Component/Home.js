import React from 'react'
import './home.css'
import Nav from './Nav/Nav'
import Frame from './CodingFrame/Frame'
import Intro from './IntroPart/Intro'
import { useCont } from './Context/ContextProvider'
import Terminal from './Terminal/Terminal'
import Edu from './Education/Edu'
import Projects from './Projects/Projects'
import Achieve from './Achievements/Achieve'
import Skills from './SkillSec/Skills'
import Contact from './Contact/Contact'
export default function Home() {
  const context = useCont();
  return (
    <div id='Home' className='scrollbar' >
        <Nav/>
        <div className="IntroLine" ref={context.state.references["Home"]}>
          <Frame/>
          <Intro/>
        </div>
        <Skills/>
        <Terminal/>
        <Edu/>
        <Projects/>
        <Achieve/>
        <Contact/>
    </div>
  );
}
