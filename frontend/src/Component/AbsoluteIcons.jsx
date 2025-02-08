import React from 'react'
import { links } from '../links'

export default function AbsoluteIcons() {
    const download=async()=>{
        const response=await fetch(links.downloadResume)
        if(!response.ok){
          alert("Sorry!, Resume not Found")
        }
        const blob=await response.blob()
        const fileReader=new FileReader()
        fileReader.onload=(e)=>{
          
          let a=document.createElement("a")
          a.download="Resume_Nitin.pdf"
          a.href=e.target.result;
          a.click()

        }
        fileReader.readAsDataURL(blob)
    }
    const openMail=()=>{
      const mail="mailto:nitindbas8800@gmail.com"
      window.open(mail,"_blank")
    }
  return (
    <div className='fixed flex flex-col w-[3rem] bottom-[4.4rem] right-1 z-[30] gap-7 *:cursor-pointer'>
        <i class="fa-solid fa-arrow-down opacity-80 hover:opacity-100 text-white w-[3rem] h-[3rem] flex items-center justify-center text-[2rem] absoluteStyle rounded-full " onClick={download}></i>
        
        <i onClick={openMail} class="fa-solid fa-envelope opacity-80 hover:opacity-100 text-white w-[3rem] h-[3rem] flex items-center justify-center text-[2rem] bg-rose-500 rounded-full absoluteStyle"></i>
    </div>
  )
}
