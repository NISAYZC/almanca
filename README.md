# 🍳 Naz's Kitchen

Evinizde bulunan malzemelerle saniyeler içinde harika tarifler oluşturun. Google Gemini AI destekli modern tarif uygulaması.

## Özellikler

- **AI Tarif Oluşturma** — Gemini 2.5 Flash ile anında tarif (opsiyonel)
- **Yerel Mod** — API anahtarı olmadan akıllı tarif üretici
- **5 Adımlı Form** — Malzeme, tür, süre, porsiyon, zorluk
- **Favoriler & Geçmiş** — Tarifleri yerel olarak kaydet ve ara
- **Açık/Koyu Mod** — Premium turuncu/krem tasarım
- **Türkçe / İngilizce** arayüz

## Teknoloji

| Katman | Teknoloji |
|--------|-----------|
| Frontend | React, TypeScript, Vite, TailwindCSS, shadcn/ui |
| Backend | Node.js, Express, TypeScript |
| AI | Google Gemini 2.5 Flash (opsiyonel) |

## Kurulum

### Gereksinimler

- Node.js 18+
- Gemini API anahtarı — **opsiyonel** ([AI Studio](https://aistudio.google.com/apikey))

### 1. Bağımlılıkları yükleyin

```bash
npm install
npm install --prefix client
npm install --prefix server
```

### 2. Ortam değişkenleri (opsiyonel)

```bash
copy .env.example .env
```

```env
GEMINI_API_KEY=your_api_key_here
PORT=3001
VITE_API_URL=http://localhost:3001
```

> API anahtarı olmadan da uygulama yerel tarif moduyla çalışır.

### 3. Başlatın

```bash
npm run dev
```

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3001

## Production

```bash
npm run build
npm start
```

## Klavye Kısayolları

| Kısayol | İşlem |
|---------|-------|
| `Enter` | Malzeme ekle |
| `Ctrl + Enter` | Tarif oluştur |

## Lisans

MIT
