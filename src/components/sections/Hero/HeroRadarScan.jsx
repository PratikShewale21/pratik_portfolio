import React from 'react';
import profilePhoto from '../../../assets/profile.jpg';

/**
 * HeroRadarScan: Cyberpunk concentric HUD scanner orbiting circular profile photograph.
 * - Multi-layer concentric SVG rings rotating at varying speeds and directions.
 * - Technical radar ticks, dashed arcs, crosshair lines, and sweeping beam.
 * - Bounded photo frame with thin cyan border and inner/outer glow.
 * - HUD readouts: "SCAN COMPLETE" and "ID VERIFIED".
 */
export default function HeroRadarScan({ imageSrc = profilePhoto }) {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-square mx-auto select-none">
      {/* Top HUD Telemetry Readout */}
      <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
        <span className="font-orbitron text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#00e5ff] uppercase flex items-center gap-1.5 animate-hud-blink">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_6px_#00e5ff]" />
          SCAN COMPLETE
        </span>
      </div>

      {/* SVG Layer: Outer Ticks & Concentric Rings */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none animate-[spin_35s_linear_infinite]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer Fine Ring */}
        <circle
          cx="200"
          cy="200"
          r="192"
          stroke="#00e5ff"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />

        {/* Outer Radar Angle Ticks */}
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i * 10 * Math.PI) / 180;
          const isMajor = i % 3 === 0;
          const r1 = isMajor ? 182 : 186;
          const r2 = 192;
          const x1 = 200 + r1 * Math.cos(angle);
          const y1 = 200 + r1 * Math.sin(angle);
          const x2 = 200 + r2 * Math.cos(angle);
          const y2 = 200 + r2 * Math.sin(angle);

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#00e5ff"
              strokeWidth={isMajor ? '1.8' : '1'}
              strokeOpacity={isMajor ? '0.75' : '0.35'}
            />
          );
        })}
      </svg>

      {/* SVG Layer: Mid Dashed Orbit Ring (Counter-Clockwise) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none animate-[spin_25s_linear_infinite_reverse]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="200"
          r="165"
          stroke="#00e5ff"
          strokeWidth="1.5"
          strokeDasharray="10 8"
          strokeOpacity="0.55"
        />
        {/* Cardinal Accent Points */}
        <circle cx="200" cy="35" r="3" fill="#00e5ff" />
        <circle cx="365" cy="200" r="3" fill="#00e5ff" />
        <circle cx="200" cy="365" r="3" fill="#00e5ff" />
        <circle cx="35" cy="200" r="3" fill="#00e5ff" />
      </svg>

      {/* SVG Layer: Inner Segmented Arcs (Clockwise) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none animate-[spin_18s_linear_infinite]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="200"
          r="142"
          stroke="#149cea"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="60 40 90 30"
          strokeOpacity="0.65"
        />
      </svg>

      {/* Radar Crosshairs */}
      <div className="absolute inset-0 pointer-events-none opacity-25" aria-hidden="true">
        <div className="absolute top-1/2 left-[18%] right-[18%] h-[1px] bg-[#00e5ff]" />
        <div className="absolute left-1/2 top-[18%] bottom-[18%] w-[1px] bg-[#00e5ff]" />
      </div>

      {/* Rotating Radar Sweep Line */}
      <div
        className="absolute top-1/2 left-1/2 w-[45%] h-[2px] -translate-y-1/2 origin-left pointer-events-none z-10 animate-[spin_4s_linear_infinite]"
        style={{
          background: 'linear-gradient(90deg, #00e5ff, rgba(0, 229, 255, 0.4) 60%, transparent)',
        }}
        aria-hidden="true"
      />

      {/* Circular Profile Photo Frame */}
      <div className="relative z-10 w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] lg:w-[250px] lg:h-[250px] rounded-full p-1.5 border-2 border-[#00e5ff] shadow-[0_0_24px_rgba(0,229,255,0.45),inset_0_0_25px_rgba(0,229,255,0.15)] overflow-hidden bg-[#0a1628]">
        <img
          src={imageSrc}
          alt="Pratik Shewale Profile Photograph"
          className="w-full h-full object-cover rounded-full select-none"
          loading="eager"
        />
        {/* Subtle photo vignette */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_0_15px_rgba(6,9,19,0.8)]"
          aria-hidden="true"
        />
      </div>

      {/* Bottom HUD Telemetry Readout */}
      <div className="absolute -bottom-7 sm:-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
        <span className="font-orbitron text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#00e5ff] uppercase flex items-center gap-1.5 animate-hud-blink">
          <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] shadow-[0_0_6px_#39ff14]" />
          ID VERIFIED
        </span>
      </div>
    </div>
  );
}
