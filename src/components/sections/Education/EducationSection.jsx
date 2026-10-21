import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from "lucide-react";
import SectionHeading from "../../common/SectionHeading";
import { EDUCATION_DATA } from "../../../data/portfolioData";

const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: delay || 0 } },
});

const scaleIn = (delay) => ({
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: delay || 0 } },
});

const lineGrowV = (delay) => ({
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: delay || 0 } },
});

function DesktopCard({ entry, index }) {
  const isCurrent = entry.status === "current";
  return (
    <motion.div
      variants={fadeUp(index * 0.18 + 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={`relative rounded-[4px] border overflow-hidden transition-all duration-300 group ${
        isCurrent
          ? "border-[#00e5ff]/55 bg-[#050f19]/90 shadow-[0_0_22px_rgba(0,229,255,0.18),inset_0_0_30px_rgba(0,229,255,0.04)]"
          : "border-[#00e5ff]/22 bg-[#050f19]/80 hover:border-[#00e5ff]/45 hover:shadow-[0_0_15px_rgba(0,229,255,0.14)]"
      }`}
    >
      <span className="hud-corner hud-tl" aria-hidden="true" />
      <span className="hud-corner hud-tr" aria-hidden="true" />
      <span className="hud-corner hud-bl" aria-hidden="true" />
      <span className="hud-corner hud-br" aria-hidden="true" />
      <div className={`h-[2px] w-full ${isCurrent ? "bg-gradient-to-r from-[#00e5ff] via-[#00e5ff]/60 to-transparent" : "bg-gradient-to-r from-[#00e5ff]/35 via-[#00e5ff]/15 to-transparent"}`} />
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
          <span className="font-orbitron text-[9px] tracking-[0.22em] text-[#00e5ff]/55 uppercase">{entry.level}</span>
          {entry.badge && (
            <span className="px-2 py-0.5 text-[9px] font-orbitron tracking-widest uppercase rounded-sm border border-[#00e5ff]/50 text-[#00e5ff] bg-[#00e5ff]/10 shadow-[0_0_8px_rgba(0,229,255,0.25)]">
              {entry.badge}
            </span>
          )}
          {entry.status === "completed" && (
            <span className="px-2 py-0.5 text-[9px] font-orbitron tracking-widest uppercase rounded-sm border border-[#94a3b8]/30 text-[#64748b] bg-[#94a3b8]/5">
              COMPLETED
            </span>
          )}
        </div>
        <h3 className={`font-orbitron font-bold text-sm sm:text-base leading-snug mb-1 ${isCurrent ? "text-white text-glow-cyan-sm" : "text-[#e2e8f0]"}`}>
          {entry.institution}
        </h3>
        <p className="font-rajdhani text-sm text-[#94a3b8] tracking-wide mb-3">{entry.qualification}</p>
        <div className="h-px bg-gradient-to-r from-[#00e5ff]/25 via-[#00e5ff]/10 to-transparent mb-3" />
        <div className="flex flex-wrap gap-x-5 gap-y-2 items-center">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#00e5ff]/55" aria-hidden="true" />
            <span className="font-rajdhani text-sm text-[#94a3b8] tracking-wide">{entry.period}</span>
          </div>
          <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm border ${isCurrent ? "border-[#00e5ff]/40 bg-[#00e5ff]/10 shadow-[0_0_8px_rgba(0,229,255,0.2)]" : "border-[#00e5ff]/25 bg-[#00e5ff]/[0.06]"}`}>
            <Award className="w-3 h-3 text-[#00e5ff]" aria-hidden="true" />
            <span className={`font-orbitron text-[11px] font-bold tracking-wider ${isCurrent ? "text-[#00e5ff]" : "text-[#00e5ff]/75"}`}>{entry.scoreLabel}</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/0 to-transparent group-hover:from-[#00e5ff]/[0.03] pointer-events-none transition-all duration-500" />
    </motion.div>
  );
}

export default function EducationSection() {
  const entries = [...EDUCATION_DATA].reverse();

  return (
    <section id="education" aria-labelledby="education-heading" className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 65% 45% at 50% 55%, rgba(0,229,255,0.035) 0%, transparent 70%)" }} />
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-[2px] bg-[#00e5ff]" />
            <span className="font-orbitron text-[10px] tracking-[0.3em] text-[#00e5ff]/70 uppercase">02 // ACADEMIC RECORD</span>
          </div>
          <SectionHeading id="education-heading" title="Education" subtitle="Academic History & Institutional Background" />
        </motion.div>

        {/* Desktop: two-column grid with timeline nodes above */}
        <div className="hidden md:block">
          {/* Timeline track */}
          <div className="relative flex items-center justify-around mb-8 px-[12%]">
            {entries.map((entry, i) => {
              const isCurrent = entry.status === "current";
              return (
                <div key={entry.id} className="relative flex flex-col items-center flex-1">
                  <motion.div
                    variants={scaleIn(i * 0.18)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    className={`relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 ${
                      isCurrent
                        ? "border-[#00e5ff] bg-[#00e5ff]/15 shadow-[0_0_18px_rgba(0,229,255,0.55)]"
                        : "border-[#00e5ff]/45 bg-[#050f19]"
                    }`}
                  >
                    {isCurrent ? <GraduationCap className="w-5 h-5 text-[#00e5ff]" /> : <CheckCircle2 className="w-5 h-5 text-[#00e5ff]/60" />}
                    {isCurrent && <span className="absolute inset-0 rounded-full border border-[#00e5ff]/40 animate-ping" style={{ animationDuration: "2.4s" }} aria-hidden="true" />}
                  </motion.div>
                  <span className="font-orbitron text-[9px] text-[#00e5ff]/50 tracking-widest">{entry.period}</span>
                  {i < entries.length - 1 && (
                    <motion.div
                      variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.18 + 0.2 } } }}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-60px" }}
                      style={{ originX: 0 }}
                      className="absolute top-6 left-[calc(50%+28px)] right-[calc(-100%+28px)] h-px bg-gradient-to-r from-[#00e5ff]/55 to-[#00e5ff]/15 z-0"
                    />
                  )}
                </div>
              );
            })}
          </div>
          {/* Cards */}
          <div className="grid grid-cols-2 gap-6">
            {entries.map((entry, i) => (
              <DesktopCard key={entry.id} entry={entry} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden flex flex-col gap-0">
          {entries.map((entry, i) => {
            const isLast = i === entries.length - 1;
            const isCurrent = entry.status === "current";
            return (
              <div key={entry.id} className="flex flex-row gap-4">
                <div className="flex flex-col items-center">
                  <motion.div
                    variants={scaleIn(i * 0.18)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                      isCurrent ? "border-[#00e5ff] bg-[#00e5ff]/15 shadow-[0_0_16px_rgba(0,229,255,0.5)]" : "border-[#00e5ff]/45 bg-[#050f19]"
                    }`}
                  >
                    {isCurrent ? <GraduationCap className="w-4 h-4 text-[#00e5ff]" /> : <CheckCircle2 className="w-4 h-4 text-[#00e5ff]/60" />}
                  </motion.div>
                  {!isLast && (
                    <motion.div
                      variants={lineGrowV(i * 0.18 + 0.2)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-40px" }}
                      style={{ originY: 0 }}
                      className="flex-1 w-px bg-gradient-to-b from-[#00e5ff]/50 via-[#00e5ff]/25 to-[#00e5ff]/05 my-2"
                    />
                  )}
                </div>
                <div className={`flex-1 ${!isLast ? "pb-8" : ""}`}>
                  <motion.div
                    variants={fadeUp(i * 0.18 + 0.05)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    className={`relative rounded-[4px] border overflow-hidden ${
                      isCurrent ? "border-[#00e5ff]/55 bg-[#050f19]/90 shadow-[0_0_20px_rgba(0,229,255,0.18)]" : "border-[#00e5ff]/22 bg-[#050f19]/80"
                    }`}
                  >
                    <span className="hud-corner hud-tl" aria-hidden="true" />
                    <span className="hud-corner hud-tr" aria-hidden="true" />
                    <span className="hud-corner hud-bl" aria-hidden="true" />
                    <span className="hud-corner hud-br" aria-hidden="true" />
                    <div className={`h-[2px] w-full ${isCurrent ? "bg-gradient-to-r from-[#00e5ff] via-[#00e5ff]/60 to-transparent" : "bg-gradient-to-r from-[#00e5ff]/35 to-transparent"}`} />
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                        <span className="font-orbitron text-[9px] tracking-[0.2em] text-[#00e5ff]/55 uppercase">{entry.level}</span>
                        {entry.badge && <span className="px-2 py-0.5 text-[9px] font-orbitron tracking-widest uppercase rounded-sm border border-[#00e5ff]/50 text-[#00e5ff] bg-[#00e5ff]/10">{entry.badge}</span>}
                        {entry.status === "completed" && <span className="px-2 py-0.5 text-[9px] font-orbitron tracking-widest uppercase rounded-sm border border-[#94a3b8]/30 text-[#64748b]">COMPLETED</span>}
                      </div>
                      <h3 className={`font-orbitron font-bold text-sm leading-snug mb-1 ${isCurrent ? "text-white" : "text-[#e2e8f0]"}`}>{entry.institution}</h3>
                      <p className="font-rajdhani text-sm text-[#94a3b8] mb-3">{entry.qualification}</p>
                      <div className="h-px bg-gradient-to-r from-[#00e5ff]/25 to-transparent mb-3" />
                      <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-[#00e5ff]/55" aria-hidden="true" />
                          <span className="font-rajdhani text-sm text-[#94a3b8]">{entry.period}</span>
                        </div>
                        <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-sm border ${isCurrent ? "border-[#00e5ff]/40 bg-[#00e5ff]/10" : "border-[#00e5ff]/25 bg-[#00e5ff]/[0.06]"}`}>
                          <Award className="w-3 h-3 text-[#00e5ff]" aria-hidden="true" />
                          <span className="font-orbitron text-[11px] font-bold tracking-wider text-[#00e5ff]/80">{entry.scoreLabel}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom telemetry bar */}
        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 flex items-center gap-3 px-4 py-3 rounded-[4px] border border-[#00e5ff]/15 bg-[#050f19]/50"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#00e5ff]/60 flex-shrink-0" aria-hidden="true" />
          <span className="font-rajdhani text-xs tracking-[0.18em] text-[#00e5ff]/45 uppercase">ACADEMIC LOG // 2022-PRESENT // SYSTEM STATUS: ACTIVE</span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse shadow-[0_0_6px_#39ff14]" />
            <span className="font-rajdhani text-[11px] text-[#39ff14] tracking-widest uppercase">ON TRACK</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}