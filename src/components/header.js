import React from "react";
import kayndrexlogo from "../assest/images/kayndrex logo.jpg";
import '../assest/css/header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="kayndrex_header">
            <div className="kayndrex_logo">
                <img src={kayndrexlogo} alt="Kayndrexlogo"/>
            </div>
            <div className="kayndrex_item">
                <Link to="home"><p>Privacy Policy</p></Link>
                <Link to="termsandconditions"><p>Terms and Conditions</p></Link>
                <Link to="language"><p>Language</p></Link>
            </div>
        </div>
    )
};

export default Header;