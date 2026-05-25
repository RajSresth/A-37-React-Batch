import { useState, createContext, useContext } from "react";

//1. create store
const AuthContext = createContext();

// 2. create AuthProvider
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. useContext with customHook
export const useAuth = () => useContext(AuthContext);
