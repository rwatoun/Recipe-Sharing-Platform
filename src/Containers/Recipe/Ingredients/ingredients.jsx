import React, { useState } from "react";
import "./ingredients.css";

function ingredients({ ingredients }) {
  return (
    <div className={"recipeSecondContent"}>
      <div className={"recipeSecondContentLeft"}>
        <div className={"topRecipeSecondContentLeft"}>
          <div className={"leftTopRecipeSecondContentLeft"}>Ingredients</div>
          <div className={"rightTopRecipeSecondContentLeft"}>
            <button
              // onClick={}
              className={"metricButton"}
            >
              Metric
            </button>
            <button
              // onClick={}
              className={"USCustomaryButton"}
            >
              US Customary
            </button>
          </div>
        </div>
        <div className={"bottomRecipeSecondContentLeft"}>
          <ul className="ingredientsList">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="ingredientItem">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={"recipeSecondContentRight"}>
        <div className={"topRecipeSecondContentRight"}>Equipment</div>
        <div className={"bottomRecipeSecondContentRight"}>
          <p>blablabla</p>
        </div>
      </div>
    </div>
  );
}

export default ingredients;
