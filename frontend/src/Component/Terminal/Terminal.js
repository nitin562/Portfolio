import React from 'react'
import "./terminal.css"
import Circle from './Circle'
import CmdWorker from './CmdWorker'
export default function Terminal() {
  return (
    <div id="terminal">
      <p className='terminalHead'>--Terminal</p>
      <div className="cmd">
        <Circle/>
        <p>Welcome to my website: Get Started by typing 'help' command below</p>
        <CmdWorker/>
      </div>
    </div>
  )
}
