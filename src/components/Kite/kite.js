import "../console/console.css"
import { useEffect } from "react";
import Header from "../Header/Header"
import playstoreBadge from "../../assets/images/google-play-badge.svg";
import appstoreBadge from "../../assets/images/appstore-badge.svg";
import Footer from "../footer/Footer";

export default function Kite(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>
            <Header/>
            <div className="console-flex justify-end">
                <div className="console-div">
                    <p className="console-title">Times have changed</p>
                    <p className="console-description">Kite is a sleek investment and trading platform built for modern times and sensibilities. Ground breaking innovations presented with excellent usability, investing in the stock markets has never been this easy. Really.</p>
                    <button className="console-button">Login to Kite</button>
                    <div className="badge-div">
                        <img src={playstoreBadge} className="store-icon" alt="playstore" />
                        <img src={appstoreBadge} className="store-icon" alt="playstore" />
                    </div>
                </div>
                <img className="console-img1" src="https://zerodha.com/static/images/kite3-dashboard.png" alt=""/>
            </div>

            <div className="console-flex flex-margin">
                <img
                    className="console-images"
                    src="https://zerodha.com/static/images/img2.png"
                    alt=""
                />
                <div className="console-div1">
                    <p className="console-title">Universal instrument search</p>
                    <p className="console-description">Search across 90,000+ stocks and F&O contracts across multiple exchanges instantly. Find your favorite stocks, bonds, metals, or derivatives, anything really, with absolutely zero latency.</p>
                </div>
            </div>

            <div className="console-flex flex-margin">
                <div className="console-div1">
                <p className="console-title">Sleek User Interface</p>
                <p className="console-description">
                    With a sleek and carefully designed UI, buying, selling, analysing, and managing your portfolio, everything's just a click away. Navigate the app seamlessly with intuitively designed keyboard shortcuts.
                </p>
            </div>
            <img
                className="console-images"
                src="https://zerodha.com/static/images/img3.png"
                alt=""
            />
            </div>

            <div className="console-flex flex-margin">
                <img
                    className="console-images"
                    src="https://zerodha.com/static/images/img4.png"
                    alt=""
                />
                <div className="console-div1">
                    <p className="console-title">20 market depth or level 3 data</p>
                    <p className="console-description">Exclusive access to level 3 data, or 20 marketdepth. Level 3 data gives you deeper insights into market liquidity and allows you to develop sophisticated intraday trading strategies.</p>
                </div>
            </div>

            <div className="console-flex flex-margin">
                <div className="console-div1">
                <p className="console-title">Advanced charting</p>
                <p className="console-description">
                Hundreds of indicators, studies, and tools on a powerful and customisable charting interface. Extensive historical data for stocks and F&O contracts. Nobody else offers as much data as we do.
                </p>
            </div>
            <img
                className="console-images"
                src="https://zerodha.com/static/images/img6.png"
                alt=""
            />
            </div>

            <div className="console-flex flex-margin">
                <img
                    className="console-images"
                    src="https://zerodha.com/static/images/gtt.png"
                    alt=""
                />
                <div className="console-div1">
                    <p className="console-title">GTT – Good Till Triggered orders</p>
                    <p className="console-description">Place single-leg triggers to enter or exit stock holdings until your price condition is met, along with simultaneously placing target and stoploss (OCO or One Cancels Other) for your stock holdings.</p>
                </div>
            </div>

            <div className="console-flex flex-margin">
                <div className="console-div1">
                <p className="console-title">Baskets</p>
                <p className="console-description">
                Create, manage, and execute multi-stock baskets. Use real-time margins to build F&O strategies and spread orders.
                </p>
            </div>
            <img
                className="console-images"
                src="https://zerodha.com/static/images/baskets.png"
                alt=""
            />
            </div>

            <div className="console-flex flex-margin">
                <img
                    className="console-images"
                    src="https://zerodha.com/static/images/kite-alerts.png"
                    alt=""
                />
                <div className="console-div1">
                    <p className="console-title">Alerts</p>
                    <p className="console-description">Create powerful market alerts on the cloud for stocks, futures and options.</p>
                </div>

                

            </div>

            <div className="console-flex justify-center">
                    <p className="console-title">True P&L</p>
                    <img
                        className="image-width"
                        src="https://zerodha.com/static/images/kite-pnl.png"
                        alt=""
                    />
                <p className="console-description">
                    Console crunches tens of billions of rows of historical trade
                    breakdowns to keep track of corporate actions, splits, transfers, and
                    more to compute the most accurate profit and loss statements (P&L) for
                    your portfolio.
                </p>
            </div>

            <div className="console-flex flex-margin">
                <div className="console-div1">
                <p className="console-title">Kite mobile</p>
                <p className="console-description">
                A clean, light, and fast app with an intuitive UI for all your investment and trading needs.
                </p>

                <div className="badge-div">
                        <img src={playstoreBadge} className="store-icon" alt="playstore" />
                        <img src={appstoreBadge} className="store-icon" alt="playstore" />
                </div>
            </div>
            <img
                className="console-images"
                src="https://zerodha.com/static/images/kite-mobile.png"
                alt=""
            />
            </div>

            <div className="console-flex flex-margin">
                <img
                    className="console-images"
                    src="https://zerodha.com/static/images/img8.png"
                    alt=""
                />
                <div className="console-div1">
                    <p className="console-title">Unlimited extensibility</p>
                    <p className="console-description">Kite is not just an app, but a complete ecosystem. Discover innovative investment apps that integrate seamlessly into your trading experience on Kite. Not enough? Build your own applications with Kite Connect APIs.</p>
                </div>
            </div>

            <div className="console-flex justify-center">
                <p className="console-title">Open a Zerodha Account</p>
                <p className="console-description">
                    Excellent platforms and apps · ₹0 investments and flat ₹20 intraday
                    and F&O trades.
                </p>
                <button className="console-button">Sign-Up Now</button>
            </div>

            <Footer/>

        </div>
    )
}