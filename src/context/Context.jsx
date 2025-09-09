import React, { createContext, useState } from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export const NavbarContext = createContext();
export const NavColorContext = createContext();

const NavContext = ({children}) => {
    
    const [navOpen ,setNavOpen] = useState(false)
    const [navColor, setnavColor] = useState('white')
    const locate = useLocation().pathname
    useEffect(function(){
      if(locate == '/Projects' || locate == '/Agence'){
        setnavColor('black')
      }else{
        setnavColor('white')
      }
    },[locate])
  return (
    <div>
    <NavbarContext.Provider value={[navOpen ,setNavOpen]}>
         <NavColorContext.Provider value={[navColor,setnavColor]}>
          {children}
         </NavColorContext.Provider>
    </NavbarContext.Provider>
    </div>
  )
}

export default NavContext;