import React from "react";
import "./notificationBar.styles.css";

const NotificationBar = ({ notificationText }) => {
  return <div className="notification-bar">{notificationText}</div>;
};

export default NotificationBar;
