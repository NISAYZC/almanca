import type { AppSettings, Language, SavedRecipe } from "@/types";

const SETTINGS_KEY = "nazs-kitchen-settings";
const FAVORITES_KEY = "nazs-kitchen-favorites";
const HISTORY_KEY = "nazs-kitchen-history";

const DEFAULT_SETTINGS: AppSettings = {
  theme: "light",
  language: "tr",
};

export function getSettings(): AppSettings {
  try {
    const stored = localStorage.getItem(SETTINGS_KEY);
    if (stored) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
    }
  } catch {
    // ignore parse errors
  }
  return DEFAULT_SETTINGS;
}

export function saveSettings(settings: AppSettings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

export function getFavorites(): SavedRecipe[] {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      return JSON.parse(stored) as SavedRecipe[];
    }
  } catch {
    // ignore parse errors
  }
  return [];
}

export function saveFavorites(favorites: SavedRecipe[]): void {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function addFavorite(recipe: SavedRecipe): void {
  const favorites = getFavorites();
  if (!favorites.some((f) => f.id === recipe.id)) {
    favorites.unshift(recipe);
    saveFavorites(favorites);
  }
}

export function removeFavorite(id: string): void {
  const favorites = getFavorites().filter((f) => f.id !== id);
  saveFavorites(favorites);
}

export function isFavorite(id: string): boolean {
  return getFavorites().some((f) => f.id === id);
}

export function clearFavorites(): void {
  localStorage.removeItem(FAVORITES_KEY);
}

export function getHistory(): SavedRecipe[] {
  try {
    const stored = localStorage.getItem(HISTORY_KEY);
    if (stored) {
      return JSON.parse(stored) as SavedRecipe[];
    }
  } catch {
    // ignore parse errors
  }
  return [];
}

export function addToHistory(recipe: SavedRecipe): void {
  const history = getHistory();
  const filtered = history.filter((h) => h.id !== recipe.id);
  filtered.unshift(recipe);
  const trimmed = filtered.slice(0, 50);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(trimmed));
}

export function removeFromHistory(id: string): void {
  const history = getHistory().filter((h) => h.id !== id);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

export function clearHistory(): void {
  localStorage.removeItem(HISTORY_KEY);
}

export function applyTheme(theme: "light" | "dark"): void {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export function applyLanguage(language: Language): void {
  document.documentElement.lang = language === "tr" ? "tr" : "en";
}
