import { useState, useEffect, useMemo } from "react";
import { sentenceBuilderItems } from "../../data/games";
import { SentenceBuilderItem } from "../../types";

const SentenceBuilderGame = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [correctSentences, setCorrectSentences] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showFeedback, setShowFeedback] = useState<string | null>(null);
  const [gameComplete, setGameComplete] = useState(false);

  const shuffledItems = useMemo(() => {
    const shuffled = [...sentenceBuilderItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const currentItem = shuffledItems[currentItemIndex];

  useEffect(() => {
    if (currentItem) {
      setAvailableWords([...currentItem.deShuffledWords]);
      setSelectedWords([]);
      setShowFeedback(null);
    }
  }, [currentItemIndex, currentItem]);

  const handleWordClick = (word: string) => {
    setSelectedWords([...selectedWords, word]);
    setAvailableWords(availableWords.filter(w => w !== word));
  };

  const handleUndo = () => {
    if (selectedWords.length > 0) {
      const lastWord = selectedWords[selectedWords.length - 1];
      setSelectedWords(selectedWords.slice(0, -1));
      setAvailableWords([...availableWords, lastWord]);
    }
  };

  const handleCheck = () => {
    if (!currentItem) return;
    
    setAttempts(prev => prev + 1);
    const userAnswer = selectedWords.join(" ");
    const correctAnswer = currentItem.deCorrect;
    
    if (userAnswer === correctAnswer) {
      setCorrectSentences(prev => prev + 1);
      setShowFeedback("correct");
      
      setTimeout(() => {
        if (currentItemIndex < shuffledItems.length - 1) {
          setCurrentItemIndex(prev => prev + 1);
        } else {
          setGameComplete(true);
          saveBestScore(correctSentences + 1, attempts + 1);
        }
      }, 1500);
    } else {
      setShowFeedback("incorrect");
      setTimeout(() => {
        setShowFeedback(null);
      }, 2000);
    }
  };

  const saveBestScore = (correct: number, totalAttempts: number) => {
    const score = Math.round((correct / totalAttempts) * 100);
    const saved = localStorage.getItem("unideutsch_best_sentencebuilder");
    const bestScore = saved ? parseInt(saved, 10) : 0;
    
    if (score > bestScore) {
      localStorage.setItem("unideutsch_best_sentencebuilder", score.toString());
    }
  };

  const resetGame = () => {
    setCurrentItemIndex(0);
    setCorrectSentences(0);
    setAttempts(0);
    setGameComplete(false);
    setShowFeedback(null);
    window.location.reload();
  };

  const bestScore = localStorage.getItem("unideutsch_best_sentencebuilder") || "0";

  if (gameComplete) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-4">
            <p className="text-xl font-bold text-green-800 mb-2">
              🎉 Tebrikler! Tüm cümleleri tamamladınız!
            </p>
            <p className="text-gray-700">
              {correctSentences} cümleyi {attempts} denemede doğru kurdunuz.
            </p>
          </div>
          <button
            onClick={resetGame}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Tekrar Oyna
          </button>
        </div>
      </div>
    );
  }

  if (!currentItem) return null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Cümle Kurma
        </h3>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600">Doğru Cümle</p>
            <p className="text-2xl font-bold text-blue-600">{correctSentences}/{shuffledItems.length}</p>
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

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Cümle {currentItemIndex + 1} / {shuffledItems.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentItemIndex + 1) / shuffledItems.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Hint */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
          <p className="text-gray-700">
            <span className="font-semibold">İpucu:</span> {currentItem.trHint}
          </p>
        </div>

        {/* Selected Words (Current Sentence) */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Kurduğunuz Cümle:</h4>
          <div className="min-h-[60px] bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-wrap gap-2 items-center">
            {selectedWords.length === 0 ? (
              <span className="text-gray-400 italic">Kelime seçerek cümleyi kurun...</span>
            ) : (
              selectedWords.map((word, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg font-medium"
                >
                  {word}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Available Words */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Kullanılabilir Kelimeler:</h4>
          <div className="flex flex-wrap gap-2">
            {availableWords.map((word, index) => (
              <button
                key={index}
                onClick={() => handleWordClick(word)}
                className="bg-white border-2 border-gray-300 text-gray-900 px-4 py-2 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors font-medium"
              >
                {word}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={handleUndo}
            disabled={selectedWords.length === 0}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Geri Al
          </button>
          <button
            onClick={handleCheck}
            disabled={selectedWords.length === 0 || showFeedback !== null}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Kontrol Et
          </button>
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`mt-4 p-4 rounded-lg text-center font-semibold ${
            showFeedback === "correct"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}>
            {showFeedback === "correct" ? (
              "✓ Doğru! Harika iş çıkardınız!"
            ) : (
              `✗ Yanlış. Doğru cümle: "${currentItem.deCorrect}"`
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SentenceBuilderGame;

