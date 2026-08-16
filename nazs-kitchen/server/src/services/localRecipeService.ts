import type { Recipe, RecipeRequest } from "../types/recipe.js";

const MEAL_TYPE_NAMES: Record<string, string[]> = {
  Kahvaltı: ["Kahvaltılık", "Sabah Tabağı", "Kahvaltı Mix"],
  "Ana Yemek": ["Sote", "Güveç", "Tava Yemeği", "Ev Yemeği"],
  "Ara Öğün": ["Atıştırmalık Tabağı", "Hafif Öğün", "Mini Tabak"],
  Tatlı: ["Tatlı", "Ev Tatlısı", "Tatlı Sunum"],
  İçecek: ["Smoothie", "İçecek", "Ev Yapımı İçecek"],
  "Fırın Yemeği": ["Fırın Yemeği", "Fırında", "Fırın Tarifi"],
  Çorba: ["Çorba", "Ev Çorbası", "Sıcacık Çorba"],
  Salata: ["Salata", "Taze Salata", "Karışık Salata"],
  "Fast Food": ["Ev Yapımı Burger", "Hızlı Tabak", "Pratik Lezzet"],
  Atıştırmalık: ["Atıştırmalık", "Çıtır Atıştırmalık", "Mini Lezzet"],
  Diyet: ["Fit Tabak", "Hafif Yemek", "Diyet Tabak"],
  "Fark Etmez": ["Lezzetli Tabak", "Ev Yapımı", "Pratik Tarif"],
};

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function parseServings(servings: string): number {
  if (servings === "5+") return 5;
  return parseInt(servings, 10) || 2;
}

function resolveDifficulty(requested: string): string {
  if (requested !== "Fark Etmez") return requested;
  return "Kolay";
}

function estimateTimes(mealType: string, difficulty: string) {
  const base = {
    Kahvaltı: { prep: 10, cook: 10 },
    "Ana Yemek": { prep: 15, cook: 25 },
    Çorba: { prep: 10, cook: 20 },
    Salata: { prep: 15, cook: 0 },
    Tatlı: { prep: 15, cook: 20 },
    İçecek: { prep: 5, cook: 0 },
    "Fırın Yemeği": { prep: 15, cook: 35 },
    "Fast Food": { prep: 10, cook: 15 },
    Atıştırmalık: { prep: 10, cook: 10 },
    Diyet: { prep: 10, cook: 15 },
    "Ara Öğün": { prep: 8, cook: 8 },
    "Fark Etmez": { prep: 12, cook: 18 },
  }[mealType] ?? { prep: 12, cook: 18 };

  const multiplier =
    difficulty === "Zor" ? 1.4 : difficulty === "Orta" ? 1.1 : 1;

  const prep = Math.round(base.prep * multiplier);
  const cook = Math.round(base.cook * multiplier);

  return { prep, cook, total: prep + cook };
}

function buildRecipeName(ingredients: string[], mealType: string): string {
  const prefixes = MEAL_TYPE_NAMES[mealType] ?? MEAL_TYPE_NAMES["Fark Etmez"];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const main = capitalize(ingredients[0]);
  const secondary =
    ingredients.length > 1 ? ` ve ${capitalize(ingredients[1])}` : "";

  return `${main}${secondary} ${prefix}`;
}

function buildDescription(
  ingredients: string[],
  mealType: string,
  servings: number
): string {
  const list = ingredients.slice(0, 4).map(capitalize).join(", ");
  return `Elinizdeki ${list} malzemeleriyle hazırlanan pratik bir ${mealType.toLowerCase()} tarifi. ${servings} kişilik bu lezzetli yemek, evde kolayca hazırlanabilir ve taze malzemelerin tadını ön plana çıkarır.`;
}

function buildIngredientsList(ingredients: string[], servings: number): string[] {
  const extras = ["Tuz", "Karabiber", "2 yemek kaşığı zeytinyağı"];
  const scaled = ingredients.map((ing) => {
    const name = capitalize(ing);
    if (servings <= 2) return name;
    if (servings <= 4) return `${name} (2 porsiyon için)`;
    return `${name} (bolca)`;
  });

  return [...scaled, ...extras];
}

