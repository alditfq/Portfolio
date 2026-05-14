import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate, animate } from 'motion/react';
import { SplitText } from '@/components/motion/SplitText';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight / 2);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const radius = useMotionValue(3000); // Start very large to cover the screen
  const smoothRadius = useSpring(radius, { damping: 20, stiffness: 100 });

  const globalBlur = useMotionValue(0);
  const blurTemplate = useMotionTemplate`blur(${globalBlur}px)`;
  
  const globalNoiseOpacity = useMotionValue(0);
  
  const boxOpacity = useMotionValue(0);

  const clipPath = useMotionTemplate`polygon(
    calc(${smoothX}px - ${smoothRadius}px) calc(${smoothY}px - ${smoothRadius}px), 
    calc(${smoothX}px + ${smoothRadius}px) calc(${smoothY}px - ${smoothRadius}px), 
    calc(${smoothX}px + ${smoothRadius}px) calc(${smoothY}px + ${smoothRadius}px), 
    calc(${smoothX}px - ${smoothRadius}px) calc(${smoothY}px + ${smoothRadius}px)
  )`;

  const frameWidth = useMotionTemplate`calc(${smoothRadius}px * 2)`;
  const frameX = useMotionTemplate`calc(${smoothX}px - ${smoothRadius}px)`;
  const frameY = useMotionTemplate`calc(${smoothY}px - ${smoothRadius}px)`;

  useEffect(() => {
    const handleMove = (x: number, y: number) => {
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      handleMove(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || !e.touches[0]) return;
      const rect = containerRef.current.getBoundingClientRect();
      handleMove(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    // 1. Start blurring the background and adding noise after preloader
    const t1 = setTimeout(() => {
      animate(globalBlur, 5, { duration: 1.5, ease: "easeInOut" });
      animate(globalNoiseOpacity, 0.15, { duration: 1.5, ease: "easeInOut" });
    }, 2800);

    // 2. After blur pause, fade in the box and shrink it
    const t2 = setTimeout(() => {
      animate(boxOpacity, 1, { duration: 0.5 });
      
      if (window.innerWidth < 768) {
        radius.set(100);
      } else {
        radius.set(120);
      }
    }, 4500);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // High-fashion aesthetic portrait with shoulders/torso
  const portraitUrl = "/gw.png";

  const displayX = useSpring(mouseX, { damping: 40, stiffness: 200 });
  const displayY = useSpring(mouseY, { damping: 40, stiffness: 200 });
  
  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-base select-none"
      id="hero"
    >
      {/* Blurred Background - Atmospheric Grayscale Blur */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          src={portraitUrl} 
          alt="Portrait Background" 
          className="h-full w-full object-cover object-[50%_25%] opacity-40 scale-110 grayscale brightness-75"
          style={{ filter: blurTemplate }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Animated Noise Layer for Background */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-0 mix-blend-overlay"
          style={{ 
            opacity: globalNoiseOpacity,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
          }}
        />
      </div>

      {/* Focus Area Overlay - High Contrast Sharp */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none hidden md:block"
        style={{ clipPath, opacity: boxOpacity }}
      >
        <img 
          src={portraitUrl} 
          alt="Portrait Focused" 
          className="h-full w-full object-cover object-[50%_25%] opacity-100 scale-105"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Frame Outline & Smaller Crosshair */}
      <motion.div
        className="absolute z-30 pointer-events-none border border-white/60 items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.1)] hidden md:flex"
        style={{
          width: frameWidth,
          height: frameWidth,
          left: frameX,
          top: frameY,
          opacity: boxOpacity
        }}
      >
        {/* Smaller Crosshair + */}
        <div className="relative w-4 h-4">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          <div className="absolute top-0 left-1/2 h-full w-[1px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
        </div>

        {/* Labels Inspired by Mockup */}
        <div className="absolute -left-32 bottom-8 font-mono text-[9px] text-white tracking-[0.2em] font-bold hidden lg:block opacity-60">
          WEB DESIGNER
        </div>
        <div className="absolute -right-32 bottom-8 font-mono text-[9px] text-white tracking-[0.2em] font-bold hidden lg:block opacity-60 text-right">
          WEB DEVELOPER
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center pt-32 md:pt-48 overflow-visible">
        <div className="max-w-5xl text-center text-white mix-blend-lighten">
          <SplitText 
            text="Aldy Taufiq" 
            variant="reveal"
            delay={4.8}
            className="text-[clamp(3.5rem,14vw,12rem)] leading-[0.8] mb-6 justify-center italic tracking-tighter font-bold uppercase font-serif"
          />
          <SplitText 
            text="Full Stack Developer & Visual Designer" 
            variant="mask"
            delay={5.2}
            className="text-[clamp(1rem,5vw,4rem)] leading-none text-white/50 justify-center font-light uppercase tracking-[0.2em] font-cinzel"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.8, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-8"
        >
          <div className="px-6 py-2 border border-white/10 backdrop-blur-sm rounded-full">
            <p className="text-[10px] font-mono tracking-[0.4em] uppercase opacity-60">
              AVAILABLE FOR COMMISSIONS // 2026
            </p>
          </div>
          
          <div className="w-px h-24 bg-gradient-to-b from-white to-transparent opacity-40 shadow-[0_0_10px_white]" />
        </motion.div>
      </div>

      {/* Atmospheric Glow - White/Cyan for contrast on dark */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
