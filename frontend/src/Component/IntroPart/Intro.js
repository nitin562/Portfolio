import React from 'react'
import "./intro.css"

export default function Intro() {
  return (
    <div id="Intro">
        <div className="head">
            <span className='flex items-center gap-4'>--Hello!
              <img src="/wave.gif" className='rounded-full w-10 h-10'/>
            </span>
            <p>I'm Nitin Dabas</p>
        </div>
        <div className="Introduce">
            <p>
                Hey there! My name is Nitin Dabas. I'm a full-stack web developer and software engineer who thinks getting better at what you do is the only correct way to succeed. I'm fresh to the tech world right now, but I'm always eager to try new things and learn new things.
            </p>
        </div>
        
    </div>
  )
}
