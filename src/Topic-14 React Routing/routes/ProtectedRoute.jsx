import React from 'react'
import {Navigate, useNavigate, Outlet} from "react-router-dom"

/**
 * ! 1st way
 */
const ProtectedRoute = () => {
    const login = true;

    if(!login)
    {
        return <Navigate to="/login" replace />
    }

  return <Outlet/>
}

export default ProtectedRoute

/** 
 * ! 2nd way
export default ProtectedRoute
const ProtectedRoute = ({children}) => {
    const login = true;

    if(!login)
    {
        return <Navigate to="/login" replace />
    }

  return children
}

export default ProtectedRoute
*/