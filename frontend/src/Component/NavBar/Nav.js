import React, { useRef, useState } from 'react'
import './nav.css'
export default function Nav() {
    const NavRef=useRef()
    const [toogle, settoogle] = useState(false)
    const onToggle=()=>{
        if(toogle){
            NavRef.current.style.height="4rem"
            NavRef.current.children[0].style.height="4rem"
            NavRef.current.children[0].style.backgroundColor="#220d6388"
        }
        else{
            NavRef.current.style.height="22rem"
            NavRef.current.children[0].style.height="22rem"
            NavRef.current.children[0].style.backgroundColor="#220d6388"
        }
        settoogle((prev)=>{
            return !prev
        })
    }
  return (
    <div className='NavView' ref={NavRef}>
        <div className="mainRow" >
            <div className="Icon">
                <img src={require("../../Images/logo.gif")}></img>
            </div>
            <div className="menu">
                <div className="buttonToggle">
                    <button onClick={onToggle}><img className={toogle?"rotate":""} src={require("../../Images/menu.png")} alt="toogle" /></button>
                </div>
                <div className="items">
                    <p>Home <div className='underline'></div></p>
                    <p>Background <div className='underline'></div></p>
                    <p>Projects <div className='underline'></div></p>
                    <p>Skills <div className='underline'></div></p>
                    <p>About <div className='underline'></div></p>
                </div>
            </div>
            <div className="contact">
                <button><img src={require("../../Images/contact-us.png")} alt="contact" /></button>
            </div>
        </div>
    </div>
  )
}
