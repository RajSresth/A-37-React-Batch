import React from 'react'
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <header>
        <div className="center-container">
            <div className="logo">QuickMart</div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/order">Order</NavLink>
                <NavLink to="/shop">Shop</NavLink>
            </nav>    
        </div>
    </header>
  )
}

export default Header