import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <nav className="navbar">
    <NavLink className="navbar-link" to="/">
      home
    </NavLink>
    <NavLink className="navbar-link" to="/new">
      new
    </NavLink>
    <NavLink className="navbar-link" to="/submit">
      submit
    </NavLink>
  </nav>
)

export default Navbar
