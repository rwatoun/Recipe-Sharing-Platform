// src/navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./home.css"; // Reuse `home.css` for styling
import logo from "./logo.png";

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
            <Link className="recipeTitle">Recipe 1</Link>
            <Link className="recipeTitle">Recipe 2</Link>
            <Link className="recipeTitle">Recipe 3</Link>
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
