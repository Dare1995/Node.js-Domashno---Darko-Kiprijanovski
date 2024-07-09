const express = require("express");
const { getRecipe, postRecipe } = require("./handlers/recipe");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.get("/recipe", getRecipe);
app.post("/recipe", postRecipe);

app.listen(3000, () => console.log("Serverot raboti na porta 3000!"));

