import { Router, type Request, type Response } from "express";
import { generateRecipe, getRecipeMode } from "../services/geminiService.js";
import type { RecipeRequest } from "../types/recipe.js";

const router = Router();

router.post("/generate", async (req: Request, res: Response) => {
  try {
    const { ingredients, mealType, maxTime, servings, difficulty } =
      req.body as RecipeRequest;

    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
      res.status(400).json({
        error: "No ingredients entered.",
        message: "Lütfen en az bir malzeme girin.",
      });
      return;
    }

    if (!mealType || !maxTime || !servings || !difficulty) {
      res.status(400).json({
        error: "Missing required fields.",
        message: "Lütfen tüm adımları tamamlayın.",
      });
      return;
    }

    const recipe = await generateRecipe({
      ingredients: ingredients.map((i: string) => i.trim()).filter(Boolean),
      mealType,
      maxTime,
      servings,
      difficulty,
    });

    res.json({ ...recipe, mode: getRecipeMode() });
  } catch (error) {
    console.error("Recipe generation error:", error);

    const message = error instanceof Error ? error.message : "Unknown error";

    if (message.includes("GEMINI_API_KEY")) {
      res.status(503).json({
        error: "Gemini API unavailable.",
        message: "Gemini API yapılandırılmamış. Yerel tarif modu kullanılıyor.",
      });
      return;
    }

    if (
      message.includes("API key") ||
      message.includes("403") ||
      message.includes("401")
    ) {
      res.status(503).json({
        error: "Gemini API unavailable.",
        message: "Gemini API kullanılamıyor. API anahtarınızı kontrol edin.",
      });
      return;
    }

    res.status(500).json({
      error: "Recipe generation failed.",
      message: "Tarif oluşturulamadı. Lütfen tekrar deneyin.",
    });
  }
});

router.get("/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    service: "Naz's Kitchen API",
    mode: getRecipeMode(),
  });
});

export default router;
