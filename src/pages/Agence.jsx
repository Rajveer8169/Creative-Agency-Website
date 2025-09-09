import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  const imageArray = [
  '/team/Carl.jpg',
  '/team/Oliver.jpg',
  '/team/Lawrence.jpg',
  '/team/HugoJoseph.jpg',
  '/team/ChantalG.jpg',
  '/team/MyleneS.jpg',
  '/team/SophieA.jpg',
  '/team/Claire.jpg',
  '/team/Michele.jpg',
  '/team/MEL.jpg',
  '/team/CAMILLE.jpg',
  '/team/MAXIME.jpg',
  '/team/MEGGIE.jpg',
  '/team/Joel.jpg'
];


useGSAP(() => {
  gsap.to(imageDivRef.current, {
    scrollTrigger: {
      trigger: imageDivRef.current,
      start: 'top 5%',
      end: 'bottom -140%',
      pin: true,
      pinSpacing: true,
      pinReparent: true,
      pinType: 'transform',
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (elem) => {
        // safe index calculation
        let imageIndex = Math.min(
          Math.floor(elem.progress * imageArray.length),
          imageArray.length - 1
        );
        imageRef.current.src = imageArray[imageIndex];
      }
    }
  });
});

  return (
    <div className='overflow-visible'>
         <div className='section1 py-1'>
   <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:top-20 left-[30vw]'>
    <img ref={imageRef} className='h-full w-full object-cover' src='https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg'></img>
   </div>
     <div className='relative font-[font2]'>
      <div className='lg:mt-[55vh] mt-[25vh]'>
        <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>Soixan7e<br/>
Douze</h1>
      </div>
      <div className='lg:pl-[40%] p-3 lg:mt-20 mt-4'>
        <p className='lg:text-4xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div>
   </div>
   <div className='section2'>
   </div>
    </div>
  )
}

export default Agence
