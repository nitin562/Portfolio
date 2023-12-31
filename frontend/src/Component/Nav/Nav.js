import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import MenuItem from "./MenuItem";

export default function Nav() {
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
  return (
    <div className="navWrap">
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
            <MenuItem item="Projects" iName="fa-brands fa-dev" title="Projects"/>
          </li>
          <li>
            <MenuItem item="Achievements" iName="fa-solid fa-star" title="Achievements" />
          </li>
          <li>
            <MenuItem item="Contact Me" iName="fa-regular fa-address-card" title="Contact me"/>
          </li>
        </ul>
        <div className="socialMedia">
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
