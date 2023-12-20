import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="banner">
        <img
          className="banner-img"
          src="https://images.ctfassets.net/grb5fvwhwnyo/VG5SnaREXOw0A46zLOPjQ/6d8f0a5a8731704096166a18d12b1ca2/Hero-Food-Fresh-Groceries.webp?w=1412&fm=webp"
          alt="Food delivery"
        ></img>
        <h1>Food delivery</h1>
        <div className="navbar">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
