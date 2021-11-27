import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/zerodha-logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-nav-box">
        <img src={logo} className="nav-logo" alt="" />
      </div>
      <div className="right-nav-box">
        {/* <Link to="/signup">
          <li>Signup</li>
        </Link> */}
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/pricing">
          <li>Pricing</li>
        </Link>
        <Link to="/support">
          <li>Support</li>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
