// src/home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import logo from "./logo.png";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="home-page">
      <Navbar />
      <header className="hero-section">
        <h1>Welcome to </h1>
        <div className={"loginLogo"}>
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <p>Discover, share, and enjoy recipes from around the world!</p>
      </header>

      <section className="featured-recipes">
        <h2>Featured Recipes</h2>
        <div className="recipe-cards">
          <div className="recipe-card">
            <img src="https://via.placeholder.com/150" alt="Recipe 1" />
            <h3>Recipe Name 1</h3>
          </div>
          <div className="recipe-card">
            <img src="https://via.placeholder.com/150" alt="Recipe 2" />
            <h3>Recipe Name 2</h3>
          </div>
          <div className="recipe-card">
            <img src="https://via.placeholder.com/150" alt="Recipe 3" />
            <h3>Recipe Name 3</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
