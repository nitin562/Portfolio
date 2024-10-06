import React from "react";

export default function SkillCard({ skill, icon, desc }) {
  return (
    <div className="flex flex-col justify-center items-center p-2 mx-2 min-h-[12rem] gap-4 bg-[#000000] beforeTemplate before:bg-[url('../public/graphics/skillcard.jpeg')] before:opacity-60">
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <div className="*:text-[1.8rem] md:*:text-[3rem]  text-emerald-400 brightness-110">
          {icon}
        </div>
        <p className="text-md md:text-xl text-center font-[poppins] text-blue-50 font-bold">
          {skill}
        </p>
        <div className="w-[65%] bg-pink-800 h-[1px]"></div>
      </div>
      {desc && (
        <p className="h-[3rem] p-2 text-[#000000] bg-[#f7e46a] flex justify-center items-center rounded-lg w-full  text-[1rem] text-center font-[Ubuntu] font-semibold">
          {desc}
        </p>
      )}
    </div>
  );
}
