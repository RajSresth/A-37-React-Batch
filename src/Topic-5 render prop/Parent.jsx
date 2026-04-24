import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div id="parent-component">
        <h2>Parent Component</h2>

        <Child render={(name) => <h2>Hello {name}</h2>}>
        </Child>
    </div>
  )
}
           
          
                

export default Parent