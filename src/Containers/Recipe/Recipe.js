// This file contains the template for how recipes will be displayed

import "./Recipe.css";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../Footer/footer";
import bullet from "./bullet.png";
import Presentation from "./Presentation/presentation";
import Ingredients from "./Ingredients/ingredients";
import Instructions from "./Instructions/instructions";

function Recipe({
  title,
  image,
  description,
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
      <Presentation
        title={title}
        description={description}
        image={image}
        numIngredients={numIngredients}
        time={time}
        calories={calories}
        author={author}
      />
      <Ingredients ingredients={ingredients} />

      <Instructions instructions={instructions} />
      <Footer />
    </div>
  );
}

export default Recipe;
