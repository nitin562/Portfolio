import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import MenuItem from "./MenuItem";

export default function Nav({showNavbar=false}) {
  const [Toogle, setToogle] = useState(false);
  const menu = useRef(0);
  const OnClickToogleBtn = () => {
    if (Toogle) {
      // already Toogled
      menu.current.style.right = "-30rem";
    } else {
      menu.current.style.right = "0rem";
    }
    setToogle((prev) => !prev);
  };
  const open=(link)=>{
    window.open(link,"_blank")
  }


  useEffect(() => {
    const HandleSideBar = (e) => {
      if (
        e.target.className === "fa-solid fa-bars" ||
        e.target.className === "toogle"
      ) {
        return;
      }
      if (Toogle) {
        OnClickToogleBtn();
      }
    };
    document.addEventListener("click", HandleSideBar);
    //cleanup
    return () => {
      document.removeEventListener("click", HandleSideBar);
    };
  }, [Toogle]); 
  useEffect(()=>{
    if(showNavbar==false && Toogle){
      OnClickToogleBtn()
    }
  },[showNavbar,Toogle])
  return (
    <div className="navWrap transition-all duration-200 bg-[#0e1630] beforeTemplate before:bg-[url('../public/graphics/nav.avif')] before:blur-md !z-20 before:opacity-40" style={{
      top:showNavbar?"0":"-20rem"
    }}>
      <p className="name">
        <span>N</span>itin <span>D</span>abas
      </p>

      <div className="menu" ref={menu}>
        <ul>
          <li>
            
            <MenuItem item="Home" iName="fa-solid fa-house" title="Home"  />
          </li>
          <li>
            
            <MenuItem item="Education" iName="fa-solid fa-school" title="Background"/>
          </li>
          <li>
            
            <MenuItem item="Experience" iName="fa-solid fa-briefcase" title="Work Experience"/>
          </li>
          <li>
            <MenuItem item="Projects" iName="fa-brands fa-dev" title="Projects"/>
          </li>
          <li>
            <MenuItem item="Achievements" iName="fa-solid fa-star" title="Achievements" />
          </li>
          <li>
            <MenuItem className={'border-[1px] border-transparent  font-[Abel] tracking-widest  font-bold bg-[#1563ff7d] rounded-3xl px-3 p-1 hover:bg-transparent hover:border-[#1cff3a] transition-all duration-[0.3s]'} item="Contact Me" iName="fa-regular fa-address-card" title="Contact me"/>
          </li>
        </ul>
        <div className="socialMedia h-10 md:h-fit md:absolute md:top-0 md:gap-8 md:right-0 border-l-0 md:flex md:flex-col md:items-center md:bg-[#65064d] py-5">
          <div className="w-[1px] h-10 bg-white hidden md:block"></div>
          <i className="fa-brands fa-linkedin-in" onClick={()=>{
            open("https://linkedin.com/in/nitin-dabas-195058224")
          }}></i>
          <i className="fa-brands fa-github" onClick={()=>{
            open("https://github.com/nitin562/")
          }}></i>
          <i className="fa-solid fa-c" onClick={()=>{
            open("https://leetcode.com/nitindbas8800/")
          }}></i>
        </div>
      </div>

      <button className="toogle" onClick={OnClickToogleBtn}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
}
