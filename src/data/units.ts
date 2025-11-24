import { Unit } from "../types";

export const units: Unit[] = [
  {
    id: "unit-1",
    title: "Ünite 1: Selamlaşma & Tanışma",
    level: "A1",
    descriptionTr: "Temel selamlaşma ifadeleri ve kendini tanıtma cümleleri",
    topics: [
      "Selamlaşma (Hallo, Guten Morgen, Guten Tag, Guten Abend)",
      "Kendini tanıtma (Ich heiße..., Mein Name ist...)",
      "Nasılsın sorusu (Wie geht's?, Wie geht es dir?)",
      "Vedalaşma (Auf Wiedersehen, Tschüss, Bis bald)"
    ],
    phrases: [
      { de: "Hallo", tr: "Merhaba" },
      { de: "Guten Morgen", tr: "Günaydın" },
      { de: "Guten Tag", tr: "İyi günler" },
      { de: "Guten Abend", tr: "İyi akşamlar" },
      { de: "Ich heiße...", tr: "Benim adım..." },
      { de: "Mein Name ist...", tr: "Benim adım..." },
      { de: "Wie geht's?", tr: "Nasılsın?" },
      { de: "Wie geht es dir?", tr: "Nasılsın?" },
      { de: "Gut, danke", tr: "İyiyim, teşekkürler" },
      { de: "Auf Wiedersehen", tr: "Güle güle" },
      { de: "Tschüss", tr: "Hoşça kal" },
      { de: "Bis bald", tr: "Yakında görüşürüz" }
    ],
    miniExercise: [
      {
        question: "Sabah karşılaşmada ne denir?",
        options: ["Guten Tag", "Guten Morgen", "Guten Abend", "Tschüss"],
        correctIndex: 1
      },
      {
        question: "'Nasılsın?' sorusunun Almanca karşılığı nedir?",
        options: ["Wie heißt du?", "Wie geht's?", "Wie alt bist du?", "Woher kommst du?"],
        correctIndex: 1
      },
      {
        question: "'Ich heiße...' ifadesi ne anlama gelir?",
        options: ["Ben... yaşındayım", "Benim adım...", "Ben... geliyorum", "Ben... yaşıyorum"],
        correctIndex: 1
      }
    ]
  },
  {
    id: "unit-2",
    title: "Ünite 2: Sayılar & Yaş",
    level: "A1",
    descriptionTr: "0-20 arası sayılar ve yaş sorma-cevaplama",
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
  {
    id: "unit-3",
    title: "Ünite 3: Günler & Basit Program",
    level: "A1",
    descriptionTr: "Haftanın günleri ve basit zaman ifadeleri",
    topics: [
      "Haftanın günleri (Montag, Dienstag, Mittwoch...)",
      "Bugün, yarın, dün (Heute, Morgen, Gestern)",
      "Basit cümleler (Heute ist Montag)"
    ],
    phrases: [
      { de: "Montag", tr: "Pazartesi" },
      { de: "Dienstag", tr: "Salı" },
      { de: "Mittwoch", tr: "Çarşamba" },
      { de: "Donnerstag", tr: "Perşembe" },
      { de: "Freitag", tr: "Cuma" },
      { de: "Samstag", tr: "Cumartesi" },
      { de: "Sonntag", tr: "Pazar" },
      { de: "Heute", tr: "Bugün" },
      { de: "Morgen", tr: "Yarın" },
      { de: "Gestern", tr: "Dün" },
      { de: "Heute ist Montag", tr: "Bugün pazartesi" },
      { de: "Morgen ist Dienstag", tr: "Yarın salı" },
      { de: "Gestern war Sonntag", tr: "Dün pazardı" }
    ],
    miniExercise: [
      {
        question: "'Mittwoch' hangi gündür?",
        options: ["Pazartesi", "Salı", "Çarşamba", "Perşembe"],
        correctIndex: 2
      },
      {
        question: "'Yarın' kelimesinin Almanca karşılığı nedir?",
        options: ["Heute", "Morgen", "Gestern", "Jetzt"],
        correctIndex: 1
      },
      {
        question: "'Freitag' hangi gündür?",
        options: ["Perşembe", "Cuma", "Cumartesi", "Pazar"],
        correctIndex: 1
      }
    ]
  },
  {
    id: "unit-4",
    title: "Ünite 4: Kampüs & Üniversite",
    level: "A1",
    descriptionTr: "Üniversite hayatıyla ilgili temel kelimeler ve ifadeler",
    topics: [
      "Kampüs yerleri (Hörsaal, Mensa, Bibliothek)",
      "Kişiler (Professor, Student, Dozent)",
      "Aktiviteler (Vorlesung, Seminar, Prüfung)"
    ],
    phrases: [
      { de: "Hörsaal", tr: "Amfi, derslik" },
      { de: "Mensa", tr: "Yemekhane" },
      { de: "Bibliothek", tr: "Kütüphane" },
      { de: "Professor", tr: "Profesör" },
      { de: "Student", tr: "Öğrenci" },
      { de: "Dozent", tr: "Öğretim görevlisi" },
      { de: "Vorlesung", tr: "Ders" },
      { de: "Seminar", tr: "Seminer" },
      { de: "Prüfung", tr: "Sınav" },
      { de: "Universität", tr: "Üniversite" },
      { de: "Fakultät", tr: "Fakülte" },
      { de: "Studium", tr: "Öğrenim, eğitim" }
    ],
    miniExercise: [
      {
        question: "'Yemekhane' kelimesinin Almanca karşılığı nedir?",
        options: ["Hörsaal", "Mensa", "Bibliothek", "Universität"],
        correctIndex: 1
      },
      {
        question: "'Öğrenci' kelimesinin Almanca karşılığı nedir?",
        options: ["Professor", "Student", "Dozent", "Lehrer"],
        correctIndex: 1
      },
      {
        question: "'Sınav' kelimesinin Almanca karşılığı nedir?",
        options: ["Vorlesung", "Seminar", "Prüfung", "Studium"],
        correctIndex: 2
      }
    ]
  }
];

