import React from "react";
import "./HamburgerMenu.css";
import { NavLink } from "react-router-dom";

function HamburgerMenu() {
  return (
    <div className="hamburger-menu">
      <div className="hamburger-menu-container">
        <NavLink to="/Zerodha-Clone/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/Zerodha-Clone/products">
          <li>Products</li>
        </NavLink>
        <NavLink to="/Zerodha-Clone/pricing">
          <li>Pricing</li>
        </NavLink>
        <NavLink to="/Zerodha-Clone/support">
          <li>Support</li>
        </NavLink>
      </div>
    </div>
  );
}

export default HamburgerMenu;
