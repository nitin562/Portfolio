import React from 'react'
import "./skill.css"
import TitleHeader from '../TitleHeader/TitleHeader'
import { useCont } from '../Context/ContextProvider'
export default function Skills() {
    const cont=useCont()
  return (
    
    <div id="SkillSec">
        <TitleHeader title="Know My Skills"/>
        <div className="skillCont">
            {
                cont.state.Skills.map((e,i)=>{
                   return <p key={i}>{e}</p>
                })
            }

        </div>
    </div>
  )
}
