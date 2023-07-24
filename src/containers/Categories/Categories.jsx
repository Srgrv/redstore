import React from "react";

import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <div className="small-container">
        <div className="categories__row">
          <div className="categories__row-col">
            <img src="./images/category-1.jpg" alt="category-1" />
          </div>
          <div className="categories__row-col">
            <img src="./images/category-2.jpg" alt="category-1" />
          </div>
          <div className="categories__row-col">
            <img src="./images/category-3.jpg" alt="category-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
