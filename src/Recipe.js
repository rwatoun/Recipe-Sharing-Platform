// This file contains the template for how recipes will be displayed

import React from "react";
import "./Recipe.css";
import Navbar from "./navbar";
import Footer from "./footer";

function Recipe({
  title,
  image,
  numIngredients,
  time,
  calories,
  ingredients,
  instructions,
  author,
}) {
  return (
    <div className={"recipePage"}>
      <Navbar />
      <div className={"recipeFirstContent"}>
        <div className={"leftRecipeFirstContent"}>
          <img className={"recipeImg"} src={image} />
        </div>
        <div className={"rightRecipeFirstContent"}>
          <div className={"topRightRecipeFirstContent"}>
            <h1>{title}</h1>
            <p>By {author}</p>
          </div>
          <div className={"bottomRightRecipeFirstContent"}>
            <div className={"numIngre"}>
              {numIngredients}
              <p className={"textThree"}>Ingredients</p>
            </div>
            <div className={"timee"}>
              {time}
              <p className={"textThree"}>Minutes</p>
            </div>
            <div className={"caloriess"}>
              {calories}
              <p className={"textThree"}>Calories</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"recipeSecondContent"}></div>
      <div className={"recipeThirdContent"}></div>
      <Footer />
    </div>
  );
}

export default Recipe;
