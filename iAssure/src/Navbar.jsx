import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    
    
    <header>
      
      <div className="logo">LOGO</div>
    <div className="display-menu">
        <Link className='menu' to={"/"}>HOME</Link>
        <Link className='menu' to={"/about"}>ABOUT US</Link>
        <Link className='menu' to={"/services"}>SERVICES</Link>
        <Link className='menu' to={"/testimonials"}>TESTIMONIALS</Link>
        <Link className='menu' to={"/blogs"}>BLOGS</Link>
        <Link className='menu' to={"/contact"}>CONTACT</Link>

    </div>
    </header>
  )
}

export default Navbar
