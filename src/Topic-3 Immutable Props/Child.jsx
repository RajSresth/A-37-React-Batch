import Subchild from "./Subchild";

// props = { user: {username: "Sid", age: 22} }
const Child = (props) => {
    console.log("Child props:",props);

  return (
    <div id="child-component">
      <h2>Child Component</h2>
      <Subchild  props={props} />
      
    </div>
  );
};



export default Child;
