import { Unit } from "../types";

// Yeni üniteler - Her biri için detaylı içerik oluşturulacak
// Şimdilik temel yapıyı oluşturuyoruz

export const unit5: Unit = {
  id: "unit-5",
  title: "Ünite 5: Aile & Kişiler",
  level: "A1",
  descriptionTr: "Aile bireyleri, meslekler, kişi zamirleri ve sahiplik ifadeleri",
  topics: [
    "Aile bireyleri (Mutter, Vater, Bruder, Schwester)",
    "Meslekler (Lehrer, Arzt, Ingenieur)",
    "Kişi zamirleri (ich, du, er, sie, es, wir, ihr, sie)",
    "Sahiplik ifadeleri (mein, dein, sein, ihr)",
    "Olumlu ve olumsuz cümleler",
    "Soru cümleleri"
  ],
  phrases: [
    { de: "Mutter", tr: "Anne" },
    { de: "Vater", tr: "Baba" },
    { de: "Bruder", tr: "Erkek kardeş" },
    { de: "Schwester", tr: "Kız kardeş" },
    { de: "Sohn", tr: "Oğul" },
    { de: "Tochter", tr: "Kız" },
    { de: "Lehrer", tr: "Öğretmen" },
    { de: "Arzt", tr: "Doktor" },
    { de: "Ich", tr: "Ben" },
    { de: "Du", tr: "Sen" },
    { de: "Er", tr: "O (eril)" },
    { de: "Sie", tr: "O (dişil)" }
  ],
  miniExercise: [
    {
      question: "'Mutter' ne anlama gelir?",
      options: ["Anne", "Baba", "Kardeş", "Çocuk"],
      correctIndex: 0
    }
  ]
};

export const unit6: Unit = {
  id: "unit-6",
  title: "Ünite 6: Renkler & Eşyalar",
  level: "A1",
  descriptionTr: "Renkler, ev eşyaları, sınıf eşyaları ve sıfatlar",
  topics: [
    "Temel renkler (rot, blau, grün, gelb)",
    "Ev eşyaları (Tisch, Stuhl, Bett, Lampe)",
    "Sınıf eşyaları (Buch, Stift, Heft, Tasche)",
    "Sıfatlar ve kullanımları",
    "Renk sorma ve söyleme",
    "Eşya tanımlama"
  ],
  phrases: [
    { de: "rot", tr: "kırmızı" },
    { de: "blau", tr: "mavi" },
    { de: "grün", tr: "yeşil" },
    { de: "gelb", tr: "sarı" },
    { de: "Tisch", tr: "masa" },
    { de: "Stuhl", tr: "sandalye" },
    { de: "Buch", tr: "kitap" },
    { de: "Stift", tr: "kalem" }
  ],
  miniExercise: [
    {
      question: "'rot' ne anlama gelir?",
      options: ["Kırmızı", "Mavi", "Yeşil", "Sarı"],
      correctIndex: 0
    }
  ]
};

export const unit7: Unit = {
  id: "unit-7",
  title: "Ünite 7: Yiyecek & İçecek",
  level: "A1",
  descriptionTr: "Yiyecekler, içecekler, yemek siparişi ve restoran diyalogları",
  topics: [
    "Temel yiyecekler (Brot, Käse, Fleisch, Obst)",
    "İçecekler (Wasser, Kaffee, Tee, Saft)",
    "Yemek siparişi (Ich möchte..., Bitte...)",
    "Fiyat sorma (Wie viel kostet...?)",
    "Restoran diyalogları",
    "Lezzet ifadeleri (lecker, gut, schlecht)"
  ],
  phrases: [
    { de: "Brot", tr: "ekmek" },
    { de: "Käse", tr: "peynir" },
    { de: "Wasser", tr: "su" },
    { de: "Kaffee", tr: "kahve" },
    { de: "Ich möchte...", tr: "Ben ... istiyorum" },
    { de: "Wie viel kostet...?", tr: "... ne kadar tutuyor?" }
  ],
  miniExercise: [
    {
      question: "'Brot' ne anlama gelir?",
      options: ["Ekmek", "Peynir", "Su", "Kahve"],
      correctIndex: 0
    }
  ]
};

