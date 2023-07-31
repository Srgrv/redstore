import React from "react";

//icons
import { BsQuote } from "react-icons/bs";

//style
import "./Comments.css";

const Comments = ({ text, i1, i2, i3, i4, i5, src, name }) => {
  return (
    <div className="comments">
      <BsQuote />
      <p>{text}</p>
      <div className="commments__rating">
        {i1}
        {i2}
        {i3}
        {i4}
        {i5}
      </div>
      <img src={src} alt="user-1" />
      <h3>{name}</h3>
    </div>
  );
};

export default Comments;
