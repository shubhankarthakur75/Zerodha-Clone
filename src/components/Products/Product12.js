import React, { useState } from "react";
import "./Product12.css";
// import kiteImage from "../../assets/images/products-kite.png";
import playstoreBadge from "../../assets/images/google-play-badge.svg";
import appstoreBadge from "../../assets/images/appstore-badge.svg";

function Product12(props) {
  const [product] = useState(props.propsProduct);
  return (
    <div className="product12">
      <div className="small-left-box">
        <div>
          <h1 className="product-name">{product.productName}</h1>
          <p className="product-desc">{product.productDesc}</p>
          <span className="highlight-blue"> Learn more</span>
          <div>
            <img src={playstoreBadge} className="store-icon" alt="playstore" />
            <img src={appstoreBadge} className="store-icon" alt="playstore" />
          </div>
        </div>
      </div>
      <div className="large-right-box">
        <img
          src={`${product.productImageURL}`}
          className="product-image"
          alt=""
        />
      </div>
    </div>
  );
}

export default Product12;
