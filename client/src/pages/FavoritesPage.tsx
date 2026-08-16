import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { RecipeListItem } from "@/components/RecipeCard";
import { useSettings } from "@/hooks/useSettings";
import { useToast } from "@/hooks/use-toast";
import type { SavedRecipe } from "@/types";
import {
  getFavorites,
  removeFavorite,
} from "@/services/storageService";

export default function FavoritesPage() {
  const { t } = useSettings();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<SavedRecipe[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleView = (recipe: SavedRecipe) => {
    navigate(`/recipe/${recipe.id}`, { state: { recipe } });
  };

  const handleDelete = (id: string) => {
    removeFavorite(id);
    setFavorites(getFavorites());
    toast({ title: t("removedFromFavorites") });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-brand/10">
          <Heart className="h-6 w-6 text-orange-brand" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold">{t("favoritesTitle")}</h1>
          <p className="text-muted-foreground">
            {favorites.length} tarif
          </p>
        </div>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <span className="text-6xl">💔</span>
          <p className="text-lg text-muted-foreground">{t("favoritesEmpty")}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {favorites.map((recipe) => (
            <RecipeListItem
              key={recipe.id}
              recipe={recipe}
              onView={handleView}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
