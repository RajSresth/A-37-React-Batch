import React from "react";

const Card = ({ title, category, price, description, images }) => {
  const customizeDescription =
    description.split(" ").length > 7
      ? description.split(" ").slice(0, 8).join(" ") + "..."
      : description;
  return (
    <div className="card">
      <div className="profile">
        <img src={images[0]} alt="" />
      </div>
      <div className="info">
        <span className="category">{category}</span>
        <div className="title">{title}</div>
        <div className="description">{customizeDescription}</div>
        <div className="price">&#x24; {price}</div>
      </div>
    </div>
  );
};

export default Card;
