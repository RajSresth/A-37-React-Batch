import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {useAuth} from "../store/AuthContext";
/**
 * ! 1st way
 */
const ProtectedRoute = () => {
    const {userData, setUserData} = useAuth();  
   

  

  return userData ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

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
