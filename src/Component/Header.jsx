import React from "react";
import "./css/Header.css";
import { LOGO_URL } from "./constant";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Restaurants</li>
                    <li>Order</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;