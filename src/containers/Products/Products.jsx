import React from "react";

//icons
import { ImStarFull } from "react-icons/im";
import { ImStarEmpty } from "react-icons/im";
import { ImStarHalf } from "react-icons/im";

//style
import "./Products.css";

//components
import Product from "../../components/Product/Product";

const Products = () => {
  return (
    <div className="products">
      <div className="small-container">
        <h2 className="products__title">Featured Products</h2>
        <div className="products__row">
          <Product
            image="./images/product-1.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarEmpty />}
            i4={<ImStarEmpty />}
            i5={<ImStarEmpty />}
            cost="50"
          />
          <Product
            image="./images/product-2.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarFull />}
            i4={<ImStarHalf />}
            i5={<ImStarEmpty />}
            cost="50"
          />
          <Product
            image="./images/product-3.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarFull />}
            i4={<ImStarEmpty />}
            i5={<ImStarEmpty />}
            cost="50"
          />
          <Product
            image="./images/product-4.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarFull />}
            i4={<ImStarFull />}
            i5={<ImStarHalf />}
            cost="50"
          />
        </div>
        <h2 className="products__title">Latest Products</h2>
        <div className="products__row">
          <Product
            image="./images/product-5.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarEmpty />}
            i4={<ImStarEmpty />}
            i5={<ImStarEmpty />}
            cost="50"
          />
          <Product
            image="./images/product-6.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarFull />}
            i4={<ImStarHalf />}
            i5={<ImStarEmpty />}
            cost="50"
          />
          <Product
            image="./images/product-7.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarFull />}
            i4={<ImStarEmpty />}
            i5={<ImStarEmpty />}
            cost="50"
          />
          <Product
            image="./images/product-8.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarFull />}
            i4={<ImStarFull />}
            i5={<ImStarHalf />}
            cost="50"
          />
          <Product
            image="./images/product-9.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarEmpty />}
            i4={<ImStarEmpty />}
            i5={<ImStarEmpty />}
            cost="50"
          />
          <Product
            image="./images/product-10.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarFull />}
            i4={<ImStarHalf />}
            i5={<ImStarEmpty />}
            cost="50"
          />
          <Product
            image="./images/product-11.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarFull />}
            i4={<ImStarEmpty />}
            i5={<ImStarEmpty />}
            cost="50"
          />
          <Product
            image="./images/product-12.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarFull />}
            i4={<ImStarFull />}
            i5={<ImStarHalf />}
            cost="50"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
