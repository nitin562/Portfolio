import React, { useEffect, useState, useRef } from "react";
import "./cmdworker.css";
import Response from "./Response";
export default function Instruction({
  command,
  response,
  enable,
  changeCurrent,
  changeInstruction,
  prevCommands
}) {
  const [commandLine, setcommandLine] = useState("");
  const textInput = useRef(0);
  const commandCount=useRef(-1)
  const [lastcommands, setlastcommands] = useState([])
  const OnInput = (e) => {
    
    setcommandLine(e.target.textContent);
  };
  useEffect(() => {
    if (enable === false) {
      return;
    }
    const OnEnter = async (e) => {
      console.log(e.code)
      if (e.code === "Enter" || e.code === "NumpadEnter" || e.code === "") {
        e.preventDefault();
        commandCount.current=lastcommands.length+1;
        setlastcommands((prev)=>{return [...prev,commandLine]})
        if (commandLine === "clear") {
          changeInstruction([]);
        } else {
          let data = {
            command: commandLine,
            response: await Response(commandLine),
            enable: false,
          };
          changeInstruction((prev) => {
            return [...prev, data];
          });
        }
        setcommandLine("");
        textInput.current.textContent = "";
      }
      if(e.code==="ArrowUp" && commandCount.current>0 ){
        console.log(lastcommands,commandCount.current)
        const cmd=lastcommands[commandCount.current-1]
        setcommandLine(cmd)
        textInput.current.innerHTML=cmd
        commandCount.current-=1
      }
      
    };
    document.addEventListener("keydown", OnEnter);
    return () => {
      document.removeEventListener("keydown", OnEnter);
    };
  }, [textInput.current.textContent]);
  return (
    <div id="Instruct">
      <p>$ nitindb-dev &gt;&gt;</p>
      <div
        className="InputDiv"
        ref={textInput}
        onInput={OnInput}
        contentEditable={enable}
        suppressContentEditableWarning={true}
        autoFocus={true}
      >
        {command ? command : ""}
      </div>
      {response && <div className="Response">{response}</div>}
    </div>
  );
}
