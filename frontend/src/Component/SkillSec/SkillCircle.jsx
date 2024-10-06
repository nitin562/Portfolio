import React, { useEffect, useState } from 'react'

export default function SkillCircle({pos,skillsInView,level}) {
    let cal=0.05*level
    const [fill, setFill] = useState(0)
    useEffect(()=>{
        if(!skillsInView){
            setFill(0)
        }
        else{
            if(cal>=pos){
                setFill("100%")
            }
            else{
                if((pos-1<cal) && (pos>cal)){
                    setFill(`${Math.abs(pos-1-cal)*100}%`)
                }
            }
        }
    },[skillsInView])
  return (
    <div className="md:w-5 md:h-5 w-2 h-2 overflow-hidden rounded-full ">
        <div className='w-0 h-full  drop-shadow-[0_0_0.1rem_#21ff899c] bg-[#21ff899c] transition-all duration-200' style={{width:fill}}></div>
    </div>
  )
}
