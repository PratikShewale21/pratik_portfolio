import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Layers, Wrench, Brain, Link2,
  ChevronLeft, ChevronRight, Cpu,
} from "lucide-react";
import SectionHeading from "../../common/SectionHeading";
import { SKILLS_DATA } from "../../../data/portfolioData";

/* ── Icon map ─────────────────────────────────────────────── */
const ICON_MAP = {
  code:   Code2,
  layers: Layers,
  wrench: Wrench,
  brain:  Brain,
  link:   Link2,
};

/* ── Animation variants ───────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  },
});

/* ── Individual skill pill ────────────────────────────────── */
function SkillPill({ name, isActive }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-sm text-xs font-rajdhani font-semibold tracking-wider border transition-all duration-300 ${
        isActive
          ? "border-[#00e5ff]/55 bg-[#00e5ff]/12 text-[#e2e8f0]"
          : "border-[#00e5ff]/20 bg-[#00e5ff]/[0.05] text-[#94a3b8]"
      }`}
    >
      {name}
    </span>
  );
}

/* ── Carousel card ────────────────────────────────────────── */
function SkillCard({ card, position, onClick }) {
  const Icon = ICON_MAP[card.icon] ?? Cpu;
  const isActive = position === 0;
  const isAdjacent = Math.abs(position) === 1;

  const scale = isActive ? 1 : isAdjacent ? 0.88 : 0.78;
  const opacity = isActive ? 1 : isAdjacent ? 0.65 : 0.35;
  const zIndex = isActive ? 10 : isAdjacent ? 5 : 1;

  return (
    <motion.div
      animate={{ scale, opacity }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onClick={!isActive ? onClick : undefined}
      style={{ zIndex }}
      className={`relative flex-shrink-0 w-72 sm:w-80 md:w-96 rounded-[4px] border overflow-hidden transition-shadow duration-300 ${
        isActive
          ? "border-[#00e5ff]/65 bg-[#050f19]/95 shadow-[0_0_30px_rgba(0,229,255,0.25),inset_0_0_40px_rgba(0,229,255,0.05)] cursor-default"
          : "border-[#00e5ff]/20 bg-[#050f19]/75 cursor-pointer hover:border-[#00e5ff]/40"
      }`}
      aria-hidden={!isActive}
    >
      {/* HUD corners */}
      <span className="hud-corner hud-tl" aria-hidden="true" />
      <span className="hud-corner hud-tr" aria-hidden="true" />
      <span className="hud-corner hud-bl" aria-hidden="true" />
      <span className="hud-corner hud-br" aria-hidden="true" />

      {/* Top accent bar */}
      <div className={`h-[2px] w-full ${isActive ? "bg-gradient-to-r from-[#00e5ff] via-[#00e5ff]/60 to-transparent" : "bg-gradient-to-r from-[#00e5ff]/30 to-transparent"}`} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-sm flex items-center justify-center border flex-shrink-0 ${isActive ? "border-[#00e5ff]/50 bg-[#00e5ff]/15" : "border-[#00e5ff]/25 bg-[#00e5ff]/[0.06]"}`}>
              <Icon className={`w-4.5 h-4.5 ${isActive ? "text-[#00e5ff]" : "text-[#00e5ff]/60"}`} size={18} />
            </div>
            <div>
              <span className="font-orbitron text-[9px] tracking-[0.2em] text-[#00e5ff]/55 uppercase">
                {card.index} / 0{SKILLS_DATA.length}
              </span>
              <h3 className={`font-orbitron font-bold text-xs sm:text-sm tracking-wider leading-tight mt-0.5 ${isActive ? "text-white" : "text-[#94a3b8]"}`}>
                {card.category}
              </h3>
            </div>
          </div>
          {isActive && (
            <div className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse shadow-[0_0_8px_#00e5ff]" />
          )}
        </div>

        {/* Divider */}
        <div className={`h-px mb-4 bg-gradient-to-r ${isActive ? "from-[#00e5ff]/40 via-[#00e5ff]/15 to-transparent" : "from-[#00e5ff]/15 to-transparent"}`} />

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2">
          {card.items.map((item) => (
            <SkillPill key={item} name={item} isActive={isActive} />
          ))}
        </div>

        {/* Bottom count */}
        {isActive && (
          <div className="mt-4 flex items-center gap-2">
            <span className="font-orbitron text-[9px] text-[#00e5ff]/45 tracking-widest">
              {card.items.length} TECHNOLOGIES LOADED
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Main section ─────────────────────────────────────────── */
export default function SkillsSection() {
  const [active, setActive] = useState(0);
  const total = SKILLS_DATA.length;

  // Touch / drag state
  const touchStart = useRef(null);
  const containerRef = useRef(null);

  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);
  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);

  // Keyboard navigation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Touch handlers
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
    touchStart.current = null;
  };

  // Build visible slot list: center=active, spread outward
  const getPosition = (idx) => {
    let pos = idx - active;
    if (pos > total / 2) pos -= total;
    if (pos < -total / 2) pos += total;
    return pos;
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative w-full py-20 md:py-28 overflow-hidden"
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(0,229,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-[2px] bg-[#00e5ff]" />
            <span className="font-orbitron text-[10px] tracking-[0.3em] text-[#00e5ff]/70 uppercase">
              03 // TECHNICAL ARSENAL
            </span>
          </div>
          <SectionHeading
            id="skills-heading"
            title="Skills & Technologies"
            subtitle="Capabilities & Toolchain Inventory"
          />
        </motion.div>

        {/* Carousel viewport */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div
            ref={containerRef}
            tabIndex={0}
            role="region"
            aria-label="Skills carousel — use arrow keys to navigate"
            className="relative focus:outline-none"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Card track */}
            <div className="relative flex items-center justify-center gap-4 sm:gap-6 overflow-hidden py-6 px-4">
              {SKILLS_DATA.map((card, idx) => {
                const pos = getPosition(idx);
                const visible = Math.abs(pos) <= 2;
                if (!visible) return null;
                return (
                  <SkillCard
                    key={card.id}
                    card={card}
                    position={pos}
                    onClick={() => setActive(idx)}
                  />
                );
              })}
            </div>

            {/* Left arrow */}
            <button
              onClick={prev}
              aria-label="Previous skill category"
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-sm border border-[#00e5ff]/35 bg-[#050f19]/90 flex items-center justify-center text-[#00e5ff] hover:border-[#00e5ff] hover:bg-[#00e5ff]/15 hover:shadow-[0_0_12px_rgba(0,229,255,0.4)] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#00e5ff]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right arrow */}
            <button
              onClick={next}
              aria-label="Next skill category"
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-sm border border-[#00e5ff]/35 bg-[#050f19]/90 flex items-center justify-center text-[#00e5ff] hover:border-[#00e5ff] hover:bg-[#00e5ff]/15 hover:shadow-[0_0_12px_rgba(0,229,255,0.4)] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#00e5ff]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-2.5 mt-6" role="tablist" aria-label="Select skill category">
            {SKILLS_DATA.map((card, idx) => (
              <button
                key={card.id}
                role="tab"
                aria-selected={active === idx}
                aria-label={`Go to ${card.category}`}
                onClick={() => setActive(idx)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#00e5ff] ${
                  active === idx
                    ? "w-6 h-2 bg-[#00e5ff] shadow-[0_0_8px_rgba(0,229,255,0.7)]"
                    : "w-2 h-2 bg-[#00e5ff]/30 hover:bg-[#00e5ff]/60"
                }`}
              />
            ))}
          </div>

          {/* Active card label */}
          <div className="flex items-center justify-center mt-4 gap-2">
            <span className="font-orbitron text-[10px] tracking-[0.25em] text-[#00e5ff]/55 uppercase">
              {SKILLS_DATA[active].category}
            </span>
          </div>
        </motion.div>

        {/* Bottom telemetry */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 flex items-center gap-3 px-4 py-3 rounded-[4px] border border-[#00e5ff]/15 bg-[#050f19]/50"
        >
          <Cpu className="w-3.5 h-3.5 text-[#00e5ff]/60 flex-shrink-0" aria-hidden="true" />
          <span className="font-rajdhani text-xs tracking-[0.18em] text-[#00e5ff]/45 uppercase">
            TECHNICAL ARSENAL // {SKILLS_DATA.reduce((a, c) => a + c.items.length, 0)} TECHNOLOGIES CATALOGUED
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse shadow-[0_0_6px_#39ff14]" />
            <span className="font-rajdhani text-[11px] text-[#39ff14] tracking-widest uppercase">ACTIVE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}