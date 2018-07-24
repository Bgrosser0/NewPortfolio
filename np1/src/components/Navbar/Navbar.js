import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        Ben Grosser
      </Link>
      <div>
        <ul className="navbar-nav">
          <li
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/about"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link to="/About" className="nav-link">
              About Me
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/discover"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link to="/Projects" className="nav-link">
             Projects
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/search"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
  
  export default Navbar;
  