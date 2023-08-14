import React from "react";
import { Link } from "react-router-dom";

//style
import "./Product.css";

const Product = ({ image, h4, i1, i2, i3, i4, i5, cost, to }) => {
  return (
    <Link className="product" to={`${to}`}>
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
    </Link>
  );
};

export default Product;