function buildInstructions(
  ingredients: string[],
  mealType: string
): string[] {
  const main = ingredients.map((i) => i.toLowerCase());
  const hasEgg = main.some((i) => i.includes("yumurta"));
  const hasCheese = main.some((i) => i.includes("peynir"));
  const hasTomato = main.some((i) => i.includes("domates"));
  const hasOnion = main.some((i) => i.includes("soğan"));
  const hasMeat = main.some(
    (i) =>
      i.includes("et") ||
      i.includes("tavuk") ||
      i.includes("kıyma") ||
      i.includes("sucuk")
  );

  const steps: string[] = [
    "Tüm malzemeleri yıkayıp doğrayın. Mutfak tezgahınızı hazırlayın.",
  ];

  if (hasOnion) {
    steps.push("Soğanı ince ince doğrayın ve zeytinyağında hafif pembeleşene kadar kavurun.");
  } else {
    steps.push("Geniş bir tavayı orta ateşte ısıtın ve zeytinyağını ekleyin.");
  }

  if (hasMeat) {
    steps.push("Et veya tavuk malzemesini ekleyip yüksek ateşte mühürleyin, suyunu salana kadar pişirin.");
  }

  if (hasTomato) {
    steps.push("Domatesleri küp küp doğrayıp tavaya ekleyin, yumuşayana kadar 3-4 dakika pişirin.");
  }

  const remaining = ingredients
    .filter(
      (i) =>
        !["soğan", "domates", "yumurta", "peynir"].some((k) =>
          i.toLowerCase().includes(k)
        )
    )
    .slice(0, 3);

  if (remaining.length > 0) {
    steps.push(
      `${remaining.map(capitalize).join(", ")} malzemelerini ekleyin ve karıştırarak 5-7 dakika pişirin.`
    );
  }

  if (hasEgg) {
    steps.push("Yumurtaları çırpıp karışıma ekleyin, kısık ateşte kıvam alana kadar pişirin.");
  }

  if (hasCheese) {
    steps.push("Peyniri rendeleyip veya parçalayarak üzerine serpin, eriyene kadar bekleyin.");
  }

  if (mealType === "Salata") {
    steps.push("Tüm malzemeleri geniş bir kapta karıştırın, zeytinyağı ve limonla tatlandırın.");
  } else if (mealType === "Çorba") {
    steps.push("Malzemeleri kaynayan suda veya et suyunda yumuşayana kadar pişirin, blenderdan geçirin.");
  } else if (mealType === "Fırın Yemeği") {
    steps.push("Karışımı fırın kabına alın, 180°C fırında 25-30 dakika pişirin.");
  } else if (mealType === "Tatlı") {
    steps.push("Malzemeleri homojen olana kadar karıştırın, kıvam alınca servis tabağına alın.");
  } else if (mealType === "İçecek") {
    steps.push("Malzemeleri blenderda pürüzsüz olana kadar çekin, buz ekleyerek servis edin.");
  } else {
    steps.push("Tuz ve karabiberle tatlandırın, kısık ateşte 5 dakika daha pişirip ocaktan alın.");
  }

  steps.push("Sıcak servis edin. Afiyet olsun!");

  return steps;
}

function buildTips(ingredients: string[], mealType: string): string[] {
  return [
    `Malzemeleri oda sıcaklığında kullanırsanız ${mealType.toLowerCase()} daha lezzetli olur.`,
    `${capitalize(ingredients[0])} taze ve kaliteli olursa tarifin tadı belirgin şekilde artar.`,
    "Pişirme sonunda dinlendirmek aromaların oturmasını sağlar.",
  ];
}

function estimateCalories(ingredients: string[], servings: number): number {
  const base = 180 + ingredients.length * 45;
  return Math.round(base / Math.max(servings, 1)) * servings;
}

export function generateLocalRecipe(request: RecipeRequest): Recipe {
  const { ingredients, mealType, servings: servingsStr, difficulty: requestedDifficulty } =
    request;

  const servings = parseServings(servingsStr);
  const difficulty = resolveDifficulty(requestedDifficulty);
  const { prep, cook, total } = estimateTimes(mealType, difficulty);
  const calories = estimateCalories(ingredients, servings);

  return {
    recipeName: buildRecipeName(ingredients, mealType),
    description: buildDescription(ingredients, mealType, servings),
    prepTime: `${prep} dakika`,
    cookTime: cook > 0 ? `${cook} dakika` : "Pişirme yok",
    totalTime: `${total} dakika`,
    servings,
    difficulty,
    calories,
    ingredients: buildIngredientsList(ingredients, servings),
    instructions: buildInstructions(ingredients, mealType),
    tips: buildTips(ingredients, mealType),
    nutrition: {
      protein: `${Math.round(calories * 0.2 / 4)}g`,
      carbs: `${Math.round(calories * 0.5 / 4)}g`,
      fat: `${Math.round(calories * 0.3 / 9)}g`,
      fiber: `${Math.round(ingredients.length * 1.5)}g`,
    },
  };
}

export function isGeminiConfigured(): boolean {
  const apiKey = process.env.GEMINI_API_KEY;
  return Boolean(apiKey && apiKey !== "your_gemini_api_key_here");
}
