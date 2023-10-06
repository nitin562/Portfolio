import React from 'react'
import './home.css'
import Nav from './Nav/Nav'
import Frame from './CodingFrame/Frame'
export default function Home() {
  return (
    <div id='Home'>
        <Nav/>
        <div className="IntroLine">
          <Frame/>
        </div>
        
    </div>
  )
}
