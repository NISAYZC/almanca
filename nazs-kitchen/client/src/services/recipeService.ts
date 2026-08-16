import type { ApiError, Recipe, RecipeRequest } from "@/types";

const API_URL = import.meta.env.VITE_API_URL || "";

export type RecipeMode = "local" | "gemini";

export interface GenerateRecipeResult {
  recipe: Recipe;
  mode: RecipeMode;
}

export async function generateRecipe(
  request: RecipeRequest
): Promise<GenerateRecipeResult> {
  const response = await fetch(`${API_URL}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const error = (await response.json()) as ApiError;
    throw new Error(error.message || error.error || "Recipe generation failed.");
  }

  const data = (await response.json()) as Recipe & { mode?: RecipeMode };
  const { mode = "local", ...recipe } = data;

  return { recipe: recipe as Recipe, mode };
}

export async function checkHealth(): Promise<{ ok: boolean; mode?: RecipeMode }> {
  try {
    const response = await fetch(`${API_URL}/api/health`);
    if (!response.ok) return { ok: false };
    const data = (await response.json()) as { mode?: RecipeMode };
    return { ok: true, mode: data.mode };
  } catch {
    return { ok: false };
  }
}
