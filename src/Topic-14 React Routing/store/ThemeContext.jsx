import { createContext, useState, useContext }  from "react";

// 1. create context | create store
const ThemeContext = createContext();


// 2. Create Provider
export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState("light")

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
           {children} 
        </ThemeContext.Provider>
    )
}

// 3. useContext with custom hook
export const useTheme = () => useContext(ThemeContext);
