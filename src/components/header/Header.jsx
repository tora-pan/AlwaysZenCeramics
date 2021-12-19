import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/fontawesome-free-solid";
import "./header.styles.css";

const Header = () => {
  const [navActiveState, setNavActiveState] = useState(false);

  const handleClick = () => {
    setNavActiveState(!navActiveState);
  };

  return (
    <div className="header">
      <div className="header-left">
        <div className="hamburger">
          <FontAwesomeIcon icon={faBars} onClick={handleClick} />
          <ul className={`nav-list ${navActiveState ? "active" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-right">
        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </div>
    </div>
  );
};

export default Header;
