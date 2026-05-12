import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Asada Shino IG Edit',
    category: 'Digital Art / Illustration',
    year: '2025',
    image: '/galeri1.png',
  },
  {
    title: 'Lomba Sihir Cover Art',
    category: 'Cover Art / Typography',
    year: '2026',
    image: '/galeri2.png',
  },
  {
    title: 'Dirgahayu Indonesia 79',
    category: 'Poster Design / Commemorative',
    year: '2024',
    image: '/galeri5.webp',
  },
  {
    title: 'ExWHYZ Mikina Poster',
    category: 'Editorial / Poster Design',
    year: '2025',
    image: '/galeri4.webp',
  },
];

function Card({ project }: { project: Project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative aspect-[4/5] w-full group cursor-none"
    >
      <div 
        style={{ transform: 'translateZ(75px)' }}
        className="absolute inset-4 z-20 flex flex-col justify-between pointer-events-none"
      >
         <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase bg-base px-3 py-1 border border-accent/20">{project.year}</span>
            <div className="w-10 h-10 rounded-full bg-accent text-base flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
               <ArrowUpRight size={20} />
            </div>
         </div>
         <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-[10px] font-mono tracking-widest text-white/50 uppercase mb-2">{project.category}</p>
            <h3 className="text-3xl font-bold tracking-tighter uppercase">{project.title}</h3>
         </div>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-base via-transparent to-transparent opacity-60" />
      
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover filter saturate-0 group-hover:saturate-100 brightness-50 group-hover:brightness-75 transition-all duration-700"
        referrerPolicy="no-referrer"
        style={{ transform: 'translateZ(0px)' }}
      />
      
      <div className="absolute inset-0 border border-white/10 group-hover:border-accent/40 transition-colors duration-500" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-40 px-8 flex flex-col items-center">
       <div className="max-w-7xl w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
             <div className="overflow-hidden">
                <motion.h2 
                   whileInView={{ y: 0 }}
                   initial={{ y: '100%' }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                   className="text-[10vw] font-bold tracking-tighter leading-[0.8] uppercase italic font-serif text-white/10"
                >
                   Gallery <br/> <span className="not-italic text-white">Design</span>
                </motion.h2>
             </div>
             <div className="flex flex-col items-end gap-2 text-right">
                <p className="text-sm font-mono text-white/40 tracking-widest uppercase">Curated Collection — v.24</p>
                <div className="w-32 h-[1px] bg-accent/30" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
             {projects.map((p, i) => (
                <div key={p.title} className={cn("w-full", i % 2 !== 0 ? "md:mt-40" : "")}>
                   <Card project={p} />
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}
