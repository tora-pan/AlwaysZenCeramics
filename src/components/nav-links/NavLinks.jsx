import React from "react";
import "./navLinks.styles.css";


const NavLinks = () => {
  return (
    <div className="navlink-list">
      <ul>
        <li className="navlink-links">
          <a href="#cups">Cups</a>
        </li>
        <li className="navlink-links">
          <a href="#bowls">Bowls</a>
        </li>
        <li className="navlink-links">
          <a href="#plates">Plates</a>
        </li>
        <li className="navlink-links">
          <a href="#utensils">Utensils</a>
        </li>
        <li className="navlink-links">
          <a href="#other">Other</a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
