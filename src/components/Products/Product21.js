import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product21.css";
import playstoreBadge from "../../assets/images/google-play-badge.svg";
import appstoreBadge from "../../assets/images/appstore-badge.svg";

function Product21(props) {
  const [product] = useState(props.propsProduct);

  const lowerCaseFirstLetter = (str) =>
    str.charAt(0).toLowerCase() + str.slice(1);

  return (
    <div className="product21">
      <div className="large-left-box">
        <img
          src={`${product.productImageURL}`}
          className="product-image"
          alt=""
        />
      </div>
      <div className="small-right-box">
        <div>
          <h1 className="product-name">{product.productName}</h1>
          <p className="product-desc">{product.productDesc}</p>
          {product.isRedirect === true ? (
            <Link
              to={`/products/${lowerCaseFirstLetter(
                product.productName.replace(/\s/g, "")
              )}`}
              target="_blank"
            >
              <span className="highlight-blue">{product.productName}</span>
            </Link>
          ) : (
            <Link
              to={`/products/${lowerCaseFirstLetter(
                product.productName.replace(/\s/g, "")
              )}`}
            >
              <span className="highlight-blue">Learn More</span>
            </Link>
          )}
          <div>
            <img src={playstoreBadge} className="store-icon" alt="playstore" />
            <img src={appstoreBadge} className="store-icon" alt="playstore" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product21;
