import React from "react";
import "./coding.css";
import TitleHeader from "../../TitleHeader/TitleHeader";
import { useCont } from "../../Context/ContextProvider";
import Icon from "../../homeIcon/Icon";
export default function Coding() {
  const cont = useCont();
  console.log(cont.state.Coding.data);
  const getDate=(d)=>{
    const data=new Date(d)
    return data.toDateString()
  }
  return (
    <div id="Coding" className="scrollbar">
      <TitleHeader title="CODING" />
      {cont.state.Coding.data.map((e, i) => {
        return (
          <div className="codeData">
            <p className="Title">{e.title}</p>
            <p className="Msg">{e.Msg}</p>
            {e.view&&<div className="view">
              <p>{e.view}</p>
              <a href={e.link} target="_blank">here</a>
            </div>}
            <div className="date"><i className="fa-regular fa-clock"></i><p>{getDate(e.date)}</p></div>
          </div>
        );
      })}
      <Icon/>
    </div>
  );
}
