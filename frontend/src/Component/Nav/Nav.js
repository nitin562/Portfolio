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
            <i className="fa-solid fa-house" title="Home"></i>
            <MenuItem item="Home" />
          </li>
          <li>
            <i className="fa-solid fa-school" title="Background"></i>
            <MenuItem item="Background" />
          </li>
          <li>
            <i className="fa-brands fa-dev" title="Projects"></i>
            <MenuItem item="Projects" />
          </li>
          <li>
            <i className="fa-solid fa-star" title="Achievements"></i>
            <MenuItem item="Achievements" />
          </li>
          <li>
            <i className="fa-regular fa-address-card" title="Contact me"></i>
            <MenuItem item="Contact Me" />
          </li>
        </ul>
        <div className="socialMedia">
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-solid fa-envelope"></i>
        </div>
      </div>

      <button className="toogle" onClick={OnClickToogleBtn}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
}
