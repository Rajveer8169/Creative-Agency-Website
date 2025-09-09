import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='hover:border-green-400 font-[font-2] flex items-center justify-center gap-5' >
    <p className='absolute lg:w-80 w-70 text-white right-0 lg:bottom-25 bottom-20 '>K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>

    <div className='text-white uppercase lg:h-20 h-10 border-4 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-7'>
      <Link className='lg:text-[5vw] text-2xl' to='/Projects'>Projects</Link>
    </div>

   <div className='text-white uppercase lg:h-20 h-10 border-4 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-7'>
     <Link className='lg:text-[5vw] text-2xl' to='/Agence'>Agence</Link>
   </div>

    </div>
  )
}
export default HomeBottomText