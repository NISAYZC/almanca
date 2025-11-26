import { Unit, LessonDetail } from "../types";

// Ünite 2: Sayılar & Yaş - 30+ Detaylı Alt Konu
const unit2Lessons: LessonDetail[] = [
  {
    id: "lesson-2-1",
    title: "Temel Sayılar: 0-10",
    order: 1,
    explanationTr: "Almanca'da sayılar Türkçe'den farklı bir yapıya sahiptir. 0'dan 10'a kadar sayıları öğrenmek temel matematiksel işlemler ve günlük konuşma için çok önemlidir.",
    grammarNotes: [
      "Sayılar isim değildir, sıfat olarak kullanılır",
      "1 sayısı 'eins' ama isimden önce 'ein' olur",
      "Sayılar büyük harfle yazılmaz (cümle başı hariç)"
    ],
    examples: [
      { de: "null", tr: "sıfır", example: "null Euro (sıfır euro)" },
      { de: "eins", tr: "bir", example: "eins, zwei, drei (bir, iki, üç)" },
      { de: "zwei", tr: "iki", example: "zwei Bücher (iki kitap)" },
      { de: "drei", tr: "üç", example: "drei Studenten (üç öğrenci)" },
      { de: "vier", tr: "dört", example: "vier Äpfel (dört elma)" },
      { de: "fünf", tr: "beş", example: "fünf Minuten (beş dakika)" },
      { de: "sechs", tr: "altı", example: "sechs Uhr (altı saat)" },
      { de: "sieben", tr: "yedi", example: "sieben Tage (yedi gün)" },
      { de: "acht", tr: "sekiz", example: "acht Wochen (sekiz hafta)" },
      { de: "neun", tr: "dokuz", example: "neun Monate (dokuz ay)" },
      { de: "zehn", tr: "on", example: "zehn Jahre (on yıl)" }
    ],
    usageTips: [
      "Sayıları sesli tekrar ederek öğrenin",
      "Günlük hayatta sayıları kullanarak pratik yapın",
      "Telefon numaralarını Almanca söylemeyi deneyin"
    ],
    exercises: [
      {
        question: "'fünf' sayısı kaçtır?",
        options: ["3", "4", "5", "6"],
        correctIndex: 2,
        explanation: "'fünf' beş anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-2",
    title: "Sayılar: 11-20",
    order: 2,
    explanationTr: "11'den 20'ye kadar sayılar Almanca'da özel bir yapıya sahiptir. 13'ten itibaren 'zehn' (on) kelimesi eklenir.",
    grammarNotes: [
      "11 ve 12 özel kelimelerdir: elf, zwölf",
      "13'ten itibaren: sayı + zehn (on)",
      "16 ve 17'de 'sechs' ve 'sieben' kısaltılır"
    ],
    examples: [
      { de: "elf", tr: "on bir", example: "elf Uhr (on bir saat)" },
      { de: "zwölf", tr: "on iki", example: "zwölf Monate (on iki ay)" },
      { de: "dreizehn", tr: "on üç", example: "dreizehn Studenten (on üç öğrenci)" },
      { de: "vierzehn", tr: "on dört", example: "vierzehn Tage (on dört gün)" },
      { de: "fünfzehn", tr: "on beş", example: "fünfzehn Minuten (on beş dakika)" },
      { de: "sechzehn", tr: "on altı", example: "sechzehn Jahre (on altı yıl)" },
      { de: "siebzehn", tr: "on yedi", example: "siebzehn Euro (on yedi euro)" },
      { de: "achtzehn", tr: "on sekiz", example: "achtzehn Bücher (on sekiz kitap)" },
      { de: "neunzehn", tr: "on dokuz", example: "neunzehn Äpfel (on dokuz elma)" },
      { de: "zwanzig", tr: "yirmi", example: "zwanzig Studenten (yirmi öğrenci)" }
    ],
    usageTips: [
      "16 ve 17'de 'sechs' → 'sech', 'sieben' → 'sieb' olur",
      "Sayıları gruplar halinde öğrenin",
      "Yaş söylerken bu sayıları kullanacaksınız"
    ],
    exercises: [
      {
        question: "'zwölf' sayısı kaçtır?",
        options: ["10", "11", "12", "13"],
        correctIndex: 2,
        explanation: "'zwölf' on iki anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-3",
    title: "Sayılar: 21-30",
    order: 3,
    explanationTr: "21'den 30'a kadar sayılar 'und' (ve) kelimesiyle birleştirilir. Yirmi bir = zwanzig und eins şeklinde söylenir.",
    grammarNotes: [
      "21-29 arası: zwanzig und + sayı",
      "'und' kelimesi sayılar arasında kullanılır",
      "30: dreißig (özel yazım)"
    ],
    examples: [
      { de: "einundzwanzig", tr: "yirmi bir", example: "einundzwanzig Jahre (yirmi bir yıl)" },
      { de: "zweiundzwanzig", tr: "yirmi iki", example: "zweiundzwanzig Studenten" },
      { de: "dreiundzwanzig", tr: "yirmi üç", example: "dreiundzwanzig Euro" },
      { de: "vierundzwanzig", tr: "yirmi dört", example: "vierundzwanzig Tage" },
      { de: "fünfundzwanzig", tr: "yirmi beş", example: "fünfundzwanzig Minuten" },
      { de: "sechsundzwanzig", tr: "yirmi altı", example: "sechsundzwanzig Bücher" },
      { de: "siebenundzwanzig", tr: "yirmi yedi", example: "siebenundzwanzig Jahre" },
      { de: "achtundzwanzig", tr: "yirmi sekiz", example: "achtundzwanzig Monate" },
      { de: "neunundzwanzig", tr: "yirmi dokuz", example: "neunundzwanzig Äpfel" },
      { de: "dreißig", tr: "otuz", example: "dreißig Studenten (otuz öğrenci)" }
    ],
    usageTips: [
      "21-29 arası sayılar birleşik yazılır",
      "Önce birler basamağı, sonra onlar basamağı söylenir",
      "30'da ß harfi kullanılır: dreißig"
    ],
    exercises: [
      {
        question: "'fünfundzwanzig' sayısı kaçtır?",
        options: ["23", "24", "25", "26"],
        correctIndex: 2,
        explanation: "'fünfundzwanzig' yirmi beş anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-4",
    title: "Sayılar: 30-100",
    order: 4,
    explanationTr: "30'dan 100'e kadar sayılar düzenli bir yapıya sahiptir. Her onluk grup aynı şekilde oluşturulur.",
    grammarNotes: [
      "30: dreißig, 40: vierzig, 50: fünfzig, 60: sechzig, 70: siebzig, 80: achtzig, 90: neunzig, 100: hundert",
      "Aralardaki sayılar: onluk + und + birlik",
      "100: hundert (bir yüz için 'ein hundert' de denir)"
    ],
    examples: [
      { de: "dreißig", tr: "otuz", example: "dreißig Jahre (otuz yıl)" },
      { de: "vierzig", tr: "kırk", example: "vierzig Studenten" },
      { de: "fünfzig", tr: "elli", example: "fünfzig Euro" },
      { de: "sechzig", tr: "altmış", example: "sechzig Minuten" },
      { de: "siebzig", tr: "yetmiş", example: "siebzig Tage" },
      { de: "achtzig", tr: "seksen", example: "achtzig Bücher" },
      { de: "neunzig", tr: "doksan", example: "neunzig Jahre" },
      { de: "hundert", tr: "yüz", example: "hundert Studenten (yüz öğrenci)" }
    ],
    usageTips: [
      "Sayıları onluk gruplar halinde öğrenin",
      "Pratik yapmak için fiyatları Almanca söyleyin",
      "Yaş söylerken bu sayıları kullanacaksınız"
    ],
    exercises: [
      {
        question: "'siebzig' sayısı kaçtır?",
        options: ["60", "70", "80", "90"],
        correctIndex: 1,
        explanation: "'siebzig' yetmiş anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-5",
    title: "Yaş Sorma: Wie alt bist du?",
    order: 5,
    explanationTr: "'Wie alt bist du?' samimi ortamlarda 'kaç yaşındasın?' sorusudur. 'Wie' nasıl, 'alt' yaşlı, 'bist' sen ...sin, 'du' sen anlamına gelir.",
    grammarNotes: [
      "'alt' sıfattır ve 'yaşlı' anlamına gelir",
      "'bist' 'sein' fiilinin 2. tekil şahıs çekimidir",
      "Resmi hali: 'Wie alt sind Sie?'"
    ],
    examples: [
      { de: "Wie alt bist du?", tr: "Kaç yaşındasın?" },
      { de: "Wie alt bist du denn?", tr: "Kaç yaşındasın peki?" },
      { de: "Entschuldigung, wie alt bist du?", tr: "Özür dilerim, kaç yaşındasın?" },
      { de: "Darf ich fragen, wie alt bist du?", tr: "Sormama izin verir misin, kaç yaşındasın?" }
    ],
    usageTips: [
      "Samimi ortamlarda kullanılır",
      "Resmi hali: 'Wie alt sind Sie?'",
      "Genellikle tanışma sırasında sorulur"
    ],
    exercises: [
      {
        question: "Resmi ortamda yaş sormak için hangisi kullanılır?",
        options: ["Wie alt bist du?", "Wie alt sind Sie?", "Wie alt ist er?", "Wie alt ist sie?"],
        correctIndex: 1,
        explanation: "Resmi ortamlarda 'Wie alt sind Sie?' kullanılır."
      }
    ]
  },
  {
    id: "lesson-2-6",
    title: "Resmi Yaş Sorma: Wie alt sind Sie?",
    order: 6,
    explanationTr: "'Wie alt sind Sie?' resmi ortamlarda 'kaç yaşındasınız?' sorusudur. Öğretmenler, yöneticiler, tanımadığınız kişilerle kullanılır.",
    grammarNotes: [
      "'Sie' resmi 'siz' zamiridir",
      "'sind' 'sein' fiilinin çoğul çekimidir ama tekil anlam taşır",
      "Saygı ve mesafe gösterir"
    ],
    examples: [
      { de: "Wie alt sind Sie?", tr: "Kaç yaşındasınız? (resmi)" },
      { de: "Guten Tag, wie alt sind Sie?", tr: "İyi günler, kaç yaşındasınız?" },
      { de: "Entschuldigung, wie alt sind Sie bitte?", tr: "Özür dilerim, kaç yaşındasınız lütfen?" },
      { de: "Darf ich fragen, wie alt sind Sie?", tr: "Sormama izin verir misiniz, kaç yaşındasınız?" }
    ],
    usageTips: [
      "Resmi ortamlarda mutlaka kullanılmalıdır",
      "Öğretmenler, yöneticiler, yaşlılar için kullanılır",
      "İş görüşmelerinde, resmi toplantılarda tercih edilir"
    ],
    exercises: [
      {
        question: "Öğretmeninize yaş sorarken hangisini kullanırsınız?",
        options: ["Wie alt bist du?", "Wie alt sind Sie?", "Wie alt ist er?", "Wie alt ist sie?"],
        correctIndex: 1,
        explanation: "Öğretmenlere saygı göstererek 'Wie alt sind Sie?' kullanılmalıdır."
      }
    ]
  },
  {
    id: "lesson-2-7",
    title: "Yaş Söyleme: Ich bin ... Jahre alt",
    order: 7,
    explanationTr: "'Ich bin ... Jahre alt' 'ben ... yaşındayım' anlamına gelir. 'bin' ben ...yim, 'Jahre' yıllar, 'alt' yaşlı anlamına gelir.",
    grammarNotes: [
      "'bin' 'sein' fiilinin 1. tekil şahıs çekimidir",
      "'Jahre' 'Jahr' (yıl) kelimesinin çoğul halidir",
      "Sayıdan sonra 'Jahre alt' gelir"
    ],
    examples: [
      { de: "Ich bin zwanzig Jahre alt.", tr: "Yirmi yaşındayım." },
      { de: "Ich bin fünfundzwanzig Jahre alt.", tr: "Yirmi beş yaşındayım." },
      { de: "Ich bin achtzehn Jahre alt.", tr: "On sekiz yaşındayım." },
      { de: "Ich bin dreißig Jahre alt.", tr: "Otuz yaşındayım." }
    ],
    usageTips: [
      "En yaygın yaş söyleme şeklidir",
      "Hem samimi hem resmi ortamlarda kullanılır",
      "Kısa hali: 'Ich bin zwanzig.' şeklinde de kullanılabilir"
    ],
    exercises: [
      {
        question: "'Ich bin zwanzig Jahre alt' ne anlama gelir?",
        options: ["Yirmi yıl", "Yirmi yaşındayım", "Yirmi gün", "Yirmi ay"],
        correctIndex: 1,
        explanation: "'Ich bin zwanzig Jahre alt' 'yirmi yaşındayım' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-8",
    title: "Kısa Yaş Söyleme: Ich bin ...",
    order: 8,
    explanationTr: "Yaş söylerken 'Jahre alt' kısmı atlanabilir. 'Ich bin zwanzig' şeklinde kısa söylenebilir. Daha samimi bir tondur.",
    grammarNotes: [
      "'Jahre alt' kısmı atlanabilir",
      "Daha samimi bir tondur",
      "Günlük konuşmada yaygındır"
    ],
    examples: [
      { de: "Ich bin zwanzig.", tr: "Yirmi yaşındayım. (kısa)" },
      { de: "Ich bin fünfundzwanzig.", tr: "Yirmi beş yaşındayım. (kısa)" },
      { de: "Wie alt bist du? - Ich bin achtzehn.", tr: "Kaç yaşındasın? - On sekiz yaşındayım." },
      { de: "Ich bin dreißig.", tr: "Otuz yaşındayım. (kısa)" }
    ],
    usageTips: [
      "Samimi ortamlarda kullanılır",
      "Daha kısa ve hızlı bir ifadedir",
      "Günlük konuşmada yaygındır"
    ],
    exercises: [
      {
        question: "Hangi ifade daha samimidir?",
        options: ["Ich bin zwanzig Jahre alt", "Ich bin zwanzig", "Beide gleich", "Hiçbiri"],
        correctIndex: 1,
        explanation: "'Ich bin zwanzig' daha samimi bir tondur."
      }
    ]
  },
  {
    id: "lesson-2-9",
    title: "Telefon Numaraları Söyleme",
    order: 9,
    explanationTr: "Almanca'da telefon numaraları sayı sayı söylenir. Her rakam ayrı ayrı telaffuz edilir. 'null' sıfır için kullanılır.",
    grammarNotes: [
      "Telefon numaraları sayı sayı söylenir",
      "'null' sıfır için kullanılır",
      "Gruplar halinde de söylenebilir"
    ],
    examples: [
      { de: "null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun", tr: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9" },
      { de: "Meine Telefonnummer ist null, eins, zwei, drei...", tr: "Telefon numaram sıfır, bir, iki, üç..." },
      { de: "null, eins, fünf, null, zwei, drei, vier, fünf, sechs, sieben", tr: "0150 234 567" },
      { de: "Kann ich deine Telefonnummer haben?", tr: "Telefon numaranı alabilir miyim?" }
    ],
    usageTips: [
      "Telefon numaralarını sayı sayı söyleyin",
      "Pratik yapmak için kendi numaranızı Almanca söyleyin",
      "Gruplar halinde de söylenebilir"
    ],
    exercises: [
      {
        question: "Almanca'da telefon numarası nasıl söylenir?",
        options: ["Gruplar halinde", "Sayı sayı", "Her ikisi de", "Hiçbiri"],
        correctIndex: 2,
        explanation: "Telefon numaraları hem sayı sayı hem de gruplar halinde söylenebilir."
      }
    ]
  },
  {
    id: "lesson-2-10",
    title: "Fiyat Söyleme: Euro ve Cent",
    order: 10,
    explanationTr: "Almanca'da fiyatlar Euro ve Cent ile söylenir. 'Euro' tekil, 'Cent' tekil veya çoğul kullanılabilir. Sayılar fiyatla birlikte kullanılır.",
    grammarNotes: [
      "'Euro' hem tekil hem çoğul aynıdır",
      "'Cent' tekil, 'Cents' çoğul",
      "Fiyatlar sayı + Euro/Cent şeklinde söylenir"
    ],
    examples: [
      { de: "fünf Euro", tr: "beş euro", example: "Das kostet fünf Euro. (Bu beş euro tutuyor.)" },
      { de: "zehn Euro", tr: "on euro", example: "zehn Euro fünfzig (on euro elli cent)" },
      { de: "zwanzig Euro", tr: "yirmi euro", example: "zwanzig Euro neunzig (yirmi euro doksan cent)" },
      { de: "fünfzig Cent", tr: "elli cent", example: "fünfzig Cent (elli cent)" }
    ],
    usageTips: [
      "Fiyatları günlük hayatta kullanarak pratik yapın",
      "Mağazalarda fiyatları Almanca söyleyin",
      "Euro ve Cent'i doğru telaffuz edin"
    ],
    exercises: [
      {
        question: "'fünf Euro' ne anlama gelir?",
        options: ["Beş euro", "Beş cent", "Fifty euro", "Fünf cent"],
        correctIndex: 0,
        explanation: "'fünf Euro' beş euro anlamına gelir."
      }
    ]
  },
  // Devam eden diğer dersler...
  {
    id: "lesson-2-11",
    title: "Saat Söyleme: Basit Saatler",
    order: 11,
    explanationTr: "Almanca'da saat söylerken 'Uhr' kelimesi kullanılır. Basit saatler için sayı + Uhr şeklinde söylenir.",
    grammarNotes: [
      "'Uhr' saat anlamına gelir",
      "Basit saatler: sayı + Uhr",
      "Resmi saat söyleme şeklidir"
    ],
    examples: [
      { de: "Es ist eins Uhr.", tr: "Saat bir." },
      { de: "Es ist zwei Uhr.", tr: "Saat iki." },
      { de: "Es ist drei Uhr.", tr: "Saat üç." },
      { de: "Es ist zwölf Uhr.", tr: "Saat on iki." }
    ],
    usageTips: [
      "Resmi saat söyleme şeklidir",
      "Tam saatler için kullanılır",
      "Günlük konuşmada da yaygındır"
    ],
    exercises: [
      {
        question: "'Es ist drei Uhr' ne anlama gelir?",
        options: ["Saat üç", "Üç saat", "Üç dakika", "Üç yıl"],
        correctIndex: 0,
        explanation: "'Es ist drei Uhr' 'saat üç' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-12",
    title: "Matematiksel İşlemler: Toplama",
    order: 12,
    explanationTr: "Almanca'da toplama işlemi 'plus' kelimesiyle yapılır. 'gleich' eşittir anlamına gelir.",
    grammarNotes: [
      "'plus' artı anlamına gelir",
      "'gleich' eşittir anlamına gelir",
      "Sayılar arasında 'plus' kullanılır"
    ],
    examples: [
      { de: "zwei plus drei gleich fünf", tr: "iki artı üç eşittir beş" },
      { de: "vier plus sechs gleich zehn", tr: "dört artı altı eşittir on" },
      { de: "eins plus zwei gleich drei", tr: "bir artı iki eşittir üç" },
      { de: "fünf plus fünf gleich zehn", tr: "beş artı beş eşittir on" }
    ],
    usageTips: [
      "Matematiksel işlemleri Almanca söyleyerek pratik yapın",
      "Basit toplama işlemlerini deneyin",
      "Sayıları doğru telaffuz edin"
    ],
    exercises: [
      {
        question: "'zwei plus drei gleich fünf' ne anlama gelir?",
        options: ["2+3=5", "2+2=4", "3+3=6", "1+1=2"],
        correctIndex: 0,
        explanation: "'zwei plus drei gleich fünf' 'iki artı üç eşittir beş' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-13",
    title: "Matematiksel İşlemler: Çıkarma",
    order: 13,
    explanationTr: "Almanca'da çıkarma işlemi 'minus' kelimesiyle yapılır.",
    grammarNotes: [
      "'minus' eksi anlamına gelir",
      "Sayılar arasında 'minus' kullanılır",
      "'gleich' eşittir anlamına gelir"
    ],
    examples: [
      { de: "fünf minus zwei gleich drei", tr: "beş eksi iki eşittir üç" },
      { de: "zehn minus vier gleich sechs", tr: "on eksi dört eşittir altı" },
      { de: "acht minus drei gleich fünf", tr: "sekiz eksi üç eşittir beş" },
      { de: "zwölf minus fünf gleich sieben", tr: "on iki eksi beş eşittir yedi" }
    ],
    usageTips: [
      "Çıkarma işlemlerini Almanca söyleyerek pratik yapın",
      "Basit çıkarma işlemlerini deneyin",
      "Sayıları doğru telaffuz edin"
    ],
    exercises: [
      {
        question: "'zehn minus vier gleich sechs' ne anlama gelir?",
        options: ["10-4=6", "10-5=5", "12-4=8", "8-4=4"],
        correctIndex: 0,
        explanation: "'zehn minus vier gleich sechs' 'on eksi dört eşittir altı' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-14",
    title: "Sıra Sayıları: 1-10",
    order: 14,
    explanationTr: "Sıra sayıları 'der erste, die erste, das erste' şeklinde kullanılır. İsimlerin cinsiyetine göre değişir.",
    grammarNotes: [
      "Sıra sayıları artikel alır: der, die, das",
      "1: erste, 2: zweite, 3: dritte, 4: vierte, 5: fünfte...",
      "İsimlerin cinsiyetine göre değişir"
    ],
    examples: [
      { de: "der erste Tag", tr: "ilk gün (eril)" },
      { de: "die erste Woche", tr: "ilk hafta (dişil)" },
      { de: "das erste Jahr", tr: "ilk yıl (nötr)" },
      { de: "der zweite Student", tr: "ikinci öğrenci" },
      { de: "die dritte Vorlesung", tr: "üçüncü ders" }
    ],
    usageTips: [
      "Sıra sayıları artikel alır",
      "İsimlerin cinsiyetine göre değişir",
      "Günlük hayatta sıkça kullanılır"
    ],
    exercises: [
      {
        question: "'der erste Tag' ne anlama gelir?",
        options: ["İlk gün", "Bir gün", "Son gün", "İkinci gün"],
        correctIndex: 0,
        explanation: "'der erste Tag' 'ilk gün' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-15",
    title: "Yaş Grupları ve İfadeleri",
    order: 15,
    explanationTr: "Almanca'da yaş grupları için özel ifadeler vardır. 'jung' genç, 'alt' yaşlı anlamına gelir.",
    grammarNotes: [
      "'jung' genç, 'alt' yaşlı anlamına gelir",
      "Sıfatlar isimlerin önüne gelir",
      "Cinsiyete göre değişir"
    ],
    examples: [
      { de: "jung", tr: "genç", example: "ein junger Student (genç bir öğrenci)" },
      { de: "alt", tr: "yaşlı", example: "ein alter Mann (yaşlı bir adam)" },
      { de: "Ich bin jung.", tr: "Ben gencim." },
      { de: "Er ist alt.", tr: "O yaşlı." }
    ],
    usageTips: [
      "Yaş gruplarını ifade ederken dikkatli olun",
      "Sıfatlar isimlerin önüne gelir",
      "Cinsiyete göre değişir"
    ],
    exercises: [
      {
        question: "'jung' ne anlama gelir?",
        options: ["Yaşlı", "Genç", "Orta yaşlı", "Çocuk"],
        correctIndex: 1,
        explanation: "'jung' genç anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-16",
    title: "Sayıların Yazılışı ve Kullanımı",
    order: 16,
    explanationTr: "Almanca'da sayılar yazılırken bazı kurallar vardır. Sayılar genellikle rakamla yazılır ama metin içinde kelime olarak da yazılabilir.",
    grammarNotes: [
      "Sayılar genellikle rakamla yazılır",
      "Metin içinde kelime olarak da yazılabilir",
      "Büyük harfle başlamaz (cümle başı hariç)"
    ],
    examples: [
      { de: "5 Studenten", tr: "beş öğrenci (rakamla)" },
      { de: "fünf Studenten", tr: "beş öğrenci (kelimeyle)" },
      { de: "Ich habe 3 Bücher.", tr: "Benim 3 kitabım var." },
      { de: "Es sind zwanzig Studenten hier.", tr: "Burada yirmi öğrenci var." }
    ],
    usageTips: [
      "Rakamla yazmak daha yaygındır",
      "Resmi metinlerde kelime olarak yazılabilir",
      "Sayılar büyük harfle başlamaz"
    ],
    exercises: [
      {
        question: "Sayılar genellikle nasıl yazılır?",
        options: ["Rakamla", "Kelimeyle", "Her ikisi de", "Hiçbiri"],
        correctIndex: 0,
        explanation: "Sayılar genellikle rakamla yazılır."
      }
    ]
  },
  {
    id: "lesson-2-17",
    title: "Yaş İfadeleri: Genç, Orta Yaşlı, Yaşlı",
    order: 17,
    explanationTr: "Almanca'da yaş gruplarını ifade etmek için farklı sıfatlar kullanılır. 'jung' genç, 'mittelalt' orta yaşlı, 'alt' yaşlı anlamına gelir.",
    grammarNotes: [
      "'jung' genç, 'mittelalt' orta yaşlı, 'alt' yaşlı",
      "Sıfatlar isimlerin önüne gelir",
      "Cinsiyete göre değişir"
    ],
    examples: [
      { de: "jung", tr: "genç", example: "ein junger Mann (genç bir adam)" },
      { de: "mittelalt", tr: "orta yaşlı", example: "eine mittelalte Frau (orta yaşlı bir kadın)" },
      { de: "alt", tr: "yaşlı", example: "ein alter Mann (yaşlı bir adam)" },
      { de: "sehr jung", tr: "çok genç", example: "sehr jung (çok genç)" }
    ],
    usageTips: [
      "Yaş gruplarını ifade ederken dikkatli olun",
      "Sıfatlar isimlerin önüne gelir",
      "Cinsiyete göre değişir"
    ],
    exercises: [
      {
        question: "'mittelalt' ne anlama gelir?",
        options: ["Genç", "Orta yaşlı", "Yaşlı", "Çocuk"],
        correctIndex: 1,
        explanation: "'mittelalt' orta yaşlı anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-18",
    title: "Doğum Tarihi Sorma",
    order: 18,
    explanationTr: "Almanca'da doğum tarihi sormak için 'Wann bist du geboren?' veya 'Wann sind Sie geboren?' kullanılır. 'geboren' doğmuş anlamına gelir.",
    grammarNotes: [
      "'Wann' ne zaman anlamına gelir",
      "'geboren' doğmuş anlamına gelir",
      "Resmi ve samimi versiyonları vardır"
    ],
    examples: [
      { de: "Wann bist du geboren?", tr: "Ne zaman doğdun?" },
      { de: "Wann sind Sie geboren?", tr: "Ne zaman doğdunuz? (resmi)" },
      { de: "Ich bin 2000 geboren.", tr: "2000'de doğdum." },
      { de: "Ich bin am 15. Mai 2000 geboren.", tr: "15 Mayıs 2000'de doğdum." }
    ],
    usageTips: [
      "Samimi: 'Wann bist du geboren?'",
      "Resmi: 'Wann sind Sie geboren?'",
      "Tarih söylerken 'am' kullanılır"
    ],
    exercises: [
      {
        question: "Resmi ortamda doğum tarihi nasıl sorulur?",
        options: ["Wann bist du geboren?", "Wann sind Sie geboren?", "Wann ist er geboren?", "Wann ist sie geboren?"],
        correctIndex: 1,
        explanation: "Resmi ortamlarda 'Wann sind Sie geboren?' kullanılır."
      }
    ]
  },
  {
    id: "lesson-2-19",
    title: "Yaş Hesaplama ve Karşılaştırma",
    order: 19,
    explanationTr: "Almanca'da yaşları karşılaştırmak için 'älter als' (daha yaşlı), 'jünger als' (daha genç) ifadeleri kullanılır.",
    grammarNotes: [
      "'älter als' daha yaşlı, 'jünger als' daha genç",
      "'als' 'den/dan' anlamına gelir",
      "Karşılaştırma yapılırken kullanılır"
    ],
    examples: [
      { de: "Ich bin älter als du.", tr: "Ben senden daha yaşlıyım." },
      { de: "Du bist jünger als ich.", tr: "Sen benden daha gençsin." },
      { de: "Er ist älter als sie.", tr: "O ondan daha yaşlı." },
      { de: "Wir sind gleich alt.", tr: "Biz aynı yaştayız." }
    ],
    usageTips: [
      "Yaşları karşılaştırırken kullanılır",
      "'gleich alt' aynı yaş anlamına gelir",
      "Günlük konuşmada yaygındır"
    ],
    exercises: [
      {
        question: "'Ich bin älter als du' ne anlama gelir?",
        options: ["Ben senden daha yaşlıyım", "Sen benden daha yaşlısın", "Biz aynı yaştayız", "Hiçbiri"],
        correctIndex: 0,
        explanation: "'Ich bin älter als du' 'ben senden daha yaşlıyım' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-20",
    title: "Yüzdeler ve Kesirler",
    order: 20,
    explanationTr: "Almanca'da yüzdeler 'Prozent' kelimesiyle, kesirler ise özel ifadelerle söylenir.",
    grammarNotes: [
      "'Prozent' yüzde anlamına gelir",
      "Kesirler özel ifadelerle söylenir",
      "Sayılarla birlikte kullanılır"
    ],
    examples: [
      { de: "fünfzig Prozent", tr: "elli yüzde", example: "50%" },
      { de: "hundert Prozent", tr: "yüz yüzde", example: "100%" },
      { de: "ein Viertel", tr: "çeyrek", example: "1/4" },
      { de: "ein Drittel", tr: "üçte bir", example: "1/3" },
      { de: "die Hälfte", tr: "yarım", example: "1/2" }
    ],
    usageTips: [
      "Yüzdeler günlük hayatta sıkça kullanılır",
      "Kesirler özel ifadelerle söylenir",
      "Sayılarla birlikte kullanılır"
    ],
    exercises: [
      {
        question: "'fünfzig Prozent' ne anlama gelir?",
        options: ["50%", "25%", "75%", "100%"],
        correctIndex: 0,
        explanation: "'fünfzig Prozent' elli yüzde anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-21",
    title: "Sayıların Çoğul Kullanımı",
    order: 21,
    explanationTr: "Almanca'da sayılar çoğul isimlerle kullanılır. Sayıdan sonra gelen isim çoğul halde olur.",
    grammarNotes: [
      "Sayıdan sonra gelen isim çoğul halde olur",
      "1 sayısı hariç (tekil isimle kullanılır)",
      "Çoğul artikel kullanılmaz"
    ],
    examples: [
      { de: "zwei Bücher", tr: "iki kitap (çoğul)" },
      { de: "drei Studenten", tr: "üç öğrenci (çoğul)" },
      { de: "fünf Äpfel", tr: "beş elma (çoğul)" },
      { de: "ein Buch", tr: "bir kitap (tekil)" }
    ],
    usageTips: [
      "Sayıdan sonra çoğul isim kullanılır",
      "1 sayısı hariç tekil isimle kullanılır",
      "Çoğul artikel kullanılmaz"
    ],
    exercises: [
      {
        question: "'zwei Bücher' ifadesinde 'Bücher' neden çoğul?",
        options: ["Çünkü iki sayısı var", "Çünkü çoğul isim", "Her ikisi de", "Hiçbiri"],
        correctIndex: 0,
        explanation: "Sayıdan sonra gelen isim çoğul halde olur."
      }
    ]
  },
  {
    id: "lesson-2-22",
    title: "Tarih Söyleme: Gün, Ay, Yıl",
    order: 22,
    explanationTr: "Almanca'da tarih söylerken 'am' (günde), 'im' (ayda), yıl direkt söylenir. Sıra sayıları kullanılır.",
    grammarNotes: [
      "'am' günde, 'im' ayda anlamına gelir",
      "Günler sıra sayılarıyla söylenir",
      "Yıl direkt söylenir"
    ],
    examples: [
      { de: "am ersten Januar", tr: "birinci Ocak'ta" },
      { de: "am fünfzehnten Mai", tr: "on beşinci Mayıs'ta" },
      { de: "im Jahr 2000", tr: "2000 yılında" },
      { de: "am 15. Mai 2000", tr: "15 Mayıs 2000'de" }
    ],
    usageTips: [
      "Tarih söylerken 'am' kullanılır",
      "Aylar için 'im' kullanılır",
      "Yıl direkt söylenir"
    ],
    exercises: [
      {
        question: "Tarih söylerken hangi edat kullanılır?",
        options: ["in", "am", "zu", "von"],
        correctIndex: 1,
        explanation: "Tarih söylerken 'am' kullanılır."
      }
    ]
  },
  {
    id: "lesson-2-23",
    title: "Yaş Tahmin Etme",
    order: 23,
    explanationTr: "Almanca'da yaş tahmin etmek için 'ungefähr' (yaklaşık), 'etwa' (yaklaşık) ifadeleri kullanılır.",
    grammarNotes: [
      "'ungefähr' yaklaşık anlamına gelir",
      "'etwa' yaklaşık anlamına gelir",
      "Kesin olmayan ifadeler için kullanılır"
    ],
    examples: [
      { de: "Er ist ungefähr zwanzig.", tr: "O yaklaşık yirmi yaşında." },
      { de: "Sie ist etwa fünfundzwanzig.", tr: "O yaklaşık yirmi beş yaşında." },
      { de: "Ich schätze, er ist dreißig.", tr: "Tahmin ediyorum, o otuz yaşında." },
      { de: "ungefähr zwanzig Jahre alt", tr: "yaklaşık yirmi yaşında" }
    ],
    usageTips: [
      "Kesin olmayan ifadeler için kullanılır",
      "'ungefähr' ve 'etwa' aynı anlama gelir",
      "Günlük konuşmada yaygındır"
    ],
    exercises: [
      {
        question: "'ungefähr' ne anlama gelir?",
        options: ["Tam", "Yaklaşık", "Fazla", "Az"],
        correctIndex: 1,
        explanation: "'ungefähr' yaklaşık anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-24",
    title: "Yaş Grupları: Çocuk, Genç, Yetişkin",
    order: 24,
    explanationTr: "Almanca'da yaş grupları için özel kelimeler vardır. 'Kind' çocuk, 'Jugendlicher' genç, 'Erwachsener' yetişkin anlamına gelir.",
    grammarNotes: [
      "'Kind' çocuk, 'Jugendlicher' genç, 'Erwachsener' yetişkin",
      "İsimler cinsiyete göre değişir",
      "Yaş gruplarını ifade eder"
    ],
    examples: [
      { de: "ein Kind", tr: "bir çocuk", example: "0-12 yaş arası" },
      { de: "ein Jugendlicher", tr: "bir genç", example: "13-18 yaş arası" },
      { de: "ein Erwachsener", tr: "bir yetişkin", example: "18+ yaş" },
      { de: "Kinder, Jugendliche, Erwachsene", tr: "çocuklar, gençler, yetişkinler" }
    ],
    usageTips: [
      "Yaş gruplarını ifade eder",
      "İsimler cinsiyete göre değişir",
      "Günlük hayatta sıkça kullanılır"
    ],
    exercises: [
      {
        question: "'Jugendlicher' ne anlama gelir?",
        options: ["Çocuk", "Genç", "Yetişkin", "Yaşlı"],
        correctIndex: 1,
        explanation: "'Jugendlicher' genç anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-25",
    title: "Sayıların Sıfat Olarak Kullanımı",
    order: 25,
    explanationTr: "Almanca'da sayılar sıfat olarak kullanılabilir. İsimlerin önüne gelir ve isimlerin cinsiyetine göre değişir.",
    grammarNotes: [
      "Sayılar sıfat olarak kullanılabilir",
      "İsimlerin önüne gelir",
      "Cinsiyete göre değişir"
    ],
    examples: [
      { de: "der erste Student", tr: "ilk öğrenci (eril)" },
      { de: "die zweite Vorlesung", tr: "ikinci ders (dişil)" },
      { de: "das dritte Jahr", tr: "üçüncü yıl (nötr)" },
      { de: "die ersten drei Studenten", tr: "ilk üç öğrenci" }
    ],
    usageTips: [
      "Sayılar sıfat olarak kullanılabilir",
      "İsimlerin önüne gelir",
      "Cinsiyete göre değişir"
    ],
    exercises: [
      {
        question: "'der erste Student' ne anlama gelir?",
        options: ["İlk öğrenci", "Bir öğrenci", "Son öğrenci", "İkinci öğrenci"],
        correctIndex: 0,
        explanation: "'der erste Student' 'ilk öğrenci' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-2-26",
    title: "Yaş İle İlgili Diyaloglar",
    order: 26,
    explanationTr: "Bu derste yaş ile ilgili tam diyalogları öğreneceksiniz. Tüm öğrendiğiniz ifadeleri bir araya getirerek gerçek hayatta nasıl kullanılacağını göreceksiniz.",
    grammarNotes: [
      "Diyalog yapısı: Selamlaşma → Yaş sorma → Yaş söyleme → Devam",
      "Resmi ve samimi versiyonları vardır",
      "Bağlama göre ifadeler değişir"
    ],
    examples: [
      { 
        de: "A: Hallo, wie alt bist du?\nB: Ich bin zwanzig Jahre alt. Und du?\nA: Ich bin zweiundzwanzig.\nB: Ah, du bist älter als ich!\nA: Ja, zwei Jahre älter.", 
        tr: "A: Merhaba, kaç yaşındasın?\nB: Yirmi yaşındayım. Ya sen?\nA: Yirmi iki yaşındayım.\nB: Ah, sen benden daha yaşlısın!\nA: Evet, iki yıl daha yaşlı." 
      }
    ],
    usageTips: [
      "Diyalog yapısını öğrenmek önemlidir",
      "Pratik yaparak akıcılık kazanılır",
      "Resmi ve samimi versiyonları ayrı ayrı çalışılmalıdır"
    ],
    exercises: [
      {
        question: "Yaş ile ilgili diyalogda hangi sıra izlenir?",
        options: ["Selamlaşma → Yaş sorma → Yaş söyleme", "Yaş söyleme → Selamlaşma → Yaş sorma", "Yaş sorma → Selamlaşma → Yaş söyleme", "Hiçbiri"],
        correctIndex: 0,
        explanation: "Diyalog yapısı: Selamlaşma → Yaş sorma → Yaş söyleme şeklindedir."
      }
    ]
  },
  {
    id: "lesson-2-27",
    title: "Sayıların Telaffuzu ve Vurgusu",
    order: 27,
    explanationTr: "Almanca'da sayıların telaffuzu ve vurgusu önemlidir. Her sayının kendine özgü telaffuzu vardır.",
    grammarNotes: [
      "Sayıların telaffuzu önemlidir",
      "Vurgu doğru yerde olmalıdır",
      "Pratik yaparak öğrenilir"
    ],
    examples: [
      { de: "zwei (tsvay)", tr: "iki", example: "Vurgu ilk hecede" },
      { de: "drei (dray)", tr: "üç", example: "Vurgu ilk hecede" },
      { de: "zwanzig (TSVAN-tsig)", tr: "yirmi", example: "Vurgu ilk hecede" },
      { de: "fünfundzwanzig", tr: "yirmi beş", example: "Vurgu 'fünf' hecesinde" }
    ],
    usageTips: [
      "Sayıları sesli tekrar ederek öğrenin",
      "Telaffuza dikkat edin",
      "Vurguyu doğru yerde yapın"
    ],
    exercises: [
      {
        question: "Sayıların telaffuzu neden önemlidir?",
        options: ["Anlaşılırlık için", "Doğru iletişim için", "Her ikisi de", "Hiçbiri"],
        correctIndex: 2,
        explanation: "Sayıların telaffuzu hem anlaşılırlık hem de doğru iletişim için önemlidir."
      }
    ]
  },
  {
    id: "lesson-2-28",
    title: "Sayıların Günlük Hayatta Kullanımı",
    order: 28,
    explanationTr: "Almanca'da sayılar günlük hayatta çok yaygın kullanılır. Alışveriş, saat, tarih, yaş gibi birçok alanda kullanılır.",
    grammarNotes: [
      "Sayılar günlük hayatta çok yaygındır",
      "Alışveriş, saat, tarih, yaş gibi alanlarda kullanılır",
      "Pratik yapmak önemlidir"
    ],
    examples: [
      { de: "Alışveriş: fünf Euro (beş euro)", tr: "Alışverişte fiyat söyleme" },
      { de: "Saat: drei Uhr (üç saat)", tr: "Saat söyleme" },
      { de: "Tarih: am 15. Mai (15 Mayıs'ta)", tr: "Tarih söyleme" },
      { de: "Yaş: zwanzig Jahre alt (yirmi yaşında)", tr: "Yaş söyleme" }
    ],
    usageTips: [
      "Sayıları günlük hayatta kullanarak pratik yapın",
      "Farklı alanlarda kullanmayı deneyin",
      "Akıcılık kazanmak için tekrar edin"
    ],
    exercises: [
      {
        question: "Sayılar hangi alanlarda kullanılır?",
        options: ["Sadece alışveriş", "Sadece saat", "Birçok alanda", "Hiçbiri"],
        correctIndex: 2,
        explanation: "Sayılar alışveriş, saat, tarih, yaş gibi birçok alanda kullanılır."
      }
    ]
  },
  {
    id: "lesson-2-29",
    title: "Sayıların Yazılı ve Sözlü Kullanımı",
    order: 29,
    explanationTr: "Almanca'da sayılar hem yazılı hem sözlü olarak kullanılır. Yazılı kullanımda rakam, sözlü kullanımda kelime tercih edilir.",
    grammarNotes: [
      "Yazılı kullanımda rakam tercih edilir",
      "Sözlü kullanımda kelime tercih edilir",
      "Resmi metinlerde kelime kullanılabilir"
    ],
    examples: [
      { de: "Yazılı: 5 Studenten", tr: "Rakamla yazım" },
      { de: "Sözlü: fünf Studenten", tr: "Kelimeyle söyleme" },
      { de: "Resmi: fünf Studenten", tr: "Resmi metinlerde kelime" },
      { de: "Günlük: 5 Studenten", tr: "Günlük kullanımda rakam" }
    ],
    usageTips: [
      "Yazılı kullanımda rakam tercih edilir",
      "Sözlü kullanımda kelime tercih edilir",
      "Bağlama göre değişir"
    ],
    exercises: [
      {
        question: "Yazılı kullanımda ne tercih edilir?",
        options: ["Rakam", "Kelime", "Her ikisi de", "Hiçbiri"],
        correctIndex: 0,
        explanation: "Yazılı kullanımda rakam tercih edilir."
      }
    ]
  },
  {
    id: "lesson-2-30",
    title: "Sayılar ve Yaş: Tam Diyalog Örneği",
    order: 30,
    explanationTr: "Bu derste sayılar ve yaş ile ilgili tam bir diyalog örneğini öğreneceksiniz. Tüm öğrendiğiniz ifadeleri bir araya getirerek gerçek hayatta nasıl kullanılacağını göreceksiniz.",
    grammarNotes: [
      "Diyalog yapısı: Selamlaşma → Tanışma → Yaş sorma → Yaş söyleme → Sayılar → Vedalaşma",
      "Resmi ve samimi versiyonları vardır",
      "Bağlama göre ifadeler değişir"
    ],
    examples: [
      { 
        de: "A: Guten Tag!\nB: Guten Tag!\nA: Ich heiße Anna. Wie alt bist du?\nB: Ich bin zwanzig Jahre alt. Und du?\nA: Ich bin zweiundzwanzig. Wie viele Studenten sind hier?\nB: Ungefähr dreißig Studenten.\nA: Interessant! Auf Wiedersehen!\nB: Auf Wiedersehen!", 
        tr: "A: İyi günler!\nB: İyi günler!\nA: Benim adım Anna. Kaç yaşındasın?\nB: Yirmi yaşındayım. Ya sen?\nA: Yirmi iki yaşındayım. Burada kaç öğrenci var?\nB: Yaklaşık otuz öğrenci.\nA: İlginç! Güle güle!\nB: Güle güle!" 
      }
    ],
    usageTips: [
      "Diyalog yapısını öğrenmek önemlidir",
      "Pratik yaparak akıcılık kazanılır",
      "Resmi ve samimi versiyonları ayrı ayrı çalışılmalıdır"
    ],
    exercises: [
      {
        question: "Sayılar ve yaş ile ilgili diyalogda hangi konular geçer?",
        options: ["Sadece yaş", "Sadece sayılar", "Yaş, sayılar ve diğer konular", "Hiçbiri"],
        correctIndex: 2,
        explanation: "Diyalogda yaş, sayılar ve diğer konular geçer."
      }
    ]
  }
];

// Ünite 2'yi güncellenmiş haliyle export et
export const unit2Detailed: Unit = {
  id: "unit-2",
  title: "Ünite 2: Sayılar & Yaş",
  level: "A1",
  descriptionTr: "0-100 arası sayılar, yaş sorma-cevaplama, telefon numaraları, fiyatlar ve matematiksel işlemler - 30+ detaylı alt konu ile kapsamlı öğrenim",
  topics: [
    "Temel Sayılar: 0-10",
    "Sayılar: 11-20",
    "Sayılar: 21-30",
    "Sayılar: 30-100",
    "Yaş Sorma: Wie alt bist du? / Wie alt sind Sie?",
    "Yaş Söyleme: Ich bin ... Jahre alt",
    "Telefon Numaraları",
    "Fiyat Söyleme: Euro ve Cent",
    "Saat Söyleme",
    "Matematiksel İşlemler",
    "Sıra Sayıları",
    "Yaş Grupları"
  ],
  phrases: [
    { de: "null", tr: "sıfır", example: "null Euro", note: "Telefon numaralarında kullanılır" },
    { de: "eins", tr: "bir", example: "eins, zwei, drei", note: "İsimden önce 'ein' olur" },
    { de: "zwei", tr: "iki", example: "zwei Bücher", note: "Çoğul isimlerle kullanılır" },
    { de: "zwanzig", tr: "yirmi", example: "zwanzig Jahre", note: "Yaş söylerken kullanılır" },
    { de: "Wie alt bist du?", tr: "Kaç yaşındasın?", example: "Samimi ortam", note: "Samimi" },
    { de: "Wie alt sind Sie?", tr: "Kaç yaşındasınız?", example: "Resmi ortam", note: "Resmi" },
    { de: "Ich bin zwanzig Jahre alt", tr: "Yirmi yaşındayım", example: "Tam hali", note: "En yaygın" },
    { de: "fünf Euro", tr: "beş euro", example: "Fiyat söyleme", note: "Para birimi" }
  ],
  miniExercise: [
    {
      question: "'fünf' sayısı kaçtır?",
      options: ["3", "4", "5", "6"],
      correctIndex: 2,
      explanation: "'fünf' beş anlamına gelir."
    },
    {
      question: "'Kaç yaşındasın?' sorusunun Almanca karşılığı nedir?",
      options: ["Wie alt bist du?", "Wie heißt du?", "Wie geht's?", "Woher kommst du?"],
      correctIndex: 0,
      explanation: "'Wie alt bist du?' samimi ortamlarda 'kaç yaşındasın?' anlamına gelir."
    },
    {
      question: "'zwölf' sayısı kaçtır?",
      options: ["10", "11", "12", "13"],
      correctIndex: 2,
      explanation: "'zwölf' on iki anlamına gelir."
    }
  ],
  lessons: unit2Lessons
};

