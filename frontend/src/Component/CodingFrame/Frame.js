import React,{useRef,useEffect} from 'react'
import "./frame.css"
import Typed from "typed.js"
import Circular from '../MagicalComp/Circular';
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
    <div id="frame"  >
        <div className='relative'>
        <div className="CodeSign flex rounded-full justify-center items-center bg-gradient-to-r from-[#07ff6a] via-[#1cecff] to-[#ff0a7d] z-10  relative  w-[8rem] h-[8rem]  ">
            <span className='z-10'>&lt;</span><span className='z-10'>/</span><span className='z-10'>&gt;</span>
            <div className="bg-[#0e1630] absolute top-0 scale-[98%] left-0  w-full h-full rounded-full "></div>
        </div>
        <Circular className='-bottom-3 rounded-full animate-ping  -left-10 p-[0.8px] w-[6rem] h-[6rem] bg-gradient-to-r from-cyan-500 via-[#eb15ff] to-blue-500 '/>
        <Circular className='-top-40 -right-[13rem] animate-ping p-[0.5px] w-[16rem] h-[16rem] bg-gradient-to-r from-cyan-500 via-[#fff] to-blue-500 '/>
        <Circular className='-top-3 rounded-full animate-ping -left-10 p-[0.8px] w-[6rem] h-[6rem] bg-gradient-to-r from-cyan-500 via-[#eb15ff] to-blue-500 '/>
        <Circular className='-top-40 -left-[13rem] animate-ping p-[0.5px] w-[16rem] h-[16rem] bg-gradient-to-r from-cyan-500 via-[#fff] to-blue-500 '/>
        </div>

        <div className="TypeProfile">
          <span ref={typeArea}></span>
        </div>
    </div>
  )
}
