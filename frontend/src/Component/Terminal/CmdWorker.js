import React, { useLayoutEffect, useState,useRef } from 'react'
import "./cmdworker.css"
import Instruction from "./Instruction.js"
export default function CmdWorker() {
    const cmdRef=useRef(0)
    const [instruction, setinstruction] = useState([])
    const [current, setcurrent] = useState({
        "command":null,
        "response":null,
        "enable":true
    })
    useLayoutEffect(()=>{
        (()=>{
          // cmdRef.current.scrollIntoView(false,{behaivour: "smooth"})
          cmdRef.current.scrollTop = cmdRef.current.scrollHeight;
        })()
    },[instruction])
  return (
    <div id="CmdWorker" className='scrollbar' ref={cmdRef}>
        {
          instruction.map((element,index)=>{
            return <Instruction key={index} prevCommands={instruction} command={element.command} response={element.response} enable={element.enable} changeCurrent={setcurrent} changeInstruction={setinstruction}/>

          })
        }
        <Instruction key={-1} command={current.command} prevCommands={instruction} response={current.response} enable={current.enable} changeCurrent={setcurrent}changeInstruction={setinstruction}/>
    </div>
  )
}
