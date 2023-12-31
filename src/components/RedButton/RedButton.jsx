import React from "react";

//style
import "./RedButton.css";

const RedButton = ({ text }) => {
  return (
    <a className="redButton" href="#f">
      {text} &#8594;
    </a>
  );
};

export default RedButton;
