import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agence from './pages/Agence'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'

function App() {

  return (
    <div>
    <Navbar/>
    <FullScreenNav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Agence' element={<Agence/>}/>
    </Routes>
    </div>
  )
}

export default App
