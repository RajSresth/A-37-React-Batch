import { Route,Routes } from "react-router-dom";
import Dashboard from "./Topic-13 React Lifecycle FBC/Dashboard";
import Profile from "./Topic-13 React Lifecycle FBC/Profile"
import Page from "./Topic-13 React Lifecycle FBC/Page"
import Home from "./Topic-13 React Lifecycle FBC/Home";




const App = () => {
  
  return (
   <Routes>
      <Route path="/" element={<Page />} >
            <Route  index element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/profile" element={<Profile/>} />
      </Route>
   </Routes>
  );
};

export default App;
