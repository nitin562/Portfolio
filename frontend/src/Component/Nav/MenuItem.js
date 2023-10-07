import React from 'react'
import {useCont } from '../Context/ContextProvider'

export default function MenuItem({item}) {
  const context=useCont()
  const onClick=()=>{
    const ref=context.state.references[item]
    if(ref.current===0){
      return; //no linkage to a DOM element
    }
    ref.current.scrollIntoView({behavior:"smooth"})
  }
  return (
    <span onClick={onClick}>{item}</span>
  )
}
