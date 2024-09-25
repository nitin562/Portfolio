import React from 'react'
import {useCont } from '../Context/ContextProvider'

export default function MenuItem({item,iName,title}) {
  const context=useCont()
  const onClick=(e)=>{
    
    
    const ref=context.state.references[item]
    if(ref &&ref.current===0){
      
      return; //no linkage to a DOM element
    }
    
    ref.current.scrollIntoView({  behavior: "smooth",
      block: "start", // Aligns the element to the top of the viewport
      inline: "nearest"})
  }
  return (
    <div onClick={onClick}>
    <i className={iName} title={title}></i>
    <span id={item}>{item}</span>
    </div>
  )
}
