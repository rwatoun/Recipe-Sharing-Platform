// This file contains the template for how recipes will be displayed

import React, { useState } from "react";
import "./Recipe.css";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../Footer/footer";
import bullet from "./bullet.png";

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
  // State to manage the selected instruction step
  const [selectedStep, setSelectedStep] = useState(0);

  const handleStepClick = (index) => {
    setSelectedStep(index);
  };

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
      <div className={"recipeSecondContent"}>
        <div className={"topRecipeSecondContent"}>
          <div className={"leftTopRecipeSecondContent"}>Ingredients</div>
          <div className={"rightTopRecipeSecondContent"}></div>
        </div>
        <div className={"bottomRecipeSecondContent"}>
          <ul className="ingredientsList">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="ingredientItem">
                <img src={bullet} className={"customBullet"} />
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={"recipeThirdContent"}>
        <div className={"topRecipeThirdContent"}>Instructions</div>
        <div className={"bottomRecipeThirdContent"}>
          <div className={"leftBottomRecipeThirdContent"}>
            {instructions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`stepButton ${
                  selectedStep === index ? "active" : ""
                }`}
              >
                Step {index + 1}
              </button>
            ))}
          </div>
          <div className={"rightBottomRecipeThirdContent"}>
            <div className={"stepBubble"}>
              <p>{instructions[selectedStep]}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recipe;
