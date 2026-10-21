import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#hero', implemented: true },
  { id: 'about', label: 'About', href: '#about', implemented: true },
  { id: 'education', label: 'Education', href: '#education', implemented: true },
  { id: 'skills', label: 'Skills', href: '#skills', implemented: true },
  { id: 'projects', label: 'Projects', href: '#projects', implemented: false, stage: 'Stage 7' },
  { id: 'achievements', label: 'Achievements', href: '#achievements', implemented: false, stage: 'Stage 8' },
  { id: 'contact', label: 'Contact', href: '#contact', implemented: false, stage: 'Stage 9' },
];

export default function Navbar({ activeSection = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hudNotice, setHudNotice] = useState(null);

  // Monitor scroll for shadow intensification
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle nav click
  const handleNavClick = (e, item) => {
    if (item.implemented) {
      setMobileMenuOpen(false);
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      e.preventDefault();
      setMobileMenuOpen(false);
      setHudNotice(`[SYS]: ${item.label} section will be unlocked in ${item.stage}`);
      setTimeout(() => setHudNotice(null), 3500);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#060913]/90 backdrop-blur-md border-b border-[#00e5ff]/25 shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
            : 'bg-[#060913]/70 backdrop-blur-sm border-b border-[#00e5ff]/15'
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Top-Left Cyan Accent Notch Block (matching primary reference nav-brand-rect) */}
          <div
            className="absolute top-0 left-0 w-12 sm:w-16 h-full bg-[#00e5ff] hidden md:block"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)',
              opacity: 0.95,
            }}
            aria-hidden="true"
          />

          {/* Brand Identity */}
          <div className="flex items-center gap-3 md:pl-16 z-10">
            <a
              href="#hero"
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#00e5ff] rounded"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff] group-hover:scale-125 transition-transform" />
              <span className="font-orbitron font-extrabold text-base sm:text-xl tracking-[0.18em] text-white uppercase group-hover:text-glow-cyan transition-all">
                {PERSONAL_INFO.name}
              </span>
            </a>
            <span className="hidden lg:inline-block px-2 py-0.5 text-[10px] font-rajdhani font-semibold text-[#00e5ff] bg-[#00e5ff]/10 border border-[#00e5ff]/30 rounded tracking-widest uppercase">
              DEV // 2024-2028
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-2 lg:gap-3 z-10"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative font-rajdhani font-semibold text-xs lg:text-sm tracking-wider uppercase px-3 lg:px-4 py-1.5 rounded-[4px] border transition-all duration-200 select-none ${
                    isActive
                      ? 'text-white bg-[#00e5ff]/20 border-[#00e5ff] shadow-[0_0_12px_rgba(0,229,255,0.45)]'
                      : 'text-[#00e5ff] bg-[#00e5ff]/[0.05] border-[#00e5ff]/30 hover:bg-[#00e5ff]/[0.18] hover:border-[#00e5ff] hover:text-white hover:shadow-[0_0_12px_rgba(0,229,255,0.35)]'
                  } focus:outline-none focus:ring-1 focus:ring-[#00e5ff]`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center md:hidden z-10">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-[#00e5ff]/40 bg-[#00e5ff]/10 text-[#00e5ff] hover:text-white hover:border-[#00e5ff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff] transition-all"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating HUD Telemetry Notice (when clicking upcoming stage link) */}
      <AnimatePresence>
        {hudNotice && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-[#050f19]/95 border border-[#00e5ff] rounded shadow-[0_0_20px_rgba(0,229,255,0.4)] flex items-center gap-2 text-xs font-rajdhani tracking-wider text-[#00e5ff]"
          >
            <Terminal className="w-4 h-4 text-[#00e5ff]" />
            <span>{hudNotice}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed top-16 sm:top-20 left-0 w-full z-40 bg-[#060913]/98 backdrop-blur-xl border-b border-[#00e5ff]/30 md:hidden overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              <span className="font-orbitron text-[10px] tracking-widest text-[#00e5ff] uppercase mb-1">
                // NAVIGATION MODULE
              </span>
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`flex items-center justify-between px-4 py-3 rounded border font-rajdhani font-semibold text-sm tracking-wider uppercase transition-all ${
                      isActive
                        ? 'text-white bg-[#00e5ff]/20 border-[#00e5ff] shadow-[0_0_12px_rgba(0,229,255,0.4)]'
                        : 'text-[#00e5ff] bg-[#00e5ff]/[0.05] border-[#00e5ff]/20 hover:bg-[#00e5ff]/[0.15] hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {!item.implemented && (
                      <span className="text-[10px] text-[#94a3b8] font-normal tracking-normal lowercase">
                        ({item.stage})
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
