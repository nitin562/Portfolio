import React from 'react'
import "./project.css"
import TitleHeader from "../TitleHeader/TitleHeader"
import ProjectTile from './ProjectTile'
export default function Projects() {
  return (
    <div id="project">
        <TitleHeader title="Projects"/>
        <div className="projectMenu">
            <ProjectTile url={require("./ProjctImg/SnakeImg.jpg")} name="SnakeGame" skills={["HTML","CSS","JS"]}/>
            {/* <ProjectTile/>
            <ProjectTile/>
            <ProjectTile/>
            <ProjectTile/> */}

        </div>
    </div>
  )
}
