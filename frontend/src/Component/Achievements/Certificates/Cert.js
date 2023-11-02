import React from 'react'
import TitleHeader from "../../TitleHeader/TitleHeader.js"
import "./cert.css"
import { useCont } from '../../Context/ContextProvider.js'
import Icon from '../../homeIcon/Icon.js'
export default function Cert() {
  const cont=useCont()

  return (
    <div id="Cert" className='scrollbar'>
        <TitleHeader title="CERTIFICATES"/>
        <div className="catalog">
          {cont.state.Cert.data.map((e,i)=>{
            return (
              <div key={i} className="codeData CertData">
                <p className="Title">{e.title}</p>
                {e.img&&<img src={e.img} alt="img" />}
                <p className="Msg">Crediential ID:{e.id}</p>
                {e.view&&<div className="view">
                  <p>{e.view}</p>
                  <a href={e.linkId} target='_blank'><p>here</p></a>
                </div>}
                {/* <div className="date"><i className="fa-regular fa-clock"></i><p>{getDate(e.date)}</p></div> */}
              </div>
            );
          })}
        </div>
        <Icon/>
    </div>
  )
}
