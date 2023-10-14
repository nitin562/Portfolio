import React, { useEffect, useState, useRef } from "react";
import "./cmdworker.css";
import Response from "./Response";
export default function Instruction({
  command,
  response,
  enable,
  changeCurrent,
  changeInstruction,
  prevCommands,
}) {
  const [commandLine, setcommandLine] = useState("");
  const commandElement = useRef(0);
  const commandCount = useRef(-1);
  const [lastcommands, setlastcommands] = useState([]);
  const HandleCommandState = (e) => {
    console.log(e.target.value, commandLine);
    setcommandLine(e.target.value);
  };
  const OnEnter = async (e) => {
    commandCount.current = lastcommands.length + 1;
    setlastcommands((prev) => {
      return [...prev, commandLine];
    });

    if (commandLine === "clear") {
      changeInstruction([]);
    } else {
      console.log("command", commandLine);
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
  };
  const RepositionCaret = () => {
    let element = commandElement.current;

    console.log(element, element.value.length, element.value);
    element.selectionStart = element.selectionEnd = element.value.length;
    element.focus();
  };
  const ArrowUp = (e) => {
    if (enable === false) {
      return;
    }
    if (e.code === "ArrowUp" && commandCount.current > 0) {
      commandElement.current.blur();
      const commandIndex = commandCount.current - 1;
      const cmd = lastcommands[commandIndex];
      commandElement.current.value = cmd;
      setcommandLine(cmd);
      commandCount.current--;
    } else if (
      e.code === "ArrowDown" &&
      commandCount.current < lastcommands.length
    ) {
      const commandIndex = commandCount.current + 1;
      commandCount.current++;
      if (commandIndex === lastcommands.length) {
        commandElement.current.value = "";
        setcommandLine("");
        return;
      }
      const cmd = lastcommands[commandIndex];
      commandElement.current.value = cmd;
      setcommandLine(cmd);
    } else {
      return;
    }
    // RepositionCaret();
    setTimeout(() => { //it makes the function call after the current event cycle finished. So all renders and updates will  happen and then RepositionCaret will invoke
      RepositionCaret();
    }, 0);
  };
  useEffect(() => {
    document.addEventListener("keydown", ArrowUp);
    return () => {
      document.removeEventListener("keydown", ArrowUp);
    };
  }, [lastcommands]);
  const FocusingToInput = (e) => {
    if (e.target.closest(".cmd") !== null) {
      console.log(commandElement.current);
      commandElement.current.focus();
    }
  };
  useEffect(() => {
    document.addEventListener("click", FocusingToInput);
    return () => {
      document.removeEventListener("click", FocusingToInput);
    };
  }, []);
  return (
    <div id="Instruct">
      <p>$ nitindb-dev &gt;&gt;</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          OnEnter(e);
        }}
      >
        <input
          ref={commandElement}
          id="Command"
          type="text"
          value={command ? command : commandLine}
          disabled={!enable}
          onChange={HandleCommandState}
          autoComplete="off"
          autoCorrect="off"
        />
      </form>
      {response && <div className="Response">{response}</div>}
    </div>
  );
}
