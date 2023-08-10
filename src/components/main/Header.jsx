import React, { useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const {userInfo, setUserInfo} = React.useContext(UserContext)

  const logoutUser = () => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/logout`, {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null);
  }
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/profile`, {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => setUserInfo(data.data))
  }, [])
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
            {
              userInfo ? (
                <>
                  <Link to="/create">Create Post</Link>
                  <Link onClick={logoutUser}>Logout</Link>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Sign Up</Link>
                </>
              )
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
