import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Bollywood from './Components/Bollywood'
import Hollywood from './Components/Hollywood'
import Technology from './Components/Technology'
import Fitness from './Components/Fitness'
import Food from './Components/Food'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App