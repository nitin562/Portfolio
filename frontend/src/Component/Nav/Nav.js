import React, { useRef, useState } from "react";
import "./nav.css";

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
  return (
    <nav>
      <div className="navWrap">
        <p className="name">
          <span>N</span>itin <span>D</span>abas
        </p>

        <div className="menu" ref={menu}>
          <ul>
            <li>
              <i className="fa-solid fa-house" title="Home"></i><span>Home</span>
            </li>
            <li>
              <i className="fa-solid fa-school" title="Background"></i><span>Background</span>
            </li>
            <li>
              <i className="fa-brands fa-dev" title="Projects"></i><span>Projects</span>
            </li>
            <li>
              <i className="fa-solid fa-star" title="Achievements"></i><span>Achievements</span>
            </li>
            <li>
              <i className="fa-regular fa-address-card" title="Contact me"></i><span>Contact me</span>
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
    </nav>
  );
}
