import React, { useState } from "react";
import kayndrexlogo from "../assest/images/kayndrex logo.jpg";
import "../assest/css/header.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const menuItem = document.querySelectorAll("menu-item");
  menuItem.forEach((item) => {
    item.addEventListener("click", () => {});
  });
  
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={kayndrexlogo} alt="Kayndrexlogo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaBars className="side_bar" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="home">Privacy Policy</Link>
            </li>
            <li>
              <Link to="termsandconditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="language">Language</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
