import React from "react";
import "./Main.css";
import { Route, Switch } from "react-router";
import Home from "../Home/Home";
import Header from "../Header/Header";
import About from "../About/About";
import Products from "../Products/Products";
import Pricing from "../Pricing/Pricing";
import Support from "../Support/Support";
import Footer from "../footer/Footer";
function Main() {
  return (
    <div>
      <Header />
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
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
