import { useState } from "react";
import WordMatchGame from "./games/WordMatchGame";
import SentenceBuilderGame from "./games/SentenceBuilderGame";
import QuizGame from "./games/QuizGame";

type GameType = "menu" | "wordmatch" | "sentencebuilder" | "quiz";

const GamesSection = () => {
  const [currentGame, setCurrentGame] = useState<GameType>("menu");

  const gameCards = [
    {
      id: "wordmatch" as GameType,
      title: "Kelime Eşleştirme",
      description: "Almanca kelimeleri Türkçe karşılıklarıyla eşleştirin",
      icon: "🔗"
    },
    {
      id: "sentencebuilder" as GameType,
      title: "Cümle Kurma",
      description: "Karışık kelimelerden doğru cümleyi oluşturun",
      icon: "🧩"
    },
    {
      id: "quiz" as GameType,
      title: "Quiz",
      description: "Çoktan seçmeli sorularla bilginizi test edin",
      icon: "❓"
    }
  ];

  if (currentGame !== "menu") {
    return (
      <section id="games" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setCurrentGame("menu")}
            className="mb-6 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Oyun Menüsüne Dön
          </button>
          
          {currentGame === "wordmatch" && <WordMatchGame />}
          {currentGame === "sentencebuilder" && <SentenceBuilderGame />}
          {currentGame === "quiz" && <QuizGame />}
        </div>
      </section>
    );
  }

  return (
    <section id="games" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Oyunlar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gameCards.map((game) => (
            <button
              key={game.id}
              onClick={() => setCurrentGame(game.id)}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-left transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{game.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {game.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {game.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;

