# Smilling Odisha

A React + Vite web application for **Smilling Odisha** — a non-profit initiative providing free career counseling, skill development, and grassroots social work across Odisha, India.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS v3 + shadcn/ui |
| Routing | React Router DOM v6 |
| Forms | Web3Forms (via `VITE_WEB3FORMS_KEY`) |
| Notifications | Sonner |
| Icons | Lucide React |
| Testing | Vitest + Testing Library |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── BackToTop.tsx          # Floating scroll-to-top button
│   ├── CountUpStat.tsx        # Animated number stat
│   ├── Footer.tsx             # Site footer (links, contacts, social)
│   ├── Layout.tsx             # Page wrapper (Navbar + Footer + floating buttons)
│   ├── Navbar.tsx             # Sticky navigation bar
│   ├── ScrollToTop.tsx        # Route-change scroll helper
│   ├── SectionHeading.tsx     # Reusable section heading
│   ├── WhatsAppButton.tsx     # Floating WhatsApp CTA
│   └── gallery/
│       ├── GalleryCard.tsx        # Individual gallery image card
│       ├── PhotoGallery.tsx       # Gallery grid + lightbox wrapper
│       ├── PhotoLightbox.tsx      # Fullscreen image modal
│       └── UploadPhotoDialog.tsx  # (Unused) Photo upload dialog
├── data/
│   ├── careerGalleryPhotos.ts     # Career counseling gallery entries
│   ├── commerceGalleryPhotos.ts   # Commerce Class gallery entries (14 photos)
│   └── galleryPhotos.ts           # Social Work gallery entries
├── hooks/
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   ├── useCountUp.ts              # IntersectionObserver count-up animation
│   └── useDocumentTitle.ts        # Per-page <title> updater
├── lib/
│   ├── submitForm.ts              # Web3Forms submission utility
│   └── utils.ts
└── pages/
    ├── Career.tsx                 # Career Counseling page
    ├── CommerceEducation.tsx      # Commerce Class page
    ├── Index.tsx                  # Home page
    ├── MedhaSanman.tsx            # Medha Sanman award program page
    ├── NotFound.tsx               # 404 page
    └── SocialWork.tsx             # Social Work page

public/
├── career-gallery/                # Career counseling gallery images
├── commerce-gallery/              # Commerce class gallery images (14 × .jpeg)
├── gallery/                       # Social work gallery images
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── smiling-odisha-logo.jpeg
└── smilling_odisha_1.jpeg
```

---

## 🖥️ Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, about, services, testimonials, CTA |
| `/career` | Career Counseling | Career paths, booking form, photo gallery |
| `/social-work` | Social Work | Initiatives, volunteer form, photo gallery |
| `/commerce-education` | Commerce Class | Courses, enrollment form, photo gallery (14 images) |
| `/medha-sanman` | Medha Sanman | Award program objectives, eligibility, nomination form |
| `*` | 404 Not Found | Branded error page |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- npm or bun

### Install & Run

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:8080` (or `8081` if port is taken).

### Build for Production

```bash
npm run build
```

Output: `dist/` — ✅ 1,738 modules, ~444 KB JS (gzip: ~134 KB)

### Run Tests

```bash
npm test
```

---

## 📬 Form Submissions (Web3Forms)

All four contact/enrollment forms send submissions via [Web3Forms](https://web3forms.com).

1. Go to [web3forms.com](https://web3forms.com) and generate a free access key.
2. Create a `.env` file in the project root:

```env
VITE_WEB3FORMS_KEY=your_access_key_here
```

3. Restart the dev server. Form data will be emailed to the configured inbox.

> Without this key, forms display a success toast in dev mode but no email is sent.

---

## 🖼️ Adding Gallery Images

### Commerce Class Gallery
Drop `.jpeg` files into `public/commerce-gallery/`. See [`public/commerce-gallery/README.md`](public/commerce-gallery/README.md) for the full list of expected filenames and titles.

### Career Counseling Gallery
Drop `.jpeg` files into `public/career-gallery/`. See [`public/career-gallery/README.md`](public/career-gallery/README.md) for the current entries.

### Social Work Gallery
Update `src/data/galleryPhotos.ts` and drop images into `public/gallery/`.

---

## 🔍 SEO

- Per-page `<title>` tags via `useDocumentTitle` hook
- `public/sitemap.xml` — all routes listed with `<lastmod>`
- `public/robots.txt` — allows all bots, references sitemap
- Open Graph + Twitter Card meta tags in `index.html`
- `<link rel="canonical">` pointing to `https://smillingodisha.org/`

---

## 📞 Contact

- **Address:** Plot No. HIG-3/5, Extension, Near Bhubaneswar Drug House, C.S. Pur, Bhubaneswar - 751016
- **Phone:** +91 9040458544 / +91 9348578109
- **Email:** info@smillingodisha.org
- **Website:** [smillingodisha.org](https://smillingodisha.org)

---

## 🗺️ Pending / Roadmap

| Item | Status |
|------|--------|
| About Us page | ⏳ Needs founder/team content |
| Contact Us page | ⏳ Needs office hours, map embed |
| Dark mode toggle | ⏳ CSS defined, needs toggle UI |
| Odia language support | ⏳ Needs translations |
| Social media links | ⏳ Needs real URLs |
| Favicon & PWA manifest | ⏳ Deferred |
| Unused dependency cleanup | ⏳ Deferred |
