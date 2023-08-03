import React, { useState } from "react";
import { Link } from "react-router-dom";

//style
import "./Header.css";

const Header = () => {
  const [menu_class, setMenuClass] = useState("header__nav-ul hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setMenuClass(
      !isMenuClicked ? "header__nav-ul visible" : "header__nav-ul hidden"
    );
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <nav className="header__nav">
        <ul className={menu_class}>
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
      <img
        onClick={updateMenu}
        className="header__menuIcon"
        src="./images/menu.png"
      />
    </div>
  );
};

export default Header;
