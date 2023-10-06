import React,{useRef,useEffect} from 'react'
import "./frame.css"
import Typed from "typed.js"
export default function Frame() {
    const typeArea=useRef(0)
    useEffect(() => {
        const typed = new Typed(typeArea.current, {
          strings: ["Frontend Developer","Backend Developer","Full Stack Developer","MERN Developer"],
          typeSpeed: 50,
          loop:true,
          showCursor:false
          
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);
  return (
    <div id="frame">
        <p className="CodeSign">
            <span>&lt;</span><span>/</span><span>&gt;</span>
        </p>
        <div className="TypeProfile">
          <span ref={typeArea}></span>
        </div>
    </div>
  )
}
