import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/",{replace:true})
    }
  return (
    <div>
        <h1>404 Page Not Found</h1>   
        <button onClick={handleClick}>Home Page</button>
    </div>
  )
}

export default NotFound