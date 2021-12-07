import React from "react";
import "./CoinFooter.css";
import zerodhaLogo from "../../assets/images/zerodha.svg";

function CoinFooter() {
  return (
    <div className="coin-footer">
      <div className="top-bar">
        <div className="left-box">
          <img src={zerodhaLogo} alt="zerodha" />
        </div>
        <div className="right-box">
          <li>
            <a href="https://coin.zerodha.com/funds" rel="noreferrer">
              Direct Funds
            </a>
          </li>
          <li>
            <a href="https://coin.zerodha.com/faq" rel="noreferrer">
              FAQ
            </a>
          </li>
          <li>
            <a href="https://zerodha.com/tos/coin" rel="noreferrer">
              TOS
            </a>
          </li>
          <li>
            <a href="https://zerodha.com/about" rel="noreferrer">
              About
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default CoinFooter;
