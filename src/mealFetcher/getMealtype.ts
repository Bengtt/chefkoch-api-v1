import { MealTypes } from "../types";

export const getMealtype = (mealType: MealTypes) => {
  let mealTypeParam1: string;
  let mealTypeParam2: string;

  switch (mealType) {
    case "mainMeal":
      mealTypeParam1 = "t21";
      mealTypeParam2 = "Hauptspeise-Rezepte";
      break;
    case "breakfast":
      mealTypeParam1 = "t53";
      mealTypeParam2 = "Fruehstueck-Rezepte";
      break;
    case "appetizer":
      mealTypeParam1 = "t19";
      mealTypeParam2 = "Vorspeise-Rezepte";
      break;
    case "dessert":
      mealTypeParam1 = "t90";
      mealTypeParam2 = "Dessert-Rezepte";
      break;
    case "sidedish":
      mealTypeParam1 = "t36";
      mealTypeParam2 = "Beilage-Rezepte";
      break;
    case "snack":
      mealTypeParam1 = "t71";
      mealTypeParam2 = "Snack-Rezepte";
      break;

    default:
      mealTypeParam1 = "t21";
      mealTypeParam2 = "Hauptspeise-Rezepte";
      break;
  }

  return {
    mealTypeParam1,
    mealTypeParam2,
  };
};
