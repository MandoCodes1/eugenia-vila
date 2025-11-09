# Dr. Eugenia Vila Dental Clinic Website

Professional bilingual (Spanish/English) website for Dr. Eugenia Vila's dental clinic in Málaga, Spain.

## 🦷 About

This website showcases the services of Dr. Eugenia Vila, an award-winning dentist with over 30 years of experience specializing in dental implants, oral surgery, aligners, and cosmetic dentistry.

## ✨ Features

- **Bilingual Support**: Full Spanish and English versions with easy language switching
- **Responsive Design**: Mobile-first design optimized for all devices
- **Modern UI**: Clean, professional design inspired by leading dental clinic websites
- **60+ Patient Reviews**: Integrated display of verified 5-star reviews from Google and Trustpilot
- **WhatsApp Integration**: Direct booking via WhatsApp for convenient communication
- **Before/After Gallery**: Showcase of dental transformation cases
- **SEO Optimized**: Proper meta tags, structured data, and sitemap for search engines

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon)
- **Deployment**: GitHub Pages (or Netlify/Vercel)

## 📦 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── assets/
│   │   ├── images/      # Hero and gallery images
│   │   └── styles/      # Global styles
│   ├── components/
│   │   ├── common/      # Shared components (Header, Footer, LanguageSwitcher)
│   │   ├── ui/          # UI components
│   │   └── widgets/     # Page sections (Hero, Features, Reviews, etc.)
│   ├── i18n/            # Translation files (es.json, en.json)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   │   ├── en/          # English pages
│   │   ├── index.astro  # Spanish homepage
│   │   ├── servicios.astro
│   │   ├── resenas.astro
│   │   ├── galeria.astro
│   │   ├── sobre-mi.astro
│   │   └── contacto.astro
│   ├── utils/           # Utility functions
│   │   ├── i18n.ts      # Internationalization utilities
│   │   └── reviews.ts   # Review data processing
│   ├── config.yaml      # Site configuration
│   └── navigation.ts    # Navigation configuration
├── src/reviews-data.ts  # Patient reviews data
└── tailwind.config.js   # Tailwind configuration
```

## 🛠️ Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🌍 Internationalization

The website supports Spanish (default) and English:

- Spanish pages: `/` (root)
- English pages: `/en/*`

The language switcher in the header allows users to toggle between languages.

## 📱 Contact Integration

The website uses WhatsApp as the primary contact method:

- Spanish: `https://wa.me/34679975580?text=Hola,%20me%20gustaría%20reservar%20una%20cita`
- English: `https://wa.me/34679975580?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment`

## 🎨 Color Scheme

Australian Open inspired color palette:

- Primary Blue: `#0072BB`
- Light Blue: `#0094D3`
- Dark Blue: `#003366`
- Accent colors for highlights and CTAs

## 📊 Analytics

Google Analytics can be configured in `src/config.yaml`:

```yaml
analytics:
  vendors:
    googleAnalytics:
      id: "G-XXXXXXXXXX" # Add your GA4 ID here
```

## 🚀 Deployment

### GitHub Pages

1. Update `site` URL in `src/config.yaml`
2. Build the project: `npm run build`
3. Deploy the `dist` folder to GitHub Pages

### Netlify/Vercel

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📝 Content Updates

### Adding Reviews

Edit `src/reviews-data.ts` to add new patient reviews.

### Adding Before/After Cases

1. Add images to `src/assets/images/`
2. Update the `cases` array in `src/pages/galeria.astro` and `src/pages/en/gallery.astro`

### Updating Services

Modify `src/pages/servicios.astro` and `src/pages/en/services.astro`

## 👩‍⚕️ About Dr. Eugenia Vila

Dr. Eugenia Vila García is a highly qualified dentist with over 30 years of clinical experience:

- Master's in Dental Implants (UIC Barcelona)
- Master's in Aesthetic Medicine (University of Córdoba)
- Dentist of the Year 2024
- GDC Registration: 287705
- Over 20,000 patients treated
- 60+ five-star reviews

## 📄 License

Copyright © 2025 Dr. Eugenia Vila. All rights reserved.

## 🤝 Support

For website issues or updates, contact: [developer contact info]

For clinic appointments: WhatsApp +34 679 975 580
