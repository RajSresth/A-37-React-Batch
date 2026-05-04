import { useState, useEffect } from "react";

const Toggle = () => {
  const [login, setLogin] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => { 
        if(count === 0) 
        {
            return   
        }
            console.log("2. useEffect"); 
        },[count]);  
 

  console.log("1. Toggle Render");
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Add Count</button>

        {login ? <h2>Welcome User</h2> : <h2>Please Login</h2>}
        <button onClick={() => setLogin(!login)}>Click</button>
    </div>
  );
};

export default Toggle;
