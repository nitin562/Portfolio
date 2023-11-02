import React from 'react'
import "./project.css"
import TitleHeader from "../TitleHeader/TitleHeader"
import ProjectTile from './ProjectTile'
import { useCont } from '../Context/ContextProvider'
export default function Projects() {
  const cont=useCont()
  const projects=cont.state.projectData
  return (
    <div id="project" ref={cont.state.references["Projects"]}>
        <TitleHeader title="Projects"/>
        <div className="projectMenu">
            {/* <ProjectTile/>
            <ProjectTile/>
            <ProjectTile/>
            <ProjectTile/> */}
            {
              Object.keys(projects).map((e,i)=>{
                let val=projects[e]
                return <ProjectTile key={i} name={e}/>
              })
            }

        </div>
    </div>
  )
}
