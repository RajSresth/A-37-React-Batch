import React from 'react'
import {NavLink} from "react-router-dom"

const Header = () => {

  const setClass = ({isActive}) => isActive ? "active" : "";
  return (
    <header>
        <div className="center-container">
            <div className="logo">QuickMart</div>
            <nav>
                <NavLink to="/"         className={setClass} >Home</NavLink>
                <NavLink to="/profile"  className={setClass}>Profile</NavLink>
                <NavLink to="/order"    className={setClass}>Order</NavLink>
                <NavLink to="/shop"     className={setClass}>Shop</NavLink>
            </nav>    
        </div>
    </header>
  )
}

export default Header