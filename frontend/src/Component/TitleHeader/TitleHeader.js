import React from 'react'
import "./title.css"
export default function TitleHeader({title,ref=null}) {
  return (
    <div className="title"><span>{title}</span></div>
   
  )
}
