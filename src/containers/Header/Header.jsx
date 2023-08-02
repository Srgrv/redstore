import React from "react";
import { Link } from "react-router-dom";

//style
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Products</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Contacts</Link>
          </li>
          <li>
            <Link>Account</Link>
          </li>
        </ul>
      </nav>

      <img className="header__img" src="./images/cart.png" alt="cart" />
      <img className="header__menuIcon" src="./images/menu.png" />
    </div>
  );
};

export default Header;
