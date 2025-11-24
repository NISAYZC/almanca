import { useState, useEffect, useMemo } from "react";
import { wordMatchItems } from "../../data/games";
import { WordMatchItem } from "../../types";

const WordMatchGame = () => {
  const [selectedGerman, setSelectedGerman] = useState<string | null>(null);
  const [selectedTurkish, setSelectedTurkish] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [attempts, setAttempts] = useState(0);
  const [correctMatches, setCorrectMatches] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const shuffledItems = useMemo(() => {
    const german = [...wordMatchItems];
    const turkish = [...wordMatchItems];
    
    // Shuffle arrays
    const shuffle = (array: WordMatchItem[]) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    return {
      german: shuffle(german),
      turkish: shuffle(turkish)
    };
  }, []);

  useEffect(() => {
    if (selectedGerman && selectedTurkish) {
      setAttempts(prev => prev + 1);
      
      const germanItem = shuffledItems.german.find(item => item.id === selectedGerman);
      const turkishItem = shuffledItems.turkish.find(item => item.id === selectedTurkish);
      
      if (germanItem && turkishItem && germanItem.id === turkishItem.id) {
        // Correct match
        setMatchedPairs(prev => {
          const newSet = new Set([...prev, germanItem.id]);
          // Check if game is complete
          if (newSet.size === wordMatchItems.length) {
            setGameComplete(true);
            setCorrectMatches(prevCount => {
              const newCount = prevCount + 1;
              saveBestScore(newCount, attempts + 1);
              return newCount;
            });
          } else {
            setCorrectMatches(prev => prev + 1);
          }
          return newSet;
        });
      }
      
      // Reset selections after a short delay
      setTimeout(() => {
        setSelectedGerman(null);
        setSelectedTurkish(null);
      }, 1000);
    }
  }, [selectedGerman, selectedTurkish, shuffledItems, attempts]);

  const saveBestScore = (correct: number, totalAttempts: number) => {
    const score = Math.round((correct / totalAttempts) * 100);
    const saved = localStorage.getItem("unideutsch_best_wordmatch");
    const bestScore = saved ? parseInt(saved, 10) : 0;
    
    if (score > bestScore) {
      localStorage.setItem("unideutsch_best_wordmatch", score.toString());
    }
  };

  const resetGame = () => {
    setMatchedPairs(new Set());
    setAttempts(0);
    setCorrectMatches(0);
    setGameComplete(false);
    setSelectedGerman(null);
    setSelectedTurkish(null);
    window.location.reload(); // Simple way to reshuffle
  };

  const isMatched = (id: string) => matchedPairs.has(id);
  const isSelected = (id: string, type: "german" | "turkish") => {
    if (type === "german") return selectedGerman === id;
    return selectedTurkish === id;
  };

  const bestScore = localStorage.getItem("unideutsch_best_wordmatch") || "0";

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Kelime Eşleştirme
        </h3>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600">Doğru Eşleşme</p>
            <p className="text-2xl font-bold text-blue-600">{correctMatches}/{wordMatchItems.length}</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600">Deneme</p>
            <p className="text-2xl font-bold text-yellow-600">{attempts}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600">En İyi Skor</p>
            <p className="text-2xl font-bold text-green-600">%{bestScore}</p>
          </div>
        </div>

        {gameComplete ? (
          <div className="text-center py-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-4">
              <p className="text-xl font-bold text-green-800 mb-2">
                🎉 Tebrikler! Oyunu tamamladınız!
              </p>
              <p className="text-gray-700">
                {correctMatches} kelimeyi {attempts} denemede eşleştirdiniz.
              </p>
            </div>
            <button
              onClick={resetGame}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Tekrar Oyna
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* German Words */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Almanca</h4>
              <div className="space-y-2">
                {shuffledItems.german.map((item) => {
                  const matched = isMatched(item.id);
                  const selected = isSelected(item.id, "german");
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => !matched && setSelectedGerman(item.id)}
                      disabled={matched}
                      className={`w-full p-4 rounded-lg border-2 transition-all ${
                        matched
                          ? "bg-gray-200 border-gray-300 text-gray-400 line-through cursor-not-allowed"
                          : selected
                          ? "bg-blue-500 border-blue-600 text-white"
                          : "bg-white border-gray-300 text-gray-900 hover:border-blue-400 hover:bg-blue-50"
                      }`}
                    >
                      {item.de}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Turkish Words */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Türkçe</h4>
              <div className="space-y-2">
                {shuffledItems.turkish.map((item) => {
                  const matched = isMatched(item.id);
                  const selected = isSelected(item.id, "turkish");
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => !matched && setSelectedTurkish(item.id)}
                      disabled={matched}
                      className={`w-full p-4 rounded-lg border-2 transition-all ${
                        matched
                          ? "bg-gray-200 border-gray-300 text-gray-400 line-through cursor-not-allowed"
                          : selected
                          ? "bg-blue-500 border-blue-600 text-white"
                          : "bg-white border-gray-300 text-gray-900 hover:border-blue-400 hover:bg-blue-50"
                      }`}
                    >
                      {item.tr}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            Almanca kelimeyi seçin, sonra Türkçe karşılığını seçin. Eşleşen kelimeler kaybolacak.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WordMatchGame;

