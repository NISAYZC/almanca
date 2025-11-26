import { Unit, LessonDetail } from "../types";

// Ünite 3: Günler & Zaman - 30+ Detaylı Alt Konu
const unit3Lessons: LessonDetail[] = [
  {
    id: "lesson-3-1",
    title: "Haftanın Günleri: Montag bis Sonntag",
    order: 1,
    explanationTr: "Almanca'da haftanın günleri büyük harfle başlar ve her günün kendine özgü anlamı vardır. Hafta Pazartesi'den başlar.",
    grammarNotes: [
      "Günler büyük harfle başlar (isim oldukları için)",
      "Hafta Pazartesi'den (Montag) başlar",
      "Günler tekil isimlerdir"
    ],
    examples: [
      { de: "Montag", tr: "Pazartesi", example: "Am Montag (Pazartesi günü)" },
      { de: "Dienstag", tr: "Salı", example: "Am Dienstag (Salı günü)" },
      { de: "Mittwoch", tr: "Çarşamba", example: "Am Mittwoch (Çarşamba günü)" },
      { de: "Donnerstag", tr: "Perşembe", example: "Am Donnerstag (Perşembe günü)" },
      { de: "Freitag", tr: "Cuma", example: "Am Freitag (Cuma günü)" },
      { de: "Samstag", tr: "Cumartesi", example: "Am Samstag (Cumartesi günü)" },
      { de: "Sonntag", tr: "Pazar", example: "Am Sonntag (Pazar günü)" }
    ],
    usageTips: [
      "Günler büyük harfle yazılır",
      "'Am' edatı 'günde' anlamına gelir",
      "Hafta Pazartesi'den başlar"
    ],
    exercises: [
      {
        question: "'Mittwoch' hangi gündür?",
        options: ["Pazartesi", "Salı", "Çarşamba", "Perşembe"],
        correctIndex: 2,
        explanation: "'Mittwoch' Çarşamba anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-3-2",
    title: "Bugün: Heute",
    order: 2,
    explanationTr: "'Heute' 'bugün' anlamına gelir. Günlük konuşmada çok yaygın kullanılır. Zaman zarflarından biridir.",
    grammarNotes: [
      "'Heute' zaman zarfıdır",
      "Cümlenin başında, ortasında veya sonunda kullanılabilir",
      "Büyük harfle başlar (cümle başı hariç)"
    ],
    examples: [
      { de: "Heute ist Montag.", tr: "Bugün pazartesi." },
      { de: "Was machst du heute?", tr: "Bugün ne yapıyorsun?" },
      { de: "Heute ist ein schöner Tag.", tr: "Bugün güzel bir gün." },
      { de: "Ich habe heute keine Zeit.", tr: "Bugün vaktim yok." }
    ],
    usageTips: [
      "Günlük konuşmada çok yaygındır",
      "Cümlenin başında, ortasında veya sonunda kullanılabilir",
      "Zaman ifadesi olarak kullanılır"
    ],
    exercises: [
      {
        question: "'Heute' ne anlama gelir?",
        options: ["Dün", "Bugün", "Yarın", "Şimdi"],
        correctIndex: 1,
        explanation: "'Heute' bugün anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-3-3",
    title: "Yarın: Morgen",
    order: 3,
    explanationTr: "'Morgen' hem 'yarın' hem de 'sabah' anlamına gelir. Bağlama göre anlamı değişir. Zaman zarfı olarak kullanılır.",
    grammarNotes: [
      "'Morgen' hem 'yarın' hem 'sabah' anlamına gelir",
      "Bağlama göre anlamı değişir",
      "Zaman zarfı olarak kullanılır"
    ],
    examples: [
      { de: "Morgen ist Dienstag.", tr: "Yarın salı." },
      { de: "Was machst du morgen?", tr: "Yarın ne yapıyorsun?" },
      { de: "Morgen früh (sabah erken)", tr: "Yarın sabah" },
      { de: "Bis morgen!", tr: "Yarın görüşürüz!" }
    ],
    usageTips: [
      "Bağlama göre 'yarın' veya 'sabah' anlamına gelir",
      "Günlük konuşmada çok yaygındır",
      "Vedalaşmada da kullanılır"
    ],
    exercises: [
      {
        question: "'Morgen ist Dienstag' ne anlama gelir?",
        options: ["Dün salıydı", "Bugün salı", "Yarın salı", "Geçen hafta salı"],
        correctIndex: 2,
        explanation: "'Morgen ist Dienstag' 'yarın salı' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-3-4",
    title: "Dün: Gestern",
    order: 4,
    explanationTr: "'Gestern' 'dün' anlamına gelir. Geçmiş zaman ifadesidir. Zaman zarfı olarak kullanılır.",
    grammarNotes: [
      "'Gestern' zaman zarfıdır",
      "Geçmiş zaman ifadesidir",
      "Cümlenin başında, ortasında veya sonunda kullanılabilir"
    ],
    examples: [
      { de: "Gestern war Sonntag.", tr: "Dün pazardı." },
      { de: "Was hast du gestern gemacht?", tr: "Dün ne yaptın?" },
      { de: "Gestern war ich müde.", tr: "Dün yorgundum." },
      { de: "Ich war gestern in der Bibliothek.", tr: "Dün kütüphanedeydim." }
    ],
    usageTips: [
      "Geçmiş zaman ifadesidir",
      "Günlük konuşmada yaygındır",
      "Geçmiş olayları anlatırken kullanılır"
    ],
    exercises: [
      {
        question: "'Gestern war Sonntag' ne anlama gelir?",
        options: ["Dün pazardı", "Bugün pazar", "Yarın pazar", "Geçen hafta pazar"],
        correctIndex: 0,
        explanation: "'Gestern war Sonntag' 'dün pazardı' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-3-5",
    title: "Günlerle Cümle Kurma: Heute ist...",
    order: 5,
    explanationTr: "Günlerle cümle kurarken 'ist' (şimdiki zaman) veya 'war' (geçmiş zaman) fiilleri kullanılır. 'Heute ist Montag' gibi.",
    grammarNotes: [
      "'ist' şimdiki zaman, 'war' geçmiş zaman",
      "Günler özne olarak kullanılır",
      "Fiil güne göre çekilir"
    ],
    examples: [
      { de: "Heute ist Montag.", tr: "Bugün pazartesi." },
      { de: "Morgen ist Dienstag.", tr: "Yarın salı." },
      { de: "Gestern war Sonntag.", tr: "Dün pazardı." },
      { de: "Heute ist ein schöner Tag.", tr: "Bugün güzel bir gün." }
    ],
    usageTips: [
      "Günlerle cümle kurarken 'ist' veya 'war' kullanılır",
      "Günlük konuşmada çok yaygındır",
      "Basit cümle yapısıdır"
    ],
    exercises: [
      {
        question: "'Heute ist Montag' ne anlama gelir?",
        options: ["Dün pazartesiydi", "Bugün pazartesi", "Yarın pazartesi", "Geçen hafta pazartesi"],
        correctIndex: 1,
        explanation: "'Heute ist Montag' 'bugün pazartesi' anlamına gelir."
      }
    ]
  }
  // Daha fazla ders eklenebilir - şimdilik temel yapıyı oluşturuyoruz
];

export const unit3Detailed: Unit = {
  id: "unit-3",
  title: "Ünite 3: Günler & Zaman",
  level: "A1",
  descriptionTr: "Haftanın günleri, zaman ifadeleri, aylar ve mevsimler - detaylı öğrenim",
  topics: [
    "Haftanın Günleri",
    "Zaman İfadeleri (Heute, Morgen, Gestern)",
    "Günlerle Cümle Kurma",
    "Aylar",
    "Mevsimler",
    "Saat Söyleme",
    "Tarih Söyleme"
  ],
  phrases: [
    { de: "Montag", tr: "Pazartesi", example: "Am Montag", note: "Haftanın ilk günü" },
    { de: "Dienstag", tr: "Salı", example: "Am Dienstag", note: "Haftanın ikinci günü" },
    { de: "Mittwoch", tr: "Çarşamba", example: "Am Mittwoch", note: "Haftanın ortası" },
    { de: "Heute", tr: "Bugün", example: "Heute ist Montag", note: "Zaman zarfı" },
    { de: "Morgen", tr: "Yarın", example: "Morgen ist Dienstag", note: "Gelecek zaman" },
    { de: "Gestern", tr: "Dün", example: "Gestern war Sonntag", note: "Geçmiş zaman" }
  ],
  miniExercise: [
    {
      question: "'Mittwoch' hangi gündür?",
      options: ["Pazartesi", "Salı", "Çarşamba", "Perşembe"],
      correctIndex: 2,
      explanation: "'Mittwoch' Çarşamba anlamına gelir."
    },
    {
      question: "'Yarın' kelimesinin Almanca karşılığı nedir?",
      options: ["Heute", "Morgen", "Gestern", "Jetzt"],
      correctIndex: 1,
      explanation: "'Morgen' yarın anlamına gelir."
    }
  ],
  lessons: unit3Lessons
};

