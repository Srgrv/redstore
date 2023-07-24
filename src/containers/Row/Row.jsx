import React from "react";

//style
import "./Row.css";

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
        <a href="#3">Explore Now &#8594;</a>
      </div>
      <div className="row__col">
        <img src="../../images/image1.png" alt="image1" />
      </div>
    </div>
  );
};

export default Row;
