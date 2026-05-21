import {useState,useRef} from "react";
import { useOutletContext } from "react-router-dom";
import Child from "../components/Child";

const Order = () => {
  const [count,setCount] = useState(0);
  const count2 = useRef(0);  

  console.log("Order Render");

  const handleClick = () => {
    count2.current = count2.current + 1;
  }


  return (
    <div id="order">
      <div className="center-box">
        <h1>Welcome to Order Page</h1>

        {/* state variable */}
        <div className="state-count">
          <h2>Count: {count}</h2>
          <button onClick={() => setCount(count + 1)}>Add Count</button>
        </div>

        {/* Ref variable */}
        <div className="ref-count">
          <h2>Count2: {count2.current}</h2>
          <button onClick={handleClick}>Add Count</button>
        </div>

        <Child/>
      </div>
    </div>
  );
};

export default Order;
