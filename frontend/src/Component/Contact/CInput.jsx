import React from "react";

export default function CInput({
  icon,
  className = "",
  input = true,
  placeholder,
  tag,
  state,
  change,
  type = "text",
  error=null,
  name
}) {
  return (
    <div className={`flex flex-col gap-2 w-full *:transition-all *:duration-200 group ${className}`}>
      <div
        className={`w-full cursor-pointer relative border-[1px] border-[#04fefc] rounded-md p-2 pt-4   group-hover:border-[#fff]`}
      >
        {input && (
          <input
            value={state}
            onChange={change}
            type={type}
            className={`py-1 w-full text-2xl  outline-none   bg-transparent text-white font-[Quicksand] `}
            placeholder={placeholder}
          ></input>
        )}
        {!input && (
          <textarea
            value={state}
            onChange={change}
            type={type}
            className={`py-1 w-full resize-none text-2xl  outline-none   bg-transparent text-white font-[Quicksand]`}
            placeholder={placeholder}
            rows={3}
          ></textarea>
        )}
        <span className="absolute -top-4 left-10 border-[1px] border-[#04fefc] text-md backdrop-blur-lg text-[#d5fff7] z-10 px-2 rounded-lg font-[poppins] group-hover:border-[#fff] group-hover:text-[#fff] bg-[#185e5e6a] flex items-center gap-4">
          <i className={`${icon}  text-lg text-[#04fefc]`}></i>
          {tag}
        </span>
      </div>

      {/* error span */}
      {<span className="text-md min-h-[2rem]  text-wrap text-red-500">{error[name]?.msg||""}</span>}
    </div>
  );
}
