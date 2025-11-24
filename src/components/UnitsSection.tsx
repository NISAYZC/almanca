import { useState, useEffect } from "react";
import { units } from "../data/units";
import { Unit, Progress } from "../types";

const UnitsSection = () => {
  const [expandedUnit, setExpandedUnit] = useState<string | null>(null);
  const [progress, setProgress] = useState<Progress>({
    completedUnits: [],
    bestScores: {}
  });
  const [unitAnswers, setUnitAnswers] = useState<Record<string, Record<number, number>>>({});

  useEffect(() => {
    const savedProgress = localStorage.getItem("unideutsch_progress");
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (e) {
        console.error("Progress yüklenirken hata:", e);
      }
    }
  }, []);

  const saveProgress = (newProgress: Progress) => {
    setProgress(newProgress);
    localStorage.setItem("unideutsch_progress", JSON.stringify(newProgress));
  };

  const handleAnswer = (unitId: string, questionIndex: number, answerIndex: number) => {
    setUnitAnswers(prev => ({
      ...prev,
      [unitId]: {
        ...prev[unitId],
        [questionIndex]: answerIndex
      }
    }));
  };

  const checkUnitComplete = (unit: Unit) => {
    if (!unit.miniExercise || unit.miniExercise.length === 0) return false;
    
    const answers = unitAnswers[unit.id] || {};
    const allAnswered = unit.miniExercise.every((_, index) => answers[index] !== undefined);
    
    if (allAnswered) {
      const allCorrect = unit.miniExercise.every(
        (exercise, index) => answers[index] === exercise.correctIndex
      );
      
      if (allCorrect && !progress.completedUnits.includes(unit.id)) {
        saveProgress({
          ...progress,
          completedUnits: [...progress.completedUnits, unit.id]
        });
      }
      return allCorrect;
    }
    return false;
  };

  const isUnitCompleted = (unitId: string) => {
    return progress.completedUnits.includes(unitId);
  };

  return (
    <section id="units" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Üniteler
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {units.map((unit) => (
            <div
              key={unit.id}
              className="bg-white border-2 border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{unit.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {unit.level}
                      </span>
                      {isUnitCompleted(unit.id) && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Tamamlandı
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{unit.descriptionTr}</p>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {expandedUnit === unit.id ? "Detayları Gizle" : "Detayları Gör"}
                </button>
              </div>

              {expandedUnit === unit.id && (
                <div className="border-t border-gray-200 p-6 bg-gray-50 space-y-6">
                  {/* Topics */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Konular:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      {unit.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Phrases Table */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">İfadeler:</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Almanca</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Türkçe</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {unit.phrases.map((phrase, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-4 py-2 text-sm font-medium text-gray-900">{phrase.de}</td>
                              <td className="px-4 py-2 text-sm text-gray-600">{phrase.tr}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Mini Exercise */}
                  {unit.miniExercise && unit.miniExercise.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Mini Quiz:</h4>
                      <div className="space-y-4">
                        {unit.miniExercise.map((exercise, qIndex) => {
                          const selectedAnswer = unitAnswers[unit.id]?.[qIndex];
                          const isCorrect = selectedAnswer === exercise.correctIndex;
                          const showResult = selectedAnswer !== undefined;

                          return (
                            <div key={qIndex} className="bg-white p-4 rounded-lg border border-gray-200">
                              <p className="font-medium text-gray-900 mb-3">
                                {qIndex + 1}. {exercise.question}
                              </p>
                              <div className="space-y-2">
                                {exercise.options.map((option, oIndex) => (
                                  <button
                                    key={oIndex}
                                    onClick={() => handleAnswer(unit.id, qIndex, oIndex)}
                                    disabled={showResult}
                                    className={`w-full text-left px-4 py-2 rounded-lg border-2 transition-colors ${
                                      showResult
                                        ? oIndex === exercise.correctIndex
                                          ? "bg-green-100 border-green-500 text-green-900"
                                          : selectedAnswer === oIndex
                                          ? "bg-red-100 border-red-500 text-red-900"
                                          : "bg-gray-50 border-gray-200 text-gray-600"
                                        : selectedAnswer === oIndex
                                        ? "bg-blue-100 border-blue-500 text-blue-900"
                                        : "bg-white border-gray-200 hover:border-blue-300 text-gray-700"
                                    }`}
                                  >
                                    {option}
                                  </button>
                                ))}
                              </div>
                              {showResult && (
                                <p className={`mt-2 text-sm font-medium ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                                  {isCorrect ? "✓ Doğru!" : "✗ Yanlış. Doğru cevap: " + exercise.options[exercise.correctIndex]}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      {checkUnitComplete(unit) && (
                        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-green-800 font-medium text-center">
                            🎉 Tebrikler! Bu üniteyi tamamladınız!
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnitsSection;

