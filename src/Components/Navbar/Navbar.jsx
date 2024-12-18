import React from 'react'
import logo from '../Assets/logo.png'
import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt="" />
        </div>
        <div className='nav-list'>
         <ul className="nav-menu">
            <li onClick={()=>{setMenu("Home")}}> <Link style={{textDecoration: 'none', color: '#000000'}} to='/' >Home</Link>{menu==="Home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("AboutUs")}}> <Link style={{textDecoration: 'none', color: '#000000'}} to='/Aboutus' >About us</Link> {menu==="AboutUs"?<hr/>:<></>}</li>
          </ul>
          <button>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar;