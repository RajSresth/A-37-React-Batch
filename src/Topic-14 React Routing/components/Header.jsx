import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";

const Header = () => {

  // cartItems = [{}, {}]
  const cartItems = useSelector((state) => state?.cart?.items);
  const setClass = ({ isActive }) => (isActive ? "active" : "");
  return (
    <header>
      <div className="center-container">
        <div className="logo">
          <Link to="/" style={{ color: "black" }}>
            QuickMart
          </Link>
        </div>
        <nav>
          <NavLink to="/" className={setClass}>
            Home
          </NavLink>
          <NavLink to="/profile" className={setClass}>
            Profile
          </NavLink>
          <NavLink to="/order" className={setClass}>
            Order
          </NavLink>
          <NavLink to="/shop" className={setClass}>
            Shop
          </NavLink>
          <Link to="/cart">
            <div className="cart-container">
                <GiShoppingCart size={26} />
                <span className="item-qty">{cartItems.length}</span>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
