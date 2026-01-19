import { fetcher } from "./fetcher";
import * as cherrio from "cheerio";
import { IMeal } from "./types";

export const fetchMeals = async (pagenumber: string) => {
  let parsedPagenumber: number;
  if ((pagenumber && pagenumber != null) || pagenumber != undefined) {
    parsedPagenumber = parseInt(pagenumber);
  } else {
    parsedPagenumber = 0;
  }
  const res = await fetcher(
    `https://www.chefkoch.de/rs/s${parsedPagenumber}t21p30o3/vegan/Hauptspeise-Rezepte.html`,
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
    if (index > 10) {
      return false;
    }
  });

  console.log("Total meal found:", meal.length);
  return meal;
};
