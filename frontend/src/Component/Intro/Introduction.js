import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js';
import './intro.css'
export default function Introduction() {
  const elementType=useRef()
  useEffect(()=>{
    const type=new Typed(elementType.current,{
      strings: ['Frontend Developer','Backend Developer','Full Stack Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true,
      showCursor:false
    })
    return()=>{
      type.destroy()
    }
  },[])
  return (
    <div className='IntroView'>
        <div className="left">
          <p>Hey I am <span id="name">Nitin</span>. I am a </p><div><span ref={elementType} id="TypeWriter"></span></div>
        </div>
        <div className="right">
          <img src={require("../../Images/Intro.gif")} alt="" />
        </div>
    </div>
  )
}
