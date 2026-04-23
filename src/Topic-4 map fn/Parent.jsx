import React from "react";
import Card from "./Card";

const Parent = () => {
  const users = [
    { username: "Chombu Singh", age: 22, state: "UP" },
    { username: "Dinga Singh", age: 24, state: "Delhi" },
    { username: "Sid Singh", age: 26, state: "Haryana" },
    { username: "Tinku Singh", age: 25, state: "Bihar" },
    { username: "Simba Singh", age: 27, state: "Bihar" },
  ];

  return (
    <div>
      {users.map((element) => (
        <Card {...element} />
      ))}
    </div>
  );
};

export default Parent;
