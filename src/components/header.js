import React, {useState} from "react";
import kayndrexlogo from "../assest/images/kayndrex logo.jpg";
import '../assest/css/header.css';
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa"

const Header = () => {
  //   const [showNavbar, setShowNavbar] = useState(false)

  // const handleShowNavbar = () => {
  //   setShowNavbar(!showNavbar)
  // }

    return (
        <div className="kayndrex_header">
            <div className="kayndrex_logo">
                <img src={kayndrexlogo} alt="Kayndrexlogo"/>
            </div>
            {/* <button className="nav_btn" onClick={showNavbar}>
          <FaBars/>
        </button> */}
            <div className="kayndrex_item">
                <Link to="home"><p>Privacy Policy</p></Link>
                <Link to="termsandconditions"><p>Terms and Conditions</p></Link>
                <Link to="language"><p>Language</p></Link>
            </div>
        </div>
    )
};

export default Header;