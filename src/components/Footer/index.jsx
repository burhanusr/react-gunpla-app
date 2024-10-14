import React from "react";
import { Link, NavLink } from "react-router-dom";
import carakaLogo from "../../assets/svg/caraka.svg";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";
import dribble from "../../assets/svg/dribble.svg";
import "./footer.css";

function index() {
  return (
    <footer className="container">
      <div className="footer-section">
        <div className="logo">
          <Link to="/">
            <img src={carakaLogo} alt="Caraka Tech Logo" />
          </Link>
        </div>
        <ul className="center nav-links">
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
          <li className="nav-item">
            <NavLink to="/">Cart</NavLink>
          </li>
        </ul>
        <ul className="social nav-links">
          <li className="nav-icon">
            <Link to="">
              <img src={instagram} alt="Instagram Logo" />
            </Link>
          </li>
          <li className="nav-icon">
            <Link to="">
              <img src={facebook} alt="Facebook Logo" />
            </Link>
          </li>
          <li className="nav-icon">
            <Link to="">
              <img src={dribble} alt="Dribble Logo" />
            </Link>
          </li>
        </ul>
        <div className="copyright">
          <p>© 2023 Caraka Tech is proudly powered by Webflow.</p>
        </div>
        <ul className="condition nav-links">
          <li className="nav-item">
            <NavLink to="">Privacy Policy</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="">Terms & Condition</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="">Cookies</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default index;
