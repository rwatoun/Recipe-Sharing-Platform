// src/navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../Logo/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="navItem">
          <button className={"recipesButton"}>Recipes</button>
          <div className="dropdownMenu">
            <Link className="recipeTitle" to="/recipe/1">
              Recipe 1
            </Link>
            <Link className="recipeTitle" to="/recipe/2">
              Recipe 2
            </Link>
            <Link className="recipeTitle" to="/recipe/3">
              Recipe 3
            </Link>
          </div>
        </li>
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login" className="login-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
