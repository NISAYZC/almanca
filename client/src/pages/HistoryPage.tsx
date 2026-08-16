import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { History, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { RecipeListItem } from "@/components/RecipeCard";
import { useSettings } from "@/hooks/useSettings";
import { useToast } from "@/hooks/use-toast";
import type { SavedRecipe } from "@/types";
import { getHistory, removeFromHistory } from "@/services/storageService";

export default function HistoryPage() {
  const { t } = useSettings();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [history, setHistory] = useState<SavedRecipe[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const filtered = useMemo(() => {
    if (!search.trim()) return history;
    const q = search.toLowerCase();
    return history.filter(
      (r) =>
        r.recipeName.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q)
    );
  }, [history, search]);

  const handleView = (recipe: SavedRecipe) => {
    navigate(`/recipe/${recipe.id}`, { state: { recipe } });
  };

  const handleDelete = (id: string) => {
    removeFromHistory(id);
    setHistory(getHistory());
    toast({ title: t("delete") });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-brand/10">
          <History className="h-6 w-6 text-orange-brand" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold">{t("historyTitle")}</h1>
          <p className="text-muted-foreground">{history.length} tarif</p>
        </div>
      </div>

      {history.length > 0 && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="pl-10"
            aria-label={t("searchPlaceholder")}
          />
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <span className="text-6xl">{search ? "🔍" : "📋"}</span>
          <p className="text-lg text-muted-foreground">
            {search ? "Sonuç bulunamadı" : t("historyEmpty")}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((recipe) => (
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
