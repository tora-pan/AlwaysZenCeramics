import React from "react";
import "./customButton.styles.css";

const CustomButton = ({children, ...otherProps}) => {
  return <button className="custom-button" {...otherProps} >{children}</button>;
};

export default CustomButton;
