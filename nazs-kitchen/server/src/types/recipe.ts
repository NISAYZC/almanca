export interface RecipeNutrition {
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
}

export interface Recipe {
  recipeName: string;
  description: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: number;
  difficulty: string;
  calories: number;
  ingredients: string[];
  instructions: string[];
  tips: string[];
  nutrition: RecipeNutrition;
}

export interface RecipeRequest {
  ingredients: string[];
  mealType: string;
  maxTime: string;
  servings: string;
  difficulty: string;
}
