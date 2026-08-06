import { WordMatchItem, SentenceBuilderItem, QuizItem } from "../types";

export const wordMatchItems: WordMatchItem[] = [
  // Ünite 1: Selamlaşma & Tanışma - Genişletilmiş
  { id: "wm1", de: "Hallo", tr: "Merhaba", unitId: "unit-1" },
  { id: "wm2", de: "Hi", tr: "Selam", unitId: "unit-1" },
  { id: "wm3", de: "Guten Morgen", tr: "Günaydın", unitId: "unit-1" },
  { id: "wm4", de: "Guten Tag", tr: "İyi günler", unitId: "unit-1" },
  { id: "wm5", de: "Guten Abend", tr: "İyi akşamlar", unitId: "unit-1" },
  { id: "wm6", de: "Gute Nacht", tr: "İyi geceler", unitId: "unit-1" },
  { id: "wm7", de: "Ich heiße", tr: "Benim adım", unitId: "unit-1" },
  { id: "wm8", de: "Mein Name ist", tr: "Benim adım", unitId: "unit-1" },
  { id: "wm9", de: "Wie heißt du?", tr: "Adın ne?", unitId: "unit-1" },
  { id: "wm10", de: "Wie heißen Sie?", tr: "Adınız ne? (resmi)", unitId: "unit-1" },
  { id: "wm11", de: "Wie geht's?", tr: "Nasılsın?", unitId: "unit-1" },
  { id: "wm12", de: "Wie geht es dir?", tr: "Nasılsın? (tam hali)", unitId: "unit-1" },
  { id: "wm13", de: "Wie geht es Ihnen?", tr: "Nasılsınız? (resmi)", unitId: "unit-1" },
  { id: "wm14", de: "Gut", tr: "İyi", unitId: "unit-1" },
  { id: "wm15", de: "Sehr gut", tr: "Çok iyi", unitId: "unit-1" },
  { id: "wm16", de: "Es geht", tr: "İdare eder", unitId: "unit-1" },
  { id: "wm17", de: "Schlecht", tr: "Kötü", unitId: "unit-1" },
  { id: "wm18", de: "Danke", tr: "Teşekkürler", unitId: "unit-1" },
  { id: "wm19", de: "Danke schön", tr: "Çok teşekkürler", unitId: "unit-1" },
  { id: "wm20", de: "Bitte", tr: "Lütfen / Rica ederim", unitId: "unit-1" },
  { id: "wm21", de: "Freut mich", tr: "Memnun oldum", unitId: "unit-1" },
  { id: "wm22", de: "Sehr erfreut", tr: "Çok memnun oldum", unitId: "unit-1" },
  { id: "wm23", de: "Woher kommst du?", tr: "Nereden geliyorsun?", unitId: "unit-1" },
  { id: "wm24", de: "Woher kommen Sie?", tr: "Nereden geliyorsunuz? (resmi)", unitId: "unit-1" },
  { id: "wm25", de: "Wo wohnst du?", tr: "Nerede yaşıyorsun?", unitId: "unit-1" },
  { id: "wm26", de: "Was machst du?", tr: "Ne yapıyorsun?", unitId: "unit-1" },
  { id: "wm27", de: "Student", tr: "Öğrenci (erkek)", unitId: "unit-1" },
  { id: "wm28", de: "Studentin", tr: "Öğrenci (kadın)", unitId: "unit-1" },
  { id: "wm29", de: "Auf Wiedersehen", tr: "Güle güle (resmi)", unitId: "unit-1" },
  { id: "wm30", de: "Tschüss", tr: "Hoşça kal", unitId: "unit-1" },
  { id: "wm31", de: "Bis bald", tr: "Yakında görüşürüz", unitId: "unit-1" },
  { id: "wm32", de: "Bis später", tr: "Sonra görüşürüz", unitId: "unit-1" },
  { id: "wm33", de: "Bis morgen", tr: "Yarın görüşürüz", unitId: "unit-1" },
  { id: "wm34", de: "Auf Wiederhören", tr: "Tekrar görüşürüz (telefonda)", unitId: "unit-1" },
  { id: "wm35", de: "Entschuldigung", tr: "Özür dilerim", unitId: "unit-1" },
  { id: "wm36", de: "Es tut mir leid", tr: "Üzgünüm", unitId: "unit-1" },
  { id: "wm37", de: "Vielen Dank", tr: "Çok teşekkürler", unitId: "unit-1" },
  { id: "wm38", de: "Gern geschehen", tr: "Rica ederim", unitId: "unit-1" },
  // Ünite 2: Sayılar & Yaş - Genişletilmiş
  { id: "wm39", de: "eins", tr: "bir", unitId: "unit-2" },
  { id: "wm40", de: "zwei", tr: "iki", unitId: "unit-2" },
  { id: "wm41", de: "drei", tr: "üç", unitId: "unit-2" },
  { id: "wm42", de: "vier", tr: "dört", unitId: "unit-2" },
  { id: "wm43", de: "fünf", tr: "beş", unitId: "unit-2" },
  { id: "wm44", de: "sechs", tr: "altı", unitId: "unit-2" },
  { id: "wm45", de: "sieben", tr: "yedi", unitId: "unit-2" },
  { id: "wm46", de: "acht", tr: "sekiz", unitId: "unit-2" },
  { id: "wm47", de: "neun", tr: "dokuz", unitId: "unit-2" },
  { id: "wm48", de: "zehn", tr: "on", unitId: "unit-2" },
  { id: "wm49", de: "zwanzig", tr: "yirmi", unitId: "unit-2" },
  { id: "wm50", de: "dreißig", tr: "otuz", unitId: "unit-2" },
  { id: "wm51", de: "Wie alt bist du?", tr: "Kaç yaşındasın?", unitId: "unit-2" },
  { id: "wm52", de: "Ich bin zwanzig Jahre alt", tr: "Yirmi yaşındayım", unitId: "unit-2" },
  { id: "wm53", de: "Euro", tr: "Euro", unitId: "unit-2" },
  { id: "wm54", de: "Cent", tr: "Cent", unitId: "unit-2" },
  { id: "wm55", de: "Uhr", tr: "Saat", unitId: "unit-2" },
  // Ünite 3: Günler & Zaman
  { id: "wm56", de: "Montag", tr: "Pazartesi", unitId: "unit-3" },
  { id: "wm57", de: "Dienstag", tr: "Salı", unitId: "unit-3" },
  { id: "wm58", de: "Mittwoch", tr: "Çarşamba", unitId: "unit-3" },
  { id: "wm59", de: "Donnerstag", tr: "Perşembe", unitId: "unit-3" },
  { id: "wm60", de: "Freitag", tr: "Cuma", unitId: "unit-3" },
  { id: "wm61", de: "Samstag", tr: "Cumartesi", unitId: "unit-3" },
  { id: "wm62", de: "Sonntag", tr: "Pazar", unitId: "unit-3" },
  { id: "wm63", de: "Heute", tr: "Bugün", unitId: "unit-3" },
  { id: "wm64", de: "Morgen", tr: "Yarın", unitId: "unit-3" },
  { id: "wm65", de: "Gestern", tr: "Dün", unitId: "unit-3" },
  // Ünite 4: Kampüs & Üniversite
  { id: "wm66", de: "Hörsaal", tr: "Amfi", unitId: "unit-4" },
  { id: "wm67", de: "Mensa", tr: "Yemekhane", unitId: "unit-4" },
  { id: "wm68", de: "Bibliothek", tr: "Kütüphane", unitId: "unit-4" },
  { id: "wm69", de: "Professor", tr: "Profesör", unitId: "unit-4" },
  { id: "wm70", de: "Student", tr: "Öğrenci", unitId: "unit-4" },
  { id: "wm71", de: "Vorlesung", tr: "Ders", unitId: "unit-4" },
  { id: "wm72", de: "Prüfung", tr: "Sınav", unitId: "unit-4" },
  { id: "wm73", de: "Universität", tr: "Üniversite", unitId: "unit-4" },
  // Ünite 5: Aile & Kişiler
  { id: "wm74", de: "Mutter", tr: "Anne", unitId: "unit-5" },
  { id: "wm75", de: "Vater", tr: "Baba", unitId: "unit-5" },
  { id: "wm76", de: "Bruder", tr: "Erkek kardeş", unitId: "unit-5" },
  { id: "wm77", de: "Schwester", tr: "Kız kardeş", unitId: "unit-5" },
  { id: "wm78", de: "Lehrer", tr: "Öğretmen", unitId: "unit-5" },
  { id: "wm79", de: "Arzt", tr: "Doktor", unitId: "unit-5" },
  // Ünite 6: Renkler & Eşyalar
  { id: "wm80", de: "rot", tr: "kırmızı", unitId: "unit-6" },
  { id: "wm81", de: "blau", tr: "mavi", unitId: "unit-6" },
  { id: "wm82", de: "grün", tr: "yeşil", unitId: "unit-6" },
  { id: "wm83", de: "gelb", tr: "sarı", unitId: "unit-6" },
  { id: "wm84", de: "Tisch", tr: "masa", unitId: "unit-6" },
  { id: "wm85", de: "Stuhl", tr: "sandalye", unitId: "unit-6" },
  { id: "wm86", de: "Buch", tr: "kitap", unitId: "unit-6" },
  // Ünite 7: Yiyecek & İçecek
  { id: "wm87", de: "Brot", tr: "ekmek", unitId: "unit-7" },
  { id: "wm88", de: "Käse", tr: "peynir", unitId: "unit-7" },
  { id: "wm89", de: "Wasser", tr: "su", unitId: "unit-7" },
  { id: "wm90", de: "Kaffee", tr: "kahve", unitId: "unit-7" },
  // Ünite 8: Şehir & Yönler
  { id: "wm91", de: "Park", tr: "park", unitId: "unit-8" },
  { id: "wm92", de: "Museum", tr: "müze", unitId: "unit-8" },
  { id: "wm93", de: "links", tr: "sol", unitId: "unit-8" },
  { id: "wm94", de: "rechts", tr: "sağ", unitId: "unit-8" },
  // Ünite 9: Hava Durumu
  { id: "wm95", de: "sonnig", tr: "güneşli", unitId: "unit-9" },
  { id: "wm96", de: "regnerisch", tr: "yağmurlu", unitId: "unit-9" },
  { id: "wm97", de: "kalt", tr: "soğuk", unitId: "unit-9" },
  { id: "wm98", de: "warm", tr: "sıcak", unitId: "unit-9" },
  // Ünite 10: Hobiler
  { id: "wm99", de: "lesen", tr: "okumak", unitId: "unit-10" },
  { id: "wm100", de: "Fußball", tr: "futbol", unitId: "unit-10" },
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
  // Ünite 1: Selamlaşma & Tanışma - Genişletilmiş
  {
    id: "sb1",
    deCorrect: "Hallo, ich heiße Anna",
    deShuffledWords: ["heiße", "Hallo,", "Anna", "ich"],
    trHint: "Merhaba, benim adım Anna",
    unitId: "unit-1"
  },
  {
    id: "sb2",
    deCorrect: "Guten Morgen, wie geht's?",
    deShuffledWords: ["geht's?", "Guten", "wie", "Morgen,"],
    trHint: "Günaydın, nasılsın?",
    unitId: "unit-1"
  },
  {
    id: "sb3",
    deCorrect: "Wie geht es dir?",
    deShuffledWords: ["dir?", "Wie", "geht", "es"],
    trHint: "Nasılsın?",
    unitId: "unit-1"
  },
  {
    id: "sb4",
    deCorrect: "Gut, danke!",
    deShuffledWords: ["danke!", "Gut,"],
    trHint: "İyiyim, teşekkürler!",
    unitId: "unit-1"
  },
  {
    id: "sb5",
    deCorrect: "Mein Name ist Nisa",
    deShuffledWords: ["ist", "Mein", "Nisa", "Name"],
    trHint: "Benim adım Nisa",
    unitId: "unit-1"
  },
  {
    id: "sb6",
    deCorrect: "Wie heißen Sie?",
    deShuffledWords: ["Sie?", "Wie", "heißen"],
    trHint: "Adınız ne? (resmi)",
    unitId: "unit-1"
  },
  {
    id: "sb7",
    deCorrect: "Freut mich, dich kennenzulernen",
    deShuffledWords: ["kennenzulernen", "Freut", "dich", "mich,"],
    trHint: "Seni tanımaktan memnun oldum",
    unitId: "unit-1"
  },
  {
    id: "sb8",
    deCorrect: "Ich komme aus der Türkei",
    deShuffledWords: ["aus", "Ich", "der", "Türkei", "komme"],
    trHint: "Türkiye'den geliyorum",
    unitId: "unit-1"
  },
  {
    id: "sb9",
    deCorrect: "Wo wohnst du?",
    deShuffledWords: ["du?", "Wo", "wohnst"],
    trHint: "Nerede yaşıyorsun?",
    unitId: "unit-1"
  },
  {
    id: "sb10",
    deCorrect: "Ich wohne in Berlin",
    deShuffledWords: ["in", "Ich", "Berlin", "wohne"],
    trHint: "Berlin'de yaşıyorum",
    unitId: "unit-1"
  },
  {
    id: "sb11",
    deCorrect: "Was machst du beruflich?",
    deShuffledWords: ["beruflich?", "Was", "du", "machst"],
    trHint: "Mesleken ne?",
    unitId: "unit-1"
  },
  {
    id: "sb12",
    deCorrect: "Ich bin Student",
    deShuffledWords: ["bin", "Student", "Ich"],
    trHint: "Ben öğrenciyim",
    unitId: "unit-1"
  },
  {
    id: "sb13",
    deCorrect: "Auf Wiedersehen, bis morgen!",
    deShuffledWords: ["bis", "Auf", "morgen!", "Wiedersehen,"],
    trHint: "Güle güle, yarın görüşürüz!",
    unitId: "unit-1"
  },
  {
    id: "sb14",
    deCorrect: "Tschüss, bis später!",
    deShuffledWords: ["später!", "Tschüss,", "bis"],
    trHint: "Hoşça kal, sonra görüşürüz!",
    unitId: "unit-1"
  },
  {
    id: "sb15",
    deCorrect: "Guten Tag, wie geht es Ihnen?",
    deShuffledWords: ["Ihnen?", "Guten", "es", "wie", "Tag,", "geht"],
    trHint: "İyi günler, nasılsınız? (resmi)",
    unitId: "unit-1"
  },
  {
    id: "sb16",
    deCorrect: "Entschuldigung, können Sie mir helfen?",
    deShuffledWords: ["helfen?", "Entschuldigung,", "Sie", "können", "mir"],
    trHint: "Özür dilerim, bana yardımcı olabilir misiniz?",
    unitId: "unit-1"
  },
  {
    id: "sb17",
    deCorrect: "Danke schön!",
    deShuffledWords: ["schön!", "Danke"],
    trHint: "Çok teşekkürler!",
    unitId: "unit-1"
  },
  {
    id: "sb18",
    deCorrect: "Bitte schön!",
    deShuffledWords: ["schön!", "Bitte"],
    trHint: "Rica ederim! / Buyurun!",
    unitId: "unit-1"
  },
  {
    id: "sb19",
    deCorrect: "Ich bin zwanzig Jahre alt",
    deShuffledWords: ["alt", "Jahre", "bin", "zwanzig", "Ich"],
    trHint: "Yirmi yaşındayım",
    unitId: "unit-2"
  },
  {
    id: "sb20",
    deCorrect: "Wie alt bist du?",
    deShuffledWords: ["du?", "Wie", "alt", "bist"],
    trHint: "Kaç yaşındasın?",
    unitId: "unit-2"
  },
  {
    id: "sb21",
    deCorrect: "Es ist drei Uhr",
    deShuffledWords: ["ist", "Es", "drei", "Uhr"],
    trHint: "Saat üç",
    unitId: "unit-2"
  },
  {
    id: "sb22",
    deCorrect: "Heute ist Montag",
    deShuffledWords: ["ist", "Heute", "Montag"],
    trHint: "Bugün pazartesi",
    unitId: "unit-3"
  },
  {
    id: "sb23",
    deCorrect: "Morgen ist Dienstag",
    deShuffledWords: ["ist", "Morgen", "Dienstag"],
    trHint: "Yarın salı",
    unitId: "unit-3"
  },
  {
    id: "sb24",
    deCorrect: "Ich habe eine Vorlesung",
    deShuffledWords: ["habe", "Ich", "eine", "Vorlesung"],
    trHint: "Bir dersim var",
    unitId: "unit-4"
  },
  {
    id: "sb25",
    deCorrect: "Das ist meine Mutter",
    deShuffledWords: ["ist", "Das", "meine", "Mutter"],
    trHint: "Bu benim annem",
    unitId: "unit-5"
  },
  {
    id: "sb26",
    deCorrect: "Das Buch ist rot",
    deShuffledWords: ["ist", "Das", "rot", "Buch"],
    trHint: "Kitap kırmızı",
    unitId: "unit-6"
  },
  {
    id: "sb27",
    deCorrect: "Ich möchte einen Kaffee",
    deShuffledWords: ["möchte", "Ich", "einen", "Kaffee"],
    trHint: "Bir kahve istiyorum",
    unitId: "unit-7"
  },
  {
    id: "sb28",
    deCorrect: "Wo ist der Park?",
    deShuffledWords: ["ist", "Wo", "der", "Park?"],
    trHint: "Park nerede?",
    unitId: "unit-8"
  },
  {
    id: "sb29",
    deCorrect: "Es ist sonnig heute",
    deShuffledWords: ["ist", "Es", "sonnig", "heute"],
    trHint: "Bugün güneşli",
    unitId: "unit-9"
  },
  {
    id: "sb30",
    deCorrect: "Ich mag Fußball",
    deShuffledWords: ["mag", "Ich", "Fußball"],
    trHint: "Futbolu seviyorum",
    unitId: "unit-10"
  }
];

