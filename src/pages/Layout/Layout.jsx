import React from "react";
import { Outlet } from "react-router-dom";

//style
import "./Layout.css";

//containers

import Footer from "../../containers/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
