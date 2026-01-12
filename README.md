# Portfolio Sample Websites

This repository contains 5 unique, single-page websites showcasing different design styles and interactive elements. Each website is ready for deployment to Vercel.

## Websites Overview

### 1. **Website 1: Minimalist Design Studio** (`website-1-minimalist/`)
- **Theme**: Modernist/Minimalist - "The Gospel of 'Less'"
- **Design**: Clean, functional design inspired by Braun SK 4 and Barcelona Chair
- **Features**: 
  - Animated product showcases
  - Interactive philosophy cards
  - Smooth scroll animations
  - Parallax effects

### 2. **Website 2: Memphis Maximalist** (`website-2-memphis-maximalist/`)
- **Theme**: "Less Is A Bore" - Memphis Group maximalist design
- **Design**: Vibrant colors, geometric shapes, bold typography
- **Features**:
  - Animated background shapes
  - Interactive feature cards
  - Pattern showcases (checkerboard, grid)
  - Dynamic color interactions

### 3. **Website 3: Memphis Riot** (`website-3-memphis-riot/`)
- **Theme**: "Milan, 1981: A Riot Is Born"
- **Design**: Deconstructed furniture, yellow/black background
- **Features**:
  - Interactive furniture piece
  - Clickable drawers
  - Rotating elements
  - Philosophy cards with hover effects

### 4. **Website 4: Dark Memphis** (`website-4-dark-memphis/`)
- **Theme**: "The Goal Was Reaction"
- **Design**: Dark gradient background with Memphis bowl centerpiece
- **Features**:
  - Animated spotlights
  - Interactive reaction cards
  - Rotating bowl on click
  - Parallax background shapes

### 5. **Website 5: Modern Creative Studio** (`website-5-modern-creative/`)
- **Theme**: Original modern tech/creative agency design
- **Design**: Clean, modern with gradient backgrounds
- **Features**:
  - Floating interactive cards
  - Animated statistics counter
  - Service cards with hover effects
  - Smooth scroll animations

## Deployment to Vercel

Each website is a standalone project that can be deployed independently to Vercel.

### Option 1: Deploy Each Website Separately

1. Navigate to each website folder
2. Connect to Vercel via GitHub
3. Deploy each as a separate project

### Option 2: Deploy All as Monorepo

1. Create a `vercel.json` in the root directory
2. Configure multiple projects pointing to each website folder

## File Structure

```
.
├── website-1-minimalist/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── website-2-memphis-maximalist/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── website-3-memphis-riot/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── website-4-dark-memphis/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── website-5-modern-creative/
    ├── index.html
    ├── styles.css
    └── script.js
```

## Features Across All Websites

- ✅ Single-page design (no multiple pages)
- ✅ Interactive elements
- ✅ Moving/animated components
- ✅ Great hero sections
- ✅ "Made by kartik" footer
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Modern, non-generic designs

## Local Development

To view any website locally:

1. Navigate to the website folder
2. Open `index.html` in a browser, or
3. Use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

## Browser Support

All websites are built with modern CSS and JavaScript, supporting:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All websites are self-contained (no external dependencies)
- Images referenced in designs are created using CSS
- All animations use CSS and vanilla JavaScript
- No build process required - ready to deploy as-is

---

**Made by kartik**
