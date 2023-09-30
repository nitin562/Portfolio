import React from 'react'
import './home.css'
import Nav from '../NavBar/Nav'
import Introduction from '../Intro/Introduction'
export default function Home() {
  return (
    <div className='HomeView'>
        <Nav/>
        <Introduction/>
    </div>
  )
}