export const unit8: Unit = {
  id: "unit-8",
  title: "Ünite 8: Şehir & Yönler",
  level: "A1",
  descriptionTr: "Şehir yerleri, yön sorma-verme, ulaşım ve yol tarifi",
  topics: [
    "Şehir yerleri (Park, Museum, Bahnhof, Flughafen)",
    "Yönler (links, rechts, geradeaus, oben, unten)",
    "Yol sorma (Wo ist...?, Wie komme ich zu...?)",
    "Yol tarifi verme (Gehen Sie..., Biegen Sie...)",
    "Ulaşım araçları (Bus, Bahn, Auto, Fahrrad)",
    "Yer edatları (in, an, auf, bei)"
  ],
  phrases: [
    { de: "Park", tr: "park" },
    { de: "Museum", tr: "müze" },
    { de: "Bahnhof", tr: "istasyon" },
    { de: "links", tr: "sol" },
    { de: "rechts", tr: "sağ" },
    { de: "Wo ist...?", tr: "... nerede?" }
  ],
  miniExercise: [
    {
      question: "'links' ne anlama gelir?",
      options: ["Sol", "Sağ", "Düz", "Yukarı"],
      correctIndex: 0
    }
  ]
};

export const unit9: Unit = {
  id: "unit-9",
  title: "Ünite 9: Hava Durumu & Mevsimler",
  level: "A1",
  descriptionTr: "Hava durumu ifadeleri, mevsimler, aylar ve hava ile ilgili cümleler",
  topics: [
    "Hava durumu (sonnig, regnerisch, kalt, warm)",
    "Mevsimler (Frühling, Sommer, Herbst, Winter)",
    "Aylar (Januar, Februar, März...)",
    "Hava durumu sorma (Wie ist das Wetter?)",
    "Hava durumu söyleme (Es ist...)",
    "Mevsimsel aktiviteler"
  ],
  phrases: [
    { de: "sonnig", tr: "güneşli" },
    { de: "regnerisch", tr: "yağmurlu" },
    { de: "kalt", tr: "soğuk" },
    { de: "warm", tr: "sıcak" },
    { de: "Frühling", tr: "ilkbahar" },
    { de: "Sommer", tr: "yaz" }
  ],
  miniExercise: [
    {
      question: "'sonnig' ne anlama gelir?",
      options: ["Güneşli", "Yağmurlu", "Soğuk", "Sıcak"],
      correctIndex: 0
    }
  ]
};

export const unit10: Unit = {
  id: "unit-10",
  title: "Ünite 10: Hobiler & Aktiviteler",
  level: "A1",
  descriptionTr: "Hobiler, sporlar, boş zaman aktiviteleri ve tercih ifadeleri",
  topics: [
    "Hobiler (lesen, Musik hören, Sport treiben)",
    "Sporlar (Fußball, Basketball, Schwimmen)",
    "Boş zaman aktiviteleri",
    "Tercih ifadeleri (Ich mag..., Ich liebe..., Ich hasse...)",
    "Ne yapıyorsun soruları",
    "Aktivite planlama"
  ],
  phrases: [
    { de: "lesen", tr: "okumak" },
    { de: "Musik hören", tr: "müzik dinlemek" },
    { de: "Sport treiben", tr: "spor yapmak" },
    { de: "Fußball", tr: "futbol" },
    { de: "Ich mag...", tr: "Ben ... seviyorum" }
  ],
  miniExercise: [
    {
      question: "'lesen' ne anlama gelir?",
      options: ["Okumak", "Yazmak", "Dinlemek", "Görmek"],
      correctIndex: 0
    }
  ]
};

// Tüm yeni üniteleri birleştir
export const newUnits: Unit[] = [
  unit5,
  unit6,
  unit7,
  unit8,
  unit9,
  unit10
];

