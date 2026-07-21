import { useState } from "react";
import WordMatchGame from "./games/WordMatchGame";
import SentenceBuilderGame from "./games/SentenceBuilderGame";
import QuizGame from "./games/QuizGame";
import CoinRunnerGame from "./games/CoinRunnerGame";
import PlatformAdventureGame from "./games/PlatformAdventureGame";
import PipeLeapGame from "./games/PipeLeapGame";

type GameType =
  | "menu"
  | "wordmatch"
  | "sentencebuilder"
  | "quiz"
  | "coinrunner"
  | "platform"
  | "pipeleap";

const GamesSection = () => {
  const [currentGame, setCurrentGame] = useState<GameType>("menu");

  const classicGames = [
    {
      id: "wordmatch" as GameType,
      title: "Kelime Eşleştirme",
      description: "Almanca kelimeleri Türkçe karşılıklarıyla eşleştirin",
      icon: "🔗",
    },
    {
      id: "sentencebuilder" as GameType,
      title: "Cümle Kurma",
      description: "Karışık kelimelerden doğru cümleyi oluşturun",
      icon: "🧩",
    },
    {
      id: "quiz" as GameType,
      title: "Quiz",
      description: "Çoktan seçmeli sorularla bilginizi test edin",
      icon: "❓",
    },
  ];

  const actionGames = [
    {
      id: "coinrunner" as GameType,
      title: "Kelime Koşusu",
      description: "Koş, zıpla, düşmanlardan kaç — hedef kelimenin altınlarını topla!",
      icon: "🏃",
      badge: "Aksiyon",
    },
    {
      id: "platform" as GameType,
      title: "Platform Macerası",
      description: "Tuğla platformlarda ilerle, kelime altınlarını topla, bayrağa ulaş",
      icon: "🧱",
      badge: "Platform",
    },
    {
      id: "pipeleap" as GameType,
      title: "Boru Zıplama",
      description: "Uçarak yeşil borulardan geç — doğru Almanca kelimenin tarafından!",
      icon: "🟢",
      badge: "Zıpla",
    },
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
          {currentGame === "coinrunner" && <CoinRunnerGame />}
          {currentGame === "platform" && <PlatformAdventureGame />}
          {currentGame === "pipeleap" && <PipeLeapGame />}
        </div>
      </section>
    );
  }

  return (
    <section id="games" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Oyunlar
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Klasik alıştırmalar ve koş-zıpla-topla aksiyon oyunları
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">Klasik Oyunlar</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {classicGames.map((game) => (
            <button
              key={game.id}
              onClick={() => setCurrentGame(game.id)}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-left transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{game.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{game.title}</h3>
              <p className="text-gray-600 text-sm">{game.description}</p>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-xl font-semibold text-red-700">Aksiyon Oyunları</h3>
          <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
            Koş · Zıpla · Topla
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Mario tarzı hareketli sahneler — klavye veya dokunmatik kontrollerle oyna
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actionGames.map((game) => (
            <button
              key={game.id}
              onClick={() => setCurrentGame(game.id)}
              className="bg-gradient-to-br from-sky-400 via-sky-300 to-amber-200 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-left transform hover:-translate-y-1 border-4 border-[#5c3a1e] relative overflow-hidden group"
            >
              <span className="absolute top-3 right-3 bg-[#e52521] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {game.badge}
              </span>
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block drop-shadow">
                {game.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{game.title}</h3>
              <p className="text-[#1a1a2e]/80 text-sm">{game.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
