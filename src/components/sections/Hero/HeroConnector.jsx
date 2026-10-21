import React from 'react';

/**
 * HeroConnector: Horizontal sci-fi connection conduit with traveling light pulse
 * bridging the left introductory panel and the right scanner.
 */
export default function HeroConnector() {
  return (
    <div
      className="hidden xl:flex relative flex-1 min-w-[40px] max-w-[120px] items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      {/* Central Cyan Trace Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-[#00e5ff] via-[#00e5ff]/20 to-[#00e5ff] opacity-60 shadow-[0_0_8px_rgba(0,229,255,0.4)]" />

      {/* Traveling Data Pulse Dot */}
      <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_3px_#00e5ff] animate-pulse-slide" />
    </div>
  );
}
