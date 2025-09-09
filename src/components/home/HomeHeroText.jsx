import React from 'react'
import Video from './video'

const HomeHeroText = () => { 
  return (
    <div className='font-[font1] lg:mt-0 mt-50 pt-5 text-center'>
      <div className='lg:text-[8vw] text-[12vw]  flex items-center justify-center uppercase text-white lg:leading-[8vw] leading-[10vw]'>the spark for</div>
      <div className='lg:text-[8vw] text-[12vw]  flex items-center justify-center uppercase text-white lg:leading-[8vw] leading-[10vw]'>all<div className='w-[18vw] h-[8vw] rounded-full overflow-hidden'><Video/></div>things</div>
      <div className='lg:text-[8vw] text-[12vw]  flex items-center justify-center uppercase text-white lg:leading-[8vw] leading-[10vw]'>creative</div>
    </div>
  )
}

export default HomeHeroText