import React , { useEffect } from "react";
import "./Products.css";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="products">
      <h1>Products</h1>
    </div>
  );
}

export default Products;
