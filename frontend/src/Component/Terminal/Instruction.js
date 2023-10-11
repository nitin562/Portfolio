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
    
    setcommandLine(e.target.innerText);
  };
  const repositionCaret = () => {
    const textNode = textInput.current.firstChild;
  
    // Create a range and set the start and end offsets to the end of the text node
    const range = document.createRange();
    range.setStart(textNode, textNode.length);
    range.setEnd(textNode, textNode.length);
  
    // Collapse the range to the end
    range.collapse(false);
  
    // Set the selection to the created range
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  
    // Focus the contentEditable div
    textInput.current.focus();
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
        textInput.current.innerText = "";
      }
      if(e.code==="ArrowUp" && commandCount.current>0 ){
        console.log(lastcommands,commandCount.current)
        const cmd=lastcommands[commandCount.current-1]
        setcommandLine(cmd)
        textInput.current.innerText=cmd
        repositionCaret()
        commandCount.current-=1
      }
      
    };
    document.addEventListener("keydown", OnEnter);
    return () => {
      document.removeEventListener("keydown", OnEnter);
    };
  }, [textInput.current.innerText]);
  return (
    <div id="Instruct">
      <p>$ nitindb-dev &gt;&gt;</p>
      <div
        className="InputDiv"
        ref={textInput}
        onInput={OnInput}
        contentEditable={enable}
        suppressContentEditableWarning={true}
      >
        {command ? command : ""}
      </div>
      {response && <div className="Response">{response}</div>}
    </div>
  );
}
