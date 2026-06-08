import React from "react";
import {useTheme} from "../store/ThemeContext";


const Shop = () => {

  const {theme, setTheme} = useTheme();
  

  return (
    <div id="shop" className={theme}>
      <div className="center-container">
        <div className="shop-details">
          <h2>Welcome to Shop Page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum architecto laborum sequi esse incidunt quisquam consequatur nam ratione qui.</p>

          <p>Nemo illum architecto laborum sequi esse incidunt quisquam consequatur nam ratione qui.</p>
          
          <button onClick={() => setTheme("dark")}>Dark</button>
        </div>
        <div className="shop-details">
          <h2>Welcome to Shop Page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum architecto laborum sequi esse incidunt quisquam consequatur nam ratione qui.</p>

          <p>Nemo illum architecto laborum sequi esse incidunt quisquam consequatur nam ratione qui.</p>
          <button onClick={() => setTheme("light")}>Light</button>
        </div>
        <div className="shop-details">
            <Input/>
        </div>
      </div>
    </div>
  );
};

export default Shop;
