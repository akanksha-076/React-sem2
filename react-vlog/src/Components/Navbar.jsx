import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bollywood">Bollywood</NavLink>
        <NavLink to="/hollywood">Hollywood</NavLink>
        <NavLink to="/technology">Technology</NavLink>
        <NavLink to="/fitness">Fitness</NavLink>
        <NavLink to="/food">Food</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar