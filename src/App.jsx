import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import StarfieldCanvas from './components/common/StarfieldCanvas';
import HeroSection from './components/sections/Hero/HeroSection';
import { PERSONAL_INFO } from './data/portfolioData';
import { Terminal, Shield, Cpu } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // In Stage 3, #hero is the primary section
      const hero = document.getElementById('hero');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#060913] text-[#e2e8f0] font-rajdhani selection:bg-[#00e5ff]/30 selection:text-white overflow-x-hidden">
      {/* 1. Global Background Starfield */}
      <StarfieldCanvas starCount={160} />

      {/* 2. Fixed Futuristic Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* 3. Hero Section (Stage 3 Focus) */}
      <main className="relative z-10 w-full">
        <HeroSection />
      </main>

      {/* 4. Telemetry Footer */}
      <footer className="relative z-10 w-full border-t border-[#00e5ff]/15 bg-[#060913]/80 backdrop-blur-md py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-rajdhani text-[#94a3b8] tracking-wider uppercase">
          <div className="flex items-center gap-2 text-[#00e5ff]">
            <Terminal className="w-3.5 h-3.5" />
            <span>PRATIK SHEWALE // STAGE 3 NAV & HERO VERIFIED</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>VJTI B.TECH COMPUTER ENGINEERING (2024–2028)</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-[#39ff14] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse" />
              SYSTEM OPERATIONAL
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
