import Child from "./Child";

const Parent = () => {
    const user = {username: "Sid", age: 22} 

  return (
    <div>
      <h2>Parent Component</h2>

      <Child user={user} />
    </div>
  );
};



export default Parent;
