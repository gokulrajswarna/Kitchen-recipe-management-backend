const mongoose = require("mongoose");

const RecipeDetailsScehma = new mongoose.Schema(
  {
    recipename: String,
    description: String,
    ingredients: String,
    category: String,
    productImage: String,
  },
  {
    collection: "KitchenRecipe",
  }
);

mongoose.model("KitchenRecipe", RecipeDetailsScehma);