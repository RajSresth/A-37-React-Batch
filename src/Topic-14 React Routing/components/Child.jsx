import React from "react";

const Child = ({greet, user}) => {
  console.log("Child Render");
  greet()
  
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Child Component
      </h1>
      <h3>Username: {user?.fullname}</h3>
      <h3>Age: {user?.age}</h3>
    </div>
  );
};

export default React.memo(Child);

/**
 * prev = greet - 01x1 
 *        user  - 01y1
 * next = greet - 01x1 
 *        user  - 01y1
 */














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
