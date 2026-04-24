import React from 'react'

const Child = ({render="Hello"}) => {
   
  return (
    <div id="child-component">
        {
            typeof(render) === "function"? render("Rohit Sharma"): render
        }
    </div>
  )        
}

export default Child