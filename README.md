# Lakecity Car Rental 🚗

A premium, high-end **self-drive & car rental** website built for **Lakecity Car Rental** (Pratap Nagar, Old RTO, Rajasthan).

Theme: **Light Beige + Black + Royal Blue** with glassmorphism, soft shadows and smooth Framer Motion animations.

## ✨ Features

- **Full-screen hero** with luxury highway background, floating badges & CTAs (Book / Call / WhatsApp)
- **Premium Fleet showcase** (visual centerpiece) — Scorpio S11, Swift Dzire CNG, Fronx CNG with hover-zoom & glass price overlays
- **Services** grid — Self Drive, Airport, Outstation, City Rides, Bike & Scooty
- **Bike & Scooty** image cards
- **Why Choose Us** with animated counters
- **Masonry gallery** of automotive photography
- **Auto-sliding testimonials** (Swiper) in glass cards
- **Booking form** (React Hook Form) → sends details to WhatsApp
- **Interactive Google Map card** in Contact + Footer
- **Floating sticky buttons**: WhatsApp, Call, Book Now, Scroll-to-top
- Mobile-first, fully responsive, no horizontal scroll
- SEO meta tags + JSON-LD structured data

## 🛠 Tech Stack

React (Vite) · Tailwind CSS · Framer Motion · Swiper · React Router DOM · React Hook Form · React Icons · Lucide React

## 🚀 Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the build
```

## 📁 Structure

```
src/
├── assets/        images, fleet, bikes, logos
├── components/    hero · fleet · services · gallery · testimonials · contact · common
├── data/          site, fleet, services, gallery, testimonials
├── hooks/         useCountUp, useScrollSpy
├── utils/         motion (Framer variants)
├── pages/         Home.jsx
├── App.jsx
└── main.jsx
```

## 🖼 Images

Fleet/gallery images currently use high-quality Unsplash URLs as placeholders.
Drop your own professional photos into `src/assets/fleet`, `src/assets/bikes`,
`src/assets/images` and update the `src` fields in `src/data/*.js`.

## 📞 Contact

- Shivin — +91 93510 36449
- Raj — +91 95094 85216
- Pratap Nagar, Old RTO, Rajasthan
