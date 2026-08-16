import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LoadingButtonProps {
  loading: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
}

export function LoadingButton({
  loading,
  children,
  onClick,
  disabled,
  className,
  type = "button",
}: LoadingButtonProps) {
  return (
    <Button
      type={type}
      size="lg"
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "w-full text-lg font-bold tracking-wide rounded-2xl h-16 relative overflow-hidden",
        "bg-gradient-to-r from-orange-brand to-orange-dark hover:from-orange-dark hover:to-orange-brand",
        "shadow-glow hover:shadow-lg transition-all duration-300",
        loading && "cursor-wait",
        className
      )}
    >
      {loading ? (
        <span className="flex items-center gap-3">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span className="animate-pulse-soft">{children}</span>
          <Sparkles className="h-5 w-5 animate-pulse-soft" />
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          {children}
        </span>
      )}
    </Button>
  );
}

export function RecipeSkeleton() {
  return (
    <div className="space-y-6 animate-fade-in" aria-label="Tarif yükleniyor">
      <div className="aspect-video rounded-2xl bg-muted animate-pulse" />
      <div className="space-y-3">
        <div className="h-8 w-3/4 rounded-xl bg-muted animate-pulse" />
        <div className="h-4 w-full rounded-lg bg-muted animate-pulse" />
        <div className="h-4 w-2/3 rounded-lg bg-muted animate-pulse" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-20 rounded-2xl bg-muted animate-pulse" />
        ))}
      </div>
      <div className="space-y-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-4 rounded-lg bg-muted animate-pulse" style={{ width: `${85 - i * 5}%` }} />
        ))}
      </div>
    </div>
  );
}
