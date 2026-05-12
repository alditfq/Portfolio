import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setComplete(true), 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-base overflow-hidden"
          exit={{ 
            y: '-100%',
            transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }
          }}
        >
          <div className="relative flex flex-col items-center">
            {/* Background layered reveal effect */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="absolute -inset-40 bg-accent/5 blur-[100px] rounded-full"
            />
            
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                className="text-4xl font-mono tracking-tighter text-white/50 flex gap-4"
              >
                <span>Aldiyee</span>
                <span className="text-accent italic font-serif">TFQ</span>
              </motion.h1>
            </div>

            <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
               <motion.div 
                 className="absolute inset-0 bg-accent"
                 initial={{ scaleX: 0 }}
                 animate={{ scaleX: percent / 100 }}
                 style={{ transformOrigin: 'left' }}
               />
            </div>
            
            <div className="mt-4 font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase">
              Initializing Experience — {percent}%
            </div>
          </div>

          {/* Wipe layers */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-full bg-accent z-[-1]"
            initial={{ scaleY: 0 }}
            exit={{ 
              scaleY: 1,
              transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }
            }}
            style={{ transformOrigin: 'bottom' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
