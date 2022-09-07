import React from "react";
import logo from "../../logo.svg";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
