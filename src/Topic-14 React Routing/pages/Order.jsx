import React from "react";
import { useOutletContext } from "react-router-dom";

const Order = () => {
  const context = useOutletContext();
  console.log("context in Order:", context);

  return (
    <div id="order">
      <h1>Welcome to Order Page</h1>
    </div>
  );
};

export default Order;
