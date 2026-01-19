export interface IRecipe {
  name: string;
  portions: string;
  img?: string;
  preptime: string;
  ingredientList: IIngredientList[];
  instructionList: IInstructionList[];
  url: string;
}

export interface IIngredientList {
  amount: string;
  ingredient: string;
  properties: string;
}

export interface IInstructionList {
  step: string;
  instructionText: string;
}

export interface IMeal {
  name: string;
  img?: string;
  preptime: string;
  description: string;
  recipeLink?: string;
}
