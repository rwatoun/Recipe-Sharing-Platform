import React, { useState } from "react";
import "./instructions.css";

function Instructions({ instructions }) {
  // State to manage the selected instruction step
  const [selectedStep, setSelectedStep] = useState(0);

  const handleStepClick = (index) => {
    setSelectedStep(index);
  };

  return (
    <div className={"recipeThirdContent"}>
      <div className={"topRecipeThirdContent"}>Instructions</div>
      <div className={"bottomRecipeThirdContent"}>
        <div className={"leftBottomRecipeThirdContent"}>
          {instructions.map((_, index) => (
            <button
              key={index}
              onClick={() => handleStepClick(index)}
              className={`stepButton ${selectedStep === index ? "active" : ""}`}
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
  );
}

export default Instructions;
