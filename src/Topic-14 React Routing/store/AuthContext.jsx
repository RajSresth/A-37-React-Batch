import { useState, createContext, useContext, useEffect } from "react";

//1. create store
const AuthContext = createContext();

// 2. create AuthProvider
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || null
    setUserData(user);
  },[])

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. useContext with customHook
export const useAuth = () => useContext(AuthContext);




export const CartProvider = ({ children }) => {
  const [state, reducerFn] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || null
    setUserData(user);
  },[])

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};