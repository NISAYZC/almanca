import { Link, useLocation } from "react-router-dom";
import { Home, Heart, History, Settings, ChefHat } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSettings } from "@/hooks/useSettings";

const navItems = [
  { path: "/", icon: Home, labelKey: "navHome" as const },
  { path: "/favorites", icon: Heart, labelKey: "navFavorites" as const },
  { path: "/history", icon: History, labelKey: "navHistory" as const },
  { path: "/settings", icon: Settings, labelKey: "navSettings" as const },
];

export function Navbar() {
  const location = useLocation();
  const { t } = useSettings();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-brand/10 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2.5 group transition-transform hover:scale-[1.02]"
          aria-label={t("appTitle")}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-brand/10 text-2xl shadow-soft group-hover:shadow-glow transition-shadow">
            🍳
          </div>
          <span className="text-lg font-bold text-foreground hidden sm:block">
            {t("appTitle")}
          </span>
        </Link>

        <nav className="flex items-center gap-1" aria-label="Main navigation">
          {navItems.map(({ path, icon: Icon, labelKey }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-orange-brand/10 text-orange-brand shadow-soft"
                    : "text-muted-foreground hover:bg-orange-brand/5 hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="hidden md:inline">{t(labelKey)}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function MobileNav() {
  const location = useLocation();
  const { t } = useSettings();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-orange-brand/10 bg-background/95 backdrop-blur-xl md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ path, icon: Icon, labelKey }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-all",
                isActive
                  ? "text-orange-brand"
                  : "text-muted-foreground"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span>{t(labelKey)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function HeroSection() {
  const { t } = useSettings();

  return (
    <section className="text-center space-y-4 animate-fade-in-up">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-brand/20 to-orange-light/30 text-5xl shadow-glow mb-2">
        🍳
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-brand to-orange-dark bg-clip-text text-transparent">
        {t("appTitle")}
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        {t("appSubtitle")}
      </p>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-orange-brand/10 py-8 mt-16">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-2">
          <ChefHat className="h-4 w-4 text-orange-brand" />
          <span className="font-semibold text-foreground">Naz's Kitchen</span>
        </div>
        <p>© {new Date().getFullYear()} Naz's Kitchen. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
