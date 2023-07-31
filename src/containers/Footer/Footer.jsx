import React from "react";

//style
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__row">
        <div className="footer__row-col1">
          <h3>Download Our App</h3>
          <p>Download App for Android and IOS mobile phone.</p>
          <div>
            <img src="./images/play-store.png" alt="play-store" />
            <img src="./images/app-store.png" alt="app-store" />
          </div>
        </div>
        <div className="footer__row-col2">
          <img src="./images/logo-white.png" alt="logo-white" />
          <p>
            Our Purpose Is To Sustainably Make the Pleasure and Benefits of
            Sports Accessible to the Many.
          </p>
        </div>
        <div className="footer__row-col3">
          <h3>Useful Links</h3>
          <ul>
            <li>Coupons</li>
            <li>Blog Post</li>
            <li>Return Policy</li>
            <li>Join Affiliate</li>
          </ul>
        </div>
        <div className="footer__row-col4">
          <h3>Follow us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer__copyright">Copyright - 2023</p>
    </div>
  );
};

export default Footer;
