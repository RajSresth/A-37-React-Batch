import React from "react";
import Child from "./Child";

const Parent = () => {
  const user = "Rohit Sharma";

  return (
    <div id="parent">
      <h3>Parent Component</h3>
        
      <Child user={user}>
        <h2>Hello Word</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        "Namaste Developers"
      </Child>
    </div>
  );
};

export default Parent;
