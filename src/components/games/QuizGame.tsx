import { useState, useEffect, useMemo } from "react";
import { quizItems } from "../../data/games";
import { QuizItem } from "../../types";

const QuizGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const shuffledQuestions = useMemo(() => {
    const shuffled = [...quizItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleAnswer = (answerIndex: number) => {
    if (showFeedback || !currentQuestion) return;
    
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    if (answerIndex === currentQuestion.correctIndex) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setQuizComplete(true);
        saveBestScore(score + (answerIndex === currentQuestion.correctIndex ? 1 : 0));
      }
    }, 2000);
  };

  const saveBestScore = (finalScore: number) => {
    const percentage = Math.round((finalScore / shuffledQuestions.length) * 100);
    const saved = localStorage.getItem("unideutsch_best_quiz");
    const bestScore = saved ? parseInt(saved, 10) : 0;
    
    if (percentage > bestScore) {
      localStorage.setItem("unideutsch_best_quiz", percentage.toString());
    }
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowFeedback(false);
    setQuizComplete(false);
    window.location.reload();
  };

  const bestScore = localStorage.getItem("unideutsch_best_quiz") || "0";

  if (quizComplete) {
    const finalPercentage = Math.round((score / shuffledQuestions.length) * 100);
    let message = "";
    if (finalPercentage >= 90) {
      message = "Mükemmel! Harika bir iş çıkardınız! 🌟";
    } else if (finalPercentage >= 70) {
      message = "Çok iyi! Devam edin! 👍";
    } else if (finalPercentage >= 50) {
      message = "İyi gidiyorsunuz! Biraz daha pratik yapın. 💪";
    } else {
      message = "Daha fazla çalışma zamanı! Pes etmeyin! 📚";
    }

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-4">
            <p className="text-2xl font-bold text-blue-800 mb-2">
              Quiz Tamamlandı!
            </p>
            <p className="text-xl text-gray-700 mb-2">
              Skorunuz: {score} / {shuffledQuestions.length}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              Başarı Oranı: %{finalPercentage}
            </p>
            <p className="text-lg font-semibold text-gray-800 mt-4">
              {message}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              En İyi Skorunuz: %{bestScore}
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

  if (!currentQuestion) return null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Quiz
        </h3>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Soru {currentQuestionIndex + 1} / {shuffledQuestions.length}</span>
            <span>Skor: {score}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all"
              style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-900 mb-6">
            {currentQuestion.questionTr}
          </h4>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "w-full text-left px-6 py-4 rounded-lg border-2 transition-all font-medium ";
              
              if (showFeedback) {
                if (index === currentQuestion.correctIndex) {
                  buttonClass += "bg-green-100 border-green-500 text-green-900";
                } else if (index === selectedAnswer && index !== currentQuestion.correctIndex) {
                  buttonClass += "bg-red-100 border-red-500 text-red-900";
                } else {
                  buttonClass += "bg-gray-50 border-gray-200 text-gray-600";
                }
              } else {
                if (selectedAnswer === index) {
                  buttonClass += "bg-blue-100 border-blue-500 text-blue-900";
                } else {
                  buttonClass += "bg-white border-gray-300 text-gray-900 hover:border-blue-400 hover:bg-blue-50";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showFeedback}
                  className={buttonClass}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`p-4 rounded-lg text-center font-semibold ${
            selectedAnswer === currentQuestion.correctIndex
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}>
            {selectedAnswer === currentQuestion.correctIndex ? (
              "✓ Doğru cevap!"
            ) : (
              `✗ Yanlış. Doğru cevap: "${currentQuestion.options[currentQuestion.correctIndex]}"`
            )}
          </div>
        )}

        {/* Best Score */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            En İyi Skorunuz: %{bestScore}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizGame;

