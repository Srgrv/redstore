import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

//style
import "./ProductsPage.css";

//containers
import Header from "../../containers/Header/Header";

//components
import Product from "../../components/Product/Product";
import Pagination from "../../components/Pagination/Pagination";

const ProductsPage = () => {
  const allProducts = useSelector((state) => state.products.allProducts);

  const [countries, setCountries] = useState([]);
  const refLoading = React.useRef(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(12);

  const trueLoading = () => {
    refLoading.current = true;
    setLoading(true);
  };

  const falseLoading = () => {
    refLoading.current = false;
    setLoading(false);
  };

  const fetchCountries = async () => {
    const promise = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(allProducts);
      }, 1000);
    });
    setCountries(promise);
  };

  React.useEffect(() => {
    trueLoading();

    console.log(refLoading.current);

    fetchCountries();
    console.log(countries);

    falseLoading();

    console.log(refLoading.current);
  }, [countries]);

  const lastCountryIndex = countriesPerPage * currentPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountries = countries.slice(firstCountryIndex, lastCountryIndex);

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="page-container">
      <div className="no-small-container">
        <Header />
      </div>

      <div className="small-container">
        <Pagination
          pageQty={pageNumber.length}
          currentPage={currentPage}
          setCurrentPage={(numberPage) => {
            setCurrentPage(numberPage);
          }}
        />
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
        {/* {refLoading.current && <h1>Loading...ref</h1>}
        {loading && <h1>Loading...state</h1>} */}

        <div className="products__row">
          {currentCountries.map((item) => {
            return (
              <Product
                key={item.id}
                to={item.id}
                image={item.image}
                h4={item.name}
                i1={item.i1}
                i2={item.i2}
                i3={item.i3}
                i4={item.i4}
                i5={item.i5}
                cost={item.cost}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

// я готов, Я готов, если сомневался, я здесь, иди сюда
// если по спортивному интересу,
// когда ты приедешь поставить точку,
//  который ему даст поражение здесь стоит
//
