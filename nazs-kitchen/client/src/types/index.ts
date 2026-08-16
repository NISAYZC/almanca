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

export interface SavedRecipe extends Recipe {
  id: string;
  createdAt: string;
  mealType?: string;
  sourceIngredients?: string[];
}

export interface RecipeRequest {
  ingredients: string[];
  mealType: string;
  maxTime: string;
  servings: string;
  difficulty: string;
}

export type MealType =
  | "Kahvaltı"
  | "Ana Yemek"
  | "Ara Öğün"
  | "Tatlı"
  | "İçecek"
  | "Fırın Yemeği"
  | "Çorba"
  | "Salata"
  | "Fast Food"
  | "Atıştırmalık"
  | "Diyet"
  | "Fark Etmez";

export type MaxTime = "10 dakika" | "20 dakika" | "30 dakika" | "45 dakika" | "60 dakika" | "Fark Etmez";

export type Servings = "1" | "2" | "3" | "4" | "5+";

export type Difficulty = "Kolay" | "Orta" | "Zor" | "Fark Etmez";

export type Language = "tr" | "en";

export interface AppSettings {
  theme: "light" | "dark";
  language: Language;
}

export interface ApiError {
  error: string;
  message: string;
}
