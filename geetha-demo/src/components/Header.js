import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ banner, bannerColor }) => {
  const [value, setValue] = useState("login");

  // const changeStatus = () => {
  //   value === "login" ? setValue("logout") : setValue("login");
  // };

  return (
    <div className="header">
      <div>
        <h1>
          I'm header JSX H1{bannerColor} {banner}
        </h1>
        <button
          className="loginButton"
          onClick={() => {
            value === "login" ? setValue("logout") : setValue("login");
          }}
        >
          {value}
        </button>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/" className="navlink">
              Home
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/about">
              About us
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/contact">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
