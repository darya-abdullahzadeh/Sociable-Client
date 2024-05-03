import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <Link to="/">Home</Link>
        <Link to ="/explore">Explore</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to ="/messages">Messages</Link>
        <Link to="/profile">Profile</Link>
    </div>
  )
}

export default Header