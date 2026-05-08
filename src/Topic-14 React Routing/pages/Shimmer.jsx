import React from 'react'

const Shimmer = () => {
  return (
    <div className="shimmer-container">
        <div className="center-container">
            {Array(20).fill("").map((_,index) => <div key={index} className="box"></div>)}
        </div>
        
    </div>
  )
}

export default Shimmer