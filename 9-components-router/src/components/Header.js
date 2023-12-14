import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Food delivery</h1>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
