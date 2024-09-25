import React from "react";

import TitleHeader from "../TitleHeader/TitleHeader";
import { useCont } from "../Context/ContextProvider";
import SkillClassified from "./SkillClassified";
import Mouse from "../MagicalComp/Mouse";

export default function Skills() {
  const cont = useCont();

  

  return (
    <div id="SkillSec">
      <TitleHeader title="Know My Skills" />
      <SkillClassified icon={<i className="fa-solid fa-microchip mr-2 text-emerald-300"></i>} name={"Technical Skills"} skill={cont.state.Skills.personal} />
      <SkillClassified icon={<i className="fa-solid fa-star mr-2 text-emerald-300"></i>} name={"Function Specific Skills"} skill={cont.state.Skills.specific} />
      <Mouse/>
    </div>
  );
}
