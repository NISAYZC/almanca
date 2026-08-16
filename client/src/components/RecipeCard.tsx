import { useState } from "react";
import {
  Clock,
  Flame,
  Users,
  ChefHat,
  Copy,
  Heart,
  Printer,
  Share2,
  Plus,
  Check,
  Lightbulb,
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useSettings } from "@/hooks/useSettings";
import { useToast } from "@/hooks/use-toast";
import type { SavedRecipe } from "@/types";
import {
  addFavorite,
  removeFavorite,
  isFavorite,
} from "@/services/storageService";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  recipe: SavedRecipe;
  onCreateAnother?: () => void;
  showActions?: boolean;
}

export function RecipeCard({
  recipe,
  onCreateAnother,
  showActions = true,
}: RecipeCardProps) {
  const { t } = useSettings();
  const { toast } = useToast();
  const [favorited, setFavorited] = useState(() => isFavorite(recipe.id));
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(
    new Set()
  );

  const toggleIngredient = (index: number) => {
    setCheckedIngredients((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const recipeText = formatRecipeText(recipe);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(recipeText);
      toast({ title: t("copied"), variant: "success" });
    } catch {
      toast({ title: t("errorGeneric"), variant: "destructive" });
    }
  };

  const handleFavorite = () => {
    if (favorited) {
      removeFavorite(recipe.id);
      setFavorited(false);
      toast({ title: t("removedFromFavorites"), variant: "default" });
    } else {
      addFavorite(recipe);
      setFavorited(true);
      toast({ title: t("addedToFavorites"), variant: "success" });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const shareData = {
      title: recipe.recipeName,
      text: recipe.description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(
          `${recipe.recipeName}\n\n${recipe.description}\n\n${window.location.href}`
        );
        toast({ title: t("shareSuccess"), variant: "success" });
      }
    } catch {
      toast({ title: t("shareFailed"), variant: "destructive" });
    }
  };

  return (
    <article className="animate-fade-in-up space-y-6 print:space-y-4">
      {/* Image Placeholder */}
      <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-orange-brand/20 via-orange-light/30 to-cream shadow-card">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <span className="text-7xl animate-pulse-soft">🍽️</span>
          <p className="text-sm font-medium text-orange-dark/70">
            {recipe.recipeName}
          </p>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm font-semibold text-orange-brand shadow-soft">
          {recipe.calories} kcal
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
          {recipe.recipeName}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {recipe.description}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard icon={Clock} label={t("prepTime")} value={recipe.prepTime} />
        <StatCard icon={Flame} label={t("cookTime")} value={recipe.cookTime} />
        <StatCard icon={Clock} label={t("totalTime")} value={recipe.totalTime} />
        <StatCard icon={Users} label={t("servings")} value={`${recipe.servings} kişi`} />
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-brand/10 px-3 py-1.5 text-sm font-semibold text-orange-brand">
          <ChefHat className="h-4 w-4" />
          {recipe.difficulty}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-brand/10 px-3 py-1.5 text-sm font-semibold text-orange-brand">
          <Flame className="h-4 w-4" />
          {recipe.calories} {t("calories")}
        </span>
      </div>

      {/* Ingredients */}
      <Card className="border-orange-brand/10">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-xl">
            <UtensilsCrossed className="h-5 w-5 text-orange-brand" />
            {t("ingredients")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2" role="list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <label className="flex items-center gap-3 cursor-pointer group rounded-xl p-2 hover:bg-orange-brand/5 transition-colors">
                  <input
                    type="checkbox"
                    checked={checkedIngredients.has(index)}
                    onChange={() => toggleIngredient(index)}
                    className="h-5 w-5 rounded-md border-2 border-orange-brand/30 text-orange-brand focus:ring-orange-brand/50 cursor-pointer"
                  />
                  <span
                    className={cn(
                      "text-base transition-all",
                      checkedIngredients.has(index) &&
                        "line-through text-muted-foreground"
                    )}
                  >
                    {ingredient}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card className="border-orange-brand/10">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-xl">
            <ChefHat className="h-5 w-5 text-orange-brand" />
            {t("instructions")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4" role="list">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-brand text-white text-sm font-bold shadow-soft">
                  {index + 1}
                </span>
                <p className="text-base leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Tips */}
      {recipe.tips && recipe.tips.length > 0 && (
        <Card className="border-orange-brand/10 bg-orange-brand/5">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Lightbulb className="h-5 w-5 text-orange-brand" />
              {t("chefTips")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2" role="list">
              {recipe.tips.map((tip, index) => (
                <li
                  key={index}
                  className="flex gap-2 text-base leading-relaxed"
                >
                  <span className="text-orange-brand font-bold">💡</span>
                  {tip}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Nutrition */}
      {recipe.nutrition && (
        <Card className="border-orange-brand/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">{t("nutrition")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <NutritionItem label={t("protein")} value={recipe.nutrition.protein} />
              <NutritionItem label={t("carbs")} value={recipe.nutrition.carbs} />
              <NutritionItem label={t("fat")} value={recipe.nutrition.fat} />
              <NutritionItem label={t("fiber")} value={recipe.nutrition.fiber} />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      {showActions && (
        <>
          <Separator className="my-6" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 print:hidden">
            <Button variant="outline" onClick={handleCopy} className="gap-2">
              <Copy className="h-4 w-4" />
              {t("copyRecipe")}
            </Button>
            <Button
              variant="outline"
              onClick={handleFavorite}
              className={cn("gap-2", favorited && "border-orange-brand text-orange-brand")}
            >
              <Heart className={cn("h-4 w-4", favorited && "fill-orange-brand")} />
              {favorited ? t("removeFromFavorites") : t("addToFavorites")}
            </Button>
            <Button variant="outline" onClick={handlePrint} className="gap-2">
              <Printer className="h-4 w-4" />
              {t("printRecipe")}
            </Button>
            <Button variant="outline" onClick={handleShare} className="gap-2">
              <Share2 className="h-4 w-4" />
              {t("share")}
            </Button>
            {onCreateAnother && (
              <Button onClick={onCreateAnother} className="gap-2 col-span-2 sm:col-span-1">
                <Plus className="h-4 w-4" />
                {t("createAnother")}
              </Button>
            )}
          </div>
        </>
      )}
    </article>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-orange-brand/10 bg-card p-4 shadow-soft text-center">
      <Icon className="h-5 w-5 text-orange-brand" aria-hidden="true" />
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
      <span className="text-sm font-bold text-foreground">{value}</span>
    </div>
  );
}

function NutritionItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center rounded-xl bg-orange-brand/5 p-3">
      <p className="text-xs text-muted-foreground font-medium">{label}</p>
      <p className="text-lg font-bold text-orange-brand">{value}</p>
    </div>
  );
}

function formatRecipeText(recipe: SavedRecipe): string {
  const lines = [
    `🍳 ${recipe.recipeName}`,
    "",
    recipe.description,
    "",
    `⏱ Hazırlık: ${recipe.prepTime}`,
    `🔥 Pişirme: ${recipe.cookTime}`,
    `⏰ Toplam: ${recipe.totalTime}`,
    `👥 Porsiyon: ${recipe.servings}`,
    `📊 Zorluk: ${recipe.difficulty}`,
    `🔥 Kalori: ${recipe.calories}`,
    "",
    "📝 MALZEMELER:",
    ...recipe.ingredients.map((i) => `  • ${i}`),
    "",
    "👨‍🍳 YAPILIŞI:",
    ...recipe.instructions.map((s, i) => `  ${i + 1}. ${s}`),
  ];

  if (recipe.tips?.length) {
    lines.push("", "💡 İPUÇLARI:", ...recipe.tips.map((tip) => `  • ${tip}`));
  }

  return lines.join("\n");
}

export function RecipeListItem({
  recipe,
  onView,
  onDelete,
}: {
  recipe: SavedRecipe;
  onView: (recipe: SavedRecipe) => void;
  onDelete: (id: string) => void;
}) {
  const { t } = useSettings();

  return (
    <Card className="group hover:shadow-glow hover:border-orange-brand/30 transition-all duration-300 cursor-pointer">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-brand/10 text-2xl">
            🍽️
          </div>
          <div className="flex-1 min-w-0" onClick={() => onView(recipe)}>
            <h3 className="font-bold text-lg truncate group-hover:text-orange-brand transition-colors">
              {recipe.recipeName}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {recipe.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2 text-xs text-muted-foreground">
              <span>{recipe.totalTime}</span>
              <span>•</span>
              <span>{recipe.difficulty}</span>
              <span>•</span>
              <span>{recipe.calories} kcal</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => onView(recipe)}
              aria-label={`${recipe.recipeName} ${t("view")}`}
            >
              <Check className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete(recipe.id)}
              aria-label={`${recipe.recipeName} ${t("delete")}`}
            >
              ✕
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
