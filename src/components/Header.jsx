import coffeeShop from "../assets/coffeeShop.png";
import "../styles/Header.css";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
