import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <motion.span
        key={i}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 2 + i * 0.05,
          duration: 1,
          ease: [0.33, 1, 0.68, 1],
        }}
        className="inline-block"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Immersive Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-base z-10 opacity-40" />
        <img
          src="https://picsum.photos/seed/aether_hero/1920/1080?blur=10"
          alt="Hero background"
          className="w-full h-full object-cover filter saturate-0 brightness-50"
          referrerPolicy="no-referrer"
        />
        
        {/* Layered orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 -right-20 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full" 
        />
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <motion.div style={{ opacity }} className="relative z-10 text-center px-4">
        <div className="overflow-hidden mb-2">
          <motion.p 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 1.8, duration: 1 }}
             className="text-[10px] font-mono tracking-[0.5em] text-accent/60 uppercase"
          >
            Digital Artisan & Motion Designer
          </motion.p>
        </div>
        
        <h1 className="text-[12vw] font-bold tracking-tighter leading-[0.8] uppercase flex flex-col items-center">
          <div className="overflow-hidden">
            {splitText('AETHER')}
          </div>
          <div className="overflow-hidden -mt-[2vw]">
            <span className="italic font-serif font-light text-accent text-[10vw]">
               {splitText('Systems')}
            </span>
          </div>
        </h1>

        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 3, duration: 2 }}
           className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="w-12 h-[1px] bg-white/20" />
          <span className="text-[8px] font-mono tracking-[0.3em] text-white/40 uppercase">Based in the Digital Ether</span>
          <div className="w-12 h-[1px] bg-white/20" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] font-mono tracking-[0.2em] text-white/30 uppercase vertical-text">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
