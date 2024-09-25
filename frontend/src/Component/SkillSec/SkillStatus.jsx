import React from 'react'
import { useInView } from "react-intersection-observer";
import SkillCircle from './SkillCircle';
export default function SkillStatus({name,icon,level}) {
    const { ref: skillsRef, inView: skillsInView } = useInView({
        triggerOnce: false, // Animates only once
        threshold: 0.2, // Trigger when 20% of the element is visible
      });

  return (
    <div className=' bg-emerald-200/10 rounded-lg p-2 flex justify-between gap-2 items-center' ref={skillsRef}>
        <div className='flex text-sm md:text-xl font-[Quicksand] gap-2 items-center text-[#ffffff]'>
            <div className='text-[#45f3ff]'>{icon}</div>
            <p>{name}</p>
        </div>
        <div className='flex gap-2 items-center'>
            <SkillCircle pos={1} skillsInView={skillsInView} level={level}/>
            <SkillCircle pos={2} skillsInView={skillsInView} level={level}/>
            <SkillCircle pos={3} skillsInView={skillsInView} level={level}/>
            <SkillCircle pos={4} skillsInView={skillsInView} level={level}/>
            <SkillCircle pos={5} skillsInView={skillsInView} level={level}/>
        </div>
    </div>
  )
}
