import React from 'react'
import "./card.css"

const Card = ({category, title,image,price}) => {

  const customizeTitle = title.split(" ").length > 8 ? title.split(" ").slice(0,8).join(" ") + "...": title;

  return (
    <div className="card">
        <div className="profile">
            <img src={image[0]} alt="" />
        </div>
        <div className="info">
            <p>{category}</p>
            <div>{customizeTitle}</div>
            <div>{price}</div>
        </div>
    </div>
  )
}

export default Card


