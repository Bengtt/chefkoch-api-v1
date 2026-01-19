import { fetcher } from "./fetcher";
import * as cherrio from "cheerio";
import { IIngredientList, IInstructionList, IRecipe } from "./types";

export const getRecipe = async (url: string) => {
  const res = await fetcher(url);
  const $ = cherrio.load(res);

  const recipe: IRecipe[] = [];
  const name = $("h1").text();
  const portions = $("body").find(".ds-quantity-control__amount").text();
  const img = $("body").find(".ds-teaser-link__image").attr("src");
  const preptime = $("body").find(".recipe-meta-property-group__value").text();
  const ingredientList: IIngredientList[] = [];

  // get ingredient list
  $(".ds-ingredients-table__tr").each((_index, element) => {
    const amount = $(element)
      .find(".ds-ingredients-table__td--first")
      .first()
      .text();
    const ingredient = $(element)
      .find(".ds-ingredients-table__ingredient-name")
      .text();
    const properties = $(element)
      .find(".ds-ingredients-table__ingredient-properties")
      .text();
    ingredientList.push({
      amount,
      ingredient,
      properties,
    });
  });

  // get instruction list
  const instructionList: IInstructionList[] = [];

  $(".instruction-row").each((_index, element) => {
    const step = $(element).find(".instruction-row__steps").text();
    const instructionText = $(element).find(".instruction__text").text();

    instructionList.push({
      step,
      instructionText,
    });
  });

  recipe.push({
    name,
    portions,
    img,
    preptime,
    ingredientList,
    instructionList,
    url,
  });

  return recipe;
};
