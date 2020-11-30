import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
             <NavLink to="/" ><h3>Home</h3></NavLink>
             <NavLink to="/about" ><h3>About</h3></NavLink>
        </div>
    )
}
