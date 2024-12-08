// This file contains the template for how recipes will be displayed

import React, { useState } from "react";
import "./Recipe.css";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../Footer/footer";
import bullet from "./bullet.png";
import Presentation from "./Presentation/presentation";

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
      <Presentation
        title={title}
        image={image}
        numIngredients={numIngredients}
        time={time}
        calories={calories}
        author={author}
      />

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
