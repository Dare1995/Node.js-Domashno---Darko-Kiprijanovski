const fs = require("fs");

const getRecipe = async (req, res) => {
    try {
        let output = await parseTemplate("recipe_form");
        res.status(200).send(output);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error!");
    }
};

const postRecipe = async (req, res) => {
    const { ingredientOne, ingredientTwo, operation } = req.body;

    if (!ingredientOne || !ingredientTwo) {
        return res.status(400).send("Invalid input!");
    }

    let result = "";

    switch (operation) {
        case "grill":
            result = `Grilling ${ingredientOne} with ${ingredientTwo}`;
            break;
        case "sear":
            result = `Searing ${ingredientOne} with ${ingredientTwo}`;
            break;
        case "fry":
            result = `Simmering ${ingredientOne} with ${ingredientTwo}`;
            break;
        case "boil":
            result = `Boiling ${ingredientOne} with ${ingredientTwo}`;
            break;
        default:
            return res.status(400).send("Invalid operation!");
    }

    try {
        let output = await parseTemplate("recipe", {
            result,
            name: "Recept"
        });
        res.status(200).send(output);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error!");
    }
};

const parseTemplate = async (template, data = {}) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${__dirname}/../views/${template}.html`, "utf-8",
            (err, content) => {
                if (err) return reject(err);

                if (data) {
                    console.log("data", data);
                    for (d in data) {

                        console.log("d", d);
                        content = content.replace(`{{${d}}}`, data[d]);
                    }
                }

                return resolve(content);
            }
        );
    });
};

module.exports = {
    getRecipe,
    postRecipe,
};
