import React, { useState } from "react";
import "./presentation.css";

function Presentation({
  title,
  image,
  numIngredients,
  time,
  calories,
  author,
}) {
  return (
    <div className={"recipeFirstContent"}>
      <div className={"leftRecipeFirstContent"}>
        <img className={"recipeImg"} src={image} />
      </div>
      <div className={"rightRecipeFirstContent"}>
        <div className={"topRightRecipeFirstContent"}>
          <div className={"titleOfRecipe"}>{title}</div>
          <p className={"nameOfAuthor"}>By {author}</p>
        </div>
        <div className={"bottomRightRecipeFirstContent"}>
          <div className={"numIngre"}>
            {numIngredients}
            <div className={"textThree"}>Ingredients</div>
          </div>
          <div className={"timee"}>
            {time}
            <div className={"textThree"}>Minutes</div>
          </div>
          <div className={"caloriess"}>
            {calories}
            <div className={"textThree"}>Calories</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
