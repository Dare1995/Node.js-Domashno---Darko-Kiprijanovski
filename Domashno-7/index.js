const express = require("express");
const { getRecipes, createRecipes, deleteRecipe, updateRecipe } = require("./handlers/recipes");


const app = express();

app.use(express.json());

app.get("/recipes", getRecipes);
app.post("/recipes", createRecipes);
app.delete("/recipes/:index", deleteRecipe);
app.put("/recipes/:index", updateRecipe);


app.listen(3000, () => console.log("Server running at port 3000!"));