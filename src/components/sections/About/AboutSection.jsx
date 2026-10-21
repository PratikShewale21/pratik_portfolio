import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Cpu,
  User,
  ChevronRight,
  Terminal,
} from 'lucide-react';
import HudPanel from '../../common/HudPanel';
import SectionHeading from '../../common/SectionHeading';
import { ABOUT_DATA } from '../../../data/portfolioData';

/* Animation Variants */
const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: delay ?? 0 },
  }),
};

const CARD_ICONS = [GraduationCap, Cpu, User];

function InfoCard({ card, index }) {
  const Icon = CARD_ICONS[index] ?? User;
  return (
    <motion.div
      custom={index * 0.12}
      variants={FADE_UP}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className="group relative bg-[#050f19]/80 backdrop-blur-sm border border-[#00e5ff]/22 rounded-[4px] p-4 transition-all duration-300 hover:border-[#00e5ff]/55 hover:shadow-[0_0_18px_rgba(0,229,255,0.18)] overflow-hidden"
    >
      <span className="hud-corner hud-tl group-hover:border-[#00e5ff] transition-colors" aria-hidden="true" />
      <span className="hud-corner hud-tr group-hover:border-[#00e5ff] transition-colors" aria-hidden="true" />
      <span className="hud-corner hud-bl group-hover:border-[#00e5ff] transition-colors" aria-hidden="true" />
      <span className="hud-corner hud-br group-hover:border-[#00e5ff] transition-colors" aria-hidden="true" />
      <span className="absolute top-3 right-3 font-orbitron text-[10px] text-[#00e5ff]/40 tracking-widest select-none">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-7 h-7 rounded-sm bg-[#00e5ff]/12 border border-[#00e5ff]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00e5ff]/20 transition-colors">
          <Icon className="w-3.5 h-3.5 text-[#00e5ff]" />
        </div>
        <span className="font-orbitron text-[10px] font-bold tracking-[0.18em] text-[#00e5ff] uppercase">
          {card.label}
        </span>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-[#00e5ff]/40 via-[#00e5ff]/15 to-transparent mb-3" />
      <ul className="flex flex-col gap-1.5" role="list">
        {card.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <ChevronRight className="w-3 h-3 text-[#00e5ff]/60 mt-[3px] flex-shrink-0" aria-hidden="true" />
            <span className="font-rajdhani text-sm text-[#94a3b8] leading-snug">{item}</span>
          </li>
        ))}
      </ul>
      <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/0 via-transparent to-[#00e5ff]/0 group-hover:from-[#00e5ff]/[0.03] group-hover:to-[#149cea]/[0.04] pointer-events-none transition-all duration-500" />
    </motion.div>
  );
}

function BiographyPanel() {
  return (
    <motion.div
      custom={0.1}
      variants={FADE_UP}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className="h-full"
    >
      <HudPanel withScanline className="h-full flex flex-col gap-0 p-0 overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-3.5 border-b border-[#00e5ff]/18 bg-[#00e5ff]/[0.04]">
          <div className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff] animate-pulse" />
          <span className="font-orbitron text-[10px] font-bold tracking-[0.2em] text-[#00e5ff] uppercase">
            SYSTEM PROFILE
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00e5ff]/35 to-transparent" />
          <span className="font-rajdhani text-[10px] text-[#00e5ff]/40 tracking-widest">ID: PSW-2024</span>
        </div>
        <div className="px-5 pt-5 pb-2 flex items-center gap-2">
          <div className="w-4 h-[2px] bg-[#00e5ff]" />
          <div className="w-2 h-[2px] bg-[#00e5ff]/50" />
          <span className="font-orbitron text-[9px] tracking-[0.25em] text-[#00e5ff]/50 uppercase">
            PROFILE OVERVIEW
          </span>
        </div>
        <div className="flex-1 px-5 py-2 flex flex-col gap-4">
          {ABOUT_DATA.biography.map((para, i) => (
            <p key={i} className="font-rajdhani text-[15px] sm:text-base text-[#94a3b8] leading-[1.8] tracking-wide">
              {para}
            </p>
          ))}
        </div>
        <div className="mx-5 mt-2 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/30 to-transparent" />
        <div className="px-5 py-4 flex items-center gap-3">
          <Terminal className="w-3.5 h-3.5 text-[#00e5ff]/60 flex-shrink-0" aria-hidden="true" />
          <span className="font-rajdhani text-xs tracking-[0.16em] text-[#00e5ff]/55 uppercase">
            {ABOUT_DATA.terminalStatus}
          </span>
          <span className="ml-auto w-2 h-2 rounded-full bg-[#39ff14] shadow-[0_0_8px_#39ff14] animate-pulse" aria-label="Active" />
        </div>
      </HudPanel>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0,229,255,0.04) 0%, transparent 70%)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={FADE_UP}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-[2px] bg-[#00e5ff]" />
            <span className="font-orbitron text-[10px] tracking-[0.3em] text-[#00e5ff]/70 uppercase">
              01 // PERSONNEL PROFILE
            </span>
          </div>
          <SectionHeading
            title="About Me"
            subtitle="Operator Identification & Background Brief"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-5 lg:gap-6 items-stretch">
          <div className="flex flex-col gap-4">
            {ABOUT_DATA.cards.map((card, index) => (
              <InfoCard key={card.id} card={card} index={index} />
            ))}
          </div>
          <BiographyPanel />
        </div>
      </div>
    </section>
  );
}
