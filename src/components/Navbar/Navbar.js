import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/zerodha-logo.svg";
import hamburgerMenuIcon from "../../assets/images/hamburger-menu-icon.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-nav-box">
        <img src={logo} className="nav-logo" alt="" />
      </div>
      <div className="right-nav-box">
        {/* <NavLink to="/signup">
          <li>Signup</li>
        </NavLink> */}
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
        <li>
          <img
            src={hamburgerMenuIcon}
            className="hamburger-menu-icon"
            alt="hamburger-menu"
          />
        </li>
      </div>
    </div>
  );
}

export default Navbar;
