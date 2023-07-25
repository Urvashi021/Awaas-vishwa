import React from 'react'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
        
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="header-left-brand">
            <img src={Logo} alt=" "/>
            <h2>Awaas-Vishwa</h2> 
          </Link>
        </div>
        <div className="header-right">
          <div className="header-right-login">
            <Link to = "/login"> Login</Link>
            <Link to = "/register"> Register</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
