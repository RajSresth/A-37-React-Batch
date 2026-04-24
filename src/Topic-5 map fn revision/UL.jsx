import React from "react";
import List from "./List";

const UL = () => {
  const skills = ["Javascript", "React", "Angular", "Vue"];

  return (
    <ul>
      {skills.map((element, index) => (
        <List key={index} name={element} />
      ))}
    </ul>
  );
};

export default UL;
