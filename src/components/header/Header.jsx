import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
  faTimes,
  faUser,
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
          <FontAwesomeIcon
            icon={navActiveState ? faTimes : faBars}
            onClick={handleClick}
          />
          <ul className={`nav-list ${navActiveState ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="shop" onClick={handleClick}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="about" onClick={handleClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="contact" onClick={handleClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-right">
        <div className="user-profile">
          <Link to="login">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>

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
