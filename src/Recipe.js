// This file contains the template for how recipes will be displayed

import React from "react";
import "./Recipe.css";
import Navbar from "./navbar";
import Footer from "./footer";

function Recipe({ title, image, ingredients, instructions }) {
  return (
    <div>
      <Navbar />
      <div className="recipeContainer">
        <h1 className="recipeTitle">{title}</h1>
        <img src={image} alt={title} className="recipeImage" />

        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2>Instructions</h2>
        <p>{instructions}</p>
      </div>
      <Footer />
    </div>
  );
}

export default Recipe;
