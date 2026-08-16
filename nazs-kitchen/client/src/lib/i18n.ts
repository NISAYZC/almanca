import type { Language } from "@/types";

type TranslationKeys = {
  appTitle: string;
  appSubtitle: string;
  navHome: string;
  navFavorites: string;
  navHistory: string;
  navSettings: string;
  step1Title: string;
  step1Placeholder: string;
  addIngredient: string;
  step2Title: string;
  step3Title: string;
  step4Title: string;
  step5Title: string;
  createRecipe: string;
  generating: string;
  noIngredients: string;
  copyRecipe: string;
  createAnother: string;
  addToFavorites: string;
  removeFromFavorites: string;
  printRecipe: string;
  share: string;
  copied: string;
  addedToFavorites: string;
  removedFromFavorites: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  calories: string;
  difficulty: string;
  servings: string;
  ingredients: string;
  instructions: string;
  chefTips: string;
  nutrition: string;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
  favoritesTitle: string;
  favoritesEmpty: string;
  historyTitle: string;
  historyEmpty: string;
  searchPlaceholder: string;
  settingsTitle: string;
  theme: string;
  lightMode: string;
  darkMode: string;
  language: string;
  clearHistory: string;
  clearFavorites: string;
  cleared: string;
  delete: string;
  view: string;
  back: string;
  errorGeneric: string;
  errorNoIngredients: string;
  errorApiUnavailable: string;
  errorGenerationFailed: string;
  shareSuccess: string;
  shareFailed: string;
};

const translations: Record<Language, TranslationKeys> = {
  tr: {
    appTitle: "Naz's Kitchen",
    appSubtitle: "Evinizde bulunan malzemelerle saniyeler içinde harika tarifler oluşturun.",
    navHome: "Ana Sayfa",
    navFavorites: "Favoriler",
    navHistory: "Geçmiş",
    navSettings: "Ayarlar",
    step1Title: "Elindeki Malzemeleri Gir",
    step1Placeholder: "Örneğin:\nyumurta\npeynir\ndomates\nsüt\nun",
    addIngredient: "Malzeme Ekle",
    step2Title: "Ne hazırlamak istiyorsun?",
    step3Title: "Maksimum hazırlama süresi",
    step4Title: "Kaç kişilik?",
    step5Title: "Zorluk",
    createRecipe: "TARİF OLUŞTUR",
    generating: "Tarif oluşturuluyor...",
    noIngredients: "Lütfen en az bir malzeme girin.",
    copyRecipe: "Tarifi Kopyala",
    createAnother: "Yeni Tarif Oluştur",
    addToFavorites: "Favorilere Ekle",
    removeFromFavorites: "Favorilerden Çıkar",
    printRecipe: "Yazdır",
    share: "Paylaş",
    copied: "Tarif panoya kopyalandı!",
    addedToFavorites: "Favorilere eklendi!",
    removedFromFavorites: "Favorilerden çıkarıldı.",
    prepTime: "Hazırlık",
    cookTime: "Pişirme",
    totalTime: "Toplam",
    calories: "Kalori",
    difficulty: "Zorluk",
    servings: "Porsiyon",
    ingredients: "Malzemeler",
    instructions: "Yapılışı",
    chefTips: "Şef İpuçları",
    nutrition: "Besin Değerleri",
    protein: "Protein",
    carbs: "Karbonhidrat",
    fat: "Yağ",
    fiber: "Lif",
    favoritesTitle: "Favori Tariflerim",
    favoritesEmpty: "Henüz favori tarifiniz yok.",
    historyTitle: "Tarif Geçmişi",
    historyEmpty: "Henüz tarif geçmişiniz yok.",
    searchPlaceholder: "Tarif ara...",
    settingsTitle: "Ayarlar",
    theme: "Tema",
    lightMode: "Açık Mod",
    darkMode: "Koyu Mod",
    language: "Dil",
    clearHistory: "Geçmişi Temizle",
    clearFavorites: "Favorileri Temizle",
    cleared: "Başarıyla temizlendi!",
    delete: "Sil",
    view: "Görüntüle",
    back: "Geri",
    errorGeneric: "Bir hata oluştu. Lütfen tekrar deneyin.",
    errorNoIngredients: "Malzeme girilmedi.",
    errorApiUnavailable: "Gemini API kullanılamıyor.",
    errorGenerationFailed: "Tarif oluşturulamadı.",
    shareSuccess: "Paylaşım bağlantısı kopyalandı!",
    shareFailed: "Paylaşım başarısız oldu.",
  },
  en: {
    appTitle: "Naz's Kitchen",
    appSubtitle: "Create amazing recipes in seconds with ingredients you have at home.",
    navHome: "Home",
    navFavorites: "Favorites",
    navHistory: "History",
    navSettings: "Settings",
    step1Title: "Enter Your Ingredients",
    step1Placeholder: "For example:\neggs\ncheese\ntomatoes\nmilk\nflour",
    addIngredient: "Add Ingredient",
    step2Title: "What do you want to prepare?",
    step3Title: "Maximum preparation time",
    step4Title: "How many servings?",
    step5Title: "Difficulty",
    createRecipe: "CREATE RECIPE",
    generating: "Generating recipe...",
    noIngredients: "Please enter at least one ingredient.",
    copyRecipe: "Copy Recipe",
    createAnother: "Create Another Recipe",
    addToFavorites: "Add to Favorites",
    removeFromFavorites: "Remove from Favorites",
    printRecipe: "Print",
    share: "Share",
    copied: "Recipe copied to clipboard!",
    addedToFavorites: "Added to favorites!",
    removedFromFavorites: "Removed from favorites.",
    prepTime: "Prep",
    cookTime: "Cook",
    totalTime: "Total",
    calories: "Calories",
    difficulty: "Difficulty",
    servings: "Servings",
    ingredients: "Ingredients",
    instructions: "Instructions",
    chefTips: "Chef Tips",
    nutrition: "Nutrition",
    protein: "Protein",
    carbs: "Carbs",
    fat: "Fat",
    fiber: "Fiber",
    favoritesTitle: "My Favorite Recipes",
    favoritesEmpty: "You don't have any favorite recipes yet.",
    historyTitle: "Recipe History",
    historyEmpty: "You don't have any recipe history yet.",
    searchPlaceholder: "Search recipes...",
    settingsTitle: "Settings",
    theme: "Theme",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    language: "Language",
    clearHistory: "Clear History",
    clearFavorites: "Clear Favorites",
    cleared: "Successfully cleared!",
    delete: "Delete",
    view: "View",
    back: "Back",
    errorGeneric: "An error occurred. Please try again.",
    errorNoIngredients: "No ingredients entered.",
    errorApiUnavailable: "Gemini API unavailable.",
    errorGenerationFailed: "Recipe generation failed.",
    shareSuccess: "Share link copied!",
    shareFailed: "Sharing failed.",
  },
};

export function t(key: keyof TranslationKeys, lang: Language = "tr"): string {
  return translations[lang][key];
}

export type { TranslationKeys };
