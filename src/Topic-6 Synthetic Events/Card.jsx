import React from 'react'

const Card = () => {

    const changeText = (e) => {
        console.log("Clicked...",e);
    }
  return (
    <div>
        <h2>Card Coponent</h2>
        <button onClick={changeText}>Click</button>
    </div>
  )
}

export default Card
