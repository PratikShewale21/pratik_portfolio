import { useEffect, useRef } from 'react';

/**
 * StarfieldCanvas: High-performance, lightweight starfield particle background.
 * - Sits behind all UI content with pointer-events: none.
 * - Respects prefers-reduced-motion media query.
 * - Minimal CPU/GPU overhead using requestAnimationFrame and direct canvas drawing.
 */
export default function StarfieldCanvas({ starCount = 160 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Generate stars
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.7 + 0.3,
      alphaSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      speedY: Math.random() * 0.15 + 0.05,
      speedX: (Math.random() - 0.5) * 0.05,
      color: Math.random() > 0.85 ? '#00e5ff' : '#ffffff',
    }));

    // Handle viewport resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          // Subtle drifting movement
          star.y -= star.speedY;
          star.x += star.speedX;

          // Wrap edges
          if (star.y < 0) star.y = height;
          if (star.y > height) star.y = 0;
          if (star.x < 0) star.x = width;
          if (star.x > width) star.x = 0;

          // Twinkle effect
          star.alpha += star.alphaSpeed;
          if (star.alpha > 0.95 || star.alpha < 0.25) {
            star.alphaSpeed = -star.alphaSpeed;
          }
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.shadowBlur = star.size > 1.2 ? 4 : 0;
        ctx.shadowColor = star.color === '#00e5ff' ? 'rgba(0, 229, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)';
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [starCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
