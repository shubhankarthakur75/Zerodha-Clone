import React from "react";
import "./HamburgerMenu.css";
import { NavLink } from "react-router-dom";

function HamburgerMenu() {
  return (
    <div className="hamburger-menu">
      <div className="hamburger-menu-container">
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/products">
          <li>Products</li>
        </NavLink>
        <NavLink to="/pricing">
          <li>Pricing</li>
        </NavLink>
        <NavLink to="/support">
          <li>Support</li>
        </NavLink>
      </div>
    </div>
  );
}

export default HamburgerMenu;
