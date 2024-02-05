import React from "react";
import "./contact.css";
import { useCont } from "../Context/ContextProvider";
export default function Contact() {
  const cont=useCont()
  return (
    <div id="Contact" ref={cont.state.references["Contact Me"]}>
      <p>MEET ME ON</p>
      <div className="contacts">
        <div className="left">
          <div className="ContHead">
            Get in Touch is easy <div></div>
          </div>
          <div className="infoCont">
            <p>
              Email me at <span>nitindbas8800@gmail.com</span>
            </p>
            
          </div>
        </div>
        <div className="right">
          <img src={require("../../Images/Intro.gif")} alt="" />
        </div>
      </div>
    </div>
  );
}
