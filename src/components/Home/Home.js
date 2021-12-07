import React, { useEffect } from "react";
import "./Home.css";

import Header from "../Header/Header";

import home1 from "../../assets/images/homepage-1.png";
import home2 from "../../assets/images/homepage-2.png";
import home3 from "../../assets/images/home-3.svg";
import press from "../../assets/images/press-logos.png";
import { NavLink } from "react-router-dom";

// import Footer from "../footer/Footer";


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Home">
      <Header />
      <div className="top-div">
        <img className="home-1" src={home1} alt="" />
        <p className="home-heading">Invest in Everything</p>
        <p className="home-description">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button className="home-button">Sign Up Now</button>
      </div>
      <div className="home-flexbox">
        <img className="home-3" src={home3} alt="" />
        <div className="flex-div">
          <p className="home-heading">Largest stock broker in India</p>
          <p className="home-content">
            7.5+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="list-flex">
            <ul>
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>
            <ul>
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>
          <img className="press-logos" src={press} alt="" />
        </div>
      </div>
      <div className="top-div">
        <p className="home-heading">The Zerodha Universe</p>
        <p className="home-description">
          A whole ecosystem of modern investment apps
        </p>
        <p className="home-description">
          tailored to specific needs, built from the ground up
        </p>
        <NavLink to="/products">
          <img className="home-2" src={home2} alt="" />
        </NavLink>
        <NavLink to="/products">
          <p className="home-links">Explore our products</p>
        </NavLink>
      </div>

      <div className="home-flexbox">
        <div style={{ width: "40%" }}>
          <p className="home-heading">Unbeatable Pricing </p>
          <p className="home-content">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <NavLink to="/pricing" className="home-links">
            See Pricing
          </NavLink>
        </div>
        <div>
          <div className="pricing-flex">
            <div className="pricing-div">
              <p className="price"> &#8377;0</p>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="pricing-div">
              <p className="price"> &#8377;20</p>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-div">
        <p className="home-heading">Open a Zerodha account</p>
        <p className="home-description">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button className="home-button">Sign Up Now</button>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
