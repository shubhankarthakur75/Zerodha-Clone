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
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/products/coin">
          <Coin />
        </Route>
        <Route exact path="/products/console">
          <Console />
        </Route>

        <Route exact path="/products/kite-connect">
          <KiteConnect />

        <Route exact path="/products/kite">
          <Kite/>

        </Route>
      </Switch>
    </div>
  );
}

export default Main;
