import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/zerodha-logo.svg";
import hamburgerMenuIcon from "../../assets/images/hamburger-menu-icon.png";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Navbar() {
  const [isNavMenuVisible, setNavMenuVisibility] = useState(false);
  return (
    <div className="navbar">
      <div className="left-nav-box">
        <NavLink to="/">
          <img src={logo} className="nav-logo" alt="" />
        </NavLink>
      </div>

      <div className="right-nav-box">
        <div>
          <img
            src={hamburgerMenuIcon}
            className="hamburger-menu-icon"
            alt="hamburger-menu"
            onClick={() => setNavMenuVisibility(!isNavMenuVisible)}
          />
        </div>

        <div className="horizontal-menu">
          <NavLink
            to="/about"
            onClick={() => setNavMenuVisibility(!isNavMenuVisible)}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setNavMenuVisibility(!isNavMenuVisible)}
          >
            <li>Products</li>
          </NavLink>
          <NavLink
            to="/pricing"
            onClick={() => setNavMenuVisibility(!isNavMenuVisible)}
          >
            <li>Pricing</li>
          </NavLink>
          <NavLink
            to="/support"
            onClick={() => setNavMenuVisibility(!isNavMenuVisible)}
          >
            <li>Support</li>
          </NavLink>
        </div>

        {isNavMenuVisible ? <HamburgerMenu /> : null}
      </div>
    </div>
  );
}

export default Navbar;
