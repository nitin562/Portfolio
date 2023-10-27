import React from 'react'
import "./proTile.css"
import { useNavigate } from 'react-router-dom'
import { useCont } from '../Context/ContextProvider'
export default function ProjectTile({name}) {
// skills can only 3 so give just 3 most important, rest will be on single page for project
  const nav=useNavigate()
  const cont=useCont()
  const{skills,url}=cont.state.projectData[name]
  const GoToPage=()=>{
    nav(`/${name}`,{state:{name:name}})
  }
  return (
    <div id="ProTile" onClick={GoToPage}>
        <div className="skills">
          <span>{skills[0]}</span>
          <span>{skills[1]}</span>
          <span>{skills[2]}</span>
        </div>
        <div className="img">
          <img src={url} />
        </div>
        <p className="Pname">{name}</p>
    </div>
  )
}
