import { fetcher } from "../fetcher";
import * as cherrio from "cheerio";
import { IMeal, MealTypes, PrepTime } from "../types";
import { getMealtype } from "./getMealtype";
import { getPreptime } from "./getPreptime";

export const fetchMeals = async (
  pagenumber: string,
  mealType: MealTypes,
  preptime: PrepTime,
) => {
  let parsedPagenumber: number;
  if ((pagenumber && pagenumber != null) || pagenumber != undefined) {
    parsedPagenumber = parseInt(pagenumber);
  } else {
    parsedPagenumber = 0;
  }

  // get parameter for search
  const { mealTypeParam1, mealTypeParam2 } = getMealtype(mealType);
  const prepTimeParam = getPreptime(preptime);

  const res = await fetcher(
    `https://www.chefkoch.de/rs/s${parsedPagenumber}${mealTypeParam1}${prepTimeParam}o3/vegan/${mealTypeParam2}.html`,
  );
  const $ = cherrio.load(res);

  const meal: Array<IMeal> = [];
  $(".ds-recipe-card").each((index, element) => {
    const name: string = $(element).find(".ds-recipe-card__headline").text();
    const img = $(element).find(".ds-teaser-link__image").attr("src");
    const preptime = $(element).find(".ds-recipe-info__text").text();
    const description = $(element)
      .find(".ds-recipe-card__description")
      .text()
      .trim();
    const recipeLink = $(element).find(".ds-recipe-card__link").attr("href");

    meal.push({
      name,
      img,
      preptime,
      description,
      recipeLink,
    });

    // limit output at 11 recipes
    if (index > 10) {
      return false;
    }
  });

  console.log("Total meal found:", meal.length);
  return meal;
};
