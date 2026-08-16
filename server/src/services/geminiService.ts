import { GoogleGenerativeAI } from "@google/generative-ai";
import type { Recipe, RecipeRequest } from "../types/recipe.js";
import {
  generateLocalRecipe,
  isGeminiConfigured,
} from "./localRecipeService.js";

const MODEL_NAME = "gemini-2.5-flash";

function buildPrompt(request: RecipeRequest): string {
  const { ingredients, mealType, maxTime, servings, difficulty } = request;

  return `Sen profesyonel bir Türk şefsin. Kullanıcının evinde bulunan malzemelerle gerçekçi ve lezzetli bir tarif oluştur.

KURALLAR:
- SADECE verilen malzemeleri kullan. Temel baharatlar (tuz, karabiber, zeytinyağı, sıvı yağ) ve çok yaygın mutfak malzemeleri (su) varsayılabilir.
- İmkansız veya mantıksız tarifler oluşturma.
- Tüm metinler Türkçe olmalı.
- Yanıtını SADECE geçerli JSON formatında ver, başka hiçbir metin ekleme.

Kullanıcı Bilgileri:
- Mevcut Malzemeler: ${ingredients.join(", ")}
- Yemek Türü: ${mealType}
- Maksimum Hazırlama Süresi: ${maxTime}
- Kişi Sayısı: ${servings}
- Zorluk: ${difficulty}

JSON Yapısı (bu yapıya tam uy):
{
  "recipeName": "Tarif adı",
  "description": "Kısa ve iştah açıcı açıklama (2-3 cümle)",
  "prepTime": "15 dakika",
  "cookTime": "20 dakika",
  "totalTime": "35 dakika",
  "servings": 2,
  "difficulty": "Kolay",
  "calories": 350,
  "ingredients": ["2 adet yumurta", "100g peynir", "..."],
  "instructions": ["Adım 1 açıklaması", "Adım 2 açıklaması", "..."],
  "tips": ["Şef ipucu 1", "Şef ipucu 2"],
  "nutrition": {
    "protein": "15g",
    "carbs": "30g",
    "fat": "12g",
    "fiber": "3g"
  }
}`;
}

function parseRecipeResponse(text: string): Recipe {
  let cleaned = text.trim();

  const jsonMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (jsonMatch) {
    cleaned = jsonMatch[1].trim();
  }

  const parsed = JSON.parse(cleaned) as Recipe;

  if (!parsed.recipeName || !parsed.ingredients || !parsed.instructions) {
    throw new Error("Invalid recipe structure from AI");
  }

  return {
    recipeName: parsed.recipeName,
    description: parsed.description || "",
    prepTime: parsed.prepTime || "0 dakika",
    cookTime: parsed.cookTime || "0 dakika",
    totalTime: parsed.totalTime || "0 dakika",
    servings: parsed.servings || 2,
    difficulty: parsed.difficulty || "Orta",
    calories: parsed.calories || 0,
    ingredients: parsed.ingredients || [],
    instructions: parsed.instructions || [],
    tips: parsed.tips || [],
    nutrition: parsed.nutrition || {
      protein: "0g",
      carbs: "0g",
      fat: "0g",
      fiber: "0g",
    },
  };
}

async function generateWithGemini(request: RecipeRequest): Promise<Recipe> {
  const apiKey = process.env.GEMINI_API_KEY!;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: MODEL_NAME,
    generationConfig: {
      temperature: 0.8,
      topP: 0.95,
      maxOutputTokens: 4096,
      responseMimeType: "application/json",
    },
  });

  const prompt = buildPrompt(request);
  const result = await model.generateContent(prompt);
  const text = result.response.text();

  if (!text) {
    throw new Error("Empty response from Gemini API");
  }

  return parseRecipeResponse(text);
}

export async function generateRecipe(request: RecipeRequest): Promise<Recipe> {
  if (!isGeminiConfigured()) {
    console.log("ℹ️  Gemini API anahtarı yok — yerel tarif modu kullanılıyor.");
    return generateLocalRecipe(request);
  }

  try {
    return await generateWithGemini(request);
  } catch (error) {
    console.warn("⚠️  Gemini başarısız, yerel tarif moduna geçiliyor:", error);
    return generateLocalRecipe(request);
  }
}

export function getRecipeMode(): "gemini" | "local" {
  return isGeminiConfigured() ? "gemini" : "local";
}
