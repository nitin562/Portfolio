import React from "react";
import "./proTile.css";
import { useNavigate } from "react-router-dom";
import { useCont } from "../Context/ContextProvider";
export default function ProjectTile({ name, idx,project }) {
  // skills can only 3 so give just 3 most important, rest will be on single page for project
  const nav = useNavigate();
  const cont = useCont();
  function generateRandomColor() {
    const hue = Math.floor(Math.random() * 360);

    // Set saturation and lightness for bright and harmonious colors
    const saturation = 70; // High saturation for vibrant colors
    const lightness = 70; // Bright colors, but not too light

    // Create HSL color string
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    // Apply the color to the background
    return color;
  }
  const { skills, url, Notes } = project;
  const GoToPage = () => {
    nav(`/${name}`, { state: { name: name } });
  };
  let style = {
    right: "-1.8rem",
  };
  if (idx % 2 == 0) {
    style = {
      left: "-1.8rem",
    };
  }
  return (
    <div className="relative w-[100vw] bg-[#130442] rounded-xl h-[80vw] md:w-[25rem] md:h-[20rem] group">
      <div className="w-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-[4] group-hover:w-full h-full absolute cover rounded-xl flex flex-col items-center overflow-hidden justify-center">
        <p className="group-hover:opacity-100 opacity-0 transition-all duration-500 p-2 w-full text-center font-[poppins]  text-[#ffffff]">
          {Notes[0]}
        </p>
        <div className="flex gap-2 flex-wrap justify-center items-center">
          {skills.slice(0,5).map((e, idxs) => {
            return (
              <span
                className="text-sm md:text-md p-2 rounded-lg text-[Quicksand] text-black font-semibold"
                style={{ backgroundColor: generateRandomColor() }}
                key={idxs}
              >
                {e}
              </span>
            );
          })}
        </div>
        <button
          className="mt-4 border-[1px] border-[#1cffff] w-[8rem] font-[poppins] italic text-lg md:text-[2rem] md:py-2 backdrop-blur-3xl hover:brightness-150 transition-all duration-500 text-[#1cffff]"
          onClick={GoToPage}
        >
          View
        </button>
      </div>
      <span
        className="opacity-0 top-[-1rem] group-hover:opacity-100 group-hover:top-[-2rem] transition-all duration-500 absolute text-white text-[5rem] z-[6] font-bold "
        style={style}
      >
        {idx <= 9 ? "0" + idx : idx}
      </span>
      <div className="img rounded-xl">
        <img src={url} />
      </div>
    </div>
  );
}
