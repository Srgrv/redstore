import React from "react";

//style
import "./HomePage.css";

//containers
import Categories from "../../containers/Categories/Categories";
import Products from "../../containers/Products/Products";
import Offer from "../../containers/Offer/Offer";
import Testimonial from "../../containers/Testimonial/Testimonial";
import Brands from "../../containers/Brands/Brands";
import Header from "../../containers/Header/Header";
import Row from "../../containers/Row/Row";

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="homePage__container">
        <Header />
        <Row />
      </div>
      <Categories />
      <Products />
      <Offer />
      <Testimonial />
      <Brands />
    </div>
  );
};

export default HomePage;
