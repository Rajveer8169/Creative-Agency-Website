import React from 'react'

const ProjectCard = (props) => {

  return (
    <>
          <div className='lg:w-1/2 group h-full hover:rounded-4xl overflow-hidden transition-all relative'>
            <img className='h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125' src={props.image1}></img>
            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full group-hover:bg-black/50 flex justify-center items-center '>
              <h2 className='uppercase text-6xl font-[font1] border-4 rounded-full pt-4 px-4 text-white border-white'>View Project</h2>
            </div>
          </div>

          <div className='lg:w-1/2 group h-full hover:rounded-4xl overflow-hidden transition-all relative'>
            <img className='h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125' src={props.image2}></img>
            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full group-hover:bg-black/50 flex justify-center items-center '>
              <h2 className='uppercase text-6xl font-[font1] border-4 rounded-full pt-4 px-4 text-white border-white'>View Project</h2>
            </div>
          </div>
        
    </>
        
  )
}

export default ProjectCard