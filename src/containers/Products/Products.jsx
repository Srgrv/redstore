import React from "react";

//icons
import { ImStarFull } from "react-icons/im";
import { ImStarEmpty } from "react-icons/im";
import { ImStarHalf } from "react-icons/im";

//style
import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      <div className="small-container">
        <h2 className="products__title">Featured Products</h2>
        <div className="products__row">
          <div className="products__row-col">
            <img src="./images/product-1.jpg" alt="product-1" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarEmpty />
            </div>
            <p>$50.00</p>
          </div>
          <div className="products__row-col">
            <img src="./images/product-2.jpg" alt="product-2" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarHalf />
              <ImStarEmpty />
            </div>
            <p>$50.00</p>
          </div>
          <div className="products__row-col">
            <img src="./images/product-3.jpg" alt="product-3" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarEmpty />
              <ImStarEmpty />
            </div>
            <p>$50.00</p>
          </div>
          <div className="products__row-col">
            <img src="./images/product-4.jpg" alt="product-4" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarHalf />
            </div>
            <p>$50.00</p>
          </div>
        </div>
        <h2 className="products__title">Latest Products</h2>
      </div>
    </div>
  );
};

export default Products;
