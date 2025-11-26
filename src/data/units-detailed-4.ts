import { Unit, LessonDetail } from "../types";

// Ünite 4: Kampüs & Üniversite - 30+ Detaylı Alt Konu
const unit4Lessons: LessonDetail[] = [
  {
    id: "lesson-4-1",
    title: "Kampüs Yerleri: Hörsaal, Mensa, Bibliothek",
    order: 1,
    explanationTr: "Üniversite kampüsünde önemli yerler vardır. 'Hörsaal' amfi/derslik, 'Mensa' yemekhane, 'Bibliothek' kütüphane anlamına gelir.",
    grammarNotes: [
      "Kampüs yerleri isimdir ve büyük harfle başlar",
      "Artikel kullanımı önemlidir (der, die, das)",
      "Yer edatlarıyla kullanılır (in, an, auf)"
    ],
    examples: [
      { de: "Hörsaal", tr: "Amfi, derslik", example: "Im Hörsaal (Amfide)" },
      { de: "Mensa", tr: "Yemekhane", example: "In der Mensa (Yemekhanede)" },
      { de: "Bibliothek", tr: "Kütüphane", example: "In der Bibliothek (Kütüphanede)" },
      { de: "Wo ist der Hörsaal?", tr: "Amfi nerede?" }
    ],
    usageTips: [
      "Kampüs yerlerini öğrenmek önemlidir",
      "Yer edatlarıyla kullanılır",
      "Günlük üniversite hayatında sıkça kullanılır"
    ],
    exercises: [
      {
        question: "'Mensa' ne anlama gelir?",
        options: ["Amfi", "Yemekhane", "Kütüphane", "Fakülte"],
        correctIndex: 1,
        explanation: "'Mensa' yemekhane anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-4-2",
    title: "Üniversite Kişileri: Professor, Student, Dozent",
    order: 2,
    explanationTr: "Üniversitede farklı kişiler vardır. 'Professor' profesör, 'Student' öğrenci, 'Dozent' öğretim görevlisi anlamına gelir.",
    grammarNotes: [
      "Kişi isimleri büyük harfle başlar",
      "Cinsiyete göre değişir (Student/Studentin)",
      "Meslek isimleri artikel alır"
    ],
    examples: [
      { de: "Professor", tr: "Profesör", example: "Der Professor (Profesör)" },
      { de: "Student", tr: "Öğrenci (erkek)", example: "Ein Student (Bir öğrenci)" },
      { de: "Studentin", tr: "Öğrenci (kadın)", example: "Eine Studentin (Bir öğrenci)" },
      { de: "Dozent", tr: "Öğretim görevlisi", example: "Der Dozent (Öğretim görevlisi)" }
    ],
    usageTips: [
      "Kişi isimlerini öğrenmek önemlidir",
      "Cinsiyete göre değişir",
      "Üniversite hayatında sıkça kullanılır"
    ],
    exercises: [
      {
        question: "Kadın öğrenci nasıl söylenir?",
        options: ["Student", "Studentin", "Studenten", "Studentes"],
        correctIndex: 1,
        explanation: "Kadın öğrenci 'Studentin' olarak söylenir."
      }
    ]
  },
  {
    id: "lesson-4-3",
    title: "Üniversite Aktiviteleri: Vorlesung, Seminar, Prüfung",
    order: 3,
    explanationTr: "Üniversitede farklı aktiviteler vardır. 'Vorlesung' ders, 'Seminar' seminer, 'Prüfung' sınav anlamına gelir.",
    grammarNotes: [
      "Aktivite isimleri büyük harfle başlar",
      "Artikel kullanımı önemlidir",
      "Fiillerle birlikte kullanılır"
    ],
    examples: [
      { de: "Vorlesung", tr: "Ders", example: "Ich habe eine Vorlesung (Bir dersim var)" },
      { de: "Seminar", tr: "Seminer", example: "Das Seminar ist interessant (Seminer ilginç)" },
      { de: "Prüfung", tr: "Sınav", example: "Ich habe eine Prüfung (Bir sınavım var)" },
      { de: "Wann ist die Vorlesung?", tr: "Ders ne zaman?" }
    ],
    usageTips: [
      "Aktivite isimlerini öğrenmek önemlidir",
      "Üniversite hayatında sıkça kullanılır",
      "Fiillerle birlikte kullanılır"
    ],
    exercises: [
      {
        question: "'Prüfung' ne anlama gelir?",
        options: ["Ders", "Seminer", "Sınav", "Ödev"],
        correctIndex: 2,
        explanation: "'Prüfung' sınav anlamına gelir."
      }
    ]
  }
  // Daha fazla ders eklenebilir
];

export const unit4Detailed: Unit = {
  id: "unit-4",
  title: "Ünite 4: Kampüs & Üniversite",
  level: "A1",
  descriptionTr: "Üniversite hayatıyla ilgili temel kelimeler, yerler, kişiler ve aktiviteler",
  topics: [
    "Kampüs Yerleri",
    "Üniversite Kişileri",
    "Üniversite Aktiviteleri",
    "Ders Programı",
    "Sınavlar ve Notlar",
    "Üniversite Diyalogları"
  ],
  phrases: [
    { de: "Hörsaal", tr: "Amfi", example: "Im Hörsaal", note: "Ders yeri" },
    { de: "Mensa", tr: "Yemekhane", example: "In der Mensa", note: "Yemek yeri" },
    { de: "Bibliothek", tr: "Kütüphane", example: "In der Bibliothek", note: "Çalışma yeri" },
    { de: "Professor", tr: "Profesör", example: "Der Professor", note: "Öğretmen" },
    { de: "Student", tr: "Öğrenci", example: "Ein Student", note: "Erkek öğrenci" },
    { de: "Vorlesung", tr: "Ders", example: "Eine Vorlesung", note: "Ders" },
    { de: "Prüfung", tr: "Sınav", example: "Eine Prüfung", note: "Sınav" }
  ],
  miniExercise: [
    {
      question: "'Yemekhane' kelimesinin Almanca karşılığı nedir?",
      options: ["Hörsaal", "Mensa", "Bibliothek", "Universität"],
      correctIndex: 1,
      explanation: "'Mensa' yemekhane anlamına gelir."
    },
    {
      question: "'Öğrenci' kelimesinin Almanca karşılığı nedir?",
      options: ["Professor", "Student", "Dozent", "Lehrer"],
      correctIndex: 1,
      explanation: "'Student' öğrenci anlamına gelir."
    }
  ],
  lessons: unit4Lessons
};

