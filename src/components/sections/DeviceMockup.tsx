import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface DeviceMockupProps {
  type: "laptop" | "tablet";
  image: string;
  className?: string;
}

export const DeviceMockup = ({ type, image, className = "" }: DeviceMockupProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <div ref={containerRef} className={`perspective-1000 ${className}`}>
      <motion.div
        style={{ rotateX, rotateY, scale, y }}
        className="relative transition-all duration-700 ease-out"
      >
        {type === "laptop" ? (
          <div className="relative group">
            {/* Screen */}
            <div className="relative z-10 p-[1.5%] bg-[#1a1a1a] rounded-t-xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="aspect-[16/10] overflow-hidden rounded-[4px] relative">
                 <img
                  src={image}
                  alt="Mockup"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>
            </div>
            {/* Base */}
            <div className="relative z-20 h-4 bg-[#2a2a2a] rounded-b-xl border-x border-b border-white/20 shadow-xl" />
            <div className="mx-auto w-[25%] h-1 bg-[#1a1a1a] rounded-b-full shadow-inner" />
            
            {/* Reflections/Glows */}
            <div className="absolute -inset-10 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          </div>
        ) : (
          <div className="relative group w-full max-w-sm mx-auto">
            {/* Tablet Frame */}
            <div className="p-3 bg-[#1a1a1a] rounded-[2rem] border-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden">
               <div className="aspect-[3/4] overflow-hidden rounded-[1.2rem] relative bg-neutral-900">
                <img
                  src={image}
                  alt="Mockup"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none" />
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -inset-10 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          </div>
        )}
      </motion.div>
    </div>
  );
};
