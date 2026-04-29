import {useState} from 'react'

const Counter = () => {
  const [count, setCount ] = useState(0);  // state variable (count = 1)
  


  return (
    <div id="counter">
        <h1>Counter count: {count}</h1>
        <button onClick={() => setCount(count + 1) }>Add</button>
    </div>
  )
}

export default Counter;


// whenever state variable changes react will re-render the component.