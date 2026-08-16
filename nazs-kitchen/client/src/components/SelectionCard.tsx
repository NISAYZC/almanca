import { cn } from "@/lib/utils";

interface SelectionCardProps {
  id: string;
  label: string;
  emoji: string;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function SelectionCard({
  id,
  label,
  emoji,
  selected,
  onSelect,
}: SelectionCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border-2 p-4 transition-all duration-200 cursor-pointer min-h-[90px]",
        "hover:scale-[1.03] hover:shadow-soft active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-brand/50",
        selected
          ? "border-orange-brand bg-orange-brand/10 shadow-glow scale-[1.02]"
          : "border-orange-brand/15 bg-card hover:border-orange-brand/40"
      )}
      aria-pressed={selected}
      aria-label={label}
    >
      <span className="text-2xl" aria-hidden="true">
        {emoji}
      </span>
      <span
        className={cn(
          "text-sm font-semibold text-center leading-tight",
          selected ? "text-orange-brand" : "text-foreground"
        )}
      >
        {label}
      </span>
    </button>
  );
}

interface SelectionGridProps {
  options: readonly { id: string; label: string; emoji: string }[];
  selected: string;
  onSelect: (id: string) => void;
  columns?: number;
}

export function SelectionGrid({
  options,
  selected,
  onSelect,
  columns = 3,
}: SelectionGridProps) {
  const gridCols: Record<number, string> = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
    5: "grid-cols-3 sm:grid-cols-5",
    6: "grid-cols-3 sm:grid-cols-6",
  };

  return (
    <div className={cn("grid gap-3", gridCols[columns] || "grid-cols-2 sm:grid-cols-3")} role="group">
      {options.map((option) => (
        <SelectionCard
          key={option.id}
          id={option.id}
          label={option.label}
          emoji={option.emoji}
          selected={selected === option.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