export const quizItems: QuizItem[] = [
  // Ünite 1: Selamlaşma & Tanışma - Genişletilmiş
  {
    id: "q1",
    questionTr: "Sabah karşılaşmada hangi ifade kullanılır?",
    options: ["Guten Tag", "Guten Morgen", "Guten Abend", "Gute Nacht"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q2",
    questionTr: "Öğleden sonra (12:00-18:00) hangi selamlaşma kullanılır?",
    options: ["Guten Morgen", "Guten Tag", "Guten Abend", "Gute Nacht"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q3",
    questionTr: "Akşam saatlerinde hangi selamlaşma kullanılır?",
    options: ["Guten Morgen", "Guten Tag", "Guten Abend", "Gute Nacht"],
    correctIndex: 2,
    unitId: "unit-1"
  },
  {
    id: "q4",
    questionTr: "Hangi selamlaşma en samimidir?",
    options: ["Hallo", "Hi", "Guten Tag", "Guten Morgen"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q5",
    questionTr: "'Nasılsın?' sorusunun Almanca karşılığı nedir?",
    options: ["Wie heißt du?", "Wie geht's?", "Wie alt bist du?", "Woher kommst du?"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q6",
    questionTr: "Resmi ortamda 'nasılsınız?' nasıl sorulur?",
    options: ["Wie geht's?", "Wie geht es dir?", "Wie geht es Ihnen?", "Wie geht es euch?"],
    correctIndex: 2,
    unitId: "unit-1"
  },
  {
    id: "q7",
    questionTr: "'Ich heiße...' ifadesi ne anlama gelir?",
    options: ["Ben... yaşındayım", "Benim adım...", "Ben... geliyorum", "Ben... yaşıyorum"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q8",
    questionTr: "Resmi ortamda isim sormak için hangisi kullanılır?",
    options: ["Wie heißt du?", "Wie heißen Sie?", "Wie heißt er?", "Wie heißt sie?"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q9",
    questionTr: "'Gut, danke!' ne anlama gelir?",
    options: ["Kötüyüm", "İyiyim, teşekkürler", "Fena değil", "Bilmiyorum"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q10",
    questionTr: "'Sehr gut!' ne anlama gelir?",
    options: ["İyi", "Çok iyi", "Fena değil", "Kötü"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q11",
    questionTr: "'Es geht' ne anlama gelir?",
    options: ["Çok iyi", "İdare eder", "Kötü", "Bilmiyorum"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q12",
    questionTr: "Almanca'da 'teşekkürler' nasıl denir?",
    options: ["Bitte", "Danke", "Entschuldigung", "Gern geschehen"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q13",
    questionTr: "'Bitte' kelimesi hangi anlamda kullanılamaz?",
    options: ["Lütfen", "Rica ederim", "Teşekkürler", "Buyurun"],
    correctIndex: 2,
    unitId: "unit-1"
  },
  {
    id: "q14",
    questionTr: "Yeni tanıştığınız birine ne dersiniz?",
    options: ["Danke", "Bitte", "Freut mich", "Tschüss"],
    correctIndex: 2,
    unitId: "unit-1"
  },
  {
    id: "q15",
    questionTr: "'Woher kommst du?' sorusuna nasıl cevap verilir?",
    options: ["Ich bin...", "Ich komme aus...", "Ich wohne in...", "Ich heiße..."],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q16",
    questionTr: "'Wo wohnst du?' sorusuna nasıl cevap verilir?",
    options: ["Ich komme aus...", "Ich wohne in...", "Ich bin...", "Ich heiße..."],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q17",
    questionTr: "Kadın bir öğrenci kendini nasıl tanıtır?",
    options: ["Ich bin Student", "Ich bin Studentin", "Ich bin Studenten", "Ich bin Studentes"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q18",
    questionTr: "Resmi ortamda vedalaşırken hangisi kullanılır?",
    options: ["Tschüss", "Auf Wiedersehen", "Ciao", "Bis bald"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q19",
    questionTr: "Samimi ortamda vedalaşırken hangisi kullanılır?",
    options: ["Auf Wiedersehen", "Tschüss", "Auf Wiederhören", "Gute Nacht"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q20",
    questionTr: "'Bis bald!' ne anlama gelir?",
    options: ["Hoşça kal", "Yakında görüşürüz", "İyi geceler", "Merhaba"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q21",
    questionTr: "Telefonda vedalaşırken hangisi kullanılır?",
    options: ["Auf Wiedersehen", "Auf Wiederhören", "Tschüss", "Bis bald"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q22",
    questionTr: "Birine çarptığınızda ne dersiniz?",
    options: ["Danke", "Bitte", "Entschuldigung", "Gern geschehen"],
    correctIndex: 2,
    unitId: "unit-1"
  },
  {
    id: "q23",
    questionTr: "'Es tut mir leid' ne anlama gelir?",
    options: ["Teşekkürler", "Rica ederim", "Üzgünüm", "Memnun oldum"],
    correctIndex: 2,
    unitId: "unit-1"
  },
  {
    id: "q24",
    questionTr: "Öğretmeninize isim sorarken hangisini kullanırsınız?",
    options: ["Wie heißt du?", "Wie heißen Sie?", "Wie heißt er?", "Wie heißt sie?"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q25",
    questionTr: "'Vielen Dank!' ne anlama gelir?",
    options: ["Teşekkürler", "Çok teşekkürler", "Rica ederim", "Özür dilerim"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q26",
    questionTr: "'Gern geschehen' ne anlama gelir?",
    options: ["Teşekkürler", "Rica ederim", "Özür dilerim", "Memnun oldum"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q27",
    questionTr: "Almanca'da hangi harf 'v' sesi verir?",
    options: ["V", "W", "F", "B"],
    correctIndex: 1,
    unitId: "unit-1"
  },
  {
    id: "q28",
    questionTr: "'fünf' sayısı kaçtır?",
    options: ["3", "4", "5", "6"],
    correctIndex: 2,
    unitId: "unit-2"
  },
  {
    id: "q29",
    questionTr: "'zwanzig' sayısı kaçtır?",
    options: ["10", "20", "30", "40"],
    correctIndex: 1,
    unitId: "unit-2"
  },
  {
    id: "q30",
    questionTr: "'Ich bin zwanzig Jahre alt' ne anlama gelir?",
    options: ["Yirmi yıl", "Yirmi yaşındayım", "Yirmi gün", "Yirmi ay"],
    correctIndex: 1,
    unitId: "unit-2"
  },
  {
    id: "q31",
    questionTr: "'Mittwoch' hangi gündür?",
    options: ["Pazartesi", "Salı", "Çarşamba", "Perşembe"],
    correctIndex: 2,
    unitId: "unit-3"
  },
  {
    id: "q32",
    questionTr: "'Yarın' kelimesinin Almanca karşılığı nedir?",
    options: ["Heute", "Morgen", "Gestern", "Jetzt"],
    correctIndex: 1,
    unitId: "unit-3"
  },
  {
    id: "q33",
    questionTr: "'Yemekhane' kelimesinin Almanca karşılığı nedir?",
    options: ["Hörsaal", "Mensa", "Bibliothek", "Universität"],
    correctIndex: 1,
    unitId: "unit-4"
  },
  {
    id: "q34",
    questionTr: "'Mutter' ne anlama gelir?",
    options: ["Anne", "Baba", "Kardeş", "Çocuk"],
    correctIndex: 0,
    unitId: "unit-5"
  },
  {
    id: "q35",
    questionTr: "'rot' ne anlama gelir?",
    options: ["Kırmızı", "Mavi", "Yeşil", "Sarı"],
    correctIndex: 0,
    unitId: "unit-6"
  },
  {
    id: "q36",
    questionTr: "'Brot' ne anlama gelir?",
    options: ["Ekmek", "Peynir", "Su", "Kahve"],
    correctIndex: 0,
    unitId: "unit-7"
  },
  {
    id: "q37",
    questionTr: "'links' ne anlama gelir?",
    options: ["Sol", "Sağ", "Düz", "Yukarı"],
    correctIndex: 0,
    unitId: "unit-8"
  },
  {
    id: "q38",
    questionTr: "'sonnig' ne anlama gelir?",
    options: ["Güneşli", "Yağmurlu", "Soğuk", "Sıcak"],
    correctIndex: 0,
    unitId: "unit-9"
  },
  {
    id: "q39",
    questionTr: "'lesen' ne anlama gelir?",
    options: ["Okumak", "Yazmak", "Dinlemek", "Görmek"],
    correctIndex: 0,
    unitId: "unit-10"
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

