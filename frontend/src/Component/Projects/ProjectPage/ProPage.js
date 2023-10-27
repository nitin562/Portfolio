import React from 'react'
import "./page.css"
import { useLocation } from 'react-router-dom'
import { useCont } from '../../Context/ContextProvider'
import TitleHeader from '../../TitleHeader/TitleHeader'
import PImg from './PImg'
export default function ProPage() {
  const {state} =useLocation()
  const cont=useCont()
  const{skills,url,Notes,code,video,deploy}=cont.state.projectData[state.name]
  return (
    <div id="ProPage" className='scrollbar'>
      <TitleHeader title={state.name}/>
      <div className="info">
        <PImg url={url} code={code} video={video} deploy={deploy} />
        <div className="Notes">
          {Notes.map((e,k)=>{
            return <p className='note' key={k}>{e}</p>
          })}        
        </div>
      </div>
    </div>
  )
}
