import React from 'react'
import "./shimmer.css"

const Shimmer = () => {
  return (
    <div className="shimmer-container">
        {
            Array(44).fill("").map((e,index) => <div key={index} className="box"></div>)
        }
    </div>
  )
}

export default Shimmer