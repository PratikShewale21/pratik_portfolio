/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hud: {
          bg: '#060913',
          dark: '#090a0f',
          navy: '#1b2735',
          panel: 'rgba(5, 15, 25, 0.82)',
          'panel-solid': '#071220',
          cyan: '#00e5ff',
          'cyan-glow': 'rgba(0, 229, 255, 0.6)',
          'cyan-dim': 'rgba(0, 229, 255, 0.15)',
          'cyan-border': 'rgba(0, 229, 255, 0.32)',
          blue: '#149cea',
          green: '#39ff14',
          muted: '#94a3b8',
          text: '#ffffff',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'hud-cyan': '0 0 14px rgba(0, 229, 255, 0.38), 0 0 32px rgba(0, 229, 255, 0.12)',
        'hud-cyan-lg': '0 0 25px rgba(0, 229, 255, 0.55), 0 0 60px rgba(0, 229, 255, 0.2)',
        'hud-btn': '0 0 12px rgba(0, 229, 255, 0.45)',
        'hud-inner': 'inset 0 0 20px rgba(0, 229, 255, 0.08)',
      },
      keyframes: {
        scanDown: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        pulseSlide: {
          '0%': { left: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { left: 'calc(100% - 8px)', opacity: '0' },
        },
        hudBlink: {
          '0%, 90%': { opacity: '0.95' },
          '91%, 100%': { opacity: '0.2' },
        },
      },
      animation: {
        'scan-down': 'scanDown 3s linear infinite',
        'pulse-slide': 'pulseSlide 2s ease-in-out infinite',
        'hud-blink': 'hudBlink 2s steps(1) infinite',
      },
    },
  },
  plugins: [],
}
