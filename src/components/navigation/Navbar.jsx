import React, { useContext, useRef, useState } from 'react'
import FullScreenNav from './FullScreenNav';
import NavContext, { NavbarContext, NavColorContext } from '../../context/Context';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const greenRef = useRef(null);
  const [navOpen,setNavOpen]=useContext(NavbarContext)
  const [navColor , setnavColor] = useContext(NavColorContext)

  

  return (
    <div className="z-4 flex h-12 fixed top-0 w-full items-start justify-between">
      <Link to='/'><div className="lg:p-3 p-2">
       <div className='lg:w-30 w-25 '>
         <svg className='w-full'
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 103 44"
        >
          <path
            fill={navColor}
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
        </svg>
       </div>
      </div></Link>

      {/* 👇 Hide this div if we are already on /Nav */}
     
        <div
        

          onMouseEnter={() => {
            greenRef.current.style.height = "100%";
            document.body.style.overflow = "hidden"; // disable scroll
          }}
          onMouseLeave={() => {
            greenRef.current.style.height = "0%";
            document.body.style.overflow = "auto"; // re-enable scroll
          }}
           onClick={() => setNavOpen(true)}
          className="bg-black lg:h-12 h-10 lg:w-[17vw] w-45 overflow-hidden"
        >
          <div
            ref={greenRef}
            className="bg-[#D3FD50] transition-all absolute top-0 w-full"
          ></div>
            <div  className="relative h-full flex flex-col gap-2 items-end justify-center px-12">
              <div className="w-20 h-0.5 bg-white"></div>
              <div className="w-12 h-0.5 bg-white"></div>
            </div>
          
        </div>
    </div>
  );
};

export default Navbar;
