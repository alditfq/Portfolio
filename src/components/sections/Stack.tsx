import React, { useRef } from "react";
import { 
  motion, 
  useScroll, 
  useSpring, 
  useTransform, 
  useMotionValue, 
  useVelocity, 
  useAnimationFrame 
} from "motion/react";

const stack = [
  "React", "Laravel", "Tailwind CSS", "FireBase", "Figma", "MySQL", "GitHub"
];

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

interface ParallaxRowProps {
  children: React.ReactNode;
  baseVelocity?: number;
  scrollMultiplier?: number;
}

function ParallaxRow({ children, baseVelocity = 0, scrollMultiplier = 0.02 }: ParallaxRowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  
  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);

    // smoothVelocity is positive when scrolling down
    let scrollMove = smoothVelocity.get() * (delta / 1000) * scrollMultiplier;

    // Subtract scrollMove so positive multiplier moves left on scroll down
    moveBy -= scrollMove;

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div className="flex gap-12 py-4 flex-nowrap" style={{ x }}>
        {children}
      </motion.div>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-24 bg-ink-deep text-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="text-brand-cyan font-mono tracking-[0.3em] uppercase text-xs block mb-4">Toolkit</span>
            <h2 className="text-5xl lg:text-7xl font-mono tracking-tighter uppercase font-bold leading-none">
              THE ARSENAL<span className="text-brand-cyan">.</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 font-medium lg:text-right font-mono text-sm tracking-wide">
            Kumpulan teknologi pilihan yang saya gunakan untuk membangun pengalaman digital yang cepat, scalable, dan tetap nyaman digunakan.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Row 1: Moves Left when scrolling down (+ multiplier) */}
        <ParallaxRow baseVelocity={0} scrollMultiplier={0.005}>
          {[...stack, ...stack, ...stack, ...stack].map((item, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <span className="text-5xl lg:text-8xl font-mono uppercase tracking-tighter font-bold opacity-20 group-hover:opacity-100 group-hover:text-brand-cyan transition-all duration-500 cursor-default">
                {item}
              </span>
              <div className="w-3 h-3 rounded-full bg-brand-cyan" />
            </div>
          ))}
        </ParallaxRow>

        {/* Row 2: Moves Right when scrolling down (- multiplier) */}
        <ParallaxRow baseVelocity={0} scrollMultiplier={-0.005}>
          {[...stack.slice().reverse(), ...stack.slice().reverse(), ...stack.slice().reverse(), ...stack.slice().reverse()].map((item, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <span className="text-5xl lg:text-8xl font-mono uppercase tracking-tighter font-bold opacity-20 group-hover:opacity-100 group-hover:text-brand-cyan-light transition-all duration-500 cursor-default">
                {item}
              </span>
              <div className="w-3 h-3 rounded-full bg-brand-cyan-light" />
            </div>
          ))}
        </ParallaxRow>
      </div>

      <div className="container mx-auto px-6 mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 font-mono">
        <div className="space-y-4">
          <div className="text-brand-cyan uppercase tracking-widest text-xl">Creative Engineering</div>
          <p className="text-slate-400 text-xs leading-relaxed tracking-wider">
            Saya tidak hanya menulis kode, tetapi juga membangun pengalaman digital yang nyaman digunakan dengan memperhatikan detail visual dan interaksi.
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-brand-cyan uppercase tracking-widest text-xl">Modern Frontend</div>
          <p className="text-slate-400 text-xs leading-relaxed tracking-wider">
            Fokus pada pengembangan frontend modern dengan tampilan responsif, interaktif, dan pengalaman pengguna yang terasa natural di berbagai perangkat.
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-brand-cyan uppercase tracking-widest text-xl">Robust Backend</div>
          <p className="text-slate-400 text-xs leading-relaxed tracking-wider">
            Mengembangkan sistem backend yang stabil dan terstruktur menggunakan Laravel, dan database yang optimal untuk mendukung aplikasi berbasis data.
          </p>
        </div>
      </div>
    </section>
  );
}
