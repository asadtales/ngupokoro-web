# Ngupokoro — Website Profile

Website resmi **Ngupokoro Digital Solutions** (PT. Asterix Inovasi Teknologi)  
Dibangun dengan [Astro](https://astro.build) · Deploy ke [Cloudflare Pages](https://pages.cloudflare.com)

---

## 🚀 Cara Menjalankan Lokal

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build production
npm run build

# Preview hasil build
npm run preview
```

---

## ☁️ Deploy ke Cloudflare Pages

### 1. Push ke GitHub
```bash
git init
git add .
git commit -m "initial: ngupokoro website"
git remote add origin https://github.com/USERNAME/ngupokoro-web.git
git push -u origin main
```

### 2. Setup Cloudflare Pages
1. Login ke [dash.cloudflare.com](https://dash.cloudflare.com)
2. Masuk ke **Workers & Pages** → **Create Application** → **Pages**
3. Connect ke GitHub → pilih repo `ngupokoro-web`
4. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Klik **Save and Deploy**

### 3. Custom Domain
1. Di Cloudflare Pages → **Custom domains** → Add `ngupokoro.cloud`
2. Cloudflare otomatis tambahkan DNS record (karena NS sudah di Cloudflare)
3. Done ✅

---

## 📁 Struktur Project

```
src/
├── components/
│   ├── Navbar.astro       # Navigasi sticky + mobile menu
│   ├── Hero.astro         # Section hero utama
│   ├── Services.astro     # Grid 6 layanan
│   ├── About.astro        # Tentang & statistik
│   ├── Values.astro       # 4 nilai brand
│   ├── Contact.astro      # Info kontak + CTA card
│   └── Footer.astro       # Footer lengkap
├── layouts/
│   └── BaseLayout.astro   # HTML base + SEO meta
├── pages/
│   └── index.astro        # Halaman utama
└── styles/
    └── global.css         # CSS variables & utilities
public/
├── favicon.svg
└── _redirects             # Cloudflare redirect rules
```

---

## 🎨 Brand Tokens

| Token | Nilai | Nama |
|-------|-------|------|
| `--deep` | `#0D1117` | Arang Malam |
| `--ink` | `#1A1F2E` | Biru Tinta |
| `--gold` | `#C8A84B` | Emas Batik |
| `--amber` | `#D4813A` | Tembaga |
| `--cream` | `#F5EFE0` | Krem Linen |
| `--accent` | `#2E6B8A` | Biru Langit |

Font: **Playfair Display** (display) · **DM Sans** (body) · **Space Mono** (label)

---

## ✏️ Kustomisasi

- **Kontak:** Edit di `src/components/Contact.astro` — ubah email, WhatsApp number
- **Layanan:** Edit array `services` di `src/components/Services.astro`
- **Tentang:** Edit copy & statistik di `src/components/About.astro`
- **SEO:** Edit default di `src/layouts/BaseLayout.astro`

---

© 2025 PT. Asterix Inovasi Teknologi · Ngupokoro Digital Solutions
