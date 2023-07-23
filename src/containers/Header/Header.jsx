import React from "react";
import { Link } from "react-router-dom";

//style
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
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
      </div>
    </div>
  );
};

export default Header;
