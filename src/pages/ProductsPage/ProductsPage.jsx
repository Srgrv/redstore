import React from "react";
import { useSelector } from "react-redux";

//style
import "./ProductsPage.css";

//containers
import Header from "../../containers/Header/Header";

//components
import Product from "../../components/Product/Product";

const ProductsPage = () => {
  const allProducts = useSelector((state) => state.products.allProducts);

  return (
    <div className="productsPage">
      <div className="productsPage__container ">
        <Header />
      </div>
      <div className="small-container">
        <div className="products__row row2">
          <h2>All Products</h2>
          <select>
            <option>Default Shorting</option>
            <option>Short by price</option>
            <option>Short by popularity</option>
            <option>Short by rating</option>
            <option>Short by sale</option>
          </select>
        </div>

        <div className="products__row">
          {allProducts.map((item) => (
            <Product
              key={item.image}
              image={item.image}
              h4={item.name}
              i1={item.i1}
              i2={item.i2}
              i3={item.i3}
              i4={item.i4}
              i5={item.i5}
              cost={item.cost}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
