import React from "react";
import NavLinks from "../../components/nav-links/NavLinks";

import "./shopPage.styles.css";

import Card from "../../components/card/Card";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <NavLinks />
      <div className="shop-container">
        <div className="shop-images">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
