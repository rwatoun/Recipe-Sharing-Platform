// src/navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./home.css"; // Reuse `home.css` for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Recipi</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login" className="login-link">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
