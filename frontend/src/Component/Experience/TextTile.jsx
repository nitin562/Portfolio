import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function TextTile({name,alias,className="",desc=null}) {
    const [color, setcolor] = useState("#fff")
    const nav=useNavigate()
    function generateRandomColor() {
        const hue = Math.floor(Math.random() * 360);
    
        // Set saturation and lightness for bright and harmonious colors
        const saturation = 70; // High saturation for vibrant colors
        const lightness = 70; // Bright colors, but not too light
    
        // Create HSL color string
        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    
        // Apply the color to the background
        setcolor(color)
      }
      useEffect(()=>{
        generateRandomColor()
      },[])
      const GoToPage = () => {
        if(!desc){
          return
        }
        nav(`/${alias}`, { state: { name: alias } });
      };
  return (
    <span title={desc||""} onClick={GoToPage} className={'ml-2 p-1 px-3 hover:brightness-125 cursor-pointer transition-all duration-200 min-w-8 text-md border-[2px] rounded-md '+className} style={{borderColor:color,color}}>{name}</span>
  )
}
