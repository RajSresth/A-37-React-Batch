import React from "react";

const Child = () => {
  console.log("Child Render");
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Child Component
      </h1>
    </div>
  );
};

export default React.memo(Child);
