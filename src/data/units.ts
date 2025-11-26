import { Unit } from "../types";
import { unit1Detailed } from "./units-detailed";
import { unit2Detailed } from "./units-detailed-2";
import { unit3Detailed } from "./units-detailed-3";
import { unit4Detailed } from "./units-detailed-4";
import { newUnits } from "./new-units";

export const units: Unit[] = [
  unit1Detailed,
  unit2Detailed,
  unit3Detailed,
  unit4Detailed,
  ...newUnits,
  {
    id: "unit-3",
    title: "Ünite 3: Günler & Zaman",
    level: "A1",
    descriptionTr: "Haftanın günleri, aylar, mevsimler ve zaman ifadeleri",
    topics: [
      "Sayılar 0-20 (null, eins, zwei, drei...)",
      "Yaş sorma (Wie alt bist du?)",
      "Yaş söyleme (Ich bin ... Jahre alt)"
    ],
    phrases: [
      { de: "null", tr: "sıfır" },
      { de: "eins", tr: "bir" },
      { de: "zwei", tr: "iki" },
      { de: "drei", tr: "üç" },
      { de: "vier", tr: "dört" },
      { de: "fünf", tr: "beş" },
      { de: "sechs", tr: "altı" },
      { de: "sieben", tr: "yedi" },
      { de: "acht", tr: "sekiz" },
      { de: "neun", tr: "dokuz" },
      { de: "zehn", tr: "on" },
      { de: "elf", tr: "on bir" },
      { de: "zwölf", tr: "on iki" },
      { de: "dreizehn", tr: "on üç" },
      { de: "vierzehn", tr: "on dört" },
      { de: "fünfzehn", tr: "on beş" },
      { de: "sechzehn", tr: "on altı" },
      { de: "siebzehn", tr: "on yedi" },
      { de: "achtzehn", tr: "on sekiz" },
      { de: "neunzehn", tr: "on dokuz" },
      { de: "zwanzig", tr: "yirmi" },
      { de: "Wie alt bist du?", tr: "Kaç yaşındasın?" },
      { de: "Ich bin zwanzig Jahre alt", tr: "Yirmi yaşındayım" }
    ],
    miniExercise: [
      {
        question: "'fünf' sayısı kaçtır?",
        options: ["3", "4", "5", "6"],
        correctIndex: 2
      },
      {
        question: "'Kaç yaşındasın?' sorusunun Almanca karşılığı nedir?",
        options: ["Wie alt bist du?", "Wie heißt du?", "Wie geht's?", "Woher kommst du?"],
        correctIndex: 0
      },
      {
        question: "'zwölf' sayısı kaçtır?",
        options: ["10", "11", "12", "13"],
        correctIndex: 2
      }
    ]
  },
];

