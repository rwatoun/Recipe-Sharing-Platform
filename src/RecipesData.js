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
    instructions:
      "Cook the spaghetti. In a bowl, mix eggs and Parmesan. Combine with pancetta and pepper.",
    author: "Marwa",
  },
  2: {
    title: "Avocado Toast",
    image: "path/to/avocado.jpg",
    ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Lemon Juice"],
    instructions:
      "Toast the bread, mash the avocado with salt, pepper, and lemon juice, then spread on toast.",
  },
  3: {
    title: "Pancakes",
    image: "path/to/pancakes.jpg",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter", "Maple Syrup"],
    instructions:
      "Mix flour, milk, eggs, and sugar. Pour batter onto a hot griddle and cook until golden. Serve with butter and maple syrup.",
  },
};

export default recipes;
