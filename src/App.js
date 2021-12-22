import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NotificationBar from "./components/notification-bar/NotificationBar";
import HomePage from "./pages/home-page/HomePage";
import AboutPage from "./pages/about-page/AboutPage";
import ContactPage from "./pages/contact-page/ContactPage";
import ShopPage from "./pages/shop-page/ShopPage";
import { Routes, Route } from "react-router-dom";

import logo from "./img/logo.PNG";
import LoginPage from "./pages/login-page/LoginPage";
import { UserContext } from "./context/UserContext";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={currentUser}>
      <div className="App">
        <NotificationBar notificationText="Open Tues - Sunday for walk-in visitors. Closed Mondays. Online orders ship out in 2-3 business days. Free shipping for purchases $200 or more! Recommended last day for placing orders (to ship) in time for Christmas Eve is December 10th, Friday!" />
        <Header />
        <div className="site-logo">
          <img src={logo} alt="company logo text"></img>
        </div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
