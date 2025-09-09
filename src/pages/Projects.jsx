import React, { useContext } from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { NavColorContext } from '../context/Context'

const Projects = () => {
 

  const projects = [{
    image1:'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  },{
    image1:'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg'
  },{
    image1:'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  },{
    image1:'https://k72.ca/uploads/caseStudies/BEST/BEST_site_Thumbnail-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg'
  },{
    image1:'https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg'
  },{
    image1:'https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg'
  },{
    image1:'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  },{
    image1:'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg'
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
