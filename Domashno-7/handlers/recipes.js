const { read, write } = require("../read-write");

// GET method
const getRecipes = async (req, res) => {
  const data = await read();
  res.status(200).send(data);
};


// POST method
const createRecipes = async (req, res) => {
  const recipes = await read();
  recipes.push(req.body);
  await write(recipes);
  res.status(201).send("Recipe is created!");
};


// DELETE method
const deleteRecipe = async (req, res) => {
  const recipeId = req.params.index;

  let recipes = await read();

  recipes = recipes.filter(
    (recipe, index) => index !== Number(recipeId)
  );

  await write(recipes);

  res.status(200).send("Recipe deleted!");
};


// PUT method
const updateRecipe = async (req, res) => {
  const recipeId = req.params.index; 
  const updatedRecipeData = req.body;

  try {
    let recipes = await read();
    recipes = recipes.map((recipe, index) => {
      if (index === Number(recipeId)) {
        return {
          ...recipe,
          ...updatedRecipeData,
        };
      } else {
        return recipe;
      }
    });

    await write(recipes);
    res.status(200).send("Recipe updated!");
  } catch (error) {
    res.status(500).send("Error updating recipe");
  }
};


module.exports = {
  getRecipes,
  createRecipes,
  deleteRecipe,
  updateRecipe,
};