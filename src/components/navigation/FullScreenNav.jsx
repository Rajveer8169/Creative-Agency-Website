import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import  { NavbarContext, NavColorContext } from '../../context/Context'


const FullScreenNav = () => {
    const fullnavref = useRef(null)
    const NavLinksRef = useRef(null)

    const [navOpen , setNavOpen] = useContext(NavbarContext)

   

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])

  return (
    <div ref={fullnavref} id='fullscreennav' className='text-white fullscreennav hidden overflow-x-hidden h-screen w-full absolute z-50 '>
    <div className='h-screen w-full fixed'>

        <div  className='h-full w-full flex'>
      <div className='stairing h-full w-1/5 bg-black'></div>
      <div className='stairing h-full w-1/5 bg-black'></div>
      <div className='stairing h-full w-1/5 bg-black'></div>
      <div className='stairing h-full w-1/5 bg-black'></div>
      <div className='stairing h-full w-1/5 bg-black'></div>
        </div>

    </div>
    <div ref={NavLinksRef} className='relative'>
         <div className='flex w-full justify-between p-5 items-start absolute navlink'>
        <div onClick={()=>{setNavOpen(false)}} className=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
            <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
        </svg>
        </div>
        <div onClick={()=>{setNavOpen(false)}} className='h-18 w-18' >
            <div className='h-30 w-1 origin-top -rotate-45 absolute bg-[#D3FD50]'></div>
            <div className='h-30 w-1 origin-top right-0 rotate-45 absolute bg-[#D3FD50]'></div>
        </div>
       
    </div>

        <div id='all-links' className='lg:py-20 py-50'>
            <div className='link lg:h-20 h-15 relative border-t-1 border-white'>

                <h1 className='font-[font2] lg:text-[8vw] text-[12vw] leading-[0.8] pt-3 text-center uppercase'>Projects</h1>
                
                <div className='movelink absolute flex top-0 bg-[#D3FD50] text-black'>
                    <div className='movex flex items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>See Everything</h2>
                    <img className='h-15 w-45 shrink-0 rounded-full object-cover' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg'></img>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>See Everything</h2>
                    <img className='h-15 w-45 shrink-0 rounded-full object-cover' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg'></img>
                    </div>
                    <div className='movex flex items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>See Everything</h2>
                    <img className='h-15 w-45 shrink-0 rounded-full object-cover' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg'></img>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>See Everything</h2>
                    <img className='h-15 w-45 shrink-0 rounded-full object-cover' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg'></img>
                    </div>
                </div>

            </div>
            <div className='link lg:h-20 h-15 relative border-t-1 border-white'>

                <h1 className='font-[font2] lg:text-[8vw] text-[12vw] leading-[0.8] pt-3 text-center uppercase'>Agence</h1>
                
                <div className='movelink absolute flex top-0 bg-[#D3FD50] text-black'>
                    <div className='movex flex items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>know us</h2>
                    <img className='h-15 w-45 shrink-0 rounded-full object-cover' src='https://k72.ca/uploads/teamMembers/CAMILLE_640X290_2-640x290.jpg'></img>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>know us</h2>
                    <img className='h-15 w-45 shrink-0 rounded-full object-cover' src='https://k72.ca/uploads/teamMembers/Carl_640X290-640x290.jpg'></img>
                    </div>
                    <div className='movex flex items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>know us</h2>
                    <img className='h-15 w-45 shrink-0 rounded-full object-cover' src='https://k72.ca/uploads/teamMembers/CAMILLE_640X290_2-640x290.jpg'></img>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>know us</h2>
                    <img className='h-15 w-45 shrink-0 rounded-full object-cover' src='https://k72.ca/uploads/teamMembers/Carl_640X290-640x290.jpg'></img>
                    </div>
                </div>

            </div>
            <div className='link relative lg:h-20 h-15 border-t-1 border-white'>

                <h1 className='font-[font2] lg:text-[8vw] text-[12vw] leading-[0.8] pt-3 text-center uppercase'>Contact</h1>
                
                <div className='movelink absolute flex top-0 bg-[#D3FD50] text-black'>
                    <div className='movex flex items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>send us a fax</h2>
                    <img className='h-15 w-40 shrink-0 rounded-full object-cover' src='https://www.pngmart.com/files/23/Black-Heart-Emoji-PNG-HD.png'></img>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>send us a fax</h2>
                    <img className='h-15 w-40 shrink-0 rounded-full object-cover' src='https://www.pngmart.com/files/23/Black-Heart-Emoji-PNG-HD.png'></img>
                    </div>
                    <div className='movex flex items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>send us a fax</h2>
                    <img className='h-15 w-40 shrink-0 rounded-full object-cover' src='https://www.pngmart.com/files/23/Black-Heart-Emoji-PNG-HD.png'></img>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>send us a fax</h2>
                    <img className='h-15 w-40 shrink-0 rounded-full object-cover' src='https://www.pngmart.com/files/23/Black-Heart-Emoji-PNG-HD.png'></img>
                    </div>
                </div>

            </div>
            <div className='link relative lg:h-20 h-15 border-t-1 border-b-1 border-white'>

                <h1 className='font-[font2] lg:text-[8vw] text-[12vw] leading-[0.8] pt-3 text-center uppercase'>Blog</h1>
                
                <div className='movelink absolute flex top-0 bg-[#D3FD50] text-black'>
                    <div className='movex flex items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>Read articles</h2>
                    <img className='h-15 w-45 shrink-0 rounded-full object-cover' src='https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif'></img>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>Read articles</h2>
                    <img className='h-15 w-45 shrink-0 rounded-full object-cover' src='https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png'></img>
                    </div>
                    <div className='movex flex items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>Read articles</h2>
                    <img className='h-15 w-45 shrink-0 rounded-full object-cover' src='https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif'></img>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-3 text-center uppercase'>Read articles</h2>
                    <img className='h-15 w-45 shrink-0 rounded-full object-cover' src='https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png'></img>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default FullScreenNav