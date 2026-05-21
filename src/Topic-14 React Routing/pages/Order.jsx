import {useState, useMemo, useCallback} from "react";
import Child from "../components/Child";

const Order = () => {
  const [count, setCount] = useState(0); // count = 0
  console.log("Parent Render")

const greet = useCallback(() => console.log("Hello useCallback"),[]); // greet = 01x1

  const user = useMemo(() => ({fullname: "Chombu Singh", age: 24}),[]);     // user = 01y1
 

  return (
    <div id="order">
      <div className="center-box">
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Add Count</button>
       
        <Child greet={greet} user={user} />
      </div>
    </div>
  );
};

export default Order;



{/* <Order/>
<Order/> */}
