import React from 'react'

export default function Mouse() {
  return (
    <div className='flex flex-col justify-center items-center gap-2 *:drop-shadow-[0_0_0.8rem_#fff] overflow-hidden'>
        
        <div className='flex flex-col gap-1 '>
        <div className='w-1 rounded-full h-2 bg-emerald-500'></div>
        <div className='w-1 rounded-full h-2 bg-emerald-500'></div>
        <div className='w-1 rounded-full h-2 bg-emerald-500'></div>
        <div className='w-1 rounded-full h-2 bg-emerald-500'></div>
        <div className='w-1 rounded-full h-2 bg-emerald-500'></div>
        </div>
        <i className="fa-solid fa-computer-mouse text-3xl rotate-180 text-emerald-400 mb-2"></i>
    </div>
  )
}
