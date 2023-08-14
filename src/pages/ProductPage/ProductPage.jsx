import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//icons
import { ImStarFull } from "react-icons/im";
import { ImStarEmpty } from "react-icons/im";
import { ImStarHalf } from "react-icons/im";

//containers
import Header from "../../containers/Header/Header";

//components
import Product from "../../components/Product/Product";
import RedButton from "../../components/RedButton/RedButton";

//style
import "./ProductPage.css";

const ProductPage = () => {
  const products = useSelector((state) => state.products.allProducts);
  const numberOfProduct = useParams().id;
  const product = products[numberOfProduct - 1];

  const [value, setValue] = useState(1);

  const [active, setActive] = useState(product.smalls[0].small);

  const changeValue = (num) => {
    setValue(num);
  };

  return (
    <div className="page-container">
      <div className="no-small-container">
        <Header />
      </div>

      <div className="small-container">
        <div className="productPage">
          <div className="productPage_row">
            <img src={`${active}`} alt="test" id="product-img" />

            <div className="productPage_row-gallery">
              {product.smalls.map((item) => {
                return (
                  <div>
                    <img
                      key={item.id}
                      src={item.small}
                      className="small-img"
                      onClick={() =>
                        setActive(product.smalls[item.id - 1].small)
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="productPage_row">
            <p>Home / T-Shirt</p>
            <h1>{product.name}</h1>
            <h4>{`$${product.cost}`}</h4>
            <select>
              <option value="">Select Size</option>
              <option value="">XXL</option>
              <option value="">XL</option>
              <option value="">L</option>
              <option value="">M</option>
              <option value="">S</option>
            </select>
            <input
              type="number"
              value={value}
              onChange={(e) => changeValue(e.target.value)}
            />
            <RedButton text="Add To Card" />
            <h3>Product details</h3>
            <br />
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      <div className="small-container">
        <div className="products__row">
          <Product
            image="../../../images/product-1.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarEmpty />}
            i4={<ImStarEmpty />}
            i5={<ImStarEmpty />}
            cost="50"
          />
          <Product
            image="../../../product-2.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarFull />}
            i4={<ImStarHalf />}
            i5={<ImStarEmpty />}
            cost="50"
          />
          <Product
            image="../../../images/product-3.jpg"
            h4="Red Printed"
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarFull />}
            i4={<ImStarEmpty />}
            i5={<ImStarEmpty />}
            cost="50"
          />
          <Product
            image="../../../images/product-4.jpg"
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

export default ProductPage;
