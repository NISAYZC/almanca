export type Level = "A1" | "A2";

export interface Phrase {
  de: string;
  tr: string;
  example?: string; // Örnek cümle kullanımı
  note?: string; // Özel not
}

export interface MiniExercise {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string; // Doğru cevap açıklaması
}

export interface LessonDetail {
  id: string;
  title: string;
  order: number;
  explanationTr: string; // Detaylı açıklama
  grammarNotes?: string[]; // Gramer notları
  examples: Phrase[]; // Örnek cümleler
  usageTips?: string[]; // Kullanım ipuçları
  exercises?: MiniExercise[]; // Bu alt konuya özel alıştırmalar
}

export interface Unit {
  id: string;
  title: string;
  level: Level;
  descriptionTr: string;
  topics: string[];
  phrases: Phrase[];
  miniExercise?: MiniExercise[];
  lessons?: LessonDetail[]; // Detaylı alt konular
}

export interface WordMatchItem {
  id: string;
  de: string;
  tr: string;
  unitId: string;
}

export interface SentenceBuilderItem {
  id: string;
  deCorrect: string;
  deShuffledWords: string[];
  trHint: string;
  unitId: string;
}

export interface QuizItem {
  id: string;
  questionTr: string;
  options: string[];
  correctIndex: number;
  unitId: string;
}

export interface Progress {
  completedUnits: string[];
  bestScores: {
    wordMatch?: number;
    sentenceBuilder?: number;
    quiz?: number;
  };
}

