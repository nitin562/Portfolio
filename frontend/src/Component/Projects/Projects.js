import React from "react";
import "./project.css";
import TitleHeader from "../TitleHeader/TitleHeader";
import ProjectTile from "./ProjectTile";
import { useCont } from "../Context/ContextProvider";
import ProjectClassify from "./ProjectClassify";
export default function Projects() {
  const cont = useCont();
  const projects = cont.state.projectData;
  const internship=cont.state.InternshipProjects
 
  return (
    <div id="project" ref={cont.state.references["Projects"]}>
      <TitleHeader title="Projects" />
      <ProjectClassify name="Internship Projects" icon={<i className="fa-solid fa-building"></i>} projects={internship} />
      <ProjectClassify name="Personal Projects" icon={<i className="fa-solid fa-user text-emerald-400"></i>} projects={projects} />
    </div>
  );
}
