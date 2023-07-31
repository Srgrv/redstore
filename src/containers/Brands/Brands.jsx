import React from "react";

//style
import "./Brands.css";

const Brands = () => {
  return (
    <div className="brands">
      <div className="small-container">
        <div className="brands__row">
          <div className="brands__row-col">
            <img src="./images/logo-godrej.png" alt="logo-godrej" />
          </div>
          <div className="brands__row-col">
            <img src="./images/logo-oppo.png" alt="logo-oppo" />
          </div>
          <div className="brands__row-col">
            <img src="./images/logo-coca-cola.png" alt="logo-coca-cola" />
          </div>
          <div className="brands__row-col">
            <img src="./images/logo-paypal.png" alt="logo-paypal" />
          </div>
          <div className="brands__row-col">
            <img src="./images/logo-philips.png" alt="logo-philips" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
