import React from 'react'

// props = { props : { user: {username: "Sid", age: 22} }}
const Subchild = (props) => {
    console.log("Subchild props:",props);
  return (
    <div>
        <h2>Sub Child Component</h2>
        <h4>Username: {props.props.user.username}</h4>
        <h4>Age: {props.props.user.age}</h4>
    </div>
  )
}

export default Subchild