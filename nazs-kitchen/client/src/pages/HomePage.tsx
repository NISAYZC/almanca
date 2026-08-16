import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/layout/Layout";
import { IngredientTags } from "@/components/IngredientTag";
import { SelectionGrid } from "@/components/SelectionCard";
import { LoadingButton } from "@/components/LoadingButton";
import { useSettings } from "@/hooks/useSettings";
import { useToast } from "@/hooks/use-toast";
import {
  MEAL_TYPES,
  MAX_TIMES,
  SERVINGS_OPTIONS,
  DIFFICULTY_OPTIONS,
} from "@/lib/constants";
import { capitalizeFirst, generateId } from "@/lib/utils";
import { generateRecipe, checkHealth } from "@/services/recipeService";
import { addToHistory } from "@/services/storageService";
import type { SavedRecipe } from "@/types";

export default function HomePage() {
  const { t } = useSettings();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [mealType, setMealType] = useState("Fark Etmez");
  const [maxTime, setMaxTime] = useState("Fark Etmez");
  const [servings, setServings] = useState("2");
  const [difficulty, setDifficulty] = useState("Fark Etmez");
  const [loading, setLoading] = useState(false);
  const [localMode, setLocalMode] = useState(true);

  useEffect(() => {
    checkHealth().then(({ ok, mode }) => {
      if (ok) setLocalMode(mode === "local");
    });
  }, []);

  const addIngredient = useCallback(() => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const normalized = trimmed.toLowerCase();
    if (ingredients.some((i) => i.toLowerCase() === normalized)) {
      setInputValue("");
      return;
    }

    setIngredients((prev) => [...prev, capitalizeFirst(trimmed)]);
    setInputValue("");
  }, [inputValue, ingredients]);

  const removeIngredient = useCallback((ingredient: string) => {
    setIngredients((prev) => prev.filter((i) => i !== ingredient));
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addIngredient();
    }
  };

  const handleGenerate = async () => {
    if (ingredients.length === 0) {
      toast({
        title: t("errorNoIngredients"),
        description: t("noIngredients"),
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { recipe, mode } = await generateRecipe({
        ingredients,
        mealType,
        maxTime,
        servings,
        difficulty,
      });

      const savedRecipe: SavedRecipe = {
        ...recipe,
        id: generateId(),
        createdAt: new Date().toISOString(),
        mealType,
        sourceIngredients: ingredients,
      };

      addToHistory(savedRecipe);

      if (mode === "local") {
        toast({
          title: "Yerel tarif modu",
          description:
            "API anahtarı olmadan akıllı tarif oluşturucu kullanıldı. İsterseniz daha sonra Gemini API ekleyebilirsiniz.",
        });
      }

      navigate(`/recipe/${savedRecipe.id}`, { state: { recipe: savedRecipe } });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : t("errorGeneric");

      let title = t("errorGenerationFailed");
      if (message.includes("malzeme") || message.includes("ingredient")) {
        title = t("errorNoIngredients");
      } else if (message.includes("Gemini") || message.includes("API")) {
        title = t("errorApiUnavailable");
      }

      toast({
        title,
        description: message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter" && !loading) {
        e.preventDefault();
        handleGenerate();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  });

  return (
    <div className="space-y-10 pb-8">
      <HeroSection />

      {localMode && (
        <div className="max-w-3xl mx-auto rounded-2xl border border-orange-brand/20 bg-orange-brand/5 px-4 py-3 text-sm text-orange-dark flex items-start gap-2 animate-fade-in">
          <Sparkles className="h-4 w-4 mt-0.5 shrink-0 text-orange-brand" />
          <p>
            API anahtarı gerekmez — uygulama yerel akıllı tarif moduyla çalışıyor.
            İleride Gemini API anahtarı eklerseniz daha gelişmiş tarifler alırsınız.
          </p>
        </div>
      )}

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Step 1 */}
        <Card className="border-orange-brand/10 shadow-card animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-brand text-white text-sm font-bold">
                1
              </span>
              {t("step1Title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("step1Placeholder")}
              aria-label={t("step1Title")}
            />
            <div className="flex justify-end mt-3">
              <Button
                onClick={addIngredient}
                variant="outline"
                className="gap-2"
                disabled={!inputValue.trim()}
              >
                <Plus className="h-4 w-4" />
                {t("addIngredient")}
              </Button>
            </div>
            <IngredientTags
              ingredients={ingredients}
              onRemove={removeIngredient}
            />
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="border-orange-brand/10 shadow-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-brand text-white text-sm font-bold">
                2
              </span>
              {t("step2Title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SelectionGrid
              options={MEAL_TYPES}
              selected={mealType}
              onSelect={setMealType}
              columns={3}
            />
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="border-orange-brand/10 shadow-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-brand text-white text-sm font-bold">
                3
              </span>
              {t("step3Title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SelectionGrid
              options={MAX_TIMES}
              selected={maxTime}
              onSelect={setMaxTime}
              columns={3}
            />
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card className="border-orange-brand/10 shadow-card animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-brand text-white text-sm font-bold">
                4
              </span>
              {t("step4Title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SelectionGrid
              options={SERVINGS_OPTIONS}
              selected={servings}
              onSelect={setServings}
              columns={5}
            />
          </CardContent>
        </Card>

        {/* Step 5 */}
        <Card className="border-orange-brand/10 shadow-card animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-brand text-white text-sm font-bold">
                5
              </span>
              {t("step5Title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SelectionGrid
              options={DIFFICULTY_OPTIONS}
              selected={difficulty}
              onSelect={setDifficulty}
              columns={4}
            />
          </CardContent>
        </Card>

        {/* Create Button */}
        <LoadingButton loading={loading} onClick={handleGenerate}>
          {loading ? t("generating") : t("createRecipe")}
        </LoadingButton>

        <p className="text-center text-xs text-muted-foreground">
          Ctrl + Enter ile hızlı tarif oluşturabilirsiniz
        </p>
      </div>
    </div>
  );
}
