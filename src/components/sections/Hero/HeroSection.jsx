import React from 'react';
import HeroInfoCard from './HeroInfoCard';
import HeroRadarScan from './HeroRadarScan';
import HeroConnector from './HeroConnector';

/**
 * HeroSection: Main stage 3 hero composition.
 * - Desktop: 2-column layout (intro panel left, radar scanner right) with conduit connector.
 * - Tablet: Stacked/compact layout with reduced gap.
 * - Mobile: Responsive vertical stack, no horizontal overflow, comfortable tap targets.
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen w-full flex items-center justify-center pt-24 pb-16 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Hero Introduction"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-12">
        {/* Left Column: Introductory HUD Panel */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-start">
          <HeroInfoCard />
        </div>

        {/* Central Conduit Connector (visible on wide screens) */}
        <HeroConnector />

        {/* Right Column: Circular Profile Scanner */}
        <div className="w-full lg:w-auto flex justify-center items-center py-4 lg:py-0">
          <HeroRadarScan />
        </div>
      </div>
    </section>
  );
}
