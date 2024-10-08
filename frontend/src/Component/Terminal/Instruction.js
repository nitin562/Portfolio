import React, { useEffect, useState, useRef } from "react";
import "./cmdworker.css";
import Response from "../Response";
import { useCont } from "../Context/ContextProvider";
export default function Instruction({
  command,
  response,
  enable,
  changeCurrent,
  changeInstruction,
  prevCommands,
}) {
const cont=useCont()

  const [commandLine, setcommandLine] = useState("");
  const textInput = useRef(0);
  const commandCount = useRef(-1);
  const [lastcommands, setlastcommands] = useState([]);
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
      if (e.code === "Enter" || e.code === "NumpadEnter" || e.code === "") {
        e.preventDefault();

        commandCount.current = lastcommands.length + 1;
        setlastcommands((prev) => {
          return [...prev, commandLine];
        });
    
        if (commandLine === "clear") {
          changeInstruction([]);
        }else if(commandLine==="t-skills"){
          let html=(<div className="Response">
              {cont.state.Skills.personal.map((e,idx)=>{
                return <p key={idx}>
                  <span>{e.icon} {e.name} - </span>{e.level}%
                </p>
              })}
            </div>)
            let data = {
              command: commandLine,
              response: html,
              enable: false,
            };
            changeInstruction((prev) => {
              return [...prev, data];
            });
        }
        else if(commandLine==="s-skills"){
          let html=(<div className="Response">
              {cont.state.Skills.specific.map((e,idx)=>{
                return <p key={idx}>
                  <span>{e.icon} {e.name} - </span>{e.level}% - {e.desc}
                </p>
              })}
            </div>)
            let data = {
              command: commandLine,
              response: html,
              enable: false,
            };
            changeInstruction((prev) => {
              return [...prev, data];
            });
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
      if (e.code === "ArrowUp" && commandCount.current > 0) {
        const cmd = lastcommands[commandCount.current - 1];
        setcommandLine(cmd);
        textInput.current.innerText = cmd;
        commandCount.current -= 1;
        setTimeout(() => {
          repositionCaret();
        }, 0);
      }
    };
    // Check if it's a mobile device
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    // Use keypress for mobile and keydown for desktop
    const eventType = isMobile ? "keypress" : "keydown";
    document.addEventListener(eventType, OnEnter);
    return () => {
      document.removeEventListener(eventType, OnEnter);
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
