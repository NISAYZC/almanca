import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getIngredientEmoji } from "@/lib/constants";
import { capitalizeFirst } from "@/lib/utils";

interface IngredientTagProps {
  ingredient: string;
  onRemove: (ingredient: string) => void;
}

export function IngredientTag({ ingredient, onRemove }: IngredientTagProps) {
  const emoji = getIngredientEmoji(ingredient);
  const label = capitalizeFirst(ingredient);

  return (
    <Badge
      variant="default"
      className="gap-2 pl-3 pr-2 py-2 text-sm animate-fade-in group"
    >
      <span aria-hidden="true">{emoji}</span>
      <span>{label}</span>
      <button
        type="button"
        onClick={() => onRemove(ingredient)}
        className="ml-1 rounded-full p-0.5 hover:bg-orange-brand/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-brand"
        aria-label={`${label} malzemesini kaldır`}
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </Badge>
  );
}

interface IngredientTagsProps {
  ingredients: string[];
  onRemove: (ingredient: string) => void;
}

export function IngredientTags({ ingredients, onRemove }: IngredientTagsProps) {
  if (ingredients.length === 0) return null;

  return (
    <div
      className="flex flex-wrap gap-2 mt-4"
      role="list"
      aria-label="Eklenen malzemeler"
    >
      {ingredients.map((ingredient) => (
        <div key={ingredient} role="listitem">
          <IngredientTag ingredient={ingredient} onRemove={onRemove} />
        </div>
      ))}
    </div>
  );
}
