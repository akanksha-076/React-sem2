import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Bollywood from './Components/Bollywood'
import Hollywood from './Components/Hollywood'
import Technology from './Components/Technology'
import Fitness from './Components/Fitness'
import Food from './Components/Food'
import Details from './Components/Details'
import { ThemeContext } from './Context/ThemeContext'

const App = () => {
  const {theme} =useContext(ThemeContext)
  return (
    <>
    <div className={theme}>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/food" element={<Food />} />
          <Route path="/details/:id" element={<Details />}/>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}
export default App