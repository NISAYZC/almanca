import { Unit, LessonDetail } from "../types";

// Ünite 1: Selamlaşma & Tanışma - 30+ Detaylı Alt Konu
const unit1Lessons: LessonDetail[] = [
  {
    id: "lesson-1-1",
    title: "Almanca Alfabesi ve Temel Telaffuz",
    order: 1,
    explanationTr: "Almanca alfabesi 26 harften oluşur ve Türkçe'den farklı olarak ä, ö, ü ve ß harflerini içerir. Her harfin kendine özgü telaffuzu vardır.",
    grammarNotes: [
      "Almanca'da büyük harf kullanımı: İsimler her zaman büyük harfle başlar",
      "ß (Eszett) harfi sadece küçük harfle yazılır, büyük harfte 'SS' olarak yazılır",
      "ä, ö, ü harfleri a, o, u harflerinin umlaut (noktalı) versiyonlarıdır"
    ],
    examples: [
      { de: "A, B, C, D, E, F, G", tr: "Almanca alfabenin ilk harfleri" },
      { de: "Ä, Ö, Ü, ß", tr: "Almanca'ya özgü harfler" },
      { de: "Haus", tr: "Ev (h-avs şeklinde okunur)" },
      { de: "Straße", tr: "Cadde (ß = ss sesi)" }
    ],
    usageTips: [
      "Almanca'da her harf genellikle yazıldığı gibi okunur",
      "V harfi 'f' gibi, W harfi 'v' gibi okunur",
      "CH sesi boğazdan çıkar, Türkçe'deki 'h' sesine benzer"
    ],
    exercises: [
      {
        question: "Almanca'da hangi harf 'v' sesi verir?",
        options: ["V", "W", "F", "B"],
        correctIndex: 1,
        explanation: "W harfi Almanca'da 'v' sesi verir. V harfi ise 'f' sesi verir."
      }
    ]
  },
  {
    id: "lesson-1-2",
    title: "Temel Selamlaşma: Hallo ve Hi",
    order: 2,
    explanationTr: "Hallo en yaygın ve resmi olmayan selamlaşma şeklidir. Her zaman ve her durumda kullanılabilir. Hi daha samimi bir versiyonudur.",
    grammarNotes: [
      "Hallo hem tanıdık hem de tanımadığınız kişilerle kullanılabilir",
      "Hi sadece samimi ortamlarda kullanılır",
      "Selamlaşmalarda büyük harf kullanımı önemlidir"
    ],
    examples: [
      { de: "Hallo!", tr: "Merhaba!" },
      { de: "Hallo, wie geht's?", tr: "Merhaba, nasılsın?" },
      { de: "Hi, schön dich zu sehen!", tr: "Selam, seni görmek güzel!" },
      { de: "Hallo, ich bin neu hier.", tr: "Merhaba, ben burada yeniyim." }
    ],
    usageTips: [
      "Hallo günün her saatinde kullanılabilir",
      "Resmi ortamlarda da kullanılabilir ama daha resmi alternatifler tercih edilir",
      "Hi gençler arasında daha yaygındır"
    ],
    exercises: [
      {
        question: "Hangi selamlaşma daha samimidir?",
        options: ["Hallo", "Hi", "Guten Tag", "Guten Morgen"],
        correctIndex: 1,
        explanation: "Hi en samimi selamlaşma şeklidir, genellikle arkadaşlar arasında kullanılır."
      }
    ]
  },
  {
    id: "lesson-1-3",
    title: "Günün Saatlerine Göre Selamlaşma: Guten Morgen",
    order: 3,
    explanationTr: "Guten Morgen sabah saatlerinde (genellikle saat 12'ye kadar) kullanılan resmi selamlaşma şeklidir. 'Gut' kelimesi 'iyi', 'Morgen' ise 'sabah' anlamına gelir.",
    grammarNotes: [
      "Guten Morgen'de 'Guten' akkusativ halindedir",
      "Saat 12'den sonra genellikle 'Guten Tag' kullanılır",
      "Resmi ve samimi ortamlarda kullanılabilir"
    ],
    examples: [
      { de: "Guten Morgen!", tr: "Günaydın!" },
      { de: "Guten Morgen, wie geht es Ihnen?", tr: "Günaydın, nasılsınız? (resmi)" },
      { de: "Guten Morgen, schönen Tag noch!", tr: "Günaydın, iyi günler!" },
      { de: "Guten Morgen, alles klar?", tr: "Günaydın, her şey yolunda mı?" }
    ],
    usageTips: [
      "Sabah 6-12 arası en uygun kullanım zamanıdır",
      "Resmi ortamlarda (iş, okul) tercih edilir",
      "Kısa hali: 'Morgen!' şeklinde de kullanılabilir"
    ],
    exercises: [
      {
        question: "Guten Morgen ne zaman kullanılır?",
        options: ["Akşam", "Öğleden sonra", "Sabah", "Gece"],
        correctIndex: 2,
        explanation: "Guten Morgen sabah saatlerinde, genellikle saat 12'ye kadar kullanılır."
      }
    ]
  },
  {
    id: "lesson-1-4",
    title: "Guten Tag - Öğleden Sonra Selamlaşması",
    order: 4,
    explanationTr: "Guten Tag öğleden sonra (12:00-18:00 arası) kullanılan en yaygın selamlaşma şeklidir. Hem resmi hem samimi ortamlarda kullanılabilir.",
    grammarNotes: [
      "Tag kelimesi 'gün' anlamına gelir",
      "Guten Tag'de 'Guten' yine akkusativ halindedir",
      "En çok yöneticiler, öğretmenler, mağaza çalışanları tarafından kullanılır"
    ],
    examples: [
      { de: "Guten Tag!", tr: "İyi günler!" },
      { de: "Guten Tag, kann ich Ihnen helfen?", tr: "İyi günler, size yardımcı olabilir miyim?" },
      { de: "Guten Tag, Herr Schmidt.", tr: "İyi günler, Bay Schmidt." },
      { de: "Guten Tag, schönes Wetter heute!", tr: "İyi günler, bugün güzel hava!" }
    ],
    usageTips: [
      "Öğleden sonra en uygun selamlaşma şeklidir",
      "Mağazalarda, resmi kurumlarda sıkça duyarsınız",
      "Kısa hali: 'Tag!' şeklinde de kullanılabilir"
    ],
    exercises: [
      {
        question: "Guten Tag ne zaman kullanılır?",
        options: ["Sadece sabah", "Öğleden sonra", "Sadece akşam", "Sadece gece"],
        correctIndex: 1,
        explanation: "Guten Tag öğleden sonra saatlerinde (12:00-18:00) kullanılır."
      }
    ]
  },
  {
    id: "lesson-1-5",
    title: "Guten Abend - Akşam Selamlaşması",
    order: 5,
    explanationTr: "Guten Abend akşam saatlerinde (genellikle 18:00'dan sonra) kullanılan selamlaşma şeklidir. Resmi ve samimi ortamlarda kullanılabilir.",
    grammarNotes: [
      "Abend kelimesi 'akşam' anlamına gelir",
      "Gece yarısına kadar kullanılabilir",
      "Resmi toplantılarda, akşam derslerinde sıkça kullanılır"
    ],
    examples: [
      { de: "Guten Abend!", tr: "İyi akşamlar!" },
      { de: "Guten Abend, wie war Ihr Tag?", tr: "İyi akşamlar, gününüz nasıldı?" },
      { de: "Guten Abend, schlafen Sie gut!", tr: "İyi akşamlar, iyi uykular!" },
      { de: "Guten Abend, willkommen!", tr: "İyi akşamlar, hoş geldiniz!" }
    ],
    usageTips: [
      "Akşam 18:00'dan sonra kullanılır",
      "Restoranlarda, tiyatrolarda sıkça duyarsınız",
      "Kısa hali: 'Abend!' şeklinde de kullanılabilir"
    ],
    exercises: [
      {
        question: "Guten Abend ne zaman kullanılır?",
        options: ["Sabah", "Öğleden sonra", "Akşam", "Gece yarısı"],
        correctIndex: 2,
        explanation: "Guten Abend akşam saatlerinde, genellikle 18:00'dan sonra kullanılır."
      }
    ]
  },
  {
    id: "lesson-1-6",
    title: "Gute Nacht - Gece Vedalaşması",
    order: 6,
    explanationTr: "Gute Nacht gece yarısına yakın veya yatmadan önce kullanılan vedalaşma/iyi geceler ifadesidir. Genellikle vedalaşma için kullanılır, selamlaşma için değil.",
    grammarNotes: [
      "Nacht kelimesi 'gece' anlamına gelir",
      "Burada 'Gute' kullanılır, 'Guten' değil (çünkü akkusativ değil)",
      "Sadece vedalaşma için kullanılır, karşılaşmada değil"
    ],
    examples: [
      { de: "Gute Nacht!", tr: "İyi geceler!" },
      { de: "Gute Nacht, schlaf gut!", tr: "İyi geceler, iyi uyu!" },
      { de: "Gute Nacht, bis morgen!", tr: "İyi geceler, yarın görüşürüz!" },
      { de: "Gute Nacht, träum schön!", tr: "İyi geceler, güzel rüyalar!" }
    ],
    usageTips: [
      "Yatmadan önce veya gece geç saatlerde vedalaşırken kullanılır",
      "Selamlaşma için kullanılmaz, sadece vedalaşma için",
      "Aile içinde, arkadaşlar arasında yaygındır"
    ],
    exercises: [
      {
        question: "Gute Nacht ne zaman kullanılır?",
        options: ["Sabah karşılaşmada", "Öğleden sonra", "Akşam karşılaşmada", "Gece vedalaşmada"],
        correctIndex: 3,
        explanation: "Gute Nacht sadece gece vedalaşırken kullanılır, selamlaşma için değil."
      }
    ]
  },
  {
    id: "lesson-1-7",
    title: "Kendini Tanıtma: Ich heiße...",
    order: 7,
    explanationTr: "'Ich heiße...' kendini tanıtmanın en yaygın yoludur. 'Ich' ben, 'heiße' ise 'adım' anlamına gelir. Bu yapı samimi ve resmi ortamlarda kullanılabilir.",
    grammarNotes: [
      "'Ich' kişi zamiridir ve her zaman büyük harfle yazılır",
      "'heiße' fiili 'heissen' fiilinin şimdiki zaman çekimidir",
      "İsimden sonra virgül kullanılmaz, direkt isim söylenir"
    ],
    examples: [
      { de: "Ich heiße Nisa.", tr: "Benim adım Nisa." },
      { de: "Ich heiße Anna Müller.", tr: "Benim adım Anna Müller." },
      { de: "Hallo, ich heiße Tom.", tr: "Merhaba, benim adım Tom." },
      { de: "Guten Tag, ich heiße Maria.", tr: "İyi günler, benim adım Maria." }
    ],
    usageTips: [
      "En yaygın tanışma ifadesidir",
      "Hem resmi hem samimi ortamlarda kullanılabilir",
      "İsimden önce 'Mein Name ist...' de kullanılabilir"
    ],
    exercises: [
      {
        question: "'Ich heiße Nisa' ifadesi ne anlama gelir?",
        options: ["Ben Nisa'yım", "Benim adım Nisa", "Nisa'yı tanıyorum", "Nisa beni çağırıyor"],
        correctIndex: 1,
        explanation: "'Ich heiße' 'benim adım' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-1-8",
    title: "Kendini Tanıtma: Mein Name ist...",
    order: 8,
    explanationTr: "'Mein Name ist...' kendini tanıtmanın bir diğer yaygın yoludur. 'Mein' benim, 'Name' isim, 'ist' ise 'dir' anlamına gelir. Biraz daha resmi bir tondur.",
    grammarNotes: [
      "'Mein' iyelik zamiridir ve 'Name' kelimesiyle uyumlu olmalıdır",
      "'ist' 'sein' fiilinin 3. tekil şahıs çekimidir",
      "Bu yapı biraz daha resmi bir tondur"
    ],
    examples: [
      { de: "Mein Name ist Nisa.", tr: "Benim adım Nisa." },
      { de: "Guten Tag, mein Name ist Anna.", tr: "İyi günler, benim adım Anna." },
      { de: "Mein Name ist Thomas Schmidt.", tr: "Benim adım Thomas Schmidt." },
      { de: "Entschuldigung, mein Name ist Lisa.", tr: "Özür dilerim, benim adım Lisa." }
    ],
    usageTips: [
      "Biraz daha resmi bir tondur",
      "İş ortamlarında, resmi tanışmalarda tercih edilir",
      "'Ich heiße' ile aynı anlama gelir"
    ],
    exercises: [
      {
        question: "Hangi ifade daha resmidir?",
        options: ["Ich heiße...", "Mein Name ist...", "Ich bin...", "Hi"],
        correctIndex: 1,
        explanation: "'Mein Name ist...' biraz daha resmi bir tondur."
      }
    ]
  },
  {
    id: "lesson-1-9",
    title: "İsim Sorma: Wie heißt du?",
    order: 9,
    explanationTr: "'Wie heißt du?' samimi ortamlarda isim sormak için kullanılır. 'Wie' nasıl, 'heißt' adın, 'du' sen anlamına gelir. Resmi ortamlarda 'Sie' kullanılır.",
    grammarNotes: [
      "'du' samimi 'sen' zamiridir",
      "'Wie' soru kelimesidir",
      "Resmi ortamlarda 'Wie heißen Sie?' kullanılır"
    ],
    examples: [
      { de: "Wie heißt du?", tr: "Adın ne? / Nasılsın?" },
      { de: "Hallo, wie heißt du?", tr: "Merhaba, adın ne?" },
      { de: "Entschuldigung, wie heißt du?", tr: "Özür dilerim, adın ne?" },
      { de: "Ich bin neu hier. Wie heißt du?", tr: "Ben burada yeniyim. Adın ne?" }
    ],
    usageTips: [
      "Sadece samimi ortamlarda kullanılır",
      "Yaşıtlar arasında, arkadaşlar arasında yaygındır",
      "Resmi ortamlarda 'Wie heißen Sie?' kullanılmalıdır"
    ],
    exercises: [
      {
        question: "Resmi ortamda isim sormak için hangisi kullanılır?",
        options: ["Wie heißt du?", "Wie heißen Sie?", "Wie heißt er?", "Wie heißt sie?"],
        correctIndex: 1,
        explanation: "Resmi ortamlarda 'Sie' kullanılır: 'Wie heißen Sie?'"
      }
    ]
  },
  {
    id: "lesson-1-10",
    title: "Resmi İsim Sorma: Wie heißen Sie?",
    order: 10,
    explanationTr: "'Wie heißen Sie?' resmi ortamlarda isim sormak için kullanılır. 'Sie' resmi 'siz' zamiridir. Öğretmenler, yöneticiler, tanımadığınız kişilerle konuşurken kullanılır.",
    grammarNotes: [
      "'Sie' resmi 'siz' zamiridir ve her zaman büyük harfle yazılır",
      "'heißen' fiili 'Sie' ile çoğul gibi çekilir ama tekil anlam taşır",
      "Saygı ve mesafe gösterir"
    ],
    examples: [
      { de: "Wie heißen Sie?", tr: "Adınız ne? (resmi)" },
      { de: "Guten Tag, wie heißen Sie?", tr: "İyi günler, adınız ne?" },
      { de: "Entschuldigung, wie heißen Sie bitte?", tr: "Özür dilerim, adınız ne lütfen?" },
      { de: "Darf ich fragen, wie heißen Sie?", tr: "Sormama izin verir misiniz, adınız ne?" }
    ],
    usageTips: [
      "Resmi ortamlarda mutlaka kullanılmalıdır",
      "Öğretmenler, yöneticiler, yaşlılar için kullanılır",
      "İş görüşmelerinde, resmi toplantılarda tercih edilir"
    ],
    exercises: [
      {
        question: "Öğretmeninize isim sorarken hangisini kullanırsınız?",
        options: ["Wie heißt du?", "Wie heißen Sie?", "Wie heißt er?", "Wie heißt sie?"],
        correctIndex: 1,
        explanation: "Öğretmenlere saygı göstererek 'Wie heißen Sie?' kullanılmalıdır."
      }
    ]
  },
  {
    id: "lesson-1-11",
    title: "Nasılsın Sorusu: Wie geht's?",
    order: 11,
    explanationTr: "'Wie geht's?' samimi ortamlarda 'nasılsın?' sorusunun kısa halidir. 'Wie geht es dir?' ifadesinin kısaltılmış şeklidir. Günlük konuşmada çok yaygındır.",
    grammarNotes: [
      "'geht's' = 'geht es' ifadesinin kısaltılmış halidir",
      "Samimi ortamlarda kullanılır",
      "Cevap olarak genellikle 'Gut!' veya 'Gut, danke!' denir"
    ],
    examples: [
      { de: "Wie geht's?", tr: "Nasılsın?" },
      { de: "Hallo, wie geht's?", tr: "Merhaba, nasılsın?" },
      { de: "Hey, wie geht's dir?", tr: "Hey, nasılsın?" },
      { de: "Wie geht's? Alles klar?", tr: "Nasılsın? Her şey yolunda mı?" }
    ],
    usageTips: [
      "En yaygın samimi 'nasılsın' sorusudur",
      "Arkadaşlar, aile, yaşıtlar arasında kullanılır",
      "Kısa ve hızlı bir sorudur"
    ],
    exercises: [
      {
        question: "'Wie geht's?' hangi durumda kullanılır?",
        options: ["Resmi ortamlarda", "Samimi ortamlarda", "Sadece yazılı", "Sadece telefon"],
        correctIndex: 1,
        explanation: "'Wie geht's?' samimi ortamlarda kullanılır."
      }
    ]
  },
  {
    id: "lesson-1-12",
    title: "Nasılsın Sorusu: Wie geht es dir?",
    order: 12,
    explanationTr: "'Wie geht es dir?' samimi ortamlarda 'nasılsın?' sorusunun tam halidir. 'Wie geht's?' ifadesinden daha açık ve net bir sorudur. 'dir' samimi 'sana' anlamına gelir.",
    grammarNotes: [
      "'es' özne görevi görür",
      "'dir' dativ halindeki 'du' zamiridir (sana)",
      "'gehen' fiili burada 'nasıl gidiyor' anlamında kullanılır"
    ],
    examples: [
      { de: "Wie geht es dir?", tr: "Nasılsın? (tam hali)" },
      { de: "Hallo, wie geht es dir heute?", tr: "Merhaba, bugün nasılsın?" },
      { de: "Hey, wie geht es dir denn?", tr: "Hey, nasılsın peki?" },
      { de: "Wie geht es dir? Alles gut?", tr: "Nasılsın? Her şey iyi mi?" }
    ],
    usageTips: [
      "'Wie geht's?' ile aynı anlama gelir ama daha açık",
      "Samimi ortamlarda kullanılır",
      "Biraz daha ciddi bir tondur"
    ],
    exercises: [
      {
        question: "'Wie geht es dir?' ifadesinde 'dir' ne anlama gelir?",
        options: ["Sen", "Sana", "Senden", "Seninle"],
        correctIndex: 1,
        explanation: "'dir' dativ halinde 'sana' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-1-13",
    title: "Resmi Nasılsınız: Wie geht es Ihnen?",
    order: 13,
    explanationTr: "'Wie geht es Ihnen?' resmi ortamlarda 'nasılsınız?' sorusudur. 'Ihnen' resmi 'size' anlamına gelir. Öğretmenler, yöneticiler, tanımadığınız kişilerle konuşurken kullanılır.",
    grammarNotes: [
      "'Ihnen' dativ halindeki resmi 'Sie' zamiridir",
      "Her zaman büyük harfle yazılır",
      "Saygı ve mesafe gösterir"
    ],
    examples: [
      { de: "Wie geht es Ihnen?", tr: "Nasılsınız? (resmi)" },
      { de: "Guten Tag, wie geht es Ihnen?", tr: "İyi günler, nasılsınız?" },
      { de: "Guten Morgen, wie geht es Ihnen heute?", tr: "Günaydın, bugün nasılsınız?" },
      { de: "Entschuldigung, wie geht es Ihnen?", tr: "Özür dilerim, nasılsınız?" }
    ],
    usageTips: [
      "Resmi ortamlarda mutlaka kullanılmalıdır",
      "Öğretmenler, yöneticiler, yaşlılar için kullanılır",
      "İş görüşmelerinde, resmi toplantılarda tercih edilir"
    ],
    exercises: [
      {
        question: "Resmi ortamda 'nasılsınız?' sorusu nasıl sorulur?",
        options: ["Wie geht's?", "Wie geht es dir?", "Wie geht es Ihnen?", "Wie geht es euch?"],
        correctIndex: 2,
        explanation: "Resmi ortamlarda 'Wie geht es Ihnen?' kullanılır."
      }
    ]
  },
  {
    id: "lesson-1-14",
    title: "İyi Olma Cevapları: Gut, danke!",
    order: 14,
    explanationTr: "'Gut, danke!' 'iyiyim, teşekkürler' anlamına gelir. 'Nasılsın?' sorusuna verilen en yaygın cevaptır. Hem samimi hem resmi ortamlarda kullanılabilir.",
    grammarNotes: [
      "'Gut' sıfattır ve 'iyi' anlamına gelir",
      "'danke' 'teşekkürler' anlamına gelir",
      "Kısa ve net bir cevaptır"
    ],
    examples: [
      { de: "Gut, danke!", tr: "İyiyim, teşekkürler!" },
      { de: "Wie geht's? - Gut, danke!", tr: "Nasılsın? - İyiyim, teşekkürler!" },
      { de: "Gut, danke! Und dir?", tr: "İyiyim, teşekkürler! Ya sen?" },
      { de: "Gut, danke der Nachfrage!", tr: "İyiyim, sorma zahmetine teşekkürler!" }
    ],
    usageTips: [
      "En yaygın pozitif cevaptır",
      "Hem samimi hem resmi ortamlarda kullanılır",
      "Kısa hali: 'Gut!' şeklinde de kullanılabilir"
    ],
    exercises: [
      {
        question: "'Gut, danke!' ne anlama gelir?",
        options: ["Kötüyüm", "İyiyim, teşekkürler", "Fena değil", "Bilmiyorum"],
        correctIndex: 1,
        explanation: "'Gut, danke!' 'iyiyim, teşekkürler' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-1-15",
    title: "Çok İyi Cevapları: Sehr gut!",
    order: 15,
    explanationTr: "'Sehr gut!' 'çok iyi' anlamına gelir. 'Sehr' çok, 'gut' iyi demektir. Her şeyin mükemmel gittiğini ifade eder.",
    grammarNotes: [
      "'Sehr' zarfıdır ve sıfatları güçlendirir",
      "'gut' sıfattır",
      "Pozitif ve enerjik bir cevaptır"
    ],
    examples: [
      { de: "Sehr gut!", tr: "Çok iyi!" },
      { de: "Wie geht's? - Sehr gut, danke!", tr: "Nasılsın? - Çok iyi, teşekkürler!" },
      { de: "Sehr gut! Und bei dir?", tr: "Çok iyi! Ya sen?" },
      { de: "Mir geht es sehr gut!", tr: "Ben çok iyiyim!" }
    ],
    usageTips: [
      "Her şeyin mükemmel gittiğini ifade eder",
      "Enerjik ve pozitif bir tondur",
      "Hem samimi hem resmi ortamlarda kullanılır"
    ],
    exercises: [
      {
        question: "'Sehr gut!' ne anlama gelir?",
        options: ["İyi", "Çok iyi", "Fena değil", "Kötü"],
        correctIndex: 1,
        explanation: "'Sehr gut!' 'çok iyi' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-1-16",
    title: "Orta Durum Cevapları: Es geht",
    order: 16,
    explanationTr: "'Es geht' 'idare eder, fena değil' anlamına gelir. Ne çok iyi ne de kötü bir durumu ifade eder. Nötr bir cevaptır.",
    grammarNotes: [
      "'Es geht' deyimsel bir ifadedir",
      "Tam hali: 'Es geht so' şeklinde de kullanılabilir",
      "Nötr bir tondur"
    ],
    examples: [
      { de: "Es geht.", tr: "İdare eder. / Fena değil." },
      { de: "Wie geht's? - Es geht.", tr: "Nasılsın? - İdare eder." },
      { de: "Es geht so.", tr: "Şöyle böyle. / Fena değil." },
      { de: "Es geht, danke der Nachfrage.", tr: "İdare eder, sorma zahmetine teşekkürler." }
    ],
    usageTips: [
      "Ne çok iyi ne de kötü durumları ifade eder",
      "Nötr bir tondur",
      "Samimi ortamlarda daha yaygındır"
    ],
    exercises: [
      {
        question: "'Es geht' ne anlama gelir?",
        options: ["Çok iyi", "İdare eder", "Kötü", "Bilmiyorum"],
        correctIndex: 1,
        explanation: "'Es geht' 'idare eder, fena değil' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-1-17",
    title: "Kötü Olma Cevapları: Nicht gut / Schlecht",
    order: 17,
    explanationTr: "'Nicht gut' veya 'Schlecht' kötü durumları ifade eder. 'Nicht gut' 'iyi değil', 'Schlecht' ise 'kötü' anlamına gelir. Genellikle samimi ortamlarda kullanılır.",
    grammarNotes: [
      "'Nicht' olumsuzluk eki",
      "'Schlecht' sıfattır ve 'kötü' anlamına gelir",
      "Genellikle açıklama istenir"
    ],
    examples: [
      { de: "Nicht gut.", tr: "İyi değil." },
      { de: "Schlecht.", tr: "Kötü." },
      { de: "Wie geht's? - Nicht so gut.", tr: "Nasılsın? - O kadar iyi değil." },
      { de: "Es geht mir schlecht.", tr: "Kötüyüm." }
    ],
    usageTips: [
      "Kötü durumları ifade eder",
      "Genellikle açıklama istenir: 'Was ist los?' (Ne oldu?)",
      "Samimi ortamlarda daha yaygındır"
    ],
    exercises: [
      {
        question: "'Schlecht' ne anlama gelir?",
        options: ["İyi", "Çok iyi", "Kötü", "Fena değil"],
        correctIndex: 2,
        explanation: "'Schlecht' 'kötü' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-1-18",
    title: "Teşekkür Etme: Danke",
    order: 18,
    explanationTr: "'Danke' 'teşekkürler' anlamına gelir. En yaygın teşekkür ifadesidir. Hem samimi hem resmi ortamlarda kullanılabilir.",
    grammarNotes: [
      "'Danke' fiil kökenlidir ama burada ünlem olarak kullanılır",
      "Kısa ve net bir ifadedir",
      "Resmi hali: 'Danke schön' veya 'Vielen Dank'"
    ],
    examples: [
      { de: "Danke!", tr: "Teşekkürler!" },
      { de: "Danke schön!", tr: "Çok teşekkürler!" },
      { de: "Vielen Dank!", tr: "Çok teşekkürler!" },
      { de: "Danke sehr!", tr: "Çok teşekkürler!" }
    ],
    usageTips: [
      "En yaygın teşekkür ifadesidir",
      "Hem samimi hem resmi ortamlarda kullanılır",
      "'Danke schön' daha vurgulu bir teşekkürdür"
    ],
    exercises: [
      {
        question: "Almanca'da 'teşekkürler' nasıl denir?",
        options: ["Bitte", "Danke", "Entschuldigung", "Gern geschehen"],
        correctIndex: 1,
        explanation: "'Danke' 'teşekkürler' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-1-19",
    title: "Rica Etme: Bitte",
    order: 19,
    explanationTr: "'Bitte' çok amaçlı bir kelimedir. 'Lütfen', 'rica ederim', 'buyurun' anlamlarında kullanılır. Bağlama göre anlamı değişir.",
    grammarNotes: [
      "'Bitte' cümlenin başında, ortasında veya sonunda kullanılabilir",
      "Bağlama göre anlamı değişir",
      "Çok yaygın bir kelimedir"
    ],
    examples: [
      { de: "Bitte!", tr: "Lütfen! / Rica ederim! / Buyurun!" },
      { de: "Bitte schön!", tr: "Rica ederim! / Buyurun!" },
      { de: "Kann ich bitte...?", tr: "Lütfen ... yapabilir miyim?" },
      { de: "Danke! - Bitte!", tr: "Teşekkürler! - Rica ederim!" }
    ],
    usageTips: [
      "Çok amaçlı bir kelimedir",
      "Teşekküre cevap olarak 'rica ederim' anlamında kullanılır",
      "İsteklerde 'lütfen' anlamında kullanılır"
    ],
    exercises: [
      {
        question: "'Bitte' kelimesi hangi anlamda kullanılamaz?",
        options: ["Lütfen", "Rica ederim", "Teşekkürler", "Buyurun"],
        correctIndex: 2,
        explanation: "'Bitte' 'teşekkürler' anlamında kullanılmaz, 'Danke' kullanılır."
      }
    ]
  },
  {
    id: "lesson-1-20",
    title: "Memnun Oldum: Freut mich / Sehr erfreut",
    order: 20,
    explanationTr: "'Freut mich' veya 'Sehr erfreut' tanıştığımıza memnun oldum anlamına gelir. Yeni tanıştığınız kişilerle kullanılır. 'Mich' beni, 'freut' memnun eder anlamına gelir.",
    grammarNotes: [
      "'freut' 'freuen' fiilinin 3. tekil şahıs çekimidir",
      "'mich' akkusativ halindeki 'ich' zamiridir",
      "'Sehr erfreut' daha resmi bir tondur"
    ],
    examples: [
      { de: "Freut mich!", tr: "Memnun oldum!" },
      { de: "Sehr erfreut!", tr: "Çok memnun oldum!" },
      { de: "Freut mich, dich kennenzulernen!", tr: "Seni tanımaktan memnun oldum!" },
      { de: "Sehr erfreut, Sie kennenzulernen!", tr: "Sizi tanımaktan çok memnun oldum! (resmi)" }
    ],
    usageTips: [
      "Yeni tanıştığınız kişilerle kullanılır",
      "'Sehr erfreut' daha resmi bir tondur",
      "Tanışma diyaloglarında sıkça kullanılır"
    ],
    exercises: [
      {
        question: "Yeni tanıştığınız birine ne dersiniz?",
        options: ["Danke", "Bitte", "Freut mich", "Tschüss"],
        correctIndex: 2,
        explanation: "Yeni tanıştığınız birine 'Freut mich!' (Memnun oldum!) dersiniz."
      }
    ]
  },
  {
    id: "lesson-1-21",
    title: "Nereden Geliyorsun: Woher kommst du?",
    order: 21,
    explanationTr: "'Woher kommst du?' samimi ortamlarda 'nereden geliyorsun?' sorusudur. 'Woher' nereden, 'kommst' geliyorsun, 'du' sen anlamına gelir. Resmi hali 'Woher kommen Sie?' şeklindedir.",
    grammarNotes: [
      "'Woher' soru kelimesidir (nereden)",
      "'kommen' gelmek fiilidir",
      "'du' samimi 'sen' zamiridir"
    ],
    examples: [
      { de: "Woher kommst du?", tr: "Nereden geliyorsun?" },
      { de: "Ich komme aus der Türkei.", tr: "Türkiye'den geliyorum." },
      { de: "Woher kommst du? - Aus Istanbul.", tr: "Nereden geliyorsun? - İstanbul'dan." },
      { de: "Woher kommst du eigentlich?", tr: "Aslında nereden geliyorsun?" }
    ],
    usageTips: [
      "Samimi ortamlarda kullanılır",
      "Resmi hali: 'Woher kommen Sie?'",
      "Cevap: 'Ich komme aus...' (Ben ...'dan geliyorum)"
    ],
    exercises: [
      {
        question: "'Woher kommst du?' sorusuna nasıl cevap verilir?",
        options: ["Ich bin...", "Ich komme aus...", "Ich wohne in...", "Ich heiße..."],
        correctIndex: 1,
        explanation: "'Woher kommst du?' sorusuna 'Ich komme aus...' (Ben ...'dan geliyorum) şeklinde cevap verilir."
      }
    ]
  },
  {
    id: "lesson-1-22",
    title: "Nerede Yaşıyorsun: Wo wohnst du?",
    order: 22,
    explanationTr: "'Wo wohnst du?' samimi ortamlarda 'nerede yaşıyorsun?' sorusudur. 'Wo' nerede, 'wohnst' yaşıyorsun, 'du' sen anlamına gelir. Resmi hali 'Wo wohnen Sie?' şeklindedir.",
    grammarNotes: [
      "'Wo' soru kelimesidir (nerede)",
      "'wohnen' yaşamak fiilidir",
      "'du' samimi 'sen' zamiridir"
    ],
    examples: [
      { de: "Wo wohnst du?", tr: "Nerede yaşıyorsun?" },
      { de: "Ich wohne in Berlin.", tr: "Berlin'de yaşıyorum." },
      { de: "Wo wohnst du? - In München.", tr: "Nerede yaşıyorsun? - Münih'te." },
      { de: "Wo wohnst du genau?", tr: "Tam olarak nerede yaşıyorsun?" }
    ],
    usageTips: [
      "Samimi ortamlarda kullanılır",
      "Resmi hali: 'Wo wohnen Sie?'",
      "Cevap: 'Ich wohne in...' (Ben ...'de yaşıyorum)"
    ],
    exercises: [
      {
        question: "'Wo wohnst du?' sorusuna nasıl cevap verilir?",
        options: ["Ich komme aus...", "Ich wohne in...", "Ich bin...", "Ich heiße..."],
        correctIndex: 1,
        explanation: "'Wo wohnst du?' sorusuna 'Ich wohne in...' (Ben ...'de yaşıyorum) şeklinde cevap verilir."
      }
    ]
  },
  {
    id: "lesson-1-23",
    title: "Ne İş Yapıyorsun: Was machst du?",
    order: 23,
    explanationTr: "'Was machst du?' samimi ortamlarda 'ne yapıyorsun?' veya 'ne iş yapıyorsun?' sorusudur. 'Was' ne, 'machst' yapıyorsun, 'du' sen anlamına gelir. Resmi hali 'Was machen Sie?' şeklindedir.",
    grammarNotes: [
      "'Was' soru kelimesidir (ne)",
      "'machen' yapmak fiilidir",
      "'du' samimi 'sen' zamiridir"
    ],
    examples: [
      { de: "Was machst du?", tr: "Ne yapıyorsun? / Ne iş yapıyorsun?" },
      { de: "Ich bin Student.", tr: "Ben öğrenciyim." },
      { de: "Was machst du beruflich?", tr: "Mesleken ne? (Ne iş yapıyorsun?)" },
      { de: "Ich studiere Medizin.", tr: "Tıp okuyorum." }
    ],
    usageTips: [
      "Samimi ortamlarda kullanılır",
      "Resmi hali: 'Was machen Sie?'",
      "Cevap: 'Ich bin...' (Ben ...'yim) veya 'Ich studiere...' (Ben ... okuyorum)"
    ],
    exercises: [
      {
        question: "'Was machst du?' sorusuna öğrenci nasıl cevap verir?",
        options: ["Ich bin Student", "Ich arbeite", "Ich komme", "Ich wohne"],
        correctIndex: 0,
        explanation: "Öğrenci 'Ich bin Student' (Ben öğrenciyim) şeklinde cevap verir."
      }
    ]
  },
  {
    id: "lesson-1-24",
    title: "Öğrenci Olduğunu Söyleme: Ich bin Student/Studentin",
    order: 24,
    explanationTr: "'Ich bin Student' erkek öğrenciler için, 'Ich bin Studentin' kadın öğrenciler için kullanılır. 'bin' 'sein' fiilinin 1. tekil şahıs çekimidir ve 'ben ...'yim' anlamına gelir.",
    grammarNotes: [
      "'bin' 'sein' fiilinin 1. tekil şahıs çekimidir",
      "'Student' erkek öğrenci, 'Studentin' kadın öğrenci",
      "Almanca'da meslek isimleri cinsiyete göre değişir"
    ],
    examples: [
      { de: "Ich bin Student.", tr: "Ben öğrenciyim. (erkek)" },
      { de: "Ich bin Studentin.", tr: "Ben öğrenciyim. (kadın)" },
      { de: "Ich bin Student an der Universität.", tr: "Ben üniversitede öğrenciyim." },
      { de: "Ich studiere an der Universität.", tr: "Ben üniversitede okuyorum." }
    ],
    usageTips: [
      "Erkek öğrenciler 'Student', kadın öğrenciler 'Studentin' kullanır",
      "'an der Universität' üniversitede anlamına gelir",
      "'Ich studiere...' (Ben ... okuyorum) alternatif bir ifadedir"
    ],
    exercises: [
      {
        question: "Kadın bir öğrenci kendini nasıl tanıtır?",
        options: ["Ich bin Student", "Ich bin Studentin", "Ich bin Studenten", "Ich bin Studentes"],
        correctIndex: 1,
        explanation: "Kadın öğrenci 'Ich bin Studentin' (Ben öğrenciyim) der."
      }
    ]
  },
  {
    id: "lesson-1-25",
    title: "Vedalaşma: Auf Wiedersehen",
    order: 25,
    explanationTr: "'Auf Wiedersehen' resmi ortamlarda kullanılan 'güle güle' ifadesidir. Kelime kelime 'tekrar görüşmek üzere' anlamına gelir. En yaygın resmi vedalaşma şeklidir.",
    grammarNotes: [
      "'Auf' edatı 'üzerine, üzere' anlamına gelir",
      "'Wiedersehen' 'wieder' (tekrar) + 'sehen' (görmek) kelimelerinden oluşur",
      "Resmi ortamlarda tercih edilir"
    ],
    examples: [
      { de: "Auf Wiedersehen!", tr: "Güle güle! (resmi)" },
      { de: "Auf Wiedersehen, bis morgen!", tr: "Güle güle, yarın görüşürüz!" },
      { de: "Auf Wiedersehen, schönen Tag noch!", tr: "Güle güle, iyi günler!" },
      { de: "Auf Wiedersehen, alles Gute!", tr: "Güle güle, her şey güzel olsun!" }
    ],
    usageTips: [
      "Resmi ortamlarda kullanılır",
      "Öğretmenler, yöneticiler, tanımadığınız kişilerle kullanılır",
      "Kısa hali: 'Wiedersehen!' şeklinde de kullanılabilir"
    ],
    exercises: [
      {
        question: "Resmi ortamda vedalaşırken hangisi kullanılır?",
        options: ["Tschüss", "Auf Wiedersehen", "Bis bald", "Ciao"],
        correctIndex: 1,
        explanation: "Resmi ortamlarda 'Auf Wiedersehen!' kullanılır."
      }
    ]
  },
  {
    id: "lesson-1-26",
    title: "Samimi Vedalaşma: Tschüss",
    order: 26,
    explanationTr: "'Tschüss' samimi ortamlarda kullanılan 'hoşça kal' ifadesidir. En yaygın samimi vedalaşma şeklidir. Arkadaşlar, aile, yaşıtlar arasında kullanılır.",
    grammarNotes: [
      "'Tschüss' Fransızca kökenli bir kelimedir",
      "Samimi ortamlarda kullanılır",
      "Kısa ve hızlı bir vedalaşmadır"
    ],
    examples: [
      { de: "Tschüss!", tr: "Hoşça kal!" },
      { de: "Tschüss, bis später!", tr: "Hoşça kal, sonra görüşürüz!" },
      { de: "Tschüss, mach's gut!", tr: "Hoşça kal, kendine iyi bak!" },
      { de: "Tschüss, bis morgen!", tr: "Hoşça kal, yarın görüşürüz!" }
    ],
    usageTips: [
      "Samimi ortamlarda kullanılır",
      "Arkadaşlar, aile, yaşıtlar arasında yaygındır",
      "Kısa ve hızlı bir vedalaşmadır"
    ],
    exercises: [
      {
        question: "Samimi ortamda vedalaşırken hangisi kullanılır?",
        options: ["Auf Wiedersehen", "Tschüss", "Auf Wiederhören", "Gute Nacht"],
        correctIndex: 1,
        explanation: "Samimi ortamlarda 'Tschüss!' kullanılır."
      }
    ]
  },
  {
    id: "lesson-1-27",
    title: "Görüşürüz İfadeleri: Bis bald / Bis später",
    order: 27,
    explanationTr: "'Bis bald' 'yakında görüşürüz', 'Bis später' 'sonra görüşürüz' anlamına gelir. 'Bis' 'kadar, kadar' anlamına gelir. Samimi ortamlarda kullanılır.",
    grammarNotes: [
      "'Bis' edatı 'kadar, kadar' anlamına gelir",
      "'bald' yakında, 'später' sonra anlamına gelir",
      "Samimi ortamlarda kullanılır"
    ],
    examples: [
      { de: "Bis bald!", tr: "Yakında görüşürüz!" },
      { de: "Bis später!", tr: "Sonra görüşürüz!" },
      { de: "Bis morgen!", tr: "Yarın görüşürüz!" },
      { de: "Bis dann!", tr: "O zaman görüşürüz!" }
    ],
    usageTips: [
      "Samimi ortamlarda kullanılır",
      "Genellikle 'Tschüss' ile birlikte kullanılır",
      "Farklı zaman ifadeleriyle kullanılabilir: 'Bis morgen!' (Yarın görüşürüz)"
    ],
    exercises: [
      {
        question: "'Bis bald!' ne anlama gelir?",
        options: ["Hoşça kal", "Yakında görüşürüz", "İyi geceler", "Merhaba"],
        correctIndex: 1,
        explanation: "'Bis bald!' 'yakında görüşürüz' anlamına gelir."
      }
    ]
  },
  {
    id: "lesson-1-28",
    title: "Resmi ve Samimi Vedalaşma Farkları",
    order: 28,
    explanationTr: "Almanca'da vedalaşma resmi ve samimi olmak üzere ikiye ayrılır. Resmi ortamlarda 'Auf Wiedersehen', samimi ortamlarda 'Tschüss' kullanılır. Kullanım yerine dikkat etmek önemlidir.",
    grammarNotes: [
      "Resmi: Auf Wiedersehen, Auf Wiederhören (telefonda)",
      "Samimi: Tschüss, Bis bald, Ciao",
      "Yanlış kullanım yanlış anlaşılmalara yol açabilir"
    ],
    examples: [
      { de: "Resmi: Auf Wiedersehen, Herr Schmidt!", tr: "Güle güle, Bay Schmidt! (resmi)" },
      { de: "Samimi: Tschüss, bis morgen!", tr: "Hoşça kal, yarın görüşürüz! (samimi)" },
      { de: "Resmi: Auf Wiederhören!", tr: "Tekrar görüşürüz! (telefonda, resmi)" },
      { de: "Samimi: Ciao!", tr: "Hoşça kal! (samimi, İtalyanca kökenli)" }
    ],
    usageTips: [
      "Resmi ortamlarda mutlaka resmi ifadeler kullanılmalıdır",
      "Samimi ortamlarda samimi ifadeler kullanılabilir",
      "Karıştırmamaya dikkat edin"
    ],
    exercises: [
      {
        question: "Öğretmeninizle vedalaşırken hangisini kullanırsınız?",
        options: ["Tschüss", "Auf Wiedersehen", "Ciao", "Bis bald"],
        correctIndex: 1,
        explanation: "Öğretmenlerle resmi ortamda 'Auf Wiedersehen!' kullanılmalıdır."
      }
    ]
  },
  {
    id: "lesson-1-29",
    title: "Telefonda Selamlaşma ve Vedalaşma",
    order: 29,
    explanationTr: "Telefonda selamlaşma ve vedalaşma özel ifadeler içerir. 'Hallo' ile başlanır, 'Auf Wiederhören' ile bitirilir. Telefonda görüşmeye özgü ifadeler vardır.",
    grammarNotes: [
      "Telefonda: 'Hallo, hier ist...' (Merhaba, ben ...)",
      "Vedalaşma: 'Auf Wiederhören' (Tekrar görüşürüz - sadece telefonda)",
      "Resmi: 'Guten Tag, hier spricht...' (İyi günler, ... konuşuyor)"
    ],
    examples: [
      { de: "Hallo, hier ist Nisa.", tr: "Merhaba, ben Nisa." },
      { de: "Guten Tag, hier spricht Anna Müller.", tr: "İyi günler, Anna Müller konuşuyor. (resmi)" },
      { de: "Auf Wiederhören!", tr: "Tekrar görüşürüz! (telefonda)" },
      { de: "Bis bald, tschüss!", tr: "Yakında görüşürüz, hoşça kal! (samimi, telefonda)" }
    ],
    usageTips: [
      "Telefonda 'hier ist...' veya 'hier spricht...' kullanılır",
      "Vedalaşmada 'Auf Wiederhören' sadece telefonda kullanılır",
      "Resmi görüşmelerde daha formal ifadeler kullanılır"
    ],
    exercises: [
      {
        question: "Telefonda vedalaşırken hangisi kullanılır?",
        options: ["Auf Wiedersehen", "Auf Wiederhören", "Tschüss", "Bis bald"],
        correctIndex: 1,
        explanation: "Telefonda 'Auf Wiederhören!' (Tekrar görüşürüz) kullanılır."
      }
    ]
  },
  {
    id: "lesson-1-30",
    title: "Özür Dileme: Entschuldigung / Es tut mir leid",
    order: 30,
    explanationTr: "'Entschuldigung' veya 'Es tut mir leid' özür dileme ifadeleridir. 'Entschuldigung' daha genel, 'Es tut mir leid' daha samimi ve içten bir özürdür. Her ikisi de yaygın kullanılır.",
    grammarNotes: [
      "'Entschuldigung' 'özür dilerim' anlamına gelir",
      "'Es tut mir leid' 'üzgünüm' anlamına gelir",
      "İkisi de yaygın kullanılır"
    ],
    examples: [
      { de: "Entschuldigung!", tr: "Özür dilerim! / Pardon!" },
      { de: "Es tut mir leid.", tr: "Üzgünüm." },
      { de: "Entschuldigung, können Sie mir helfen?", tr: "Özür dilerim, bana yardımcı olabilir misiniz?" },
      { de: "Es tut mir wirklich leid.", tr: "Gerçekten çok üzgünüm." }
    ],
    usageTips: [
      "'Entschuldigung' daha genel bir özürdür",
      "'Es tut mir leid' daha samimi ve içten bir özürdür",
      "Her ikisi de yaygın kullanılır"
    ],
    exercises: [
      {
        question: "Birine çarptığınızda ne dersiniz?",
        options: ["Danke", "Bitte", "Entschuldigung", "Gern geschehen"],
        correctIndex: 2,
        explanation: "Birine çarptığınızda 'Entschuldigung!' (Özür dilerim!) dersiniz."
      }
    ]
  },
  {
    id: "lesson-1-31",
    title: "Tam Diyalog Örneği: Tanışma",
    order: 31,
    explanationTr: "Bu derste tam bir tanışma diyalogunu öğreneceksiniz. Tüm öğrendiğiniz ifadeleri bir araya getirerek gerçek hayatta nasıl kullanılacağını göreceksiniz.",
    grammarNotes: [
      "Diyalog yapısı: Selamlaşma → Tanışma → Sorular → Vedalaşma",
      "Resmi ve samimi versiyonları vardır",
      "Bağlama göre ifadeler değişir"
    ],
    examples: [
      { 
        de: "A: Guten Tag!\nB: Guten Tag!\nA: Ich heiße Nisa. Wie heißen Sie?\nB: Ich heiße Anna. Freut mich!\nA: Freut mich auch! Woher kommen Sie?\nB: Ich komme aus Deutschland. Und Sie?\nA: Ich komme aus der Türkei.\nB: Sehr interessant! Auf Wiedersehen!\nA: Auf Wiedersehen!",
        tr: "A: İyi günler!\nB: İyi günler!\nA: Benim adım Nisa. Adınız ne?\nB: Benim adım Anna. Memnun oldum!\nA: Ben de memnun oldum! Nereden geliyorsunuz?\nB: Almanya'dan geliyorum. Ya siz?\nA: Türkiye'den geliyorum.\nB: Çok ilginç! Güle güle!\nA: Güle güle!"
      }
    ],
    usageTips: [
      "Diyalog yapısını öğrenmek önemlidir",
      "Pratik yaparak akıcılık kazanılır",
      "Resmi ve samimi versiyonları ayrı ayrı çalışılmalıdır"
    ],
    exercises: [
      {
        question: "Tanışma diyaloğunda hangi sıra izlenir?",
        options: ["Selamlaşma → Tanışma → Sorular → Vedalaşma", "Vedalaşma → Tanışma → Sorular → Selamlaşma", "Sorular → Selamlaşma → Tanışma → Vedalaşma", "Tanışma → Vedalaşma → Selamlaşma → Sorular"],
        correctIndex: 0,
        explanation: "Tanışma diyaloğunda sıra: Selamlaşma → Tanışma → Sorular → Vedalaşma şeklindedir."
      }
    ]
  }
];

// Ünite 1'i güncellenmiş haliyle export et
export const unit1Detailed: Unit = {
  id: "unit-1",
  title: "Ünite 1: Selamlaşma & Tanışma",
  level: "A1",
  descriptionTr: "Temel selamlaşma ifadeleri ve kendini tanıtma cümleleri - 30+ detaylı alt konu ile kapsamlı öğrenim",
  topics: [
    "Almanca Alfabesi ve Temel Telaffuz",
    "Temel Selamlaşma: Hallo ve Hi",
    "Günün Saatlerine Göre Selamlaşma",
    "Kendini Tanıtma: Ich heiße... / Mein Name ist...",
    "İsim Sorma: Wie heißt du? / Wie heißen Sie?",
    "Nasılsın Soruları: Wie geht's? / Wie geht es dir/Ihnen?",
    "Durum Cevapları: Gut, Sehr gut, Es geht, Schlecht",
    "Teşekkür ve Rica: Danke, Bitte",
    "Memnun Oldum: Freut mich",
    "Kişisel Bilgiler: Woher kommst du? / Wo wohnst du?",
    "Meslek ve Öğrencilik: Was machst du? / Ich bin Student",
    "Vedalaşma: Auf Wiedersehen, Tschüss, Bis bald",
    "Resmi ve Samimi Farkları",
    "Telefonda İletişim",
    "Özür Dileme: Entschuldigung",
    "Tam Diyalog Örnekleri"
  ],
  phrases: [
    { de: "Hallo", tr: "Merhaba", example: "Hallo, wie geht's?", note: "En yaygın selamlaşma" },
    { de: "Guten Morgen", tr: "Günaydın", example: "Guten Morgen, schönen Tag!", note: "Sabah 12'ye kadar" },
    { de: "Guten Tag", tr: "İyi günler", example: "Guten Tag, kann ich helfen?", note: "Öğleden sonra" },
    { de: "Guten Abend", tr: "İyi akşamlar", example: "Guten Abend, willkommen!", note: "Akşam 18:00'dan sonra" },
    { de: "Ich heiße...", tr: "Benim adım...", example: "Ich heiße Nisa.", note: "En yaygın tanışma" },
    { de: "Mein Name ist...", tr: "Benim adım...", example: "Mein Name ist Anna.", note: "Biraz daha resmi" },
    { de: "Wie geht's?", tr: "Nasılsın?", example: "Hallo, wie geht's?", note: "Samimi" },
    { de: "Gut, danke", tr: "İyiyim, teşekkürler", example: "Wie geht's? - Gut, danke!", note: "En yaygın cevap" },
    { de: "Auf Wiedersehen", tr: "Güle güle", example: "Auf Wiedersehen, bis morgen!", note: "Resmi" },
    { de: "Tschüss", tr: "Hoşça kal", example: "Tschüss, bis später!", note: "Samimi" }
  ],
  miniExercise: [
    {
      question: "Sabah karşılaşmada ne denir?",
      options: ["Guten Tag", "Guten Morgen", "Guten Abend", "Tschüss"],
      correctIndex: 1,
      explanation: "Sabah saatlerinde 'Guten Morgen!' kullanılır."
    },
    {
      question: "'Nasılsın?' sorusunun Almanca karşılığı nedir?",
      options: ["Wie heißt du?", "Wie geht's?", "Wie alt bist du?", "Woher kommst du?"],
      correctIndex: 1,
      explanation: "'Wie geht's?' samimi ortamlarda 'nasılsın?' anlamına gelir."
    },
    {
      question: "'Ich heiße...' ifadesi ne anlama gelir?",
      options: ["Ben... yaşındayım", "Benim adım...", "Ben... geliyorum", "Ben... yaşıyorum"],
      correctIndex: 1,
      explanation: "'Ich heiße...' 'benim adım...' anlamına gelir."
    }
  ],
  lessons: unit1Lessons
};

