import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Page = () => {
  return (
    <div className='page'>
      <header>
        <div className='center-container'>
            <div className='logo'>Logo</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="dashboard">Dashboard</Link>
                <Link to="profile">Profile</Link>
            </nav>
        </div>
      </header>

      <Outlet/>
    </div>
  )
}

export default Page



