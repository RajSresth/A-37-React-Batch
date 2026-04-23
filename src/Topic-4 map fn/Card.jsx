import React from 'react'

const Card = ({username,age,state}) => {
  return (
    <div>
        <h2>Username:{username}</h2>
        <h2>Age:{age}</h2>
        <h2>State:{state}</h2>
        <h3>========================</h3>
    </div>
  )
}

export default Card