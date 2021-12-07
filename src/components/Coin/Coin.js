import React from "react";
import "./Coin.css";
import coinLogoWithText from "../../assets/images/coin-logo-with-text.svg";
import coinHomeImage from "../../assets/images/coin-homepage.png";
import appStoreBadge from "../../assets/images/appstore-badge.svg";
import playStoreBadge from "../../assets/images/google-play-badge.svg";
import newVersionBanner from "../../assets/images/coin-new-version-banner.png";
import coinImage from "../../assets/images/home-coins.svg";

function Coin() {
  return (
    <div className="coin">
      <div className="coin-navbar">
        <div className="left-box">
          <img src={coinLogoWithText} alt="coin-logo" />
        </div>
        <div className="right-box">
          <span>Login</span>
          {/* <span>explore</span> */}
        </div>
      </div>
      <div className="main-image-container">
        <img src={coinHomeImage} alt="" />
        <h2 className="home-image-title">
          Unlimited free investments in direct mutual funds
        </h2>
        <p className="home-image-desc">
          Commissions on regular mutual funds can be up to 1% compounded every
          year. Buy direct funds on Coin — free.
        </p>
        <input
          type="text"
          placeholder="Buy from over 2000 commission-free direct mutual funds"
          className="fund-selector"
        />
        <div className="app-links">
          <span>
            <img src={playStoreBadge} alt="playstore" />
          </span>
          <span>
            <img src={appStoreBadge} alt="appstore" />
          </span>
        </div>
        <img
          src={newVersionBanner}
          className="new-version-banner"
          alt="new-version"
        />
      </div>
      <div className="coin-info">
        <div className="left-box">
          <h1>Why invest through Coin?</h1>
          <p>
            Zerodha Coin is India's largest direct mutual fund platform that
            lets you buy direct mutual funds online with no commission passback,
            directly from asset management companies. Your mutual funds, stocks,
            currencies, bonds, and more, all in your Demat account.
          </p>
        </div>
        <div className="right-box">
          <img src={coinImage} alt="coin" />
          <h1>Free, unlimited investments</h1>
          <h2>₹0 fees, brokerage, or commissions</h2>
        </div>
      </div>
    </div>
  );
}

export default Coin;
