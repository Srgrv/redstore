import React from "react";

//style
import "./Product.css";

const Product = ({ image, h4, i1, i2, i3, i4, i5, cost }) => {
  return (
    <div className="product">
      <img src={image} alt="product" />
      <h4>{h4}</h4>
      <div className="rating">
        <>{i1}</>
        <>{i2}</>
        <>{i3}</>
        <>{i4}</>
        <>{i5}</>
      </div>
      <p>${cost}</p>
    </div>
  );
};

export default Product;
