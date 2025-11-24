import { WordMatchItem, SentenceBuilderItem, QuizItem } from "../types";

export const wordMatchItems: WordMatchItem[] = [
  { id: "wm1", de: "Hallo", tr: "Merhaba", unitId: "unit-1" },
  { id: "wm2", de: "Guten Morgen", tr: "Günaydın", unitId: "unit-1" },
  { id: "wm3", de: "Tschüss", tr: "Hoşça kal", unitId: "unit-1" },
  { id: "wm4", de: "eins", tr: "bir", unitId: "unit-2" },
  { id: "wm5", de: "zwei", tr: "iki", unitId: "unit-2" },
  { id: "wm6", de: "fünf", tr: "beş", unitId: "unit-2" },
  { id: "wm7", de: "zehn", tr: "on", unitId: "unit-2" },
  { id: "wm8", de: "Montag", tr: "Pazartesi", unitId: "unit-3" },
  { id: "wm9", de: "Mittwoch", tr: "Çarşamba", unitId: "unit-3" },
  { id: "wm10", de: "Freitag", tr: "Cuma", unitId: "unit-3" },
  { id: "wm11", de: "Student", tr: "Öğrenci", unitId: "unit-4" },
  { id: "wm12", de: "Mensa", tr: "Yemekhane", unitId: "unit-4" },
  { id: "wm13", de: "Bibliothek", tr: "Kütüphane", unitId: "unit-4" },
  { id: "wm14", de: "Professor", tr: "Profesör", unitId: "unit-4" },
  { id: "wm15", de: "Prüfung", tr: "Sınav", unitId: "unit-4" }
];

export const sentenceBuilderItems: SentenceBuilderItem[] = [
  {
    id: "sb1",
    deCorrect: "Hallo, ich heiße Anna",
    deShuffledWords: ["heiße", "Hallo,", "Anna", "ich"],
    trHint: "Merhaba, benim adım Anna",
    unitId: "unit-1"
  },
  {
    id: "sb2",
    deCorrect: "Wie geht es dir?",
    deShuffledWords: ["dir?", "Wie", "geht", "es"],
    trHint: "Nasılsın?",
    unitId: "unit-1"
  },
  {
    id: "sb3",
    deCorrect: "Ich bin zwanzig Jahre alt",
    deShuffledWords: ["alt", "Jahre", "bin", "zwanzig", "Ich"],
    trHint: "Yirmi yaşındayım",
    unitId: "unit-2"
  },
  {
    id: "sb4",
    deCorrect: "Heute ist Montag",
    deShuffledWords: ["ist", "Heute", "Montag"],
    trHint: "Bugün pazartesi",
    unitId: "unit-3"
  },
  {
    id: "sb5",
    deCorrect: "Ich bin Student",
    deShuffledWords: ["bin", "Student", "Ich"],
    trHint: "Ben öğrenciyim",
    unitId: "unit-4"
  },
  {
    id: "sb6",
    deCorrect: "Guten Morgen, wie geht's?",
    deShuffledWords: ["geht's?", "Guten", "wie", "Morgen,"],
    trHint: "Günaydın, nasılsın?",
    unitId: "unit-1"
  }
];

export const quizItems: QuizItem[] = [
  {
    id: "q1",
    questionTr: "Sabah karşılaşmada hangi ifade kullanılır?",
    options: ["Guten Tag", "Guten Morgen", "Guten Abend", "Gute Nacht"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q2",
    questionTr: "'Nasılsın?' sorusunun Almanca karşılığı nedir?",
    options: ["Wie heißt du?", "Wie geht's?", "Wie alt bist du?", "Woher kommst du?"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q3",
    questionTr: "'fünf' sayısı kaçtır?",
    options: ["3", "4", "5", "6"],
    correctIndex: 2,
    unitId: "unit-2"
  },
  {
    id: "q4",
    questionTr: "'Kaç yaşındasın?' sorusunun Almanca karşılığı nedir?",
    options: ["Wie alt bist du?", "Wie heißt du?", "Wie geht's?", "Woher kommst du?"],
    correctIndex: 0,
    unitId: "unit-2"
  },
  {
    id: "q5",
    questionTr: "'Mittwoch' hangi gündür?",
    options: ["Pazartesi", "Salı", "Çarşamba", "Perşembe"],
    correctIndex: 2,
    unitId: "unit-3"
  },
  {
    id: "q6",
    questionTr: "'Yarın' kelimesinin Almanca karşılığı nedir?",
    options: ["Heute", "Morgen", "Gestern", "Jetzt"],
    correctIndex: 1,
    unitId: "unit-3"
  },
  {
    id: "q7",
    questionTr: "'Yemekhane' kelimesinin Almanca karşılığı nedir?",
    options: ["Hörsaal", "Mensa", "Bibliothek", "Universität"],
    correctIndex: 1,
    unitId: "unit-4"
  },
  {
    id: "q8",
    questionTr: "'Öğrenci' kelimesinin Almanca karşılığı nedir?",
    options: ["Professor", "Student", "Dozent", "Lehrer"],
    correctIndex: 1,
    unitId: "unit-4"
  }
];

