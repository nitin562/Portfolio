import React, { useState } from 'react'
import "./edu.css"
import EduTile from './EduTile'
import { useCont } from '../Context/ContextProvider'
import TitleHeader from '../TitleHeader/TitleHeader'
export default function Edu() {
  // this will hold if another education section is toogled up or not
  // to make sure only one toogle is at time, rest must be toogle down
  const [secondToogle, setsecondToogle] = useState("")
  const context=useCont()
  return (
    <div id="edu" ref={context.state.references["Education"]}>
        <div className="eduFlex">
          <TitleHeader title="Education"/>
           
            <div className="eduCont">
                <EduTile key="1" title="Under Graduation" restToogle={secondToogle} changeRestToogle={setsecondToogle}/>
                <EduTile key="2" title="Class 12th" restToogle={secondToogle} changeRestToogle={setsecondToogle}/>
                <EduTile key="3" title="Class 10th" restToogle={secondToogle} changeRestToogle={setsecondToogle}/>
            </div>
        </div>
    </div>
  )
}
