// src/home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../Footer/footer";
import redirection1 from "./redirection1.jpg";
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
      <div className="hero-section">
        <h1 style={{ fontSize: "60px" }}>
          {" "}
          Having a <span style={{ fontSize: "90px" }}>recipi </span>is always
          better{" "}
        </h1>
        <h1 style={{ fontSize: "40px" }}>
          Discover, Taste, and Share Traditions of the World
        </h1>
      </div>
      <div className="featured-recipes">
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
      </div>
      <div className="trap1">
        <div className="trap1-img">
          {" "}
          <img src={redirection1} />
        </div>
        <div className="trap1-text">
          <h1>You made it, you own it.</h1>
          <p>
            Your recipes are yours, and they stay that way. You always own your
            culinary creations, subscriber list, and community connections. With
            full creative freedom and no intermediaries, you can share your
            passion for cooking just the way you want.
          </p>
          <a>Start Sharing Your Recipes</a>
        </div>
      </div>
      <div className="trap1">
        <div className="trap1-img">
          {" "}
          <img src={redirection1} />
        </div>
        <div className="trap1-text">
          <h1>Grow your culinary community.</h1>
          <p>
            Building your audience doesn’t have to be a solo effort. Our
            platform fosters a network of food lovers, ensuring your recipes
            reach the people who’ll love them most. Plus, recommendations and
            community-driven sharing help your following grow effortlessly.
          </p>
          <a>Start Sharing Your Recipes</a>
        </div>
      </div>
      <div className="trap1">
        <div className="trap1-img">
          {" "}
          <img src={redirection1} />
        </div>
        <div className="trap1-text">
          <h1>Let us handle the rest.</h1>
          <p>
            Our Recipe Sharing Platform takes care of everything: from hosting
            your recipe pages and showcasing stunning food photos to handling
            subscriptions and support. With an easy-to-use interface, you can
            focus on sharing your love for food while we manage the details.
          </p>
          <a>Start Sharing Your Recipes</a>
        </div>
      </div>
      <div className="redirection">
        <div className="redirection-title">
          <h1 style={{ fontSize: "70px" }}> a world class platform</h1>
        </div>
        <div className="redirections">
          <div className="redirection1">
            <div className="redirection1-text">
              <p>
                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
              </p>
            </div>
            <div className="redirection1-img">
              <img src={redirection1} />
            </div>
          </div>
          <div className="redirection1">
            <div className="redirection1-img">
              <img src={redirection1} />
            </div>
            <div className="redirection1-text">
              <p>
                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
              </p>
            </div>
          </div>
          <div className="redirection1">
            <div className="redirection1-text">
              <p>
                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
              </p>
            </div>
            <div className="redirection1-img">
              <img src={redirection1} />
            </div>
          </div>
          <div className="redirection1">
            <div className="redirection1-img">
              <img src={redirection1} />
            </div>
            <div className="redirection1-text">
              <p>
                blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
