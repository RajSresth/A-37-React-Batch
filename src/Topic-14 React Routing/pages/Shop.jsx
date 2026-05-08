import React from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate= useNavigate();

  return (
    <div id="shop">
      <h1>Welcome to Shop Page</h1>
      <button onClick={() => navigate(-1)}>prev page</button>
    </div>
  );
};

export default Shop;
