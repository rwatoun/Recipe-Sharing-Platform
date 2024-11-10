import React from "react";
import "./Recipe.css"; // Optional: Add custom styles here

function Recipe({ title, image, ingredients, instructions }) {
  return (
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
  );
}

export default Recipe;
