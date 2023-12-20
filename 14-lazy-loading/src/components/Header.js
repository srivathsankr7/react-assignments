import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>Food app</h1>
      </div>
      <div id="navbar">
        <ul>
          <li>
            <Link to="/" className="navlink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navlink">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navlink">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
