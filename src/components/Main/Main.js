import React from "react";
import "./Main.css";
import { Route, Switch } from "react-router";
import Home from "../Home/Home";
import About from "../About/About";
import Products from "../Products/Products";
import Pricing from "../Pricing/Pricing";
import Support from "../Support/Support";
import Coin from "../Coin/Coin";
import Console from "../console/console";

import KiteConnect from "../kite Connect/Kite-connect";

import Kite from "../Kite/kite";

function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/Zerodha-Clone">
          <Home />
        </Route>
        <Route exact path="/Zerodha-Clone/about">
          <About />
        </Route>
        <Route exact path="/Zerodha-Clone/products">
          <Products />
        </Route>
        <Route exact path="/Zerodha-Clone/pricing">
          <Pricing />
        </Route>
        <Route exact path="/Zerodha-Clone/support">
          <Support />
        </Route>
        <Route exact path="/Zerodha-Clone/products/coin">
          <Coin />
        </Route>
        <Route exact path="/Zerodha-Clone/products/console">
          <Console />
        </Route>

        <Route exact path="/Zerodha-Clone/products/kiteConnectAPI">
          <KiteConnect />
        </Route>

        <Route exact path="/Zerodha-Clone/products/kite">
          <Kite />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
