import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about-me">About me</NavLink>
    <NavLink to="/experience">Experience</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    </div>
  )
}
