import React from "react";
import { useParams } from "react-router-dom";
import Recipe from "./Recipe";
import recipes from "./RecipesData"; // Import mock data

function RecipePage() {
  const { id } = useParams();
  const recipe = recipes[id]; // Look up recipe data by ID

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <Recipe
      title={recipe.title}
      image={recipe.image}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
    />
  );
}

export default RecipePage;
