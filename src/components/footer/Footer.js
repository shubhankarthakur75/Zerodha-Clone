import React from "react";
import "./Footer.css";
import logo from "../../assets/images/zerodha-logo.svg";
import twitter from "../../assets/images/footer/twitter logo.png";
import fb from "../../assets/images/footer/fb logo.png";
import insta from "../../assets/images/footer/insta logo.png";
import linkdin from "../../assets/images/footer/linkdin logo.png";
import teli from "../../assets/images/footer/teli logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="connect">
          <img src={logo} alt="" />
          <p>
            <p className="copyright text-grey">
              © 2010 - 2021, Zerodha Broking Ltd.
            </p>
            <p className="copyright text-grey">All rights reserved.</p>{" "}
          </p>
          <ul className="social">
            <li>
              <Link to="/">
                <img src={twitter} alt="twitter" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={fb} alt="twitter" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={insta} alt="twitter" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={linkdin} alt="twitter" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={teli} alt="twitter" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-company">
          <ul className="list-style">
            <li className="nav-head">Company</li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/">Referral programme</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Zerodha.tech</Link>
            </li>
            <li>
              <Link to="/">Press &amp; media</Link>
            </li>
            <li>
              <Link to="/">Zerodha Cares (CSR)</Link>
            </li>
          </ul>
        </div>
        <div className="footer-support">
          <ul className="list-style">
            <li className="nav-head">Support</li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="">Support portal</Link>
            </li>
            <li>
              <Link to="">Z-Connect blog</Link>
            </li>
            <li>
              <Link to="">List of charges</Link>
            </li>
            <li>
              <Link to="">Downloads &amp; resources</Link>
            </li>
            <li>
              <Link to="">Videos</Link>
            </li>
          </ul>
        </div>
        <div className="footer-account">
          <ul className="list-style">
            <li className="nav-head">Account</li>
            <li>
              <Link to="">Open an account</Link>
            </li>
            <li>
              <Link to="">Fund transfer</Link>
            </li>
            <li>
              <Link to="">60 day challenge</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
