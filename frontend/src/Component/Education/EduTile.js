import React, { useEffect, useMemo, useRef, useState } from "react";
import "./eTile.css";
import { Details } from "../Response";
export default function EduTile({ title, restToogle, changeRestToogle }) {
  let html = useRef(Details(title));
  const [toogle, settoogle] = useState(false);
  let scrollRef = useRef(0);
  const Toggle = () => {
    if(restToogle===title){
      changeRestToogle("")
    }
    else{
      changeRestToogle(title)
    }
    
    settoogle((prev) => !prev);
    scrollRef.current.scrollIntoView({ behaviour: "smooth" });
  };
  const ClickRest=(e)=>{
    if(e.target.closest("#EduTile") ===null){
      if(toogle === true){
        Toggle()
      }
    }
  }
  useEffect(()=>{
    document.addEventListener("click",ClickRest)
    return()=>{
      document.removeEventListener("click",ClickRest)
    }
  })
  useEffect(()=>{
    if(restToogle !== "" && restToogle !== title){
      settoogle(false)
    }
  },[restToogle])
  return (
    <div id="EduTile" onClick={Toggle}>
      <p id="e_title">
        <i className="fa-solid fa-caret-down"></i>
        {title}
        <span className={toogle?"lineBreak increaseHeight":"lineBreak"}></span>
      </p>
      <div ref={scrollRef} className={toogle ? "edit expand" : "edit collapse"}>{html.current}</div>
    </div>
  );
}
