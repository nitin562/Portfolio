import React from "react";
import TitleHeader from "../TitleHeader/TitleHeader";
import TextTile from "./TextTile";
import { useCont } from "../Context/ContextProvider";
export default function Exp() {
  const cont = useCont();
  const experience = cont.state.experience;
  const ref=cont.state.references.Experience
  return (
    <div className="w-full" ref={ref}>
      <TitleHeader title={"Experience"} />
      <div className="w-full p-2 mb-4">
        <div className="w-full flex flex-col  lg:w-3/4 m-auto ">
          {experience &&
            experience.map((exp, idx) => {
              return (
                <div key={idx} className=" relative overflow-hidden py-4 flex gap-4 ">
                  <div className=" h-inherit relative ">
                    <div className="flex gap-2 items-center">
                      <div className="clippy  font-[Ubuntu] font-bold text-center text-sm md:text-2xl pl-2 pr-3 bg-gray-500 text-[#ffdeec]">
                        {exp.year}
                      </div>
                      <div className="w-4 h-4 p-2 rounded-full shadow-[0_0_15px_5px_#fe9a47] bg-[#fe9a47]"></div>
                    </div>
                    <div className=" w-[1px] absolute h-full top-7 right-2 flex-1 bg-white"></div>
                  </div>
                  <div className="flex flex-col min-h-10 *:text-wrap ">
                    <div className="text-white flex flex-wrap gap-2 items-center mb-2 font-[Poppins] font-semibold text-2xl md:text-3xl">
                      {exp.heading}
                      <TextTile name={exp.type} className="text-sm cursor-default" />
                    </div>
                    <p className="text-xl md:text-2xl text-[#e3e7ed] font-[Ubuntu] hover:text-[#eea6f9] transition-all duration-200">
                      {exp.address}
                    </p>
                    <p className="text-emerald-300 italic text-[Philospher] leading-none m-0 text-md md:text-lg">
                      {exp.time}
                    </p>
                    <p className="mt-2 text-gray-400 text-sm md:text-md text-[Ubuntu]">
                      {exp.desc}
                    </p>

                    <div className=" p-2 w-full bg-[#1d395a77] mt-3 flex items-center flex-wrap gap-2">
                      <div className="w-full mt-2 flex items-center gap-2 font-[poppins] text-[#d0ff16] text-sm">
                        View Projects{" "}
                        <div className="flex-1 h-[1px] bg-[#74faff]"></div>
                      </div>
                      {exp.projects.map((e,id)=>{
                        return <TextTile key={id} name= {e.name} alias={e.alias}desc={e.desc} />
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
