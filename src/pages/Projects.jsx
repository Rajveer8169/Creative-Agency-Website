import React, { useContext } from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { NavColorContext } from '../context/Context'

const Projects = () => {
 

  const projects = [{
    image1:'/project_pics/bag.jpg',
    image2:'/project_pics/pic2.jpg'
  },{
    image1:'/project_pics/pic3.jpg',
    image2:'/project_pics/pic4.jpg'
  },{
    image1:'/project_pics/pic5.jpg',
    image2:'/project_pics/pic6.jpg'
  },{
    image1:'/project_pics/pic7.jpg',
    image2:'/project_pics/pic8.jpg'
  },{
    image1:'/project_pics/pic9.jpg',
    image2:'/project_pics/pic10.jpg'
  },{
    image1:'/project_pics/pic11.jpg',
    image2:'/project_pics/pic12.jpg'
  },{
    image1:'/project_pics/pic13.jpg',
    image2:'/project_pics/pic14.jpg'
  },{
    image1:'/project_pics/pic15.jpg',
    image2:'/project_pics/pic16.jpg'
  }]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from('.hero',{
      height:0,
      stagger:{
        amount:0.5
      },
      scrollTrigger:{
        trigger:'.lol',
        // markers:true,
        start:'top 100%',
        end:'top -150%',
        scrub:true
      }
    })
  })

  return (
    <div className='lg:p-3 p-2'>
      <div className=' pt-[45vh]'>
      <h2 className='font-[font2] uppercase lg:text-[9.5vw] text-6xl leading-[0.8]'>Projects</h2>
      </div>

      <div className='lol'> 
        {projects.map(function(elm , idx){
          return <div key={idx} className='hero w-full lg:h-[350px] h-[400px] flex lg:flex-row flex-col gap-2 mb-2' ><ProjectCard image1={elm.image1} image2={elm.image2}/></div>
        })}
      </div>

  

    </div>
  )
}

export default Projects
