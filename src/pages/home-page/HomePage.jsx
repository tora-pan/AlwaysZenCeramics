import React from "react";
import image from "../../img/clay-in-hands.jpg";
import image2 from "../../img/throwing-clay.jpg";
import "./homePage.styles.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Always Zen Ceramics</h1>
      <p>The place to find quality, handmade, Japanese ceramics</p>
      <div className="images">
        <img src={image} className="main-image" alt="clay in hands" />
        <img src={image2} className="main-image" alt="clay in hands" />
      </div>
    </div>
  );
};

export default HomePage;
