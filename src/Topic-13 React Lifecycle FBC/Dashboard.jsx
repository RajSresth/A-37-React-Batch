import  { useState, useEffect } from 'react'

const Dashboard = () => {
  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(0);

  // ! Phase-1: Mounting 
  useEffect(() => {
      console.log("useEffect: Mounting phase");

      return () => {
        console.log("Cleanup function - []")
      }
  }, [])


  // ! Phase-2: Updating
  useEffect(() => {

    if(count2 === 0 && count === 0) return
      console.log("useEffect: Updating phase");

  },[count,count2])


  return (
    <div id="dashboard">
      <h1>Welcome to Dashboard Page</h1>

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add Count</button>

      <h3>Count: {count2}</h3>
      <button  onClick={() => setCount2(count2 + 10)}>Add Count2</button>
    </div>
  )
}

export default Dashboard