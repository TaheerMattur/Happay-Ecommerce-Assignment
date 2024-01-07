import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ReactComponent as SVG } from "../images/blue_logo.svg";

const Nav = () => {
  const { totalQuantities } = useSelector((state) => state.CartReducer);

  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__left">
          <Link to="/">
            <div className="nav__logo">
              <SVG />
              <h1 className="brand">Happay</h1>
            </div>
          </Link>
        </div>
        <div className="nav__right">
          <Link to="/cart">
            <div className="basket">
              <AiOutlineShoppingCart className="cart-icon" />
              <span>{totalQuantities}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
