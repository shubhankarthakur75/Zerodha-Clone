// import { Link } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import "./kite-connect.css";
import kiteConnectLogo from "../../assets/images/kite-connect/logo.svg";
import plane from "../../assets/images/kite-connect/plane.png";
import homeplane from "../../assets/images/kite-connect/home-plane.png";
import smallcase from "../../assets/images/kite-connect/smallcase.png";
import coinLogo from "../../assets/images/kite-connect/coin-logo.svg";
import streak from "../../assets/images/kite-connect/streak.svg";
import sensibull from "../../assets/images/kite-connect/sensibull-logo.svg";
import etPress from "../../assets/images/kite-connect/et-press.png";
import bsPress from "../../assets/images/kite-connect/bs-press.png";
import blPress from "../../assets/images/kite-connect/bl-press.png";
import ItpPress from "../../assets/images/kite-connect/ltp-press.png";

const KiteConnect = () => {
  return (
    <div className="kiteConnect">
      <div className="container">
        <nav className="row nav">
          <div className="col logo">
            <NavLink to="https://kite.trade">
              <img src={kiteConnectLogo} alt="Kite Connect" />
            </NavLink>
          </div>
          <div className="col links">
            <NavLink
              className=""
              to="https://developers.kite.trade/signup"
              title=""
            >
              Signup
            </NavLink>

            <NavLink className="" to="/docs/connect/v3" title="">
              Docs
            </NavLink>

            <NavLink className="" to="/forum" title="">
              Forum
            </NavLink>

            <NavLink className="" to="https://developers.kite.trade" title="">
              Login
            </NavLink>
          </div>
        </nav>

        <section className="splash center">
          <h1 className="title">Super simple trading APIs</h1>
          <p className="subtitle grey">
            Build full fledged trading platforms with simple HTTP/JSON APIs.
          </p>
          <p>
            <Link to="" className="button">
              Sign up
            </Link>
          </p>
          <br />
          <img src={plane} alt="" />
          <div className="row">
            <div className="col">
              <h2>10+ million</h2>
              <p className="grey">orders per day</p>
            </div>
            <div className="col">
              <h2>500+ million</h2>
              <p className="grey">HTTP requests per day</p>
            </div>
            <div className="col">
              <h2>30+ million</h2>
              <p className="grey">ticks per second</p>
            </div>
          </div>
        </section>
        <section className="box startup">
          <div className="row">
            <div className="col">
              <Link className="no-underline" to="/startups">
                <img src={homeplane} alt="" />
              </Link>
            </div>
            <div className="col">
              <h3>Are you a startup?</h3>
              <p>
                Build full fledged investment and trading platforms with the
                ability to execute orders in real time, manage portfolio, stream
                live market data and more. Let 7+ million clients of Zerodha
                seamlessly access your platform.
              </p>
              <p>
                <Link to="startups">
                  <strong>Learn more</strong>
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="partners center">
          <p className="grey">See what people have built with Kite Connect</p>
          <br />
          <Link to="https://coin.zerodha.com">
            <img src={coinLogo} alt="streak" />
          </Link>
          <Link to="https://www.smallcase.com">
            <img src={smallcase} alt="streak" />
          </Link>
          <Link to="https://www.streak.tech">
            <img className="streak-logo" src={streak} alt="streak" />
          </Link>
          <Link to="https://sensibull.com">
            <img className="streak-logo" src={sensibull} alt="streak" />
          </Link>
        </section>
        <section className="sdks center">
          <h4>SDKs and API clients</h4>
          <Link to="https://github.com/zerodha/pykiteconnect">Python</Link>
          <Link to="https://github.com/zerodha/javakiteconnect">Java</Link>
          <Link to="https://github.com/zerodha/phpkiteconnect">PHP</Link>
          <Link to="https://github.com/zerodha/kiteconnectjs">NodeJS</Link>
          <Link to="https://github.com/zerodha/dotnetkiteconnect">C#</Link>
          <Link to="https://github.com/zerodha/dotnetkiteconnect">.Net</Link>
          <Link to="https://github.com/zerodha/gokiteconnect">Go</Link>
          <Link to="https://github.com/zerodha/kiteconnect-rs">Rust</Link>
          <Link to="https://github.com/zerodha/cppkiteconnect">C++</Link>
        </section>
        <section className="center">
          <p className="grey"></p>
          <p>
            <Link to="" className="button">
              Sign up
            </Link>
          </p>
        </section>
        <section className="press center">
          <Link
            target="_blank"
            to="http://economictimes.indiatimes.com/small-biz/startups/discount-broking-firm-zerodha-throws-open-its-kite-connect-to-financial-technology-startups/articleshow/50165572.cms"
          >
            <img src={etPress} alt="Economic Times" />
          </Link>
          <Link
            target="_blank"
            to="http://www.thehindubusinessline.com/markets/stock-markets/discount-brokerages-explore-diversification-innovative-ideas-to-expand-client-base/article8120954.ece"
          >
            <img src={blPress} alt="Business Line" />
          </Link>
          <Link
            target="_blank"
            to="http://www.business-standard.com/article/markets/zerodha-aims-at-one-mn-trading-clientele-in-2-years-116011200652_1.html"
          >
            <img src={bsPress} alt="Business Standard" />
          </Link>
          <Link
            target="_blank"
            to="https://letstalkpayments.com/the-most-important-thing-in-fintech-advent-of-apis-and-banking-apis-are-real-too/"
          >
            <img src={ItpPress} alt="LTP" />
          </Link>
        </section>
        <footer className="footer-kite-connect">
          <p>
            Zerodha Member of NSE &amp; BSE — SEBI Registration no.:
            INZ000031633 | CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. - SEBI Registration no.: IN-DP-431-2019 | Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 | NCDEX :
            1138. SEBI Registration no.: INZ000038238 | Registered Address:
            Zerodha, #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bangalore - 560078, Karnataka, India
          </p>
          <p>
            DISCLAIMER: Capital markets, trading, and investments have inherent
            risks. Please make sure you understand the risks involved and
            carefully read the Risk Disclosure Document as prescribed by SEBI |
            ICF before participating in the markets —{" "}
            <Link to="terms">Read terms &amp; conditions</Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default KiteConnect;
