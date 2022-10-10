import React from 'react'
import "../styles/navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/toys">
            Toys
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar