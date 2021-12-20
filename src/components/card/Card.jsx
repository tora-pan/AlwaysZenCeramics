import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/fontawesome-free-solid";
import React from "react";
import bowl from "../../img/bowl.jpg";

import "./card.styles.css";

const Card = () => {
  return (
    <div className="card">
      <div class="product-details">
        <h1>Zen Bowl</h1>
        <span class="hint-star star">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>

        <p class="information">
          This has to be the best bowl in the world. Made from 100% arabica clay
          and thrown in a private pottery studio in Southern California.
        </p>

        <div class="control">
          <button class="btn">
            <span class="price">$250</span>
            <span class="shopping-cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            <span class="buy">Get now</span>
          </button>
        </div>
      </div>

      <div class="product-image">
        <img src={bowl} alt="bowl" />

        <div class="info">
          <h2> Description</h2>
          <ul>
            <li>
              <strong>Material : </strong>Fox Clay
            </li>
            <li>
              <strong>Shade : </strong>Beige
            </li>
            <li>
              <strong>Glaze: </strong>Cream Glaze
            </li>
            <li>
              <strong>Material: </strong>Eco-Friendly
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
