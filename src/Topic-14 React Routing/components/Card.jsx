import React from "react";
import { useDispatch } from "react-redux";
import { addItem, fetchUsers } from "../redux/cartSlice";

const Card = ({ id, title, category, price, description, images }) => {
  const dispatch = useDispatch();

  const customizeDescription =
    description.split(" ").length > 7
      ? description.split(" ").slice(0, 8).join(" ") + "..."
      : description;

  const handleClick = () => {
    const item = {
      id,
      title,
      category,
      images,
      description,
      price,
    };
    dispatch(fetchUsers());
  };

  return (
    <div className="card">
      <div className="profile">
        <img src={images[0]} alt="" />
      </div>
      <div className="info">
        <span className="category">{category}</span>
        <div className="title">{title}</div>
        <div className="description">{customizeDescription}</div>
        <div className="cart-btn-container">
          <div className="price">&#x24; {price}</div>
          <div className="btn-box">
            <button 
             className="add-btn" 
             onClick={handleClick}
             >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
