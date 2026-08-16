# 🍳 Naz's Kitchen

Evinizde bulunan malzemelerle saniyeler içinde harika tarifler oluşturun. Google Gemini AI destekli modern tarif uygulaması.

## Özellikler

- **AI Tarif Oluşturma** — Elinizdeki malzemelerle Gemini 2.5 Flash ile anında tarif
- **Adım Adım Form** — Malzeme, yemek türü, süre, porsiyon ve zorluk seçimi
- **Favoriler** — Beğendiğiniz tarifleri yerel olarak kaydedin
- **Geçmiş** — Önceki tarifleri arayın ve tekrar açın
- **Açık/Koyu Mod** — Göz yormayan premium tasarım
- **Çoklu Dil** — Türkçe ve İngilizce arayüz
- **Responsive** — Mobil, tablet ve masaüstü uyumlu

## Teknoloji

| Katman | Teknoloji |
|--------|-----------|
| Frontend | React, TypeScript, Vite, TailwindCSS, shadcn/ui |
| Backend | Node.js, Express, TypeScript |
| AI | Google Gemini 2.5 Flash |

## Kurulum

### Gereksinimler

- Node.js 18+
- Google Gemini API anahtarı — **opsiyonel** ([AI Studio](https://aistudio.google.com/apikey))

> API anahtarı olmadan da uygulama çalışır. Yerel akıllı tarif modu otomatik devreye girer.

### 1. Bağımlılıkları yükleyin

```bash
cd nazs-kitchen
npm install
npm install --prefix client
npm install --prefix server
```

### 2. Ortam değişkenlerini ayarlayın

```bash
cp .env.example .env
```

`.env` dosyasını düzenleyin:

```env
GEMINI_API_KEY=your_actual_api_key_here
PORT=3001
VITE_API_URL=http://localhost:3001
```

### 3. Uygulamayı başlatın

```bash
npm run dev
```

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3001

## Production Build

```bash
npm run build
npm start
```

## Proje Yapısı

```
nazs-kitchen/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI bileşenleri
│   │   ├── pages/          # Sayfa bileşenleri
│   │   ├── hooks/          # Custom hooks
│   │   ├── services/       # API ve storage servisleri
│   │   ├── lib/            # Yardımcı fonksiyonlar
│   │   └── types/          # TypeScript tipleri
│   └── ...
├── server/                 # Express backend
│   └── src/
│       ├── routes/         # API rotaları
│       ├── services/       # Gemini AI servisi
│       └── types/          # TypeScript tipleri
└── ...
```

## Klavye Kısayolları

| Kısayol | İşlem |
|---------|-------|
| `Enter` | Malzeme ekle |
| `Ctrl + Enter` | Tarif oluştur |

## Lisans

MIT
