// CursorDitherTrail.tsx – fluid monochrome dither tail that follows the cursor
// -----------------------------------------------------------------------------
// Concept: as the user moves the mouse, we paint tiny 2×2 pixel blocks onto a
// full‑size canvas.  Each new block is chosen either as `trailColor` or fully
// transparent based on a pseudo‑random threshold (simple Bayer matrix), giving
// the appearance of a dynamic dithering effect that fades out with time.
//
// Props
//  • trailColor     ‑ HEX string used for the dots (default lime‑green)
//  • dotSize        ‑ pixel size of each painted square (1–4 recommended)
//  • fadeDuration   ‑ ms until a dot fully fades (via alpha decay)
//  • maxTrailLength ‑ maximum number of dots before they start disappearing
//  • className      ‑ tailwind classes for outer wrapper (size control)
//
// The component uses `requestAnimationFrame` to gradually clear older drawings
// creating a smooth, fluid tail rather than an instantly filling canvas.
// -----------------------------------------------------------------------------

import React, { useRef, useEffect } from "react";

interface CursorDitherTrailProps {
  trailColor?: string; // monochrome colour of dots
  dotSize?: number; // side length of a pixel square (1‑4px)
  fadeDuration?: number; // milliseconds for a dot to vanish
  maxTrailLength?: number; // max dots before fading starts
  className?: string;
}

interface Dot {
  x: number;
  y: number;
  timestamp: number;
}

export function CursorDitherTrail({
  trailColor = "#D0FBB6", // lime by default
  dotSize = 4,
  fadeDuration = 600,
  maxTrailLength = 150, // limit trail length
  className = "w-full h-full",
}: CursorDitherTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    canvas.width = width;
    canvas.height = height;

    // Adjust on resize
    const onResize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", onResize);

    // Convert hex → rgba once
    const int = parseInt(trailColor.replace("#", ""), 16);
    const r = (int >> 16) & 255;
    const g = (int >> 8) & 255;
    const b = int & 255;

    const addDot = (x: number, y: number) => {
      dotsRef.current.push({
        x,
        y,
        timestamp: performance.now(),
      });

      // Remove oldest dots if exceeding max length
      if (dotsRef.current.length > maxTrailLength) {
        dotsRef.current.shift();
      }
    };

    let animationFrameId: number;

    const render = () => {
      const now = performance.now();

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Filter out expired dots and render active ones
      dotsRef.current = dotsRef.current.filter((dot) => {
        const age = now - dot.timestamp;
        
        if (age > fadeDuration) {
          return false; // Remove expired dot
        }

        // Calculate opacity based on age
        const opacity = 1 - age / fadeDuration;
        
        ctx.fillStyle = `rgba(${r},${g},${b},${opacity})`;
        ctx.fillRect(dot.x, dot.y, dotSize, dotSize);

        return true; // Keep dot
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) / dotSize) * dotSize;
      const y = Math.floor((e.clientY - rect.top) / dotSize) * dotSize;
      addDot(x, y);
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [trailColor, dotSize, fadeDuration, maxTrailLength]);

  return <canvas ref={canvasRef} className={className} />;
}

export default CursorDitherTrail;
