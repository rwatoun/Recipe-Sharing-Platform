// This file contains the data about the recipes we have
import spagh from "./spagh.png";

const recipes = {
  1: {
    title: "Spaghetti Carbonara",
    image: spagh, // TO CHANGE
    numIngredients: "5",
    time: "30 ",
    calories: "500",
    ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Pepper"],
    instructions: [
      "Boil the spaghetti in salted water until al dente.",
      "In a bowl, whisk eggs and Parmesan cheese.",
      "Cook pancetta in a pan until crispy.",
      "Combine the spaghetti, egg mixture, and pancetta, stirring well. Serve hot.",
    ],
    author: "Marwa",
  },
  2: {
    title: "Avocado Toast",
    image: "path/to/avocado.jpg",
    numIngredients: "5",
    time: "15 ",
    calories: "330",
    ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Lemon Juice"],
    instructions: [
      "Toast the bread.",
      "Mash the avocado with salt, pepper, and lemon juice.",
      "Then spread on toast.",
    ],
    author: "Justyne",
  },
  3: {
    title: "Pancakes",
    image: "path/to/pancakes.jpg",
    numIngredients: "6",
    time: "40 ",
    calories: "600",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter", "Maple Syrup"],
    instructions: [
      "Mix flour, milk, eggs, and sugar.",
      "Pour batter onto a hot griddle and cook until golden.",
      "Serve with butter and maple syrup.",
    ],
  },
};

export default recipes;
