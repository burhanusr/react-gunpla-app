import React from "react";
import { Link, NavLink } from "react-router-dom";
import carakaLogo from "../../assets/svg/caraka.svg";
import cart from "../../assets/svg/cart.svg";
import "./navbar.css";

function index() {
  return (
    <header className="container">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={carakaLogo} alt="Caraka Tech Logo" />
          </Link>
          <div className="line"></div>
        </div>

        <ul className="nav-links">
          <li className="nav-item">
            <NavLink to="/kits">Model Kits</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/accessories">Accessories</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/builds">Custom Builds</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/">My Account</NavLink>
          </li>
          <li className="nav-icon">
            <Link to="/">
              <img src={cart} alt="Cart" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default index;
