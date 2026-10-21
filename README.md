# Pratik Shewale — Cyberpunk Developer Portfolio

A futuristic, sci-fi HUD-inspired personal developer portfolio built from scratch with **React 19**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ⚡ Tech Stack

- **Core:** React 19, Vite
- **Styling:** Tailwind CSS, PostCSS, Custom HUD Design System
- **Motion & Interactions:** Framer Motion, CSS Keyframe Animations
- **Icons:** Lucide React, Custom SVG Brand Vectors
- **Typography:** Orbitron (Headings), Rajdhani (Interface Labels), Inter (Body)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

```bash
# Clone the repository
git clone https://github.com/PratikShewale21/pratik_portfolio.git

# Navigate to project directory
cd pratik_portfolio

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 🛠️ Project Structure

```
src/
├── assets/                  # Profile photograph and asset graphics
├── components/
│   ├── common/
│   │   ├── HudButton.jsx         # Outlined cyan HUD button with hover glow
│   │   ├── HudPanel.jsx          # Reusable panel with corner brackets & scanlines
│   │   ├── ResumeModal.jsx       # Document telemetry request dialog
│   │   ├── SectionHeading.jsx    # Neon glowing titles with extending cyan rule
│   │   └── StarfieldCanvas.jsx   # 60fps lightweight canvas particle starfield
│   ├── layout/
│   │   └── Navbar.jsx            # Fixed top bar with brand notch and mobile drawer
│   └── sections/
│       └── Hero/
│           ├── HeroConnector.jsx # Animated horizontal conduit with traveling light pulse
│           ├── HeroInfoCard.jsx  # Left introductory HUD panel with verified social links
│           ├── HeroRadarScan.jsx # Right concentric SVG rotating radar scanner
│           └── HeroSection.jsx   # Responsive 2-column hero orchestrator
├── data/
│   └── portfolioData.js     # Single source of truth for profile, education, and links
├── styles/
└── index.css                # Global design tokens, scanlines, and reduced-motion rules
```

---

## 👤 Author

**Pratik Shewale**
- **Education:** B.Tech in Computer Engineering, Veermata Jijabai Technological Institute (VJTI), Mumbai (2024–2028)
- **LinkedIn:** [pratik-shewale-829194338](https://www.linkedin.com/in/pratik-shewale-829194338)
- **GitHub:** [@PratikShewale21](https://github.com/PratikShewale21)
- **LeetCode:** [@_pratikshewale](https://leetcode.com/u/_pratikshewale/)
- **Instagram:** [@pat.trickkk_](https://www.instagram.com/pat.trickkk_?srtk=MXRkbWFoMnd0Zm51NQ==)
- **Email:** [pratikshewale21@gmail.com](mailto:pratikshewale21@gmail.com)

---

## 📄 License

This project is licensed under the MIT License.
