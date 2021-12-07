import React, { useEffect, useState } from "react";
import "./Products.css";
import Header from "../Header/Header";
import Product21 from "./Product21";
import Product12 from "./Product12";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productsObj = {
    productsArr: [
      {
        id: 1,
        productName: "Kite",
        productDesc:
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
        productImageURL: "https://zerodha.com/static/images/products-kite.png",
        isRedirect: false,
      },
      {
        id: 2,
        productName: "Console",
        productDesc:
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
        productImageURL:
          "https://zerodha.com/static/images/products-console.png",
        isRedirect: false,
      },
      {
        id: 3,
        productName: "Coin",
        productDesc:
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
        productImageURL: "https://zerodha.com/static/images/products-coin.png",
        isRedirect: true,
      },
      {
        id: 4,
        productName: "Kite Connect API",
        productDesc:
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
        productImageURL:
          "https://zerodha.com/static/images/products-kiteconnect.png",
        isRedirect: true,
      },
      {
        id: 5,
        productName: "Varsity mobile",
        productDesc:
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
        productImageURL:
          "https://zerodha.com/static/images/varsity-products.png",
      },
    ],
  };
  const [products] = useState(productsObj.productsArr);
  return (
    <div className="products">
      <Header />
      <div className="box">
        <h1 className="products-title">Technology</h1>
        <h5 className="products-desc">
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p>
          Check out our{" "}
          <span className="highlight-blue"> investment offerings →</span>
        </p>
      </div>
      <div className="products-container">
        {products.map((product, index) => {
          if (index % 2 === 0) {
            return <Product21 propsProduct={product} key={index} />;
          } else {
            return <Product12 propsProduct={product} key={index} />;
          }
        })}
      </div>
      <div className="products-list-container">
        <h3>
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </h3>
        <h1 className="product-list-title">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="products-list">
          <div className="product-box">
            <img
              src="https://zerodha.com/static/images/products/smallcase-logo.png"
              className="product-image-small"
              alt=""
            />
            <p className="product-desc">Thematic investment platform</p>
          </div>
          <div className="product-box">
            <img
              src="https://zerodha.com/static/images/products/streak-logo.png"
              className="product-image-small"
              alt=""
            />
            <p className="product-desc">Algo & strategy platform</p>
          </div>
          <div className="product-box">
            <img
              src="https://zerodha.com/static/images/products/sensibull-logo.svg"
              className="product-image-small"
              alt=""
            />
            <p className="product-desc">Options trading platform</p>
          </div>
          <div className="product-box">
            <img
              src="https://zerodha.com/static/images/products/goldenpi-logo.png"
              className="product-image-small"
              alt=""
            />
            <p className="product-desc">Bonds trading platform</p>
          </div>
        </div>
        <button className="sign-up-btn">Sign-up now</button>
      </div>
    </div>
  );
}

export default Products;
