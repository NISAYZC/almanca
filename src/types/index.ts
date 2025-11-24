export type Level = "A1" | "A2";

export interface Phrase {
  de: string;
  tr: string;
}

export interface MiniExercise {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Unit {
  id: string;
  title: string;
  level: Level;
  descriptionTr: string;
  topics: string[];
  phrases: Phrase[];
  miniExercise?: MiniExercise[];
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

