import React, { useState } from 'react'

function Service() {
    const [animation, setAnimation] =useState()
    const move = () => {
      setAnimation(window.scrollY)
    }
    window.addEventListener("scroll", move)
  return (
    
    <div className= {` h-[50vh] w-[100%] flex justify-center items-center  bg-[#F5F5F5] gap-6`}>
        <div className={`${animation>2520 && 'slid-1'} h-[50vh] w-[100%] flex justify-center items-center gap-6`} >
     
        <div className='ser h-[40vh] w-[20%] bg-white flex flex-col justify-center items-center gap-2 rounded-lg'>
            <label className='text-[blue]'><i  class="fa fa-star-half-o text-[55px]" aria-hidden="true"></i></label>
            <label className='service-1 text-[20px] font-bold'>QUALITY AND SAVING</label>
            <label className='w-[85%]'>Comprehensive quality control and affordable prices</label>

        </div>
        <div className='ser h-[40vh] w-[20%] bg-white flex flex-col justify-center items-center gap-2 rounded-lg'>
            <label className='text-[blue]'><i class="fa fa-truck text-[55px]" aria-hidden="true"></i></label>
            <label className='service-1 text-[20px] font-bold'>QUALITY AND SAVING</label>
            <label className='w-[85%]'>Comprehensive quality control and affordable prices</label>

        </div>
        <div className='ser h-[40vh] w-[20%] bg-white flex flex-col justify-center items-center gap-2 rounded-lg'>
            <label className='text-[blue]'><i  class="fa fa-shield text-[55px]" aria-hidden="true"></i></label>
            <label className='service-1 text-[20px] font-bold'>QUALITY AND SAVING</label>
            <label className='w-[85%]'>Comprehensive quality control and affordable prices</label>

        </div>
        <div className='ser h-[40vh] w-[20%] bg-white flex flex-col justify-center items-center gap-2 rounded-lg'>
            <label className='text-[blue]'><i  class="fa fa-question-circle text-[55px]" aria-hidden="true"></i></label>
            <label className='service-1 text-[20px] font-bold'>QUALITY AND SAVING</label>
            <label className='w-[85%]'>Comprehensive quality control and affordable prices</label>

        </div>
        </div>
        
    </div>
  )
}

export default Service