import React from 'react';

/**
 * SectionHeading: Futuristic section title with glowing cyan typography
 * and an extending horizontal separator line.
 */
export default function SectionHeading({
  title,
  subtitle,
  className = '',
}) {
  return (
    <div className={`flex flex-col gap-1 mb-8 ${className}`}>
      <div className="flex items-center gap-4">
        <h2 className="font-orbitron font-extrabold text-2xl md:text-3xl tracking-widest text-white uppercase text-glow-cyan">
          {title}
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00e5ff]/60 via-[#00e5ff]/20 to-transparent" />
      </div>
      {subtitle && (
        <span className="font-rajdhani font-semibold text-xs md:text-sm tracking-[0.2em] text-[#00e5ff] uppercase">
          {subtitle}
        </span>
      )}
    </div>
  );
}
