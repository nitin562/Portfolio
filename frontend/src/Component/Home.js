import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import Nav from "./Nav/Nav";
import Frame from "./CodingFrame/Frame";
import Intro from "./IntroPart/Intro";
import { useCont } from "./Context/ContextProvider";
import Terminal from "./Terminal/Terminal";
import Edu from "./Education/Edu";
import Projects from "./Projects/Projects";
import Achieve from "./Achievements/Achieve";
import Skills from "./SkillSec/Skills";
import Contact from "./Contact/Contact";
import Exp from "./Experience/Exp";
import AbsoluteIcons from "./AbsoluteIcons";

export default function Home() {
  const context = useCont();
  const homeRef = useRef(0);
  const [showNavbar, setShowNavbar] = useState(true);
  let timeoutId = null;

  const handleScroll = () => {
    setShowNavbar(false); // Hide the navbar while scrolling

    // Clear the previous timeout if it exists
    if (timeoutId) clearTimeout(timeoutId);

    // Show the navbar again after 500ms (adjust as needed) of no scroll activity
    timeoutId = setTimeout(() => {
      setShowNavbar(true);
    }, 500);
  };
  
  useEffect(() => {
    homeRef.current.addEventListener("scroll", handleScroll);
    
    // Cleanup event listener on component unmount
  }, []);

  return (
    <div id="Home" ref={homeRef} className="scrollbar relative">
      <Nav showNavbar={showNavbar} />
      <div className="IntroLine" ref={context.state.references["Home"]}>
        <Frame />
        <Intro />
      </div>
      <Skills />
      <Terminal />
      <Edu />
      <Exp />
      <Projects />
      <Achieve />
      <Contact />
      <AbsoluteIcons/>
    </div>
  );
}
