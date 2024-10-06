import React from "react";
import "./part.css";
import TitleHeader from "../../TitleHeader/TitleHeader";
import Icon from "../../homeIcon/Icon"
import { useCont } from "../../Context/ContextProvider";
export default function Participate() {
  const cont = useCont();
  return (
    <div id="part" className="scrollbar beforeTemplate before:bg-[url('../public/graphics/achieve.avif')] before:opacity-35 before:!fixed">
      <TitleHeader title="PARTICIPATIONS" />
      <div className="catalog">
        {cont.state.Participate.data.map((e, i) => {
          return (
            <div className="PartData codeData">
              <p className="Title">{e.title}</p>
              <div className="contRow">
                {e.img && <img src={e.img} alt="img" />}
                <div className="contCol">
                  <p className="Msg">{e.msg}</p>
                  {e.topic && (
                    <div className="view">
                      <p className="bg-[#521515] p-2 rounded-xl">{e.topic}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Icon/>
      
    </div>
  );
}
