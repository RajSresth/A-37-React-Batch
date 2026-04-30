import {useState} from 'react'

const heavyCalculation = () => {
    console.log("Heavy Calculation");
    let sum = 0;
    for(let i = 0; i < 100000; i++)
    {
        sum = sum + i;
    }   
    return sum;
}


const Counter = () => {
 const [count, setCount] =  useState(() => heavyCalculation());
     
                                    
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1) }>Add</button>
    </div>
  )
}

export default Counter;