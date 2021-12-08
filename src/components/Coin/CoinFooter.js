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
      <div className="main-box">
        <div className="left-box">
          <p>
            Mutual Funds investments are subject to market risks, read all
            scheme related documents carefully. Past performance is not an
            indicator for future returns.
          </p>
          <p>
            Zerodha Broking Limited: Member of NSE & BSE – SEBI Registration
            no.: INZ000031633.
          </p>
        </div>
        <div className="right-box">
          <p>
            * The figures are for representational purposes only and do not
            offer any guarantees. The figures have been calculated based on
            historic returns of top performing mutual funds.
          </p>
          <p>
            CDSL: Depository services through Zerodha Broking Ltd. SEBI
            Registration no.: IN-DP-431-2019
          </p>
        </div>
        <div className="bottom-box">
          <p>
            Coin is only an order collection platform that collects orders on
            behalf of clients and places them on BSE StarMF for execution. The
            Client expressly agrees that Zerodha is not liable or responsible
            and does not represent or warrant for any damages regarding
            non-execution of orders or any incorrect execution of orders with
            regard to the funds chosen by the Client due to, but not being
            limited to, any link/system failure, sufficient/insufficient funds
            in the trading account which may occur at the end of the client,
            Zerodha or the exchange platform.
          </p>
          <p>
            Mutual fund orders on Coin are processed from the available trading
            account balance which may further be used for trading equities, F&O.
            Please ensure to maintain sufficient balance to avoid paying any
            margin shortfall penalties.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoinFooter;
