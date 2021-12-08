import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product12.css";
import playstoreBadge from "../../assets/images/google-play-badge.svg";
import appstoreBadge from "../../assets/images/appstore-badge.svg";

function Product12(props) {
  const [product] = useState(props.propsProduct);

  const lowerCaseFirstLetter = (str) =>
    str.charAt(0).toLowerCase() + str.slice(1);

  return (
    <div className="product12">
      <div className="small-left-box">
        <div>
          <h1 className="product-name">{product.productName}</h1>
          <p className="product-desc">{product.productDesc}</p>
          {product.isRedirect ? (
            <Link
              to={`/Zerodha-Clone/products/${lowerCaseFirstLetter(
                product.productName.replace(/\s/g, "")
              )}`}
              target="_blank"
            >
              <span className="highlight-blue"> {product.productName}</span>{" "}
            </Link>
          ) : (
            <Link
              to={`/Zerodha-Clone/products/${lowerCaseFirstLetter(
                product.productName.replace(/\s/g, "")
              )}`}
            >
              <span className="highlight-blue"> Learn more</span>
            </Link>
          )}
          <div>
            <img src={playstoreBadge} className="store-icon" alt="playstore" />
            <img src={appstoreBadge} className="store-icon" alt="playstore" />
          </div>
        </div>
      </div>
      <div className="large-right-box">
        <Link to="/Zerodha-Clone/products/console">
          <img
            src={`${product.productImageURL}`}
            className="product-image"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Product12;
