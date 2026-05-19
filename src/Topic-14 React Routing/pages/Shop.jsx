import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const res = useLocation();
  console.log("res in shop:", res?.state?.userId);
  console.log("res in shop:", res?.state?.userName);

  return (
    <div id="shop">
      <h1>Welcome to Shop Page</h1>
      <button onClick={() => navigate(-1)}>prev page</button>
    </div>
  );
};

export default Shop;
