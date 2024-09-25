import React from 'react'
import ProjectTile from './ProjectTile';
import "./project.css";
export default function ProjectClassify({name,projects,icon}) {
  console.log(projects)
  return (
    <div className="w-full p-6">
        <p className="text-xl p-2 font-[poppins] flex gap-2 items-center w-fit rounded-lg text-white">
        {icon}
          {name}
        </p>
        <div className="projectMenu justify-center lg:justify-start p-2 border-l-[1px] border-t-[1px] rounded-lg border-[#ff10ff65]">
          {Object.keys(projects).map((e, i) => {
            let val = projects[e];
            return <ProjectTile key={i} name={e} idx={i + 1} project={val} />;
          })}
        </div>
      </div>
  )
}
