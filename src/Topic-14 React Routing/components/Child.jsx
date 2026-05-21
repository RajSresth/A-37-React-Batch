import React from "react";

const Child = ({result}) => {
  console.log("Child Render");
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Child Component
      </h1>
      <h3>Heavy Calculation Result: {result}</h3>
    </div>
  );
};

export default React.memo(Child);


/**
export default React.memo(Child, 
  (prev,next) => prev.user.fullname === next.user.fullname);
 */  
// prevProps vs nextProp
/**
 * prevProps = "Shresth Rajput"
 * nextProps = "Shresth Rajput"
 * 
 * 
 * prevProps =  [01x1]-{fullname: "Sid Rajput"}
 * nextProps =  [02x2]-{fullname: "Sid Rajput"}
 * 
 * ?  - optional chaining
 * ?? - Nullish Coalceing operator
 */
