import React from 'react'
import {useCont } from '../Context/ContextProvider'

export default function MenuItem({item,iName,title}) {
  const context=useCont()
  const onClick=()=>{
    const ref=context.state.references[item]
    if(ref &&ref.current===0){
      alert("No")
      return; //no linkage to a DOM element
    }
    ref.current.scrollIntoView({behavior:"smooth"})
  }
  return (
    <div onClick={onClick}>
    <i className={iName} title={title}></i>
    <span id={item} onClick={onClick}>{item}</span>
    </div>
  )
}
