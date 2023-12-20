const Header = () => {
  return (
    <div>
      <div className="header">
        <img
          className="banner"
          src="https://images.ctfassets.net/grb5fvwhwnyo/VG5SnaREXOw0A46zLOPjQ/6d8f0a5a8731704096166a18d12b1ca2/Hero-Food-Fresh-Groceries.webp?w=1412&fm=webp"
          alt="Food App"
        />
        <h1>Food App</h1>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="about">About Us</a>
          </li>
          <li>
            <a href="contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
