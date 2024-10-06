import React from 'react'
import "./terminal.css"
import Circle from './Circle'
import CmdWorker from './CmdWorker'
import Mouse from '../MagicalComp/Mouse'
export default function Terminal() {
  return (
    <div id="terminal">
      <Mouse/>

      <p className='heading'>--Terminal</p>
      <div className="cmd">
        <Circle/>
        <p>Welcome to my website: Get Started by typing 'help' command below</p>
        <CmdWorker/>
      </div>
    </div>
  )
}
