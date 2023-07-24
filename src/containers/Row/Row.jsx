import React from "react";

//style
import "./Row.css";

//components
import RedButton from "../../components/RedButton/RedButton";

const Row = () => {
  return (
    <div className="row">
      <div className="row__col">
        <h1>
          Give Your Workout <br />A New Style!
        </h1>
        <p>
          Success isn't always about greatness. It's about consistency.
          Consistent <br />
          hard work gains succes. Greatness will come.
        </p>
        <RedButton text="Explore Now" />
      </div>
      <div className="row__col">
        <img src="../../images/image1.png" alt="image1" />
      </div>
    </div>
  );
};

export default Row;
