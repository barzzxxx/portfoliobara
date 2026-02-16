# 🚀 Modern Portfolio Website

Portfolio website yang modern, responsif, dan dinamis dengan design yang menarik. Dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework.

![Portfolio Preview](https://via.placeholder.com/1200x600/667eea/ffffff?text=Modern+Portfolio)

## ✨ Features

- **Fully Responsive** - Sempurna di desktop, tablet, dan mobile
- **Modern Design** - UI/UX yang menarik dengan animasi smooth
- **Dynamic Content** - Mudah dikustomisasi melalui JavaScript
- **Photo Support** - Tempat untuk foto profil kamu
- **Tech Stack dengan Logo** - Logo framework/bahasa pemrograman dari CDN
- **Dark Mode Support** - Otomatis mengikuti system preference
- **Smooth Animations** - Animasi scroll yang halus
- **Laravel Included** - Tech stack sudah termasuk Laravel
- **Performance Optimized** - Loading cepat tanpa dependency berat

## 📁 Struktur File

```
portfolio/
│
├── index.html          # File HTML utama
├── style.css           # Stylesheet dengan design modern
├── script.js           # JavaScript untuk interaktivitas
└── README.md           # Dokumentasi
```

## 🚀 Cara Menggunakan

### 1. Copy Semua File

Copy semua file (index.html, style.css, script.js) ke folder project kamu.

### 2. Buka di Browser

Buka `index.html` di browser kamu atau gunakan live server:

```bash
# Jika punya Python
python -m http.server 8000

# Jika punya Node.js
npx serve

# Atau gunakan VS Code Live Server extension
```

### 3. Edit Informasi Personal

## 📸 CARA GANTI FOTO KAMU

### **Hero Section (Foto Utama)**

Buka `index.html` dan cari baris ini (sekitar baris 65):

```html
<img src="https://via.placeholder.com/400x400/667eea/ffffff?text=Your+Photo" 
     alt="Your Name" class="profile-photo">
```

**GANTI dengan:**

**Opsi 1: Foto di folder yang sama**
```html
<img src="foto-saya.jpg" alt="Your Name" class="profile-photo">
```

**Opsi 2: Foto di folder khusus**
```html
<img src="images/profile.jpg" alt="Your Name" class="profile-photo">
```

**Opsi 3: Link foto online**
```html
<img src="https://i.imgur.com/abc123.jpg" alt="Your Name" class="profile-photo">
```

### **About Section (Foto Kedua)**

Cari baris ini (sekitar baris 105):

```html
<img src="https://via.placeholder.com/500x600/667eea/ffffff?text=Your+Photo" 
     alt="About Me" class="about-photo">
```

**GANTI dengan foto kamu** (sama seperti di atas).

### **Tips Foto:**
- ✅ Gunakan foto persegi (400x400px atau 500x500px)
- ✅ Format: JPG, PNG, atau WebP
- ✅ Ukuran file: maksimal 500KB untuk loading cepat
- ✅ Foto yang jelas dan profesional
- ✅ Background yang bersih atau blur

## ⚙️ Kustomisasi Lengkap

### 1. Informasi Personal

**Edit nama, title, dan deskripsi:**

Buka `index.html`, cari section hero (sekitar baris 38-60):

```html
<!-- Ganti nama -->
<span class="highlight">Your Name</span>

<!-- Ganti job title -->
<p class="hero-subtitle">Full Stack Developer & Creative Thinker</p>

<!-- Ganti deskripsi -->
<p class="hero-description">Crafting exceptional digital experiences...</p>
```

### 2. Statistik (Angka Projects, Experience, dll)

Cari section hero-stats (sekitar baris 70-85):

```html
<div class="stat-number">50+</div>  <!-- Ganti angka project -->
<div class="stat-number">3+</div>   <!-- Ganti tahun experience -->
<div class="stat-number">20+</div>  <!-- Ganti happy clients -->
```

### 3. About Me Section

Cari section about (sekitar baris 95-125), edit:

```html
<h3 class="about-heading">Passionate Developer Building Digital Solutions</h3>

<div class="about-text">
    <p>Hello! I'm a passionate developer...  <!-- EDIT CERITA KAMU -->
</div>
```

### 4. Projects

Buka `script.js`, edit array `projects` (baris 3-50):

```javascript
projects: [
    {
        id: 1,
        title: "Nama Project Kamu",              // Ganti nama project
        description: "Deskripsi project...",     // Ganti deskripsi
        tech: ["Laravel", "Vue.js", "MySQL"],    // Ganti tech stack
        github: "https://github.com/...",        // Link GitHub kamu
        demo: "https://demo-link.com",           // Link demo
        icon: "🛒"                                // Ganti emoji
    },
    // Tambah project lain...
]
```

### 5. Tech Stack

Edit tech stack di `script.js` (baris 52-90):

```javascript
techStack: {
    frontend: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        // Tambah lebih banyak...
    ],
    backend: [
        { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
        // Tambah lebih banyak...
    ],
    tools: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        // Tambah lebih banyak...
    ]
}
```

**Cari logo framework lain di:**
- https://devicon.dev/ (recommended)
- https://cdn.jsdelivr.net/gh/devicons/devicon/
- https://simpleicons.org/

### 6. Contact Links

Buka `index.html`, cari section contact (sekitar baris 155-175):

```html
<a href="https://github.com/yourusername" ...>  <!-- Ganti dengan GitHub kamu -->
<a href="https://linkedin.com/in/yourusername" ...>  <!-- Ganti dengan LinkedIn kamu -->
<a href="mailto:your.email@example.com" ...>  <!-- Ganti dengan email kamu -->
```

### 7. Warna dan Theme

Buka `style.css`, edit CSS variables (baris 2-20):

```css
:root {
    --primary-color: #667eea;      /* Warna utama */
    --secondary-color: #764ba2;    /* Warna aksen */
    /* Edit sesuai selera... */
}
```

**Color Palette Ideas:**
- Purple: `#667eea` & `#764ba2` (default)
- Blue: `#3b82f6` & `#1e40af`
- Green: `#10b981` & `#059669`
- Orange: `#f97316` & `#ea580c`
- Pink: `#ec4899` & `#db2777`

## 🎨 Tech Stack yang Sudah Termasuk

### Frontend
- React, Vue.js, Next.js
- TypeScript, JavaScript
- Tailwind CSS, HTML5, CSS3

### Backend
- **Laravel** ⭐ (sudah termasuk!)
- Node.js, Express
- PHP, MySQL, PostgreSQL, MongoDB, Redis

### Tools
- Git, Docker, AWS, Firebase
- Webpack, VS Code, Figma, Linux

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## 🌐 Deploy Portfolio Kamu

### GitHub Pages (Gratis)

1. Push ke GitHub repository
2. Settings → Pages
3. Source: main branch
4. Website live di: `https://username.github.io/portfolio`

### Netlify (Gratis)

1. Drag & drop folder ke Netlify
2. Instant deploy!
3. Custom domain gratis

### Vercel (Gratis)

```bash
npm i -g vercel
vercel --prod
```

## 💡 Tips & Tricks

### Untuk Foto yang Bagus:
1. Gunakan background yang simple atau blur
2. Lighting yang baik (natural light terbaik)
3. Foto dari angle yang flattering
4. Edit sedikit brightness/contrast kalau perlu
5. Compress foto pakai TinyPNG.com

### Untuk Projects:
1. Pilih 4-6 project terbaik kamu
2. Tulis deskripsi yang jelas dan menarik
3. Pastikan link GitHub dan demo work
4. Gunakan emoji yang relevant untuk icon

### Untuk About Me:
1. Cerita singkat tapi menarik
2. Highlight skill dan passion kamu
3. Tunjukkan personality kamu
4. Keep it professional tapi friendly

## 🐛 Troubleshooting

### Foto tidak muncul?
- ✅ Cek path/link foto sudah benar
- ✅ Cek nama file tidak ada typo
- ✅ Foto harus di folder yang sama atau kasih path lengkap
- ✅ Format foto harus .jpg, .png, atau .webp

### Logo tech stack tidak muncul?
- ✅ Logo di-load dari CDN, butuh internet
- ✅ Cek console browser untuk error
- ✅ Gunakan link logo dari devicon.dev

### Layout berantakan di mobile?
- ✅ Website sudah responsive
- ✅ Test di device nyata atau Chrome DevTools
- ✅ Clear cache browser

## 📞 Support

Ada pertanyaan? Edit file-nya dan eksperimen! 

Semua comment di code sudah dalam bahasa Indonesia untuk memudahkan.

## 🎯 Checklist Sebelum Deploy

- [ ] Ganti semua "Your Name" dengan nama kamu
- [ ] Upload dan ganti foto kamu (2 tempat!)
- [ ] Edit About Me section
- [ ] Update projects dengan project kamu
- [ ] Ganti semua link (GitHub, LinkedIn, Email)
- [ ] Test di mobile dan desktop
- [ ] Check semua link work
- [ ] Deploy! 🚀

## 📄 License

Free to use! Edit sesuka kamu dan buat portfolio yang amazing! ✨

## 🙏 Credits

- Design: Custom modern design with gradient theme
- Icons: Lucide Icons (inline SVG)
- Tech Logos: DevIcons CDN
- Fonts: Google Fonts (Poppins & Playfair Display)

---

**Made with ❤️ - Ready to Copy Paste!**

Need help? Check the code comments - semuanya ada penjelasannya! 🚀
