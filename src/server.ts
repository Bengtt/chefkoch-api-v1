import express from "express";
import { getRecipe } from "./getRecipe.js";
import { fetchMeals } from "./mealFetcher/index.js";

const app = express();
app.use(express.json());

app.post("/fetch-meals", async (req, res) => {
  try {
    const result = await fetchMeals(
      req.body.pagenumber,
      req.body.mealType,
      req.body.preptime,
    );
    res.json({ result });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    res.status(500).json({ error: errorMessage });
  }
});
app.post("/fetch-recipe", async (req, res) => {
  try {
    const result = await getRecipe(req.body.recipeURL);
    res.json({ result });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    res.status(500).json({ error: errorMessage });
  }
});

const PORT = Number(process.env.PORT);
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API listening on port ${PORT}`);
});
