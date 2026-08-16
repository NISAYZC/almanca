import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeSkeleton } from "@/components/LoadingButton";
import { useSettings } from "@/hooks/useSettings";
import type { SavedRecipe } from "@/types";
import { getHistory, getFavorites } from "@/services/storageService";

export default function RecipePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useSettings();
  const [recipe, setRecipe] = useState<SavedRecipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stateRecipe = (location.state as { recipe?: SavedRecipe })?.recipe;

    if (stateRecipe && stateRecipe.id === id) {
      setRecipe(stateRecipe);
      setLoading(false);
      return;
    }

    const fromHistory = getHistory().find((r) => r.id === id);
    if (fromHistory) {
      setRecipe(fromHistory);
      setLoading(false);
      return;
    }

    const fromFavorites = getFavorites().find((r) => r.id === id);
    if (fromFavorites) {
      setRecipe(fromFavorites);
      setLoading(false);
      return;
    }

    setLoading(false);
  }, [id, location.state]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <RecipeSkeleton />
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="max-w-3xl mx-auto text-center space-y-4 py-16">
        <span className="text-6xl">🍳</span>
        <h2 className="text-2xl font-bold">Tarif bulunamadı</h2>
        <p className="text-muted-foreground">
          Bu tarif mevcut değil veya silinmiş olabilir.
        </p>
        <Button onClick={() => navigate("/")}>{t("back")}</Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="gap-2 -ml-2"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("back")}
      </Button>

      <RecipeCard
        recipe={recipe}
        onCreateAnother={() => navigate("/")}
      />
    </div>
  );
}
