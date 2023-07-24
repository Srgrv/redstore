import React from "react";

//style
import "./Offer.css";

//components
import RedButton from "../../components/RedButton/RedButton";

const Offer = () => {
  return (
    <div className="offer">
      <div className="small-container">
        <div className="offer__row">
          <div className="offer__row-col">
            <img src="./images/exclusive.png" alt="exclusive" />
          </div>

          <div className="offer__row-col">
            <p>Exclusive Available on RedStore</p>
            <h1>Smart Band 4</h1>
            <small>
              The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
              AMOLED color full-touch display with adjustable brightness, so
              everything is clear as can be.
            </small>
            <br />
            <RedButton text="Buy Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
