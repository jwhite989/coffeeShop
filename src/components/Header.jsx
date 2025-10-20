import coffeeShop from "../assets/coffeeShop.png";

function Header() {
  return (
    <header className="navbar">
      <nav className="nav-container">
        <div className="logo">
          <img src={coffeeShop} alt="Logo" />
          <h1>A Bean Above</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#featured">Featured</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
