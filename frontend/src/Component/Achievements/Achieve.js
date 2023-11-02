import React from 'react'
import "./achieve.css"
import TitleHeader from "../TitleHeader/TitleHeader"
import { useNavigate } from 'react-router-dom'
import { useCont } from '../Context/ContextProvider'
export default function Achieve() {
  const nav=useNavigate()
  const cont=useCont()
  return (
    <div id='Achieve' ref={cont.state.references["Achievements"]}>
        <TitleHeader title="Achievements"/>
        <div className="A_list">
            {/* A_list=Achievement List */}
            <div className="Coding" onClick={()=>nav("/Coding")}>
               <p>Coding</p>
            </div>
            <div className="Certification" onClick={()=>nav("/Certificates")}>
              <p>Certifications</p>
            </div>
            <div className="participation" onClick={()=>nav("/Participate")}>
              <p>Participations</p>
            </div>
        </div>
    </div>
  )
}
