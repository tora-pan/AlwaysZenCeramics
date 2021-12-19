import React from "react";
import "./navLinks.styles.css";


const NavLinks = () => {
  return (
    <div className="navlink-list">
      <ul>
        <li className="navlink-links">
          <a href="#">Cups</a>
        </li>
        <li className="navlink-links">
          <a href="#">Bowls</a>
        </li>
        <li className="navlink-links">
          <a href="#">Plates</a>
        </li>
        <li className="navlink-links">
          <a href="#">Utensils</a>
        </li>
        <li className="navlink-links">
          <a href="#">Other</a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
