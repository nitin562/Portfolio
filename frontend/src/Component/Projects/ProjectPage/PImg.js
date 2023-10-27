import React from "react";
import "./page.css";
export default function PImg({ url, code, video, deploy }) {
  const ClickingLink=(e)=>{
    if(e.target.id==="code"){
      window.open(code,"_blank")
    }
    else if(e.target.id==="video"){
      window.open(video,"_blank")
    }
    else if(e.target.id==="deploy"){
      window.open(deploy,"_blank")
    }
    else{
      return
    }
  }
  return (
    <div id="Pimg">
      <img src={url} alt="Project image" />
      <div className="links">
        {code && <i onClick={ClickingLink} id="code" className="fa-solid fa-code"></i>}
        {video && <i onClick={ClickingLink} id="video" className="fa-brands fa-youtube"></i>}
        {deploy && <i onClick={ClickingLink} id="deploy" className="fa-solid fa-link"></i>}
      </div>
    </div>
  );
}
