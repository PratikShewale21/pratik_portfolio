import React from 'react';

/**
 * HudPanel: Primary sci-fi container component.
 * - Semi-transparent dark navy backdrop with blur.
 * - Illuminated 4-corner brackets.
 * - Cyan border with soft glowing drop-shadow.
 * - Optional animated scanline.
 */
export default function HudPanel({
  children,
  className = '',
  withScanline = false,
  withCorners = true,
  glow = true,
  onClick,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      onClick={onClick}
      className={`relative bg-[#050f19]/85 backdrop-blur-md border border-[#00e5ff]/25 rounded-[4px] p-6 transition-all duration-300 ${
        glow ? 'shadow-[0_0_15px_rgba(0,229,255,0.2),inset_0_0_20px_rgba(0,229,255,0.03)]' : ''
      } ${className}`}
      {...props}
    >
      {/* 4 HUD Corner Brackets */}
      {withCorners && (
        <>
          <span className="hud-corner hud-tl" aria-hidden="true" />
          <span className="hud-corner hud-tr" aria-hidden="true" />
          <span className="hud-corner hud-bl" aria-hidden="true" />
          <span className="hud-corner hud-br" aria-hidden="true" />
        </>
      )}

      {/* Optional vertical scanline sweep */}
      {withScanline && <div className="info-scanline" aria-hidden="true" />}

      {/* Panel Content */}
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
