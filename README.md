# rananwari-web

Portfolio site berbasis Next.js 15 dengan aset 3D yang siap di-deploy ke Vercel.

## Menjalankan lokal

```bash
npm install
npm run dev
```

## Deploy ke Vercel

1. Push source code penting ke repository GitHub.
2. Import repository tersebut di `vercel.app`.
3. Tambahkan environment variable bila diperlukan:

```bash
NEXT_PUBLIC_CORS_ORIGIN=https://your-project.vercel.app
```

Nilai contoh tersedia di file [`.env.example`](.env.example).

## Catatan file lokal

File sensitif dan utilitas lokal berikut memang tidak ikut ter-upload:

- `.env2`
- folder `.local/`

Dengan begitu repository yang naik ke GitHub tetap fokus pada file yang dibutuhkan untuk build dan deploy Vercel.
